# NPC Gallery installer

## Install on Windows

1. Stop Marinara Engine completely.
2. Double-click `install-npc-gallery.bat`.
3. Enter the full Marinara Engine 2.4.2 folder when prompted. This is the folder containing Marinara's root `package.json`.
4. Wait for Shared, Server, Client, and NPC Gallery builds to finish.
5. Start Marinara Engine again.

You may also pass the Engine directory directly:

```bat
install-npc-gallery.bat "C:\path\to\Marinara-Engine-2.4.2"
```

The first installation stores the Engine files it replaces in `.npc-gallery-engine-backup` inside the selected Engine folder. Reinstalling never overwrites that original backup.

If Marinara's normal Shared type-check contains unrelated errors, the installer reports a warning and retries Shared in emit-only mode. Server and Client are still rebuilt afterward.

## Uninstall on Windows

1. Stop Marinara Engine completely.
2. Double-click `uninstall-npc-gallery.bat` and select the same Engine folder.
3. The original Engine files are restored and Marinara is rebuilt.
4. Start Marinara Engine again.

The uninstaller removes NPC Gallery from the installed capability registry and removes its installed version files. Saved NPCs, avatars, folders, settings, and story selections are preserved under:

```text
packages\server\data\capability-packages\state\npc-gallery
```

If an integrated Engine file was manually edited after NPC Gallery installation, the uninstaller preserves that post-install copy under `.npc-gallery-engine-backup\post-install-changes-*` before restoring the original.

## Important development-copy note

Run the installer first on an unmodified Marinara 2.4.2 installation. The backup captures whatever files exist at installation time. Do not use an already integrated development copy as the original backup baseline.
