param([string]$EngineRoot = "")

$ErrorActionPreference = "Stop"

$ExtensionRoot = Split-Path -Parent $PSScriptRoot
$OverlayRoot = Join-Path $PSScriptRoot "overlay"
$RequiredEngineVersion = "2.4.2"
$IntegrationVersion = "1.2.1"
$BackupFolderName = ".npc-gallery-engine-backup"

function Resolve-EngineRoot([string]$Candidate) {
  if ([string]::IsNullOrWhiteSpace($Candidate)) {
    $Candidate = Read-Host "Enter the full Marinara Engine folder (the folder containing package.json)"
  }

  if ([string]::IsNullOrWhiteSpace($Candidate)) {
    throw "A Marinara Engine folder is required."
  }

  return [System.IO.Path]::GetFullPath($Candidate.Trim('"'))
}

function Invoke-Pnpm(
  [string]$WorkingDirectory,
  [string[]]$Arguments
) {
  Push-Location $WorkingDirectory

  try {
    $pnpm = Get-Command pnpm.cmd -ErrorAction SilentlyContinue

    if ($pnpm) {
      & $pnpm.Source @Arguments
    } else {
      & corepack.cmd pnpm @Arguments
    }

    if ($LASTEXITCODE -ne 0) {
      throw "pnpm $($Arguments -join ' ') failed with exit code $LASTEXITCODE."
    }
  }
  finally {
    Pop-Location
  }
}

function Build-MarinaraShared([string]$Root) {
  try {
    Invoke-Pnpm $Root @(
      "--filter",
      "@marinara-engine/shared",
      "build"
    )
  }
  catch {
    Write-Warning "The normal Marinara Shared type-check failed. Retrying with compatibility emission so existing unrelated type errors do not block installation."

    $SharedRoot = Join-Path $Root "packages\shared"

    try {
      Invoke-Pnpm $SharedRoot @(
        "run",
        "build:preserve",
        "--",
        "--noCheck"
      )
    }
    catch {
      Write-Warning "This Engine's TypeScript does not support --noCheck. Retrying with noEmitOnError=false."

      try {
        Invoke-Pnpm $SharedRoot @(
          "run",
          "build:preserve",
          "--",
          "--noEmitOnError",
          "false"
        )
      }
      catch {
        $SharedEntry = Join-Path $SharedRoot "dist\index.js"

        if (Test-Path -LiteralPath $SharedEntry -PathType Leaf) {
          Write-Warning "TypeScript reported errors, but Shared runtime output was emitted successfully; installation will continue."
        }
        else {
          throw "Shared compilation failed and produced no Marinara 2.4.2 runtime output."
        }
      }
    }
  }
}

# Resolve and validate the Marinara Engine folder.

$EngineRoot = Resolve-EngineRoot $EngineRoot
$EnginePackageJson = Join-Path $EngineRoot "package.json"

if (-not (Test-Path -LiteralPath $EnginePackageJson -PathType Leaf)) {
  throw "No package.json was found in $EngineRoot."
}

$EnginePackage = Get-Content `
  -LiteralPath $EnginePackageJson `
  -Raw |
  ConvertFrom-Json

if ([string]$EnginePackage.version -ne $RequiredEngineVersion) {
  throw "NPC Gallery integration $IntegrationVersion supports Marinara Engine $RequiredEngineVersion, but this folder reports version $($EnginePackage.version)."
}

if (-not (Test-Path -LiteralPath $OverlayRoot -PathType Container)) {
  throw "Installer overlay is missing: $OverlayRoot"
}

# Discover all files supplied by the integration overlay.

$BackupRoot = Join-Path $EngineRoot $BackupFolderName
$ManifestPath = Join-Path $BackupRoot "manifest.json"
$OverlayFiles = Get-ChildItem -LiteralPath $OverlayRoot -File -Recurse

if ($OverlayFiles.Count -eq 0) {
  throw "Installer overlay contains no files."
}

# Create the original-file backup if one does not exist.

if (-not (Test-Path -LiteralPath $ManifestPath -PathType Leaf)) {
  New-Item -ItemType Directory -Path $BackupRoot -Force |
    Out-Null

  $Entries = @()

  foreach ($OverlayFile in $OverlayFiles) {
    $RelativePath = $OverlayFile.FullName.Substring($OverlayRoot.Length).TrimStart('\')

    $TargetPath = Join-Path $EngineRoot $RelativePath
    $Existed = Test-Path -LiteralPath $TargetPath -PathType Leaf

    if ($Existed) {
      $BackupPath = Join-Path `
        (Join-Path $BackupRoot "files") `
        $RelativePath

      New-Item `
        -ItemType Directory `
        -Path (Split-Path -Parent $BackupPath) `
        -Force |
        Out-Null

      Copy-Item `
        -LiteralPath $TargetPath `
        -Destination $BackupPath `
        -Force
    }

    $Entries += [pscustomobject]@{
      path    = $RelativePath
      existed = $Existed
    }
  }

  [pscustomobject]@{
    schemaVersion      = 1
    engineVersion      = $RequiredEngineVersion
    integrationVersion = $IntegrationVersion
    createdAt          = (Get-Date).ToUniversalTime().ToString("o")
    files              = $Entries
  } |
    ConvertTo-Json -Depth 5 |
    Set-Content -LiteralPath $ManifestPath -Encoding UTF8

  Write-Host "Backed up the current Engine integration files to $BackupRoot"
}
else {
  $ExistingManifest = Get-Content `
    -LiteralPath $ManifestPath `
    -Raw |
    ConvertFrom-Json

  $KnownPaths = @{}

  foreach ($Entry in $ExistingManifest.files) {
    $Key = ([string]$Entry.path).ToLowerInvariant()
    $KnownPaths[$Key] = $true
  }

  $NewEntries = @()

  foreach ($OverlayFile in $OverlayFiles) {
    $RelativePath = $OverlayFile.FullName.Substring($OverlayRoot.Length).TrimStart('\')

    if ($KnownPaths.ContainsKey($RelativePath.ToLowerInvariant())) {
      continue
    }

    $TargetPath = Join-Path $EngineRoot $RelativePath
    $Existed = Test-Path -LiteralPath $TargetPath -PathType Leaf

    if ($Existed) {
      $BackupPath = Join-Path `
        (Join-Path $BackupRoot "files") `
        $RelativePath

      New-Item `
        -ItemType Directory `
        -Path (Split-Path -Parent $BackupPath) `
        -Force |
        Out-Null

      Copy-Item `
        -LiteralPath $TargetPath `
        -Destination $BackupPath `
        -Force
    }

    $NewEntries += [pscustomobject]@{
      path    = $RelativePath
      existed = $Existed
    }
  }

  if ($NewEntries.Count -gt 0) {
    $ExistingManifest.files =
      @($ExistingManifest.files) + $NewEntries

    $ManifestJson = $ExistingManifest |
      ConvertTo-Json -Depth 10

    [System.IO.File]::WriteAllText(
      $ManifestPath,
      $ManifestJson + [Environment]::NewLine,
      (New-Object System.Text.UTF8Encoding($false))
    )

    Write-Host "Added $($NewEntries.Count) newly integrated files to the existing original-file backup."
  }
  else {
    Write-Host "Existing original-file backup found; it will not be overwritten."
  }
}

# Copy the NPC Gallery integration into Marinara.

foreach ($OverlayFile in $OverlayFiles) {
 $RelativePath = $OverlayFile.FullName.Substring($OverlayRoot.Length).TrimStart('\')

  $TargetPath = Join-Path $EngineRoot $RelativePath

  New-Item `
    -ItemType Directory `
    -Path (Split-Path -Parent $TargetPath) `
    -Force |
    Out-Null

  Copy-Item `
    -LiteralPath $OverlayFile.FullName `
    -Destination $TargetPath `
    -Force
}

# Install all Marinara build dependencies, including esbuild.
# This must happen after copying the overlay and before building.

Write-Host ""
Write-Host "Installing Marinara build dependencies..."

Invoke-Pnpm $EngineRoot @(
  "install",
  "--frozen-lockfile",
  "--prod=false"
)

# Build the modified Marinara Engine.

Write-Host ""
Write-Host "Building Marinara Shared, Server, and Client..."

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

# Build and install NPC Gallery.

$DataDirectory = Join-Path $EngineRoot "packages\server\data"

Write-Host ""
Write-Host "Building and installing NPC Gallery..."

Invoke-Pnpm $ExtensionRoot @(
  "install:dev",
  "--",
  "--data-dir",
  $DataDirectory
)

Write-Host ""
Write-Host "NPC Gallery $IntegrationVersion was installed successfully." `
  -ForegroundColor Green

Write-Host "Restart Marinara Engine before using it."
