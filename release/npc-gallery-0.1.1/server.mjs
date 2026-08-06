import { mkdir as e, readFile as t, rename as n, writeFile as r } from "node:fs/promises";
import { join as i } from "node:path";
//#region src/server/main.ts
var a = {
	schemaVersion: 1,
	enabled: !0
};
function o(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = e;
	return t.schemaVersion === 1 && typeof t.enabled == "boolean";
}
function s(s) {
	let c = i(s, "capability-packages", "state", "npc-gallery"), l = i(c, "settings.json"), u = Promise.resolve();
	return {
		async read() {
			try {
				let e = JSON.parse(await t(l, "utf8"));
				return o(e) ? e : a;
			} catch (e) {
				if ((e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT") return a;
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
async function c(e) {
	let { id: t, version: n } = e.package, r = s(e.dataDir);
	return e.app.get("/api/capabilities/npc-gallery/settings", async (t, n) => {
		try {
			return await r.read();
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not read NPC Gallery settings"), n.status(500).send({ error: "Could not read NPC Gallery settings" });
		}
	}), e.app.put("/api/capabilities/npc-gallery/settings", async (t, n) => {
		if (!o(t.body)) return n.status(400).send({ error: "Expected schemaVersion 1 and a boolean enabled value" });
		try {
			return await r.write(t.body), t.body;
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not save NPC Gallery settings"), n.status(500).send({ error: "Could not save NPC Gallery settings" });
		}
	}), e.api.runtime.logger.info("Activated capability package %s@%s", t, n), () => {
		e.api.runtime.logger.info("Deactivated capability package %s@%s", t, n);
	};
}
async function l(e) {
	if (e.package.id !== "npc-gallery") throw Error(`Expected package id npc-gallery, received ${e.package.id}`);
}
//#endregion
export { c as activate, l as selfCheck };
