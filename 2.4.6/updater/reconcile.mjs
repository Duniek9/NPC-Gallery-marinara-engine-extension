import { createHash } from "node:crypto";
import {
  copyFile,
  mkdir,
  open,
  readFile,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { dirname, isAbsolute, join, posix, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const PACKAGE_ID = "npc-gallery";
const DEFAULT_CATALOG_URL =
  "https://raw.githubusercontent.com/Duniek9/NPC-Gallery-marinara-engine-extension/main/updates/catalog.json";
const bootstrapRoot = dirname(fileURLToPath(import.meta.url));
const argument = (name) => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

function log(message) {
  console.info(`[NPC Gallery updater] ${message}`);
}

function warn(message) {
  console.warn(`[NPC Gallery updater] ${message}`);
}

function sha256(contents) {
  return createHash("sha256").update(contents).digest("hex");
}

async function fileExists(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

async function readJson(filePath, fallback = undefined) {
  try {
    return JSON.parse((await readFile(filePath, "utf8")).replace(/^\uFEFF/u, ""));
  } catch (error) {
    if (fallback !== undefined && error?.code === "ENOENT") return fallback;
    throw error;
  }
}

async function writeJsonAtomic(filePath, value, mode = 0o600) {
  await mkdir(dirname(filePath), { recursive: true });
  const temporary = `${filePath}.tmp-${process.pid}-${Date.now()}`;
  try {
    await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", mode });
    await rename(temporary, filePath);
  } finally {
    await rm(temporary, { force: true });
  }
}

function normalizeRelativePath(value) {
  const portable = String(value ?? "").replaceAll("\\", "/");
  if (!portable || isAbsolute(portable) || /^[A-Za-z]:\//u.test(portable)) {
    throw new Error(`Unsafe bundle path: ${portable}`);
  }
  const normalized = posix.normalize(portable).replace(/^\.\//u, "");
  if (!normalized || normalized === "." || normalized === ".." || normalized.startsWith("../")) {
    throw new Error(`Unsafe bundle path: ${portable}`);
  }
  return normalized;
}

function inside(root, relativePath) {
  const normalized = normalizeRelativePath(relativePath);
  const candidate = resolve(root, ...normalized.split("/"));
  const difference = relative(root, candidate);
  if (!difference || difference === ".." || difference.startsWith(`..${sep}`) || isAbsolute(difference)) {
    throw new Error(`Refusing to access a path outside ${root}: ${relativePath}`);
  }
  return candidate;
}

const POSIX_LAUNCHER_HOOK = [
  "# NPC Gallery updater bootstrap begin",
  "# Reconcile after Engine updates and before build/start.",
  'NPC_GALLERY_UPDATER="packages/server/data/capability-packages/bootstrap/npc-gallery/reconcile.mjs"',
  'if [ -f "$NPC_GALLERY_UPDATER" ]; then',
  "    NPC_GALLERY_UPDATE_EXIT=0",
  '    node "$NPC_GALLERY_UPDATER" --engine-root "$PWD" || NPC_GALLERY_UPDATE_EXIT=$?',
  '    if [ "$NPC_GALLERY_UPDATE_EXIT" -eq 10 ]; then',
  '        echo "  [..] NPC Gallery integration changed; rebuilding Marinara before startup..."',
  "        rm -rf packages/shared/dist packages/server/dist packages/client/dist",
  "        rm -f packages/shared/tsconfig.tsbuildinfo packages/server/tsconfig.tsbuildinfo packages/client/tsconfig.tsbuildinfo",
  '    elif [ "$NPC_GALLERY_UPDATE_EXIT" -ne 0 ]; then',
  '        echo "  [WARN] NPC Gallery updater exited with code $NPC_GALLERY_UPDATE_EXIT; continuing startup."',
  "    fi",
  "fi",
  "# NPC Gallery updater bootstrap end",
];

const POSIX_LAUNCHER_WRAPPER = [
  "# NPC Gallery launcher wrapper begin",
  'if [ "${NPC_GALLERY_LAUNCH_WRAPPED:-0}" != "1" ] && command -v node >/dev/null 2>&1; then',
  '    NPC_GALLERY_LAUNCH_ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)',
  '    NPC_GALLERY_LAUNCH_WRAPPER="$NPC_GALLERY_LAUNCH_ROOT/packages/server/data/capability-packages/bootstrap/npc-gallery/launch-wrapper.mjs"',
  '    if [ -f "$NPC_GALLERY_LAUNCH_WRAPPER" ]; then',
  "        NPC_GALLERY_LAUNCH_EXIT=0",
  '        node "$NPC_GALLERY_LAUNCH_WRAPPER" --engine-root "$NPC_GALLERY_LAUNCH_ROOT" --launcher "$0" -- "$@" || NPC_GALLERY_LAUNCH_EXIT=$?',
  '        exit "$NPC_GALLERY_LAUNCH_EXIT"',
  "    fi",
  "fi",
  "# NPC Gallery launcher wrapper end",
];

const POSIX_ENGINE_ROOT = [
  'if [ -n "${NPC_GALLERY_ENGINE_ROOT:-}" ]; then',
  '    cd "$NPC_GALLERY_ENGINE_ROOT"',
  "else",
  '    cd "$(dirname "$0")"',
  "fi",
];

const WINDOWS_LAUNCHER_WRAPPER = [
  ":: NPC Gallery launcher wrapper begin",
  "if defined NPC_GALLERY_LAUNCH_WRAPPED goto :npc_gallery_wrapped_start",
  "where node >nul 2>&1 || goto :npc_gallery_wrapped_start",
  'set "NPC_GALLERY_LAUNCH_WRAPPER=%~dp0packages\\server\\data\\capability-packages\\bootstrap\\npc-gallery\\launch-wrapper.mjs"',
  'if not exist "%NPC_GALLERY_LAUNCH_WRAPPER%" goto :npc_gallery_wrapped_start',
  'node "%NPC_GALLERY_LAUNCH_WRAPPER%" --engine-root "%~dp0." --launcher "%~f0" -- %*',
  "exit /b %errorlevel%",
  ":npc_gallery_wrapped_start",
  ":: NPC Gallery launcher wrapper end",
];

const WINDOWS_ENGINE_ROOT = [
  "if defined NPC_GALLERY_ENGINE_ROOT (",
  '    cd /d "%NPC_GALLERY_ENGINE_ROOT%"',
  ") else (",
  '    cd /d "%~dp0"',
  ")",
];

const LAUNCHER_HOOKS = [
  {
    name: "start.bat",
    wrapperMarker: ":: NPC Gallery launcher wrapper begin",
    wrapperAnchor: "setlocal enabledelayedexpansion",
    rootAnchor: 'cd /d "%~dp0"',
    wrapperLines: WINDOWS_LAUNCHER_WRAPPER,
    rootLines: WINDOWS_ENGINE_ROOT,
    hookMarker: ":: NPC Gallery updater bootstrap begin",
    hookAnchor: ":skip_env",
    hookLines: [
      ":: NPC Gallery updater bootstrap begin",
      ":: Reconcile after Engine updates and before build/start.",
      'if not exist "packages\\server\\data\\capability-packages\\bootstrap\\npc-gallery\\reconcile.mjs" goto :skip_npc_gallery_update',
      'node "packages\\server\\data\\capability-packages\\bootstrap\\npc-gallery\\reconcile.mjs" --engine-root "%CD%"',
      'set "NPC_GALLERY_UPDATE_EXIT=!errorlevel!"',
      'if "!NPC_GALLERY_UPDATE_EXIT!"=="10" (',
      "    echo  [..] NPC Gallery integration changed; Marinara will rebuild before startup.",
      '    set "BUILD_REQUIRED=1"',
      ') else if not "!NPC_GALLERY_UPDATE_EXIT!"=="0" (',
      "    echo  [WARN] NPC Gallery updater exited with code !NPC_GALLERY_UPDATE_EXIT!; continuing startup.",
      ")",
      ":skip_npc_gallery_update",
      ":: NPC Gallery updater bootstrap end",
    ],
  },
  {
    name: "start.sh",
    wrapperMarker: "# NPC Gallery launcher wrapper begin",
    wrapperAnchor: "set -e",
    rootAnchor: 'cd "$(dirname "$0")"',
    wrapperLines: POSIX_LAUNCHER_WRAPPER,
    rootLines: POSIX_ENGINE_ROOT,
    hookMarker: "# NPC Gallery updater bootstrap begin",
    hookAnchor: "# ── Optional AI sprite background remover ──",
    hookLines: POSIX_LAUNCHER_HOOK,
  },
  {
    name: "start-termux.sh",
    wrapperMarker: "# NPC Gallery launcher wrapper begin",
    wrapperAnchor: "set -e",
    rootAnchor: 'cd "$(dirname "$0")"',
    wrapperLines: POSIX_LAUNCHER_WRAPPER,
    rootLines: POSIX_ENGINE_ROOT,
    hookMarker: "# NPC Gallery updater bootstrap begin",
    hookAnchor: "# ── Build if needed ──",
    hookLines: POSIX_LAUNCHER_HOOK,
  },
];

async function ensureLauncherHooks(engineRoot) {
  for (const specification of LAUNCHER_HOOKS) {
    const launcherPath = join(engineRoot, specification.name);
    try {
      if (!(await fileExists(launcherPath))) continue;
      let contents = await readFile(launcherPath, "utf8");
      const endOfLine = contents.includes("\r\n") ? "\r\n" : "\n";
      let changed = false;

      if (!contents.includes(specification.wrapperMarker)) {
        const wrapperAnchorIndex = contents.indexOf(specification.wrapperAnchor);
        const rootAnchorIndex = contents.indexOf(specification.rootAnchor);
        if (wrapperAnchorIndex < 0 || rootAnchorIndex < 0) {
          warn(`Could not persist the updater wrapper in ${specification.name}; its layout is not recognized.`);
        } else {
          const wrapperInsertAt = wrapperAnchorIndex + specification.wrapperAnchor.length;
          const wrapper = `${endOfLine}${endOfLine}${specification.wrapperLines.join(endOfLine)}`;
          contents = `${contents.slice(0, wrapperInsertAt)}${wrapper}${contents.slice(wrapperInsertAt)}`;
          contents = contents.replace(specification.rootAnchor, specification.rootLines.join(endOfLine));
          changed = true;
        }
      }

      if (!contents.includes(specification.hookMarker)) {
        const hookAnchorIndex = contents.indexOf(specification.hookAnchor);
        if (hookAnchorIndex < 0) {
          warn(`Could not persist the updater hook in ${specification.name}; its layout is not recognized.`);
        } else {
          const hook = `${specification.hookLines.join(endOfLine)}${endOfLine}${endOfLine}`;
          contents = `${contents.slice(0, hookAnchorIndex)}${hook}${contents.slice(hookAnchorIndex)}`;
          changed = true;
        }
      }

      if (!changed) continue;
      const temporary = `${launcherPath}.npc-gallery-${process.pid}-${Date.now()}`;
      const launcherStat = await stat(launcherPath);
      try {
        await writeFile(temporary, contents, { encoding: "utf8", mode: launcherStat.mode });
        await rename(temporary, launcherPath);
      } finally {
        await rm(temporary, { force: true });
      }
      log(`Restored the persistent updater wrapper and hook in ${specification.name}.`);
    } catch (error) {
      warn(`Could not persist the updater hook in ${specification.name}: ${error.message}`);
    }
  }
}
async function loadSource(location) {
  if (/^https?:\/\//iu.test(location)) {
    const response = await fetch(location, {
      headers: { "user-agent": "NPC-Gallery-Marinara-Updater/1" },
      signal: AbortSignal.timeout(20_000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} while reading ${location}`);
    return Buffer.from(await response.arrayBuffer());
  }
  const filePath = location.startsWith("file:") ? fileURLToPath(location) : resolve(location);
  return readFile(filePath);
}

function compareVersions(left, right) {
  const parse = (value) => String(value).split("-")[0].split(".").map((part) => Number(part) || 0);
  const a = parse(left);
  const b = parse(right);
  for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
    if ((a[index] ?? 0) !== (b[index] ?? 0)) return (a[index] ?? 0) - (b[index] ?? 0);
  }
  return 0;
}

function validateCatalog(catalog) {
  if (catalog?.schemaVersion !== 1 || catalog.packageId !== PACKAGE_ID || !Array.isArray(catalog.releases)) {
    throw new Error("The update catalog has an unsupported shape.");
  }
}

function validateBundle(bundle, release, engineVersion) {
  if (
    bundle?.schemaVersion !== 1 ||
    bundle.packageId !== PACKAGE_ID ||
    bundle.engineVersion !== engineVersion ||
    bundle.extensionVersion !== release.extensionVersion ||
    !Array.isArray(bundle.overlayFiles) ||
    !Array.isArray(bundle.capabilityFiles) ||
    !Array.isArray(bundle.bootstrapFiles) ||
    bundle.packageManifest?.id !== PACKAGE_ID ||
    bundle.packageManifest?.version !== release.extensionVersion
  ) {
    throw new Error("The downloaded NPC Gallery bundle does not match the selected release.");
  }

  for (const entry of [...bundle.overlayFiles, ...bundle.capabilityFiles, ...bundle.bootstrapFiles]) {
    entry.path = normalizeRelativePath(entry.path);
    const contents = Buffer.from(String(entry.contentBase64 ?? ""), "base64");
    if (contents.byteLength !== entry.bytes || sha256(contents) !== entry.sha256) {
      throw new Error(`Bundle file failed integrity validation: ${entry.path}`);
    }
  }
}

async function writeBundleEntry(root, entry) {
  const destination = inside(root, entry.path);
  await mkdir(dirname(destination), { recursive: true });
  const temporary = `${destination}.npc-gallery-${process.pid}-${Date.now()}`;
  try {
    await writeFile(temporary, Buffer.from(entry.contentBase64, "base64"));
    await rename(temporary, destination);
  } finally {
    await rm(temporary, { force: true });
  }
}

async function verifyAppliedOverlay(engineRoot, state) {
  if (!Array.isArray(state?.overlayFiles) || state.overlayFiles.length === 0) return false;
  for (const entry of state.overlayFiles) {
    const target = inside(engineRoot, entry.path);
    if (!(await fileExists(target)) || sha256(await readFile(target)) !== entry.sha256) return false;
  }
  return true;
}
async function verifyAppliedBootstrap(state) {
  if (!Array.isArray(state?.bootstrapFiles) || state.bootstrapFiles.length === 0) return false;
  for (const entry of state.bootstrapFiles) {
    const target = inside(bootstrapRoot, entry.path);
    if (!(await fileExists(target)) || sha256(await readFile(target)) !== entry.sha256) return false;
  }
  return true;
}

async function suspendPackage(capabilityRoot, statePath, engineVersion, reason) {
  const registryPath = join(capabilityRoot, "installed.json");
  const suspendedPath = join(bootstrapRoot, "suspended-package.json");
  const registry = await readJson(registryPath, { schemaVersion: 1, packages: [] });
  if (registry?.schemaVersion !== 1 || !Array.isArray(registry.packages)) {
    throw new Error(`Installed package registry has an unsupported shape: ${registryPath}`);
  }
  const current = registry.packages.find((entry) => entry?.id === PACKAGE_ID);
  if (current) {
    await writeJsonAtomic(suspendedPath, {
      schemaVersion: 1,
      suspendedAt: new Date().toISOString(),
      engineVersion,
      reason,
      package: current,
    });
    registry.packages = registry.packages.filter((entry) => entry?.id !== PACKAGE_ID);
    await writeJsonAtomic(registryPath, registry);
  }
  await writeJsonAtomic(statePath, {
    schemaVersion: 1,
    status: "suspended",
    engineVersion,
    reason,
    checkedAt: new Date().toISOString(),
  });
  warn(`${reason} NPC Gallery was suspended; NPC data was preserved.`);
}

async function createVersionBackup(engineRoot, bundle) {
  const backupRoot = join(engineRoot, ".npc-gallery-engine-backups", bundle.engineVersion);
  const filesRoot = join(backupRoot, "files");
  const manifestPath = join(backupRoot, "manifest.json");
  const manifest = await readJson(manifestPath, {
    schemaVersion: 1,
    engineVersion: bundle.engineVersion,
    integrationVersion: bundle.extensionVersion,
    createdAt: new Date().toISOString(),
    files: [],
  });
  if (manifest.engineVersion !== bundle.engineVersion || !Array.isArray(manifest.files)) {
    throw new Error(`Incompatible NPC Gallery backup at ${manifestPath}`);
  }
  const known = new Set(manifest.files.map((entry) => normalizeRelativePath(entry.path).toLowerCase()));
  for (const entry of bundle.overlayFiles) {
    if (known.has(entry.path.toLowerCase())) continue;
    const target = inside(engineRoot, entry.path);
    const existed = await fileExists(target);
    if (existed) {
      const backup = inside(filesRoot, entry.path);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(target, backup);
    }
    manifest.files.push({ path: entry.path, existed });
    known.add(entry.path.toLowerCase());
  }
  manifest.integrationVersion = bundle.extensionVersion;
  await writeJsonAtomic(manifestPath, manifest);
  return { backupRoot, manifest };
}

async function restoreOverlay(engineRoot, backup) {
  const filesRoot = join(backup.backupRoot, "files");
  for (const entry of backup.manifest.files) {
    const target = inside(engineRoot, entry.path);
    if (entry.existed) {
      const source = inside(filesRoot, entry.path);
      await mkdir(dirname(target), { recursive: true });
      await copyFile(source, target);
    } else {
      await rm(target, { force: true });
    }
  }
}

async function installCapability(capabilityRoot, bundle) {
  const versionsRoot = join(capabilityRoot, "versions");
  const destination = inside(versionsRoot, `${PACKAGE_ID}/${bundle.extensionVersion}`);
  const staged = inside(capabilityRoot, `.npc-gallery-install-${process.pid}-${Date.now()}`);
  try {
    await mkdir(staged, { recursive: true });
    for (const entry of bundle.capabilityFiles) await writeBundleEntry(staged, entry);
    await rm(destination, { recursive: true, force: true });
    await mkdir(dirname(destination), { recursive: true });
    await rename(staged, destination);
  } finally {
    await rm(staged, { recursive: true, force: true });
  }

  const registryPath = join(capabilityRoot, "installed.json");
  const registry = await readJson(registryPath, { schemaVersion: 1, packages: [] });
  if (registry?.schemaVersion !== 1 || !Array.isArray(registry.packages)) {
    throw new Error(`Installed package registry has an unsupported shape: ${registryPath}`);
  }
  const previous = registry.packages.find((entry) => entry?.id === PACKAGE_ID);
  const installed = {
    id: PACKAGE_ID,
    version: bundle.extensionVersion,
    manifest: bundle.packageManifest,
    installedAt: new Date().toISOString(),
    status: "restart-required",
    error: null,
    readiness: "pending",
    readinessError: null,
    legacy: false,
    ...(previous?.version && previous.version !== bundle.extensionVersion
      ? { previousVersion: previous.version }
      : {}),
  };
  registry.packages = [...registry.packages.filter((entry) => entry?.id !== PACKAGE_ID), installed];
  await writeJsonAtomic(registryPath, registry);
}

async function main() {
  const engineRoot = resolve(argument("--engine-root") ?? process.cwd());
  const packageJson = await readJson(join(engineRoot, "package.json"));
  const engineVersion = String(packageJson.version ?? "");
  if (!/^\d+\.\d+\.\d+/u.test(engineVersion)) throw new Error("Could not determine Marinara Engine version.");
  await ensureLauncherHooks(engineRoot);

  const capabilityRoot = join(engineRoot, "packages", "server", "data", "capability-packages");
  const registryPath = join(capabilityRoot, "installed.json");
  const statePath = join(bootstrapRoot, "state.json");
  const state = await readJson(statePath, null);
  const registry = await readJson(registryPath, { schemaVersion: 1, packages: [] });
  if (registry?.schemaVersion !== 1 || !Array.isArray(registry.packages)) {
    throw new Error(`Installed package registry has an unsupported shape: ${registryPath}`);
  }
  const installed = registry.packages.find((entry) => entry?.id === PACKAGE_ID);
  const currentInstallationHealthy =
    state?.status === "active" &&
    state.engineVersion === engineVersion &&
    installed?.version === state.extensionVersion &&
    (state.trustedInstaller === true ||
      ((await verifyAppliedOverlay(engineRoot, state)) && (await verifyAppliedBootstrap(state))));
  const catalogLocation =
    argument("--catalog") ?? process.env.NPC_GALLERY_UPDATE_CATALOG ?? DEFAULT_CATALOG_URL;

  let catalog;
  try {
    catalog = JSON.parse((await loadSource(catalogLocation)).toString("utf8").replace(/^\uFEFF/u, ""));
    validateCatalog(catalog);
  } catch (error) {
    if (currentInstallationHealthy) {
      warn(`Update check failed; keeping the compatible installed release. ${error.message}`);
      return 0;
    }
    await suspendPackage(
      capabilityRoot,
      statePath,
      engineVersion,
      `No verified update catalog was available for Engine ${engineVersion}.`,
    );
    return 0;
  }

  const release = catalog.releases
    .filter((entry) => entry?.engineVersion === engineVersion && typeof entry.extensionVersion === "string")
    .sort((left, right) => compareVersions(right.extensionVersion, left.extensionVersion))[0];
  if (!release) {
    await suspendPackage(
      capabilityRoot,
      statePath,
      engineVersion,
      `No compatible NPC Gallery release exists for Engine ${engineVersion}.`,
    );
    return 0;
  }

  if (
    currentInstallationHealthy &&
    state.extensionVersion === release.extensionVersion &&
    state.bundleSha256 === release.sha256
  ) {
    log(`NPC Gallery ${release.extensionVersion} is compatible and current.`);
    return 0;
  }

  try {
    log(`Installing NPC Gallery ${release.extensionVersion} for Marinara ${engineVersion}...`);
    const bundleContents = await loadSource(release.bundleUrl);
    if (bundleContents.byteLength !== release.bytes || sha256(bundleContents) !== release.sha256) {
      throw new Error("The downloaded update bundle failed catalog integrity validation.");
    }
    const bundle = JSON.parse(bundleContents.toString("utf8").replace(/^\uFEFF/u, ""));
    validateBundle(bundle, release, engineVersion);
    const backup = await createVersionBackup(engineRoot, bundle);
    try {
      for (const entry of bundle.overlayFiles) await writeBundleEntry(engineRoot, entry);
      await installCapability(capabilityRoot, bundle);
      for (const entry of bundle.bootstrapFiles) await writeBundleEntry(bootstrapRoot, entry);
      await writeJsonAtomic(statePath, {
        schemaVersion: 1,
        status: "active",
        engineVersion,
        extensionVersion: bundle.extensionVersion,
        bundleSha256: release.sha256,
        bundleUrl: release.bundleUrl,
        appliedAt: new Date().toISOString(),
        checkedAt: new Date().toISOString(),
        overlayFiles: bundle.overlayFiles.map(({ path, sha256: digest }) => ({ path, sha256: digest })),
        bootstrapFiles: bundle.bootstrapFiles.map(({ path, sha256: digest }) => ({ path, sha256: digest })),
      });
    } catch (error) {
      await restoreOverlay(engineRoot, backup);
      await writeJsonAtomic(registryPath, registry);
      throw error;
    }
    await rm(join(bootstrapRoot, "suspended-package.json"), { force: true });
    log(`NPC Gallery ${bundle.extensionVersion} installed. Marinara will rebuild before startup.`);
    return 10;
  } catch (error) {
    if (currentInstallationHealthy) {
      warn(`Compatible update failed; keeping the current release. ${error.message}`);
      return 0;
    }
    await suspendPackage(
      capabilityRoot,
      statePath,
      engineVersion,
      `The compatible NPC Gallery update for Engine ${engineVersion} could not be verified or installed.`,
    );
    warn(`Update failure detail: ${error.message}`);
    return 0;
  }
}
const lockPath = join(bootstrapRoot, "reconcile.lock");
async function acquireLock() {
  await mkdir(bootstrapRoot, { recursive: true });
  try {
    return await open(lockPath, "wx", 0o600);
  } catch (error) {
    if (error?.code !== "EEXIST") throw error;
    const ageMilliseconds = Date.now() - (await stat(lockPath)).mtimeMs;
    if (ageMilliseconds > 15 * 60 * 1000) {
      warn("Removing a stale updater lock left by an interrupted launch.");
      await rm(lockPath, { force: true });
      return open(lockPath, "wx", 0o600);
    }
    return null;
  }
}

const lockHandle = await acquireLock();
if (!lockHandle) {
  log("Another updater process is already running; continuing startup.");
  process.exit(0);
}

let exitCode = 0;
try {
  exitCode = await main();
} catch (error) {
  warn(`Update failed without blocking Marinara startup: ${error?.stack ?? error}`);
} finally {
  await lockHandle?.close();
  await rm(lockPath, { force: true });
}
process.exitCode = exitCode;
