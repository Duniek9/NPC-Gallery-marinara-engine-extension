import { mkdir as e, readFile as t, rename as n, writeFile as r } from "node:fs/promises";
import { join as i } from "node:path";
//#region src/server/main.ts
var a = 2e4, o = {
	schemaVersion: 1,
	enabled: !0,
	connectionId: null,
	extractionPromptOverride: null
};
function s(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e;
	if (t.schemaVersion !== 1 || typeof t.enabled != "boolean") return null;
	let n = t.connectionId;
	if (n != null && typeof n != "string") return null;
	let r = typeof n == "string" ? n.trim() : "", i = t.extractionPromptOverride;
	if (i != null && typeof i != "string") return null;
	let o = typeof i == "string" ? i.trim() : "";
	return o.length > a ? null : {
		schemaVersion: 1,
		enabled: t.enabled,
		connectionId: r || null,
		extractionPromptOverride: o || null
	};
}
function c(a) {
	let c = i(a, "capability-packages", "state", "npc-gallery"), l = i(c, "settings.json"), u = Promise.resolve();
	return {
		async read() {
			try {
				return s(JSON.parse(await t(l, "utf8"))) ?? o;
			} catch (e) {
				if ((e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT") return o;
				throw e;
			}
		},
		async write(t) {
			let i = u.then(async () => {
				await e(c, { recursive: !0 });
				let i = `${l}.tmp`;
				await r(i, `${JSON.stringify(t, null, 2)}\n`, {
					encoding: "utf8",
					mode: 384
				}), await n(i, l);
			});
			u = i.catch(() => void 0), await i;
		}
	};
}
async function l(e) {
	let { id: t, version: n } = e.package, r = c(e.dataDir);
	return e.app.get("/api/capabilities/npc-gallery/settings", async (t, n) => {
		try {
			return await r.read();
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not read NPC Gallery settings"), n.status(500).send({ error: "Could not read NPC Gallery settings" });
		}
	}), e.app.put("/api/capabilities/npc-gallery/settings", async (t, n) => {
		let i = s(t.body);
		if (!i) return n.status(400).send({ error: "Expected valid schemaVersion 1 settings, including a prompt override no longer than 20,000 characters" });
		try {
			return await r.write(i), i;
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not save NPC Gallery settings"), n.status(500).send({ error: "Could not save NPC Gallery settings" });
		}
	}), e.api.runtime.logger.info("Activated capability package %s@%s", t, n), () => {
		e.api.runtime.logger.info("Deactivated capability package %s@%s", t, n);
	};
}
async function u(e) {
	if (e.package.id !== "npc-gallery") throw Error(`Expected package id npc-gallery, received ${e.package.id}`);
}
//#endregion
export { l as activate, u as selfCheck };
