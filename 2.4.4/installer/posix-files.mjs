import { createHash } from "node:crypto";
import {
  chmod,
  copyFile,
  lstat,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { dirname, isAbsolute, join, posix, relative, resolve, sep } from "node:path";

const [, , operation, ...args] = process.argv;

function fail(message) {
  throw new Error(message);
}

async function readJson(filePath) {
  return JSON.parse((await readFile(filePath, "utf8")).replace(/^\uFEFF/, ""));
}

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

function normalizeRelativePath(value) {
  const portable = String(value ?? "").replaceAll("\\", "/");
  if (!portable || isAbsolute(portable) || /^[A-Za-z]:\//u.test(portable)) {
    fail("Unsafe integration path: " + portable);
  }

  const normalized = posix.normalize(portable).replace(/^\.\/+/u, "");
  if (!normalized || normalized === "." || normalized === ".." || normalized.startsWith("../")) {
    fail("Unsafe integration path: " + portable);
  }
  return normalized;
}

function inside(root, relativePath) {
  const normalized = normalizeRelativePath(relativePath);
  const candidate = resolve(root, ...normalized.split("/"));
  const difference = relative(root, candidate);
  if (!difference || difference === ".." || difference.startsWith(".." + sep) || isAbsolute(difference)) {
    fail("Refusing to access a path outside " + root + ": " + relativePath);
  }
  return candidate;
}

async function writeJsonAtomic(filePath, value, mode = 0o600) {
  await mkdir(dirname(filePath), { recursive: true });
  const temporaryPath = filePath + ".tmp-" + process.pid + "-" + Date.now();
  try {
    await writeFile(temporaryPath, JSON.stringify(value, null, 2) + "\n", {
      encoding: "utf8",
      mode,
    });
    await rename(temporaryPath, filePath);
    await chmod(filePath, mode);
  } finally {
    await rm(temporaryPath, { force: true });
  }
}

async function copyWithParents(source, destination) {
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
}

async function walkFiles(root, current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));
  const files = [];

  for (const entry of entries) {
    const absolute = join(current, entry.name);
    if (entry.isSymbolicLink()) {
      fail("Installer overlay may not contain symbolic links: " + absolute);
    }
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(root, absolute)));
    } else if (entry.isFile()) {
      files.push({
        absolute,
        relative: normalizeRelativePath(relative(root, absolute).split(sep).join("/")),
      });
    }
  }
  return files;
}

function validateManifest(value, manifestPath) {
  if (value?.schemaVersion !== 1 || !Array.isArray(value.files)) {
    fail("Unsupported or invalid NPC Gallery backup manifest: " + manifestPath);
  }
  for (const entry of value.files) {
    normalizeRelativePath(entry?.path);
    if (typeof entry?.existed !== "boolean") {
      fail("Invalid file entry in NPC Gallery backup manifest: " + manifestPath);
    }
  }
}

async function sha256(filePath) {
  return createHash("sha256").update(await readFile(filePath)).digest("hex");
}

async function validateRelease(extensionRootInput, integrationVersion) {
  const extensionRoot = resolve(extensionRootInput);
  const releaseRoot = resolve(extensionRoot, "release", "npc-gallery-" + integrationVersion);
  const manifestPath = join(releaseRoot, "manifest.json");
  if (!(await isFile(manifestPath))) {
    fail("Bundled NPC Gallery release is missing: " + manifestPath);
  }

  const manifest = await readJson(manifestPath);
  if (manifest?.id !== "npc-gallery" || manifest?.version !== integrationVersion) {
    fail("Bundled NPC Gallery release identity does not match version " + integrationVersion + ".");
  }

  const expected = new Map([
    ["agents.json", null],
    ["client.js", null],
    ["server.mjs", null],
  ]);

  for (const entry of manifest.files ?? []) {
    if (!expected.has(entry?.path)) continue;
    const filePath = inside(releaseRoot, entry.path);
    if (!(await isFile(filePath))) {
      fail("Bundled NPC Gallery file is missing: " + filePath);
    }
    const contents = await readFile(filePath);
    const digest = createHash("sha256").update(contents).digest("hex");
    if (digest !== entry.sha256 || contents.byteLength !== entry.bytes) {
      fail("Bundled NPC Gallery file failed integrity validation: " + entry.path);
    }
    expected.set(entry.path, true);
  }

  for (const [fileName, valid] of expected) {
    if (!valid) fail("Bundled NPC Gallery manifest does not validate " + fileName + ".");
  }

  console.info("[OK] Bundled NPC Gallery package passed integrity validation.");
}

async function installOverlay(
  engineRootInput,
  overlayRootInput,
  requiredEngineVersion,
  integrationVersion,
  backupFolderName,
) {
  const engineRoot = resolve(engineRootInput);
  const overlayRoot = resolve(overlayRootInput);
  const enginePackagePath = join(engineRoot, "package.json");
  const enginePackage = await readJson(enginePackagePath);

  if (String(enginePackage.version ?? "") !== requiredEngineVersion) {
    fail(
      "NPC Gallery " +
        integrationVersion +
        " supports Marinara Engine " +
        requiredEngineVersion +
        ", but this folder reports version " +
        String(enginePackage.version ?? "unknown") +
        ".",
    );
  }

  const overlayFiles = await walkFiles(overlayRoot);
  if (overlayFiles.length === 0) fail("Installer overlay contains no files.");

  const backupRoot = resolve(engineRoot, backupFolderName);
  const backupFilesRoot = join(backupRoot, "files");
  const manifestPath = join(backupRoot, "manifest.json");
  let manifest;

  if (!(await isFile(manifestPath))) {
    const files = [];
    for (const overlayFile of overlayFiles) {
      const targetPath = inside(engineRoot, overlayFile.relative);
      const existed = await isFile(targetPath);
      if (existed) {
        await copyWithParents(targetPath, inside(backupFilesRoot, overlayFile.relative));
      }
      files.push({ path: overlayFile.relative, existed });
    }

    manifest = {
      schemaVersion: 1,
      engineVersion: requiredEngineVersion,
      integrationVersion,
      createdAt: new Date().toISOString(),
      files,
    };
    await writeJsonAtomic(manifestPath, manifest);
    console.info("Backed up the original Engine files to " + backupRoot);
  } else {
    manifest = await readJson(manifestPath);
    validateManifest(manifest, manifestPath);

    if (manifest.engineVersion && manifest.engineVersion !== requiredEngineVersion) {
      fail(
        "Existing NPC Gallery backup belongs to Marinara Engine " +
          manifest.engineVersion +
          ", not " +
          requiredEngineVersion +
          ".",
      );
    }

    const knownPaths = new Set(
      manifest.files.map((entry) => normalizeRelativePath(entry.path).toLocaleLowerCase("en-US")),
    );
    let added = 0;

    for (const overlayFile of overlayFiles) {
      if (knownPaths.has(overlayFile.relative.toLocaleLowerCase("en-US"))) continue;
      const targetPath = inside(engineRoot, overlayFile.relative);
      const existed = await isFile(targetPath);
      if (existed) {
        await copyWithParents(targetPath, inside(backupFilesRoot, overlayFile.relative));
      }
      manifest.files.push({ path: overlayFile.relative, existed });
      knownPaths.add(overlayFile.relative.toLocaleLowerCase("en-US"));
      added += 1;
    }

    if (added > 0) {
      await writeJsonAtomic(manifestPath, manifest);
      console.info("Added " + added + " new integration file(s) to the original backup.");
    } else {
      console.info("Existing original-file backup found; it was not overwritten.");
    }
  }

  for (const overlayFile of overlayFiles) {
    await copyWithParents(overlayFile.absolute, inside(engineRoot, overlayFile.relative));
  }
  console.info("Copied " + overlayFiles.length + " NPC Gallery integration files.");
}

async function uninstallOverlay(engineRootInput, overlayRootInput, backupFolderName) {
  const engineRoot = resolve(engineRootInput);
  const overlayRoot = resolve(overlayRootInput);
  const backupRoot = resolve(engineRoot, backupFolderName);
  const backupFilesRoot = join(backupRoot, "files");
  const manifestPath = join(backupRoot, "manifest.json");

  if (!(await isFile(manifestPath))) {
    fail("No NPC Gallery Engine backup was found at " + manifestPath + ".");
  }

  const manifest = await readJson(manifestPath);
  validateManifest(manifest, manifestPath);

  const enginePackage = await readJson(join(engineRoot, "package.json"));
  if (manifest.engineVersion && enginePackage.version !== manifest.engineVersion) {
    fail(
      "The backup belongs to Marinara Engine " +
        manifest.engineVersion +
        ", but the selected folder is version " +
        String(enginePackage.version ?? "unknown") +
        ". Refusing to restore incompatible Engine source files.",
    );
  }

  const timestamp = new Date().toISOString().replace(/\D/gu, "").slice(0, 14);
  const conflictRoot = join(backupRoot, "post-install-changes-" + timestamp);
  let conflictCount = 0;

  for (const entry of manifest.files) {
    const relativePath = normalizeRelativePath(entry.path);
    const targetPath = inside(engineRoot, relativePath);
    const overlayPath = inside(overlayRoot, relativePath);

    if (
      (await isFile(targetPath)) &&
      (await isFile(overlayPath)) &&
      (await sha256(targetPath)) !== (await sha256(overlayPath))
    ) {
      await copyWithParents(targetPath, inside(conflictRoot, relativePath));
      conflictCount += 1;
    }

    if (entry.existed) {
      const backupPath = inside(backupFilesRoot, relativePath);
      if (!(await isFile(backupPath))) {
        fail("Backup file is missing: " + backupPath);
      }
      await copyWithParents(backupPath, targetPath);
    } else {
      await rm(targetPath, { force: true });
    }
  }

  const dataRoot = join(engineRoot, "packages", "server", "data");
  const capabilityRoot = join(dataRoot, "capability-packages");
  const installedPath = join(capabilityRoot, "installed.json");

  if (await isFile(installedPath)) {
    const installed = await readJson(installedPath);
    if (installed?.schemaVersion !== 1 || !Array.isArray(installed.packages)) {
      fail("Installed capability registry has an unsupported shape: " + installedPath);
    }
    const installedMode = (await lstat(installedPath)).mode & 0o777;
    installed.packages = installed.packages.filter((entry) => entry?.id !== "npc-gallery");
    await writeJsonAtomic(installedPath, installed, installedMode || 0o600);
  }

  const versionsRoot = join(capabilityRoot, "versions");
  const npcVersions = resolve(versionsRoot, "npc-gallery");
  const versionDifference = relative(versionsRoot, npcVersions);
  if (
    !versionDifference ||
    versionDifference === ".." ||
    versionDifference.startsWith(".." + sep) ||
    isAbsolute(versionDifference)
  ) {
    fail("Refusing to remove an unsafe NPC Gallery versions path.");
  }
  await rm(npcVersions, { recursive: true, force: true });

  console.info("Restored " + manifest.files.length + " original Engine integration entries.");
  if (conflictCount > 0) {
    console.warn(
      "[WARN] Preserved " +
        conflictCount +
        " post-install modified file(s) at " +
        conflictRoot,
    );
  }
}

switch (operation) {
  case "validate-release":
    await validateRelease(...args);
    break;
  case "install-overlay":
    await installOverlay(...args);
    break;
  case "uninstall-overlay":
    await uninstallOverlay(...args);
    break;
  default:
    fail("Unknown POSIX installer operation: " + String(operation ?? ""));
}
