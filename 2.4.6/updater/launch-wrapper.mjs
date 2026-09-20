import { randomUUID } from "node:crypto";
import { copyFile, chmod, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, extname, join, resolve } from "node:path";
import { spawn } from "node:child_process";

const argument = (name) => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

const separatorIndex = process.argv.indexOf("--");
const forwardedArgs = separatorIndex >= 0 ? process.argv.slice(separatorIndex + 1) : [];
const engineRoot = resolve(argument("--engine-root") ?? process.cwd());
const launcherArgument = argument("--launcher");

if (!launcherArgument) {
  console.error("[NPC Gallery updater] Launcher wrapper did not receive --launcher.");
  process.exit(1);
}
const launcherPath = resolve(launcherArgument);

const extension = extname(launcherPath) || (process.platform === "win32" ? ".bat" : ".sh");
const temporaryLauncher = join(
  tmpdir(),
  `marinara-npc-gallery-${process.pid}-${randomUUID()}-${basename(launcherPath, extension)}${extension}`,
);

function runLauncher(target) {
  const environment = {
    ...process.env,
    NPC_GALLERY_LAUNCH_WRAPPED: "1",
    NPC_GALLERY_ENGINE_ROOT: engineRoot,
  };
  const command = process.platform === "win32" ? process.env.ComSpec ?? "cmd.exe" : "bash";
  const args = process.platform === "win32"
    ? ["/d", "/c", target, ...forwardedArgs]
    : [target, ...forwardedArgs];
  return new Promise((resolveExit, reject) => {
    const child = spawn(command, args, {
      cwd: engineRoot,
      env: environment,
      stdio: "inherit",
      windowsHide: false,
    });
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (signal) {
        resolveExit(1);
        return;
      }
      resolveExit(code ?? 1);
    });
  });
}

let target = temporaryLauncher;
try {
  await copyFile(launcherPath, temporaryLauncher);
  if (process.platform !== "win32") {
    const sourceStat = await stat(launcherPath);
    await chmod(temporaryLauncher, sourceStat.mode);
  }
} catch (error) {
  target = launcherPath;
  console.warn(
    `[NPC Gallery updater] Could not create a temporary launcher copy; update protection is reduced for this run: ${error.message}`,
  );
}

let exitCode = 1;
try {
  exitCode = await runLauncher(target);
} catch (error) {
  console.error(`[NPC Gallery updater] Could not run ${target}: ${error.message}`);
} finally {
  if (target === temporaryLauncher) await rm(temporaryLauncher, { force: true }).catch(() => undefined);
}

process.exitCode = exitCode;
