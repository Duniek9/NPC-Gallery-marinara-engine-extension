import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, posix, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(await readFile(join(projectRoot, "package.json"), "utf8"));
const manifestTemplate = JSON.parse(await readFile(join(projectRoot, "manifest.template.json"), "utf8"));
const engineVersion = manifestTemplate.engine?.min;
const extensionVersion = packageJson.version;
const parts = String(engineVersion ?? "").split(".").map(Number);
const expectedMaximum =
  parts.length === 3 && parts.every(Number.isInteger)
    ? `${parts[0]}.${parts[1]}.${parts[2] + 1}`
    : "";

if (!engineVersion || manifestTemplate.engine?.maxExclusive !== expectedMaximum) {
  throw new Error("manifest.template.json must declare one exact Engine patch version.");
}

async function walk(root, current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  const result = [];
  for (const entry of entries) {
    const absolute = join(current, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Release inputs may not contain symbolic links: ${absolute}`);
    if (entry.isDirectory()) result.push(...(await walk(root, absolute)));
    else if (entry.isFile()) result.push(absolute);
  }
  return result;
}

async function encodeFiles(root) {
  const files = [];
  for (const absolute of await walk(root)) {
    const path = relative(root, absolute).split(sep).join("/");
    const normalized = posix.normalize(path);
    if (!normalized || normalized.startsWith("../")) throw new Error(`Unsafe release path: ${path}`);
    const contents = await readFile(absolute);
    files.push({
      path: normalized,
      sha256: createHash("sha256").update(contents).digest("hex"),
      bytes: contents.byteLength,
      contentBase64: contents.toString("base64"),
    });
  }
  return files;
}

const releaseRoot = join(projectRoot, "release", `npc-gallery-${extensionVersion}`);
const packageManifest = JSON.parse(await readFile(join(releaseRoot, "manifest.json"), "utf8"));
if (packageManifest.id !== "npc-gallery" || packageManifest.version !== extensionVersion) {
  throw new Error("Build the matching NPC Gallery capability package before packaging its updater bundle.");
}

const bundle = {
  schemaVersion: 1,
  packageId: "npc-gallery",
  engineVersion,
  extensionVersion,
  createdAt: new Date().toISOString(),
  packageManifest,
  overlayFiles: await encodeFiles(join(projectRoot, "installer", "overlay")),
  capabilityFiles: await encodeFiles(releaseRoot),
  bootstrapFiles: await encodeFiles(join(projectRoot, "updater")),
};

const outputRoot = join(projectRoot, "updates", "artifacts");
await mkdir(outputRoot, { recursive: true });
const fileName = `npc-gallery-${extensionVersion}-marinara-${engineVersion}.npcbundle`;
const outputPath = join(outputRoot, fileName);
const contents = Buffer.from(`${JSON.stringify(bundle)}\n`, "utf8");
await writeFile(outputPath, contents);
const metadata = {
  engineVersion,
  extensionVersion,
  fileName,
  sha256: createHash("sha256").update(contents).digest("hex"),
  bytes: contents.byteLength,
  bundleUrl: `https://github.com/Duniek9/NPC-Gallery-marinara-engine-extension/releases/download/v${extensionVersion}/${fileName}`,
};
await writeFile(join(outputRoot, `${fileName}.json`), `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
console.info(JSON.stringify(metadata, null, 2));
