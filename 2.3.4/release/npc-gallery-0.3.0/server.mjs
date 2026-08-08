import { randomUUID as e } from "node:crypto";
import { mkdir as t, readFile as n, rename as r, writeFile as i } from "node:fs/promises";
import { extname as a, join as o } from "node:path";
//#region src/server/main.ts
var s = 2e4, c = 5242880, l = {
	schemaVersion: 1,
	enabled: !0,
	connectionId: null,
	extractionPromptOverride: null
}, u = {
	name: 120,
	alias: 120,
	aliases: 20,
	avatar: 2e3,
	appearance: 8e3,
	personality: 8e3,
	description: 12e3,
	sourceChatIds: 100
}, d = [
	"name",
	"avatar",
	"appearance",
	"personality",
	"description"
];
function f(e, t) {
	if (typeof e != "string") return null;
	let n = e.trim();
	return n.length <= t ? n : null;
}
function p(e, t, n) {
	if (!Array.isArray(e) || e.length > t) return null;
	let r = [], i = /* @__PURE__ */ new Set();
	for (let t of e) {
		let e = f(t, n);
		if (e === null) return null;
		!e || i.has(e.toLocaleLowerCase()) || (i.add(e.toLocaleLowerCase()), r.push(e));
	}
	return r;
}
function m(e) {
	if (e == null || e === "") return null;
	if (!(typeof e != "string" || !Number.isFinite(Date.parse(e)))) return new Date(e).toISOString();
}
function h(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e, n = f(t.name, u.name), r = p(t.aliases ?? [], u.aliases, u.alias), i = f(t.appearance ?? "", u.appearance), a = f(t.personality ?? "", u.personality), o = f(t.description ?? "", u.description), s = p(t.sourceChatIds ?? [], u.sourceChatIds, 200), c = m(t.lastSeenAt), l = t.avatar, h = l == null || l === "" ? null : f(l, u.avatar);
	if (!n || r === null || i === null || a === null || o === null || s === null || c === void 0 || h === null && l != null && l !== "") return null;
	let g = p(t.lockedFields ?? [], d.length, 20);
	return g === null || g.some((e) => !d.includes(e)) ? null : {
		name: n,
		aliases: r,
		avatar: h,
		appearance: i,
		personality: a,
		description: o,
		lockedFields: g,
		sourceChatIds: s,
		lastSeenAt: c
	};
}
function g(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.id;
	return typeof t == "string" && /^[0-9a-f-]{36}$/iu.test(t) ? t : null;
}
function _(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.filename;
	return typeof t == "string" && /^[0-9a-f-]{36}\.(?:png|jpg|gif|webp)$/iu.test(t) ? t : null;
}
function v(e) {
	if (e.length >= 8 && e.subarray(0, 8).equals(Buffer.from([
		137,
		80,
		78,
		71,
		13,
		10,
		26,
		10
	]))) return {
		extension: "png",
		mime: "image/png"
	};
	if (e.length >= 3 && e[0] === 255 && e[1] === 216 && e[2] === 255) return {
		extension: "jpg",
		mime: "image/jpeg"
	};
	let t = e.subarray(0, 6).toString("ascii");
	return t === "GIF87a" || t === "GIF89a" ? {
		extension: "gif",
		mime: "image/gif"
	} : e.length >= 12 && e.subarray(0, 4).toString("ascii") === "RIFF" && e.subarray(8, 12).toString("ascii") === "WEBP" ? {
		extension: "webp",
		mime: "image/webp"
	} : null;
}
function y(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.avatar;
	if (typeof t != "string") return null;
	let n = /^data:image\/[\w.+-]+;base64,([A-Za-z0-9+/=]+)$/u.exec(t);
	if (!n) return null;
	let r = Buffer.from(n[1], "base64");
	if (r.length === 0 || r.length > c) return null;
	let i = v(r);
	return i ? {
		buffer: r,
		image: i
	} : null;
}
function b(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e;
	if (t.schemaVersion !== 1 || typeof t.enabled != "boolean") return null;
	let n = t.connectionId;
	if (n != null && typeof n != "string") return null;
	let r = typeof n == "string" ? n.trim() : "", i = t.extractionPromptOverride;
	if (i != null && typeof i != "string") return null;
	let a = typeof i == "string" ? i.trim() : "";
	return a.length > s ? null : {
		schemaVersion: 1,
		enabled: t.enabled,
		connectionId: r || null,
		extractionPromptOverride: a || null
	};
}
function x(e) {
	let a = o(e, "capability-packages", "state", "npc-gallery"), s = o(a, "settings.json"), c = Promise.resolve();
	return {
		async read() {
			try {
				return b(JSON.parse(await n(s, "utf8"))) ?? l;
			} catch (e) {
				if ((e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT") return l;
				throw e;
			}
		},
		async write(e) {
			let n = c.then(async () => {
				await t(a, { recursive: !0 });
				let n = `${s}.tmp`;
				await i(n, `${JSON.stringify(e, null, 2)}\n`, {
					encoding: "utf8",
					mode: 384
				}), await r(n, s);
			});
			c = n.catch(() => void 0), await n;
		}
	};
}
function S(a) {
	let s = o(a, "capability-packages", "state", "npc-gallery"), c = o(s, "npcs.json"), l = Promise.resolve();
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
async function C(r) {
	let { id: s, version: c } = r.package, l = x(r.dataDir), u = S(r.dataDir), d = o(r.dataDir, "capability-packages", "state", "npc-gallery", "avatars");
	return r.app.get("/api/capabilities/npc-gallery/settings", async (e, t) => {
		try {
			return await l.read();
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not read NPC Gallery settings"), t.status(500).send({ error: "Could not read NPC Gallery settings" });
		}
	}), r.app.put("/api/capabilities/npc-gallery/settings", async (e, t) => {
		let n = b(e.body);
		if (!n) return t.status(400).send({ error: "Expected valid schemaVersion 1 settings, including a prompt override no longer than 20,000 characters" });
		try {
			return await l.write(n), n;
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not save NPC Gallery settings"), t.status(500).send({ error: "Could not save NPC Gallery settings" });
		}
	}), r.app.get("/api/capabilities/npc-gallery/npcs", async (e, t) => {
		try {
			return {
				schemaVersion: 1,
				npcs: await u.list()
			};
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not list NPC Gallery records"), t.status(500).send({ error: "Could not list NPC Gallery records" });
		}
	}), r.app.get("/api/capabilities/npc-gallery/npcs/:id", async (e, t) => {
		let n = g(e.params);
		if (!n) return t.status(400).send({ error: "Invalid NPC id" });
		try {
			return await u.get(n) ?? t.status(404).send({ error: "NPC not found" });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not read NPC Gallery record"), t.status(500).send({ error: "Could not read NPC Gallery record" });
		}
	}), r.app.post("/api/capabilities/npc-gallery/npcs", async (e, t) => {
		let n = h(e.body);
		if (!n) return t.status(400).send({ error: "Invalid NPC record" });
		try {
			return t.status(201).send(await u.create(n));
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not create NPC Gallery record"), t.status(500).send({ error: "Could not create NPC Gallery record" });
		}
	}), r.app.put("/api/capabilities/npc-gallery/npcs/:id", async (e, t) => {
		let n = g(e.params);
		if (!n) return t.status(400).send({ error: "Invalid NPC id" });
		let i = h(e.body);
		if (!i) return t.status(400).send({ error: "Invalid NPC record" });
		try {
			return await u.update(n, i) ?? t.status(404).send({ error: "NPC not found" });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not update NPC Gallery record"), t.status(500).send({ error: "Could not update NPC Gallery record" });
		}
	}), r.app.delete("/api/capabilities/npc-gallery/npcs/:id", async (e, t) => {
		let n = g(e.params);
		if (!n) return t.status(400).send({ error: "Invalid NPC id" });
		try {
			return await u.remove(n) ? t.status(204).send(null) : t.status(404).send({ error: "NPC not found" });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not delete NPC Gallery record"), t.status(500).send({ error: "Could not delete NPC Gallery record" });
		}
	}), r.app.post("/api/capabilities/npc-gallery/avatars", async (n, a) => {
		let s = y(n.body);
		if (!s) return a.status(400).send({ error: "Expected a PNG, JPEG, GIF, or WebP image no larger than 5 MB" });
		try {
			await t(d, { recursive: !0 });
			let n = `${e()}.${s.image.extension}`;
			return await i(o(d, n), s.buffer, { mode: 384 }), a.status(201).send({ avatar: `/api/capabilities/npc-gallery/avatars/${n}` });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not save NPC Gallery avatar"), a.status(500).send({ error: "Could not save NPC Gallery avatar" });
		}
	}), r.app.get("/api/capabilities/npc-gallery/avatars/:filename", async (e, t) => {
		let i = _(e.params);
		if (!i) return t.status(400).send({ error: "Invalid avatar filename" });
		try {
			let e = await n(o(d, i)), r = a(i).toLowerCase(), s = r === ".png" ? "image/png" : r === ".jpg" ? "image/jpeg" : r === ".gif" ? "image/gif" : "image/webp";
			return t.header("Content-Type", s).header("Cache-Control", "public, max-age=31536000, immutable").send(e);
		} catch (e) {
			return (e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT" ? t.status(404).send({ error: "Avatar not found" }) : (r.api.runtime.logger.error(e, "Could not read NPC Gallery avatar"), t.status(500).send({ error: "Could not read NPC Gallery avatar" }));
		}
	}), r.api.runtime.logger.info("Activated capability package %s@%s", s, c), () => {
		r.api.runtime.logger.info("Deactivated capability package %s@%s", s, c);
	};
}
async function w(e) {
	if (e.package.id !== "npc-gallery") throw Error(`Expected package id npc-gallery, received ${e.package.id}`);
}
//#endregion
export { C as activate, w as selfCheck };
