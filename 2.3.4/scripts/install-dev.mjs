import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function usage() {
  return [
    "Usage:",
    "  pnpm install:dev -- --data-dir <Marinara DATA_DIR>",
    "",
    "You may set MARINARA_DATA_DIR instead of passing --data-dir.",
    "For a Marinara source checkout, DATA_DIR is usually packages/server/data.",
  ].join("\n");
}

function argumentValue(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.info(usage());
  process.exit(0);
}

const configuredDataDir = argumentValue("--data-dir") ?? process.env.MARINARA_DATA_DIR;
if (!configuredDataDir?.trim()) {
  throw new Error(`A Marinara data directory is required.\n\n${usage()}`);
}

const dataDir = resolve(configuredDataDir);
const capabilityRoot = resolve(dataDir, "capability-packages");
const registryPath = join(capabilityRoot, "installed.json");
const packageJson = JSON.parse(await readFile(join(projectRoot, "package.json"), "utf8"));
const packageId = "npc-gallery";
const version = packageJson.version;
const releaseDirectory = resolve(projectRoot, "release", `${packageId}-${version}`);
const manifest = JSON.parse(await readFile(join(releaseDirectory, "manifest.json"), "utf8"));

if (manifest.id !== packageId || manifest.version !== version) {
  throw new Error("Generated manifest identity does not match package.json");
}

const declaredFiles = Array.isArray(manifest.files) ? manifest.files.map((file) => file?.path) : [];
const requiredFiles = ["agents.json", "client.js", "server.mjs"];
if (requiredFiles.some((file) => !declaredFiles.includes(file))) {
  throw new Error("Generated manifest does not declare every required extension file");
}

function assertInside(root, candidate) {
  const difference = relative(root, candidate);
  if (difference === "" || (!difference.startsWith(`..${sep}`) && difference !== ".." && !resolve(difference).startsWith(sep))) {
    return;
  }
  throw new Error(`Refusing to write outside ${root}`);
}

const versionsRoot = resolve(capabilityRoot, "versions");
const destination = resolve(versionsRoot, packageId, version);
assertInside(versionsRoot, destination);

let registry = { schemaVersion: 1, packages: [] };
try {
  registry = JSON.parse(await readFile(registryPath, "utf8"));
} catch (error) {
  const code = error && typeof error === "object" && "code" in error ? error.code : null;
  if (code !== "ENOENT") throw error;
}

if (registry.schemaVersion !== 1 || !Array.isArray(registry.packages)) {
  throw new Error(`Installed package registry has an unsupported shape: ${registryPath}`);
}

const previous = registry.packages.find((entry) => entry?.id === packageId);
const installed = {
  id: packageId,
  version,
  manifest,
  installedAt: new Date().toISOString(),
  status: "restart-required",
  error: null,
  readiness: "pending",
  readinessError: null,
  legacy: false,
  ...(previous?.version && previous.version !== version ? { previousVersion: previous.version } : {}),
};

await mkdir(dirname(destination), { recursive: true });
const stagedDirectory = resolve(capabilityRoot, `.install-${packageId}-${process.pid}-${Date.now()}`);
assertInside(capabilityRoot, stagedDirectory);

try {
  await mkdir(stagedDirectory, { recursive: true });
  await cp(releaseDirectory, stagedDirectory, { recursive: true });
  await rm(destination, { recursive: true, force: true });
  await rename(stagedDirectory, destination);
} finally {
  await rm(stagedDirectory, { recursive: true, force: true });
}

await mkdir(capabilityRoot, { recursive: true });
const nextRegistry = {
  schemaVersion: 1,
  packages: [...registry.packages.filter((entry) => entry?.id !== packageId), installed],
};
const temporaryRegistry = `${registryPath}.tmp-${process.pid}-${Date.now()}`;
await writeFile(temporaryRegistry, `${JSON.stringify(nextRegistry, null, 2)}\n`, {
  encoding: "utf8",
  mode: 0o600,
});
await rename(temporaryRegistry, registryPath);

console.info(`Installed ${packageId}@${version} for local development.`);
console.info(`Data directory: ${dataDir}`);
console.info(`Package files: ${destination}`);
console.info("Restart Marinara Engine to activate this server-backed extension.");
