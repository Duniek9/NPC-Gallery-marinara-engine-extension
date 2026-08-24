# Marinara NPC Gallery

An external Marinara Engine capability package for persistent, editable NPC memory.

## Choose the matching edition

| Marinara Engine | NPC Gallery | Project folder |
| --- | --- | --- |
| 2.3.4 | 1.1.1 | [`2.3.4`](2.3.4/) |
| 2.4.1 | 1.2.0 | [`2.4.1`](2.4.1/) |
| 2.4.2 | 1.2.1 | [`2.4.2`](2.4.2/) |
| 2.4.3 | 1.2.2 | [`2.4.3`](2.4.3/) |

Do not install an edition into a different Marinara Engine version. Each installer validates the Engine version before changing files.

## Install on Windows

1. Open the folder matching your Marinara Engine version. Older editions use the Windows installer only.
2. Stop Marinara Engine completely.
3. Run `install-npc-gallery.bat`.
4. Enter the folder containing Marinara Engine's root `package.json`.
5. Restart Marinara Engine after installation finishes.

Each edition also contains `INSTALLING.md` with backup and uninstall details.
## Install on Linux or Termux

Linux and Termux installers are maintained in the newest `2.4.3` edition only:

- Linux: `2.4.3/install-npc-gallery-linux.sh`
- Termux: `2.4.3/install-npc-gallery-termux.sh`

Use the matching uninstall script from the same folder to restore Marinara's original files. See [`2.4.3/INSTALLING.md`](2.4.3/INSTALLING.md) for commands, backup behavior, Termux's low-memory build, and version-pinning guidance.


## Development build

Run these commands inside the matching edition folder:

```powershell
pnpm install --frozen-lockfile
pnpm check
pnpm pack:extension
```

The generated capability package is written to that edition's `release/npc-gallery-<version>` directory.
