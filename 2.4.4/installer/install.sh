#!/usr/bin/env bash
set -Eeuo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
# shellcheck source=posix-common.sh
source "$SCRIPT_DIR/posix-common.sh"

usage() {
  echo "Usage: install-npc-gallery-{linux|termux}.sh [MARINARA_ENGINE_FOLDER]"
}

main() {
  local platform=""
  local engine_candidate=""

  while (($#)); do
    case "$1" in
      --platform)
        (($# >= 2)) || die "--platform requires linux or termux."
        platform="$2"
        shift 2
        ;;
      -h|--help)
        usage
        return
        ;;
      --)
        shift
        break
        ;;
      -*)
        die "Unknown option: $1"
        ;;
      *)
        [[ -z "$engine_candidate" ]] || die "Only one Marinara Engine folder may be supplied."
        engine_candidate="$1"
        shift
        ;;
    esac
  done

  while (($#)); do
    [[ -z "$engine_candidate" ]] || die "Only one Marinara Engine folder may be supplied."
    engine_candidate="$1"
    shift
  done

  [[ "$platform" == "linux" || "$platform" == "termux" ]] ||
    die "This installer must be launched through the Linux or Termux wrapper."

  require_node
  resolve_engine_root "$platform" "$engine_candidate"
  require_supported_engine

  [[ -d "$OVERLAY_ROOT" ]] || die "Installer overlay is missing: $OVERLAY_ROOT"
  [[ -f "$POSIX_HELPER" ]] || die "Installer helper is missing: $POSIX_HELPER"
  [[ -f "$EXTENSION_ROOT/scripts/install-dev.mjs" ]] ||
    die "NPC Gallery package installer is missing."

  node "$POSIX_HELPER" validate-release "$EXTENSION_ROOT" "$INTEGRATION_VERSION"
  resolve_pnpm_runner

  [[ -w "$ENGINE_ROOT" ]] ||
    die "The Marinara Engine folder is not writable by the current user: $ENGINE_ROOT"

  printf '\nInstalling NPC Gallery %s into Marinara Engine %s...\n' \
    "$INTEGRATION_VERSION" "$REQUIRED_ENGINE_VERSION"

  node "$POSIX_HELPER" install-overlay \
    "$ENGINE_ROOT" \
    "$OVERLAY_ROOT" \
    "$REQUIRED_ENGINE_VERSION" \
    "$INTEGRATION_VERSION" \
    "$BACKUP_FOLDER_NAME"

  printf '\nInstalling Marinara build dependencies...\n'
  run_pnpm_in "$ENGINE_ROOT" install --frozen-lockfile --prod=false --prefer-offline

  printf '\nBuilding Marinara Shared, Server, and Client...\n'
  prepare_build_environment "$platform"
  build_engine "$platform"

  printf '\nInstalling the packaged NPC Gallery capability...\n'
  node "$EXTENSION_ROOT/scripts/install-dev.mjs" \
    --data-dir "$ENGINE_ROOT/packages/server/data"


  local updater_source="$EXTENSION_ROOT/updater/reconcile.mjs"
  local updater_root="$ENGINE_ROOT/packages/server/data/capability-packages/bootstrap/npc-gallery"
  [[ -f "$updater_source" ]] || die "NPC Gallery updater is missing: $updater_source"
  mkdir -p "$updater_root"
  cp -f "$updater_source" "$updater_root/reconcile.mjs"
  node -e '
    const fs = require("node:fs");
    const state = {
      schemaVersion: 1,
      status: "active",
      engineVersion: process.argv[2],
      extensionVersion: process.argv[3],
      trustedInstaller: true,
      installedAt: new Date().toISOString(),
    };
    fs.writeFileSync(process.argv[1], JSON.stringify(state, null, 2) + "\n", { mode: 0o600 });
  ' "$updater_root/state.json" "$REQUIRED_ENGINE_VERSION" "$INTEGRATION_VERSION"
  printf '[OK] Installed the persistent NPC Gallery updater bootstrap.\n'
  printf '\n[OK] NPC Gallery %s was installed successfully.\n' "$INTEGRATION_VERSION"
  echo "Restart Marinara Engine before using it."
}

main "$@"
