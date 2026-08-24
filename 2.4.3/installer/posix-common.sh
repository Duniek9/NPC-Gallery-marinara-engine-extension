#!/usr/bin/env bash

REQUIRED_ENGINE_VERSION="2.4.3"
INTEGRATION_VERSION="1.2.2"
BACKUP_FOLDER_NAME=".npc-gallery-engine-backup"

COMMON_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
EXTENSION_ROOT=$(cd -- "$COMMON_DIR/.." && pwd)
OVERLAY_ROOT="$COMMON_DIR/overlay"
POSIX_HELPER="$COMMON_DIR/posix-files.mjs"

PNPM_VERSION=""
PNPM_DESCRIPTOR=""
PNPM_COMMAND=()
ENGINE_ROOT=""

die() {
  printf '\n[ERROR] %s\n' "$*" >&2
  exit 1
}

warn() {
  printf '[WARN] %s\n' "$*" >&2
}

require_node() {
  command -v node >/dev/null 2>&1 ||
    die "Node.js is required. Install the Node.js version supported by Marinara Engine first."

  local node_major
  node_major=$(node -p "Number(process.versions.node.split('.')[0])")
  if ((node_major < 24 || node_major >= 27)); then
    die "Marinara Engine 2.4.3 requires Node.js 24, 25, or 26. Found $(node --version)."
  fi
}

resolve_engine_root() {
  local platform="$1"
  local candidate="${2:-}"
  local default_root=""

  if [[ "$platform" == "termux" ]]; then
    default_root="$HOME/Marinara-Engine"
  fi

  if [[ -z "$candidate" ]]; then
    if [[ -n "$default_root" ]]; then
      printf 'Enter the Marinara Engine folder [%s]: ' "$default_root"
    else
      printf 'Enter the full Marinara Engine folder (the folder containing package.json): '
    fi

    if ! IFS= read -r candidate; then
      die "A Marinara Engine folder is required."
    fi
    candidate="${candidate:-$default_root}"
  fi

  [[ -n "$candidate" ]] || die "A Marinara Engine folder is required."

  if [[ "$candidate" == \"*\" && "$candidate" == *\" ]]; then
    candidate="${candidate:1:${#candidate}-2}"
  elif [[ "$candidate" == \'*\' && "$candidate" == *\' ]]; then
    candidate="${candidate:1:${#candidate}-2}"
  fi

  ENGINE_ROOT=$(node -e "const path=require('node:path'); process.stdout.write(path.resolve(process.argv[1]));" "$candidate")

  [[ -d "$ENGINE_ROOT" ]] || die "Marinara Engine folder does not exist: $ENGINE_ROOT"
  [[ -f "$ENGINE_ROOT/package.json" ]] || die "No package.json was found in $ENGINE_ROOT."
}

read_engine_version() {
  node -e "
    const fs = require('node:fs');
    const value = JSON.parse(fs.readFileSync(process.argv[1], 'utf8').replace(/^\uFEFF/, ''));
    process.stdout.write(String(value.version || ''));
  " "$ENGINE_ROOT/package.json"
}

require_supported_engine() {
  local engine_version
  engine_version=$(read_engine_version)
  if [[ "$engine_version" != "$REQUIRED_ENGINE_VERSION" ]]; then
    die "NPC Gallery $INTEGRATION_VERSION supports Marinara Engine $REQUIRED_ENGINE_VERSION, but this folder reports version ${engine_version:-unknown}."
  fi
}

resolve_pnpm_runner() {
  PNPM_DESCRIPTOR=$(node -e "
    const fs = require('node:fs');
    const value = JSON.parse(fs.readFileSync(process.argv[1], 'utf8').replace(/^\uFEFF/, ''));
    process.stdout.write(String(value.packageManager || '').replace(/^pnpm@/, ''));
  " "$ENGINE_ROOT/package.json")

  [[ -n "$PNPM_DESCRIPTOR" ]] ||
    die "Could not read Marinara's pinned pnpm descriptor from package.json."

  PNPM_VERSION="${PNPM_DESCRIPTOR%%+*}"
  [[ -n "$PNPM_VERSION" ]] || die "Marinara's pnpm descriptor has no version."

  local current_version=""
  if command -v corepack >/dev/null 2>&1; then
    current_version=$(corepack "pnpm@$PNPM_DESCRIPTOR" --version 2>/dev/null || true)
    if [[ "$current_version" == "$PNPM_VERSION" ]]; then
      PNPM_COMMAND=(corepack "pnpm@$PNPM_DESCRIPTOR")
      printf '[OK] Using pnpm %s through Corepack.\n' "$PNPM_VERSION"
      return
    fi
  fi

  if command -v pnpm >/dev/null 2>&1; then
    current_version=$(pnpm --version 2>/dev/null || true)
    if [[ "$current_version" == "$PNPM_VERSION" ]]; then
      PNPM_COMMAND=(pnpm)
      printf '[OK] Using installed pnpm %s.\n' "$PNPM_VERSION"
      return
    fi
    [[ -z "$current_version" ]] ||
      warn "Installed pnpm $current_version does not match Marinara's required $PNPM_VERSION."
  fi

  if command -v npx >/dev/null 2>&1; then
    printf '[..] Preparing temporary pnpm %s through npx...\n' "$PNPM_VERSION"
    current_version=$(npx --yes "pnpm@$PNPM_VERSION" --version 2>/dev/null || true)
    if [[ "$current_version" == "$PNPM_VERSION" ]]; then
      PNPM_COMMAND=(npx --yes "pnpm@$PNPM_VERSION")
      return
    fi
  fi

  die "Could not run pnpm $PNPM_VERSION. Start Marinara once with its launcher, then retry."
}

run_pnpm_in() {
  local directory="$1"
  shift
  (
    cd -- "$directory"
    "${PNPM_COMMAND[@]}" --config.trustPolicy=off --config.confirmModulesPurge=false "$@"
  )
}

build_shared() {
  if run_pnpm_in "$ENGINE_ROOT" --filter @marinara-engine/shared build; then
    return
  fi

  warn "The normal Shared type-check failed. Retrying in compatibility emission mode."
  if run_pnpm_in "$ENGINE_ROOT/packages/shared" run build:preserve -- --noCheck; then
    return
  fi

  warn "This TypeScript version rejected --noCheck. Retrying with noEmitOnError=false."
  if run_pnpm_in "$ENGINE_ROOT/packages/shared" run build:preserve -- --noEmitOnError false; then
    return
  fi

  if [[ -f "$ENGINE_ROOT/packages/shared/dist/index.js" ]]; then
    warn "Shared reported type errors, but its runtime output was emitted; continuing."
    return
  fi

  die "Shared compilation failed and produced no Marinara 2.4.3 runtime output."
}

prepare_build_environment() {
  local platform="$1"
  export MARINARA_LOW_MEMORY_BUILD=1

  if [[ "$platform" == "termux" && " ${NODE_OPTIONS:-} " != *" --max-old-space-size="* ]]; then
    export NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--max-old-space-size=2048"
  fi
}

build_engine() {
  local platform="$1"
  build_shared
  run_pnpm_in "$ENGINE_ROOT" --filter @marinara-engine/server build

  if [[ "$platform" == "termux" ]]; then
    printf '[..] Building the Client with Marinara Termux low-memory settings...\n'
    (
      export SKIP_PWA=1
      run_pnpm_in "$ENGINE_ROOT" --filter @marinara-engine/client exec vite build
    )
  else
    run_pnpm_in "$ENGINE_ROOT" --filter @marinara-engine/client build
  fi
}
