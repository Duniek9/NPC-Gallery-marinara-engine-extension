param([string]$EngineRoot = "")

$ErrorActionPreference = "Stop"
$BackupFolderName = ".npc-gallery-engine-backup"

function Resolve-EngineRoot([string]$Candidate) {
  if ([string]::IsNullOrWhiteSpace($Candidate)) {
    $Candidate = Read-Host "Enter the full Marinara Engine folder (the folder containing package.json)"
  }
  if ([string]::IsNullOrWhiteSpace($Candidate)) { throw "A Marinara Engine folder is required." }
  return [System.IO.Path]::GetFullPath($Candidate.Trim('"'))
}

function Invoke-Pnpm([string]$WorkingDirectory, [string[]]$Arguments) {
  Push-Location $WorkingDirectory
  try {
    $pnpm = Get-Command pnpm.cmd -ErrorAction SilentlyContinue
    if ($pnpm) { & $pnpm.Source @Arguments } else { & corepack.cmd pnpm @Arguments }
    if ($LASTEXITCODE -ne 0) { throw "pnpm $($Arguments -join ' ') failed with exit code $LASTEXITCODE." }
  } finally { Pop-Location }
}

function Build-MarinaraShared([string]$Root) {
  try {
    Invoke-Pnpm $Root @("--filter", "@marinara-engine/shared", "build")
  } catch {
    Write-Warning "The normal Marinara Shared type-check failed. Retrying with compatibility emission so existing unrelated type errors do not block restoration."
    $SharedRoot = Join-Path $Root "packages\shared"
    try {
      Invoke-Pnpm $SharedRoot @("run", "build:preserve", "--", "--noCheck")
    } catch {
      Write-Warning "This Engine's TypeScript does not support --noCheck. Retrying with noEmitOnError=false."
      try {
        Invoke-Pnpm $SharedRoot @("run", "build:preserve", "--", "--noEmitOnError", "false")
      } catch {
        $SharedEntry = Join-Path $SharedRoot "dist\index.js"
        if (Test-Path -LiteralPath $SharedEntry -PathType Leaf) {
          Write-Warning "TypeScript reported errors, but Shared runtime output was emitted successfully; restoration will continue."
        } else {
          $PrebuiltShared = Join-Path $PSScriptRoot "prebuilt\shared-dist"
          if (-not (Test-Path -LiteralPath (Join-Path $PrebuiltShared "index.js") -PathType Leaf)) {
            throw "Shared compilation failed and the bundled Marinara 2.3.4 Shared runtime is missing."
          }
          $SharedDist = Join-Path $SharedRoot "dist"
          if (Test-Path -LiteralPath $SharedDist) { Remove-Item -LiteralPath $SharedDist -Recurse -Force }
          New-Item -ItemType Directory -Path $SharedDist -Force | Out-Null
          Copy-Item -Path (Join-Path $PrebuiltShared "*") -Destination $SharedDist -Recurse -Force
          Write-Warning "Shared compilation produced no runtime output. Restored the bundled Marinara 2.3.4 Shared runtime instead."
        }
      }
    }
  }
}

$EngineRoot = Resolve-EngineRoot $EngineRoot
$BackupRoot = Join-Path $EngineRoot $BackupFolderName
$ManifestPath = Join-Path $BackupRoot "manifest.json"
if (-not (Test-Path -LiteralPath $ManifestPath -PathType Leaf)) {
  throw "No NPC Gallery Engine backup was found at $ManifestPath. The installer must be used before this uninstaller."
}
$Manifest = Get-Content -LiteralPath $ManifestPath -Raw | ConvertFrom-Json
$ConflictRoot = Join-Path $BackupRoot ("post-install-changes-" + (Get-Date -Format "yyyyMMdd-HHmmss"))
$OverlayRoot = Join-Path $PSScriptRoot "overlay"

foreach ($Entry in $Manifest.files) {
  $RelativePath = [string]$Entry.path
  $TargetPath = Join-Path $EngineRoot $RelativePath
  $OverlayPath = Join-Path $OverlayRoot $RelativePath
  if ((Test-Path -LiteralPath $TargetPath -PathType Leaf) -and (Test-Path -LiteralPath $OverlayPath -PathType Leaf)) {
    $CurrentHash = (Get-FileHash -LiteralPath $TargetPath -Algorithm SHA256).Hash
    $OverlayHash = (Get-FileHash -LiteralPath $OverlayPath -Algorithm SHA256).Hash
    if ($CurrentHash -ne $OverlayHash) {
      $ConflictPath = Join-Path $ConflictRoot $RelativePath
      New-Item -ItemType Directory -Path (Split-Path -Parent $ConflictPath) -Force | Out-Null
      Copy-Item -LiteralPath $TargetPath -Destination $ConflictPath -Force
    }
  }
  if ($Entry.existed -eq $true) {
    $BackupPath = Join-Path (Join-Path $BackupRoot "files") $RelativePath
    if (-not (Test-Path -LiteralPath $BackupPath -PathType Leaf)) { throw "Backup file is missing: $BackupPath" }
    New-Item -ItemType Directory -Path (Split-Path -Parent $TargetPath) -Force | Out-Null
    Copy-Item -LiteralPath $BackupPath -Destination $TargetPath -Force
  } elseif (Test-Path -LiteralPath $TargetPath -PathType Leaf) {
    Remove-Item -LiteralPath $TargetPath -Force
  }
}

$DataDirectory = Join-Path $EngineRoot "packages\server\data"
$InstalledPath = Join-Path $DataDirectory "capability-packages\installed.json"
if (Test-Path -LiteralPath $InstalledPath -PathType Leaf) {
  $Installed = Get-Content -LiteralPath $InstalledPath -Raw | ConvertFrom-Json
  $Installed.packages = @($Installed.packages | Where-Object { $_.id -ne "npc-gallery" })
  $InstalledJson = $Installed | ConvertTo-Json -Depth 100
  [System.IO.File]::WriteAllText($InstalledPath, $InstalledJson + [Environment]::NewLine, (New-Object System.Text.UTF8Encoding($false)))
}

$VersionsPath = Join-Path $DataDirectory "capability-packages\versions\npc-gallery"

if (Test-Path -LiteralPath $VersionsPath -PathType Container) {
  Remove-Item -LiteralPath $VersionsPath -Recurse -Force
}

Write-Host ""
Write-Host "Synchronizing Marinara dependencies after restoring the original files..."

Invoke-Pnpm $EngineRoot @(
  "install",
  "--frozen-lockfile",
  "--prod=false"
)

Write-Host ""
Write-Host "Rebuilding Marinara after restoring the original Engine files..."

$env:MARINARA_LOW_MEMORY_BUILD = "1"

Build-MarinaraShared $EngineRoot

Invoke-Pnpm $EngineRoot @(
  "--filter",
  "@marinara-engine/server",
  "build"
)

Invoke-Pnpm $EngineRoot @(
  "--filter",
  "@marinara-engine/client",
  "build"
)

if (Test-Path -LiteralPath $ConflictRoot -PathType Container) {
  Write-Warning "Files changed after installation were preserved at $ConflictRoot"
}

Write-Host ""
Write-Host "NPC Gallery was uninstalled and the original Engine files were restored." -ForegroundColor Green
Write-Host "NPC data was preserved in packages\server\data\capability-packages\state\npc-gallery."
Write-Host "Restart Marinara Engine."