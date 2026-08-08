# Marinara NPC Gallery

An external Marinara Engine capability package for persistent, editable NPC memory.

## Choose the matching edition

| Marinara Engine | NPC Gallery | Project folder |
| --- | --- | --- |
| 2.3.4 | 1.1.1 | [`2.3.4`](2.3.4/) |
| 2.4.1 | 1.2.0 | [`2.4.1`](2.4.1/) |

Do not install an edition into a different Marinara Engine version. Each installer validates the Engine version before changing files.

## Install on Windows

1. Open the folder matching your Marinara Engine version.
2. Stop Marinara Engine completely.
3. Run `install-npc-gallery.bat`.
4. Enter the folder containing Marinara Engine's root `package.json`.
5. Restart Marinara Engine after installation finishes.

Each edition also contains `INSTALLING.md` with backup and uninstall details.

## Development build

Run these commands inside the matching edition folder:

```powershell
pnpm install --frozen-lockfile
pnpm check
pnpm pack:extension
```

The generated capability package is written to that edition's `release/npc-gallery-<version>` directory.
