import { randomUUID as e } from "node:crypto";
import { mkdir as t, readFile as n, rename as r, writeFile as i } from "node:fs/promises";
import { join as a } from "node:path";
//#region src/server/main.ts
var o = 2e4, s = {
	schemaVersion: 1,
	enabled: !0,
	connectionId: null,
	extractionPromptOverride: null
}, c = {
	name: 120,
	alias: 120,
	aliases: 20,
	avatar: 2e3,
	appearance: 8e3,
	personality: 8e3,
	description: 12e3,
	sourceChatIds: 100
}, l = [
	"name",
	"avatar",
	"appearance",
	"personality",
	"description"
];
function u(e, t) {
	if (typeof e != "string") return null;
	let n = e.trim();
	return n.length <= t ? n : null;
}
function d(e, t, n) {
	if (!Array.isArray(e) || e.length > t) return null;
	let r = [], i = /* @__PURE__ */ new Set();
	for (let t of e) {
		let e = u(t, n);
		if (e === null) return null;
		!e || i.has(e.toLocaleLowerCase()) || (i.add(e.toLocaleLowerCase()), r.push(e));
	}
	return r;
}
function f(e) {
	if (e == null || e === "") return null;
	if (!(typeof e != "string" || !Number.isFinite(Date.parse(e)))) return new Date(e).toISOString();
}
function p(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e, n = u(t.name, c.name), r = d(t.aliases ?? [], c.aliases, c.alias), i = u(t.appearance ?? "", c.appearance), a = u(t.personality ?? "", c.personality), o = u(t.description ?? "", c.description), s = d(t.sourceChatIds ?? [], c.sourceChatIds, 200), p = f(t.lastSeenAt), m = t.avatar, h = m == null || m === "" ? null : u(m, c.avatar);
	if (!n || r === null || i === null || a === null || o === null || s === null || p === void 0 || h === null && m != null && m !== "") return null;
	let g = d(t.lockedFields ?? [], l.length, 20);
	return g === null || g.some((e) => !l.includes(e)) ? null : {
		name: n,
		aliases: r,
		avatar: h,
		appearance: i,
		personality: a,
		description: o,
		lockedFields: g,
		sourceChatIds: s,
		lastSeenAt: p
	};
}
function m(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.id;
	return typeof t == "string" && /^[0-9a-f-]{36}$/iu.test(t) ? t : null;
}
function h(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e;
	if (t.schemaVersion !== 1 || typeof t.enabled != "boolean") return null;
	let n = t.connectionId;
	if (n != null && typeof n != "string") return null;
	let r = typeof n == "string" ? n.trim() : "", i = t.extractionPromptOverride;
	if (i != null && typeof i != "string") return null;
	let a = typeof i == "string" ? i.trim() : "";
	return a.length > o ? null : {
		schemaVersion: 1,
		enabled: t.enabled,
		connectionId: r || null,
		extractionPromptOverride: a || null
	};
}
function g(e) {
	let o = a(e, "capability-packages", "state", "npc-gallery"), c = a(o, "settings.json"), l = Promise.resolve();
	return {
		async read() {
			try {
				return h(JSON.parse(await n(c, "utf8"))) ?? s;
			} catch (e) {
				if ((e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT") return s;
				throw e;
			}
		},
		async write(e) {
			let n = l.then(async () => {
				await t(o, { recursive: !0 });
				let n = `${c}.tmp`;
				await i(n, `${JSON.stringify(e, null, 2)}\n`, {
					encoding: "utf8",
					mode: 384
				}), await r(n, c);
			});
			l = n.catch(() => void 0), await n;
		}
	};
}
function _(o) {
	let s = a(o, "capability-packages", "state", "npc-gallery"), c = a(s, "npcs.json"), l = Promise.resolve();
	async function u() {
		try {
			let e = JSON.parse(await n(c, "utf8"));
			if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Invalid NPC collection");
			let t = e;
			if (t.schemaVersion !== 1 || !Array.isArray(t.npcs)) throw Error("Invalid NPC collection");
			return e;
		} catch (e) {
			if ((e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT") return {
				schemaVersion: 1,
				npcs: []
			};
			throw e;
		}
	}
	async function d(e) {
		await t(s, { recursive: !0 });
		let n = `${c}.tmp-${process.pid}-${Date.now()}`;
		await i(n, `${JSON.stringify(e, null, 2)}\n`, {
			encoding: "utf8",
			mode: 384
		}), await r(n, c);
	}
	async function f(e) {
		let t = l.then(async () => {
			let t = await u(), n = await e(t);
			return await d(t), n;
		});
		return l = t.then(() => void 0, () => void 0), t;
	}
	return {
		async list() {
			return await l, (await u()).npcs.sort((e, t) => t.updatedAt.localeCompare(e.updatedAt));
		},
		async get(e) {
			return await l, (await u()).npcs.find((t) => t.id === e) ?? null;
		},
		create(t) {
			return f((n) => {
				let r = (/* @__PURE__ */ new Date()).toISOString(), i = {
					...t,
					lastSeenAt: t.lastSeenAt ?? null,
					id: e(),
					createdAt: r,
					updatedAt: r
				};
				return n.npcs.push(i), i;
			});
		},
		update(e, t) {
			return f((n) => {
				let r = n.npcs.findIndex((t) => t.id === e);
				if (r < 0) return null;
				let i = n.npcs[r], a = {
					...i,
					...t,
					lastSeenAt: t.lastSeenAt ?? null,
					id: i.id,
					createdAt: i.createdAt,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				return n.npcs[r] = a, a;
			});
		},
		remove(e) {
			return f((t) => {
				let n = t.npcs.findIndex((t) => t.id === e);
				return n < 0 ? !1 : (t.npcs.splice(n, 1), !0);
			});
		}
	};
}
async function v(e) {
	let { id: t, version: n } = e.package, r = g(e.dataDir), i = _(e.dataDir);
	return e.app.get("/api/capabilities/npc-gallery/settings", async (t, n) => {
		try {
			return await r.read();
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not read NPC Gallery settings"), n.status(500).send({ error: "Could not read NPC Gallery settings" });
		}
	}), e.app.put("/api/capabilities/npc-gallery/settings", async (t, n) => {
		let i = h(t.body);
		if (!i) return n.status(400).send({ error: "Expected valid schemaVersion 1 settings, including a prompt override no longer than 20,000 characters" });
		try {
			return await r.write(i), i;
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not save NPC Gallery settings"), n.status(500).send({ error: "Could not save NPC Gallery settings" });
		}
	}), e.app.get("/api/capabilities/npc-gallery/npcs", async (t, n) => {
		try {
			return {
				schemaVersion: 1,
				npcs: await i.list()
			};
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not list NPC Gallery records"), n.status(500).send({ error: "Could not list NPC Gallery records" });
		}
	}), e.app.get("/api/capabilities/npc-gallery/npcs/:id", async (t, n) => {
		let r = m(t.params);
		if (!r) return n.status(400).send({ error: "Invalid NPC id" });
		try {
			return await i.get(r) ?? n.status(404).send({ error: "NPC not found" });
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not read NPC Gallery record"), n.status(500).send({ error: "Could not read NPC Gallery record" });
		}
	}), e.app.post("/api/capabilities/npc-gallery/npcs", async (t, n) => {
		let r = p(t.body);
		if (!r) return n.status(400).send({ error: "Invalid NPC record" });
		try {
			return n.status(201).send(await i.create(r));
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not create NPC Gallery record"), n.status(500).send({ error: "Could not create NPC Gallery record" });
		}
	}), e.app.put("/api/capabilities/npc-gallery/npcs/:id", async (t, n) => {
		let r = m(t.params);
		if (!r) return n.status(400).send({ error: "Invalid NPC id" });
		let a = p(t.body);
		if (!a) return n.status(400).send({ error: "Invalid NPC record" });
		try {
			return await i.update(r, a) ?? n.status(404).send({ error: "NPC not found" });
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not update NPC Gallery record"), n.status(500).send({ error: "Could not update NPC Gallery record" });
		}
	}), e.app.delete("/api/capabilities/npc-gallery/npcs/:id", async (t, n) => {
		let r = m(t.params);
		if (!r) return n.status(400).send({ error: "Invalid NPC id" });
		try {
			return await i.remove(r) ? n.status(204).send(null) : n.status(404).send({ error: "NPC not found" });
		} catch (t) {
			return e.api.runtime.logger.error(t, "Could not delete NPC Gallery record"), n.status(500).send({ error: "Could not delete NPC Gallery record" });
		}
	}), e.api.runtime.logger.info("Activated capability package %s@%s", t, n), () => {
		e.api.runtime.logger.info("Deactivated capability package %s@%s", t, n);
	};
}
async function y(e) {
	if (e.package.id !== "npc-gallery") throw Error(`Expected package id npc-gallery, received ${e.package.id}`);
}
//#endregion
export { v as activate, y as selfCheck };
