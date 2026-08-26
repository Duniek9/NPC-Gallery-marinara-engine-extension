# NPC Gallery updater release workflow

NPC Gallery 1.3.0 and newer use an exact-version catalog at `updates/catalog.json`. Marinara's launchers run the persistent reconciler after an Engine update and dependency installation, but before Engine compilation.

## Publish support for a Marinara release

1. Copy the newest edition into a folder named for the new Marinara version.
2. Port the overlay onto clean source from that exact Engine release.
3. Set the edition's NPC Gallery version in `package.json` and `manifest.template.json`.
4. Set `engine.min` to the exact Marinara version and `engine.maxExclusive` to the next patch version.
5. Compile Shared, Server, and Client in a disposable copy of that Engine.
6. In the edition folder, run:

   ```powershell
   pnpm check
   pnpm pack:updater
   ```

7. Read the generated metadata file beside the `.npcbundle` under `updates/artifacts`.
8. Attach the `.npcbundle` to the GitHub release using the exact generated filename.
9. Add or replace the matching Engine entry in the repository-level `updates/catalog.json` with the generated URL, SHA-256, and byte count.
10. Publish the release asset before pushing the catalog entry to `main`.

Never reuse a bundle hash after changing the overlay or capability code. Run `pnpm pack:updater` again and update every catalog integrity field.

## Compatibility behavior

- Exact Engine match: the newest catalog release is verified, installed, and activated.
- No exact match: NPC Gallery is removed from `installed.json`, while all NPC state and installed version files remain.
- Catalog unavailable with an already compatible active install: the current install stays active.
- Catalog unavailable after the Engine version changes: NPC Gallery is suspended.
- Later compatible catalog entry: the next launch installs it and reactivates NPC Gallery.

The updater writes version-specific original-file backups under `.npc-gallery-engine-backups/<engine-version>`. Never restore a backup into a different Engine version.
