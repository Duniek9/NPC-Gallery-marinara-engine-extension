#!/usr/bin/env bash
set -Eeuo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
# shellcheck source=posix-common.sh
source "$SCRIPT_DIR/posix-common.sh"

usage() {
  echo "Usage: uninstall-npc-gallery-{linux|termux}.sh [MARINARA_ENGINE_FOLDER]"
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
    die "This uninstaller must be launched through the Linux or Termux wrapper."

  require_node
  resolve_engine_root "$platform" "$engine_candidate"
  require_supported_engine

  [[ -f "$POSIX_HELPER" ]] || die "Uninstaller helper is missing: $POSIX_HELPER"
  [[ -f "$ENGINE_ROOT/$BACKUP_FOLDER_NAME/manifest.json" ]] ||
    die "No NPC Gallery backup was found. The installer must be used before this uninstaller."

  resolve_pnpm_runner

  [[ -w "$ENGINE_ROOT" ]] ||
    die "The Marinara Engine folder is not writable by the current user: $ENGINE_ROOT"

  printf '\nRestoring the original Marinara Engine files...\n'
  node "$POSIX_HELPER" uninstall-overlay \
    "$ENGINE_ROOT" \
    "$OVERLAY_ROOT" \
    "$BACKUP_FOLDER_NAME"

  local updater_root="$ENGINE_ROOT/packages/server/data/capability-packages/bootstrap/npc-gallery"
  rm -rf -- "$updater_root"
  printf '[OK] Removed the NPC Gallery updater bootstrap.\n'

  printf '\nSynchronizing Marinara dependencies...\n'
  run_pnpm_in "$ENGINE_ROOT" install --frozen-lockfile --prod=false --prefer-offline

  printf '\nRebuilding Marinara after restoration...\n'
  prepare_build_environment "$platform"
  build_engine "$platform"

  printf '\n[OK] NPC Gallery was uninstalled and the original Engine files were restored.\n'
  echo "NPC data was preserved in packages/server/data/capability-packages/state/npc-gallery."
  echo "Restart Marinara Engine."
}


main "$@"
