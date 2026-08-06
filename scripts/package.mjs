import { createHash } from "node:crypto";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packageJsonPath = join(projectRoot, "package.json");
const manifestTemplatePath = join(projectRoot, "manifest.template.json");
const outputRoot = join(projectRoot, "release");

const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
const manifestTemplate = JSON.parse(await readFile(manifestTemplatePath, "utf8"));
const version = packageJson.version;

if (typeof version !== "string" || !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(version)) {
  throw new Error(`package.json contains an invalid extension version: ${String(version)}`);
}

if (manifestTemplate.id !== "npc-gallery") {
  throw new Error(`Expected manifest package id npc-gallery, received ${String(manifestTemplate.id)}`);
}

const packageDirectory = join(outputRoot, `${manifestTemplate.id}-${version}`);
const entrypoints = [
  { source: join(projectRoot, "dist", "server.mjs"), path: "server.mjs" },
  { source: join(projectRoot, "dist", "client.js"), path: "client.js" },
  { source: join(projectRoot, "agents.json"), path: "agents.json" },
];

await rm(packageDirectory, { recursive: true, force: true });
await mkdir(packageDirectory, { recursive: true });

const files = [];
for (const entrypoint of entrypoints) {
  const contents = await readFile(entrypoint.source);
  await cp(entrypoint.source, join(packageDirectory, entrypoint.path));
  files.push({
    path: entrypoint.path,
    sha256: createHash("sha256").update(contents).digest("hex"),
    bytes: contents.byteLength,
  });
}

const manifest = {
  ...manifestTemplate,
  version,
  files,
};

await writeFile(join(packageDirectory, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.info(`Packaged ${manifest.id}@${version}`);
console.info(packageDirectory);
for (const file of files) {
  console.info(`- ${file.path}: ${file.bytes} bytes, sha256 ${file.sha256}`);
}
