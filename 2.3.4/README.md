# Marinara NPC Gallery

An external Marinara Engine capability package for persistent, editable NPC memory.

## Development build

```powershell
pnpm check
pnpm pack:extension
```

The generated package is written to `release/npc-gallery-<version>`.

## Install into a local Marinara Engine

Build and install into a development Engine data directory:

```powershell
pnpm install:dev -- --data-dir "C:\path\to\Marinara-Engine\packages\server\data"
```

Alternatively, set `MARINARA_DATA_DIR` and omit `--data-dir`:

```powershell
$env:MARINARA_DATA_DIR = "C:\path\to\Marinara-Engine\packages\server\data"
pnpm install:dev
```

Restart Marinara Engine after installation. The command preserves unrelated installed packages and replaces only the same NPC Gallery version directory.
