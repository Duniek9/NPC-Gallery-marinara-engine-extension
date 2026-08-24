# NPC Gallery installer

These installers support NPC Gallery 1.2.2 on Marinara Engine 2.4.3 only.

Before installing:

1. Stop Marinara Engine completely.
2. Confirm that the selected folder is Marinara Engine 2.4.3 and contains its root `package.json`.
3. Keep this NPC Gallery `2.4.3` folder available. Its installer files are also used to detect and preserve post-install changes during uninstall.

Linux and Termux require Node.js 24, 25, or 26. The installers use the exact pnpm version pinned by the selected Marinara checkout. If a matching global pnpm is unavailable, they try Corepack and then a temporary `npx` runner.

## Install on Windows

1. Stop Marinara Engine completely.
2. Double-click `install-npc-gallery.bat`.
3. Enter the full Marinara Engine 2.4.3 folder when prompted. This is the folder containing Marinara's root `package.json`.
4. Wait for Shared, Server, Client, and NPC Gallery builds to finish.
5. Start Marinara Engine again.

You may also pass the Engine directory directly:

```bat
install-npc-gallery.bat "C:\path\to\Marinara-Engine-2.4.3"
```

The first installation stores the Engine files it replaces in `.npc-gallery-engine-backup` inside the selected Engine folder. Reinstalling never overwrites that original backup.

If Marinara's normal Shared type-check contains unrelated errors, the installer reports a warning and retries Shared in emit-only mode. Server and Client are still rebuilt afterward.

## Install on Linux

Open a terminal in this edition's `2.4.3` folder, then run:

```bash
bash install-npc-gallery-linux.sh "/path/to/Marinara-Engine"
```

If you omit the Engine path, the installer asks for it:

```bash
bash install-npc-gallery-linux.sh
```

The Linux installer rebuilds Shared, Server, and Client with Marinara's normal Linux build workflow.

## Install in Termux

If this repository is not already downloaded in Termux:

```bash
cd "$HOME"
git clone https://github.com/Duniek9/NPC-Gallery-marinara-engine-extension.git
cd NPC-Gallery-marinara-engine-extension/2.4.3
```

Then install into Termux's normal Marinara folder:

```bash
bash install-npc-gallery-termux.sh "$HOME/Marinara-Engine"
```

If the Engine is in `$HOME/Marinara-Engine`, you can omit the path and press Enter to accept that default:

```bash
bash install-npc-gallery-termux.sh
```

The Termux installer uses Marinara's low-memory Client build path and skips PWA minification, matching `start-termux.sh`. It installs the bundled, integrity-checked NPC Gallery runtime instead of rebuilding extension development dependencies on the phone.

## Keep Marinara on 2.4.3 while installed

This integration modifies version-specific Marinara source files. Do not let Marinara update to another Engine version while the 2.4.3 edition is installed.

Add this line to Marinara's `.env` file:

```text
AUTO_UPDATE_ENABLED=false
```

Alternatively, start Marinara with `./start.sh --skip-update` on Linux or `./start-termux.sh --skip-update` in Termux. Before moving to a newer Marinara version, uninstall NPC Gallery first and then use an NPC Gallery edition made for that Engine version.

## Uninstall on Windows

1. Stop Marinara Engine completely.
2. Double-click `uninstall-npc-gallery.bat` and select the same Engine folder.
3. The original Engine files are restored and Marinara is rebuilt.
4. Start Marinara Engine again.

## Uninstall on Linux

From this edition's `2.4.3` folder:

```bash
bash uninstall-npc-gallery-linux.sh "/path/to/Marinara-Engine"
```

## Uninstall in Termux

From this edition's `2.4.3` folder:

```bash
bash uninstall-npc-gallery-termux.sh "$HOME/Marinara-Engine"
```

All uninstallers restore the original files and rebuild Marinara. The Linux and Termux uninstallers refuse to restore a 2.4.3 backup into a different Engine version.

The uninstaller removes NPC Gallery from the installed capability registry and removes its installed version files. Saved NPCs, avatars, folders, settings, and story selections are preserved under:

```text
packages/server/data/capability-packages/state/npc-gallery
```

If an integrated Engine file was manually edited after NPC Gallery installation, the uninstaller preserves that post-install copy under `.npc-gallery-engine-backup/post-install-changes-*` before restoring the original.

## Backup and retry behavior

Run the installer first on an unmodified Marinara 2.4.3 installation. The backup captures whatever files exist at installation time. Do not use an already integrated development copy as the original backup baseline.

The original backup is never overwritten by reinstalling. If a dependency download or build fails, fix the reported issue and run the same installer again; it will reuse the original backup and reapply the integration.

