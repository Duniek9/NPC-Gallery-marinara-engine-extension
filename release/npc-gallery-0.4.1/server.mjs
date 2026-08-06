import { randomUUID as e } from "node:crypto";
import { mkdir as t, readFile as n, rename as r, rm as i, writeFile as a } from "node:fs/promises";
import { extname as o, join as s } from "node:path";
//#region src/server/main.ts
var c = 2e4, l = 5242880, u = {
	schemaVersion: 1,
	enabled: !0,
	connectionId: null,
	extractionPromptOverride: null
}, d = {
	name: 120,
	alias: 120,
	aliases: 20,
	avatar: 2e3,
	appearance: 8e3,
	personality: 8e3,
	description: 12e3,
	sourceChatIds: 100
}, f = [
	"name",
	"avatar",
	"appearance",
	"personality",
	"description"
];
function p(e, t) {
	if (typeof e != "string") return null;
	let n = e.trim();
	return n.length <= t ? n : null;
}
function m(e, t, n) {
	if (!Array.isArray(e) || e.length > t) return null;
	let r = [], i = /* @__PURE__ */ new Set();
	for (let t of e) {
		let e = p(t, n);
		if (e === null) return null;
		!e || i.has(e.toLocaleLowerCase()) || (i.add(e.toLocaleLowerCase()), r.push(e));
	}
	return r;
}
function h(e) {
	if (e == null || e === "") return null;
	if (!(typeof e != "string" || !Number.isFinite(Date.parse(e)))) return new Date(e).toISOString();
}
function g(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e, n = p(t.name, d.name), r = m(t.aliases ?? [], d.aliases, d.alias), i = p(t.appearance ?? "", d.appearance), a = p(t.personality ?? "", d.personality), o = p(t.description ?? "", d.description), s = m(t.sourceChatIds ?? [], d.sourceChatIds, 200), c = h(t.lastSeenAt), l = t.folderId, u = l == null || l === "" ? null : p(l, 36), g = t.avatar, _ = g == null || g === "" ? null : p(g, d.avatar);
	if (!n || r === null || i === null || a === null || o === null || s === null || c === void 0 || u === null && l != null && l !== "" || _ === null && g != null && g !== "") return null;
	let v = m(t.lockedFields ?? [], f.length, 20);
	return v === null || v.some((e) => !f.includes(e)) ? null : {
		name: n,
		aliases: r,
		avatar: _,
		appearance: i,
		personality: a,
		description: o,
		lockedFields: v,
		sourceChatIds: s,
		lastSeenAt: c,
		folderId: u
	};
}
function _(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.id;
	return typeof t == "string" && /^[0-9a-f-]{36}$/iu.test(t) ? t : null;
}
function v(e) {
	return _(e);
}
function y(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e, n = p(t.name, 120), r = t.linkedChatId, i = r == null || r === "" ? null : p(r, 200);
	return !n || i === null && r != null && r !== "" ? null : {
		name: n,
		linkedChatId: i
	};
}
function b(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.filename;
	return typeof t == "string" && /^[0-9a-f-]{36}\.(?:png|jpg|gif|webp)$/iu.test(t) ? t : null;
}
function x(e) {
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
function S(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e.avatar;
	if (typeof t != "string") return null;
	let n = /^data:image\/[\w.+-]+;base64,([A-Za-z0-9+/=]+)$/u.exec(t);
	if (!n) return null;
	let r = Buffer.from(n[1], "base64");
	if (r.length === 0 || r.length > l) return null;
	let i = x(r);
	return i ? {
		buffer: r,
		image: i
	} : null;
}
function C(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e;
	if (t.schemaVersion !== 1 || typeof t.enabled != "boolean") return null;
	let n = t.connectionId;
	if (n != null && typeof n != "string") return null;
	let r = typeof n == "string" ? n.trim() : "", i = t.extractionPromptOverride;
	if (i != null && typeof i != "string") return null;
	let a = typeof i == "string" ? i.trim() : "";
	return a.length > c ? null : {
		schemaVersion: 1,
		enabled: t.enabled,
		connectionId: r || null,
		extractionPromptOverride: a || null
	};
}
function w(e) {
	let i = s(e, "capability-packages", "state", "npc-gallery"), o = s(i, "settings.json"), c = Promise.resolve();
	return {
		async read() {
			try {
				return C(JSON.parse(await n(o, "utf8"))) ?? u;
			} catch (e) {
				if ((e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT") return u;
				throw e;
			}
		},
		async write(e) {
			let n = c.then(async () => {
				await t(i, { recursive: !0 });
				let n = `${o}.tmp`;
				await a(n, `${JSON.stringify(e, null, 2)}\n`, {
					encoding: "utf8",
					mode: 384
				}), await r(n, o);
			});
			c = n.catch(() => void 0), await n;
		}
	};
}
function T(i) {
	let o = s(i, "capability-packages", "state", "npc-gallery"), c = s(o, "npcs.json"), l = Promise.resolve();
	async function u() {
		try {
			let e = JSON.parse(await n(c, "utf8"));
			if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Invalid NPC collection");
			let t = e;
			if (!Array.isArray(t.npcs)) throw Error("Invalid NPC collection");
			if (t.schemaVersion === 1) return {
				schemaVersion: 2,
				folders: [],
				npcs: t.npcs.map((e) => ({
					...e,
					folderId: null
				}))
			};
			if (t.schemaVersion !== 2 || !Array.isArray(t.folders)) throw Error("Invalid NPC collection");
			return e;
		} catch (e) {
			if ((e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT") return {
				schemaVersion: 2,
				npcs: [],
				folders: []
			};
			throw e;
		}
	}
	async function d(e) {
		await t(o, { recursive: !0 });
		let n = `${c}.tmp-${process.pid}-${Date.now()}`;
		await a(n, `${JSON.stringify(e, null, 2)}\n`, {
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
		async listFolders() {
			return await l, (await u()).folders.sort((e, t) => e.name.localeCompare(t.name));
		},
		createFolder(t) {
			return f((n) => {
				let r = (/* @__PURE__ */ new Date()).toISOString(), i = {
					id: e(),
					...t,
					createdAt: r,
					updatedAt: r
				};
				return n.folders.push(i), i;
			});
		},
		updateFolder(e, t) {
			return f((n) => {
				let r = n.folders.findIndex((t) => t.id === e);
				if (r < 0) return null;
				let i = {
					...n.folders[r],
					...t,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				};
				return n.folders[r] = i, i;
			});
		},
		deleteFolder(e, t) {
			return f((n) => {
				let r = n.folders.findIndex((t) => t.id === e);
				if (r < 0) return {
					found: !1,
					deletedNpcs: []
				};
				let i = n.npcs.filter((t) => t.folderId === e);
				if (t === "delete-npcs") n.npcs = n.npcs.filter((t) => t.folderId !== e);
				else {
					let e = (/* @__PURE__ */ new Date()).toISOString();
					for (let t of i) t.folderId = null, t.updatedAt = e;
				}
				return n.folders.splice(r, 1), {
					found: !0,
					deletedNpcs: t === "delete-npcs" ? i : []
				};
			});
		},
		create(t) {
			return f((n) => {
				if (t.folderId && !n.folders.some((e) => e.id === t.folderId)) throw Error("NPC folder does not exist");
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
				if (t.folderId && !n.folders.some((e) => e.id === t.folderId)) throw Error("NPC folder does not exist");
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
async function E(r) {
	let { id: c, version: l } = r.package, u = w(r.dataDir), d = T(r.dataDir), f = s(r.dataDir, "capability-packages", "state", "npc-gallery", "avatars");
	return r.app.get("/api/capabilities/npc-gallery/settings", async (e, t) => {
		try {
			return await u.read();
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not read NPC Gallery settings"), t.status(500).send({ error: "Could not read NPC Gallery settings" });
		}
	}), r.app.put("/api/capabilities/npc-gallery/settings", async (e, t) => {
		let n = C(e.body);
		if (!n) return t.status(400).send({ error: "Expected valid schemaVersion 1 settings, including a prompt override no longer than 20,000 characters" });
		try {
			return await u.write(n), n;
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not save NPC Gallery settings"), t.status(500).send({ error: "Could not save NPC Gallery settings" });
		}
	}), r.app.get("/api/capabilities/npc-gallery/npcs", async (e, t) => {
		try {
			return {
				schemaVersion: 2,
				npcs: await d.list()
			};
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not list NPC Gallery records"), t.status(500).send({ error: "Could not list NPC Gallery records" });
		}
	}), r.app.get("/api/capabilities/npc-gallery/folders", async (e, t) => {
		try {
			return {
				schemaVersion: 1,
				folders: await d.listFolders()
			};
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not list NPC Gallery folders"), t.status(500).send({ error: "Could not list NPC Gallery folders" });
		}
	}), r.app.post("/api/capabilities/npc-gallery/folders", async (e, t) => {
		let n = y(e.body);
		if (!n) return t.status(400).send({ error: "Invalid folder" });
		try {
			return t.status(201).send(await d.createFolder(n));
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not create NPC Gallery folder"), t.status(500).send({ error: "Could not create NPC Gallery folder" });
		}
	}), r.app.put("/api/capabilities/npc-gallery/folders/:id", async (e, t) => {
		let n = v(e.params), i = y(e.body);
		if (!n || !i) return t.status(400).send({ error: "Invalid folder" });
		try {
			return await d.updateFolder(n, i) ?? t.status(404).send({ error: "Folder not found" });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not update NPC Gallery folder"), t.status(500).send({ error: "Could not update NPC Gallery folder" });
		}
	}), r.app.delete("/api/capabilities/npc-gallery/folders/:id", async (e, t) => {
		let n = v(e.params), a = (e.query && typeof e.query == "object" && !Array.isArray(e.query) ? e.query : {}).mode;
		if (!n || a !== "keep-npcs" && a !== "delete-npcs") return t.status(400).send({ error: "Choose keep-npcs or delete-npcs explicitly" });
		try {
			let e = await d.deleteFolder(n, a);
			if (!e.found) return t.status(404).send({ error: "Folder not found" });
			for (let t of e.deletedNpcs) {
				if (!t.avatar?.startsWith("/api/capabilities/npc-gallery/avatars/")) continue;
				let e = t.avatar.slice(38);
				b({ filename: e }) && await i(s(f, e), { force: !0 });
			}
			return t.status(204).send(null);
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not delete NPC Gallery folder"), t.status(500).send({ error: "Could not delete NPC Gallery folder" });
		}
	}), r.app.get("/api/capabilities/npc-gallery/npcs/:id", async (e, t) => {
		let n = _(e.params);
		if (!n) return t.status(400).send({ error: "Invalid NPC id" });
		try {
			return await d.get(n) ?? t.status(404).send({ error: "NPC not found" });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not read NPC Gallery record"), t.status(500).send({ error: "Could not read NPC Gallery record" });
		}
	}), r.app.post("/api/capabilities/npc-gallery/npcs", async (e, t) => {
		let n = g(e.body);
		if (!n) return t.status(400).send({ error: "Invalid NPC record" });
		try {
			return t.status(201).send(await d.create(n));
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not create NPC Gallery record"), t.status(500).send({ error: "Could not create NPC Gallery record" });
		}
	}), r.app.put("/api/capabilities/npc-gallery/npcs/:id", async (e, t) => {
		let n = _(e.params);
		if (!n) return t.status(400).send({ error: "Invalid NPC id" });
		let i = g(e.body);
		if (!i) return t.status(400).send({ error: "Invalid NPC record" });
		try {
			return await d.update(n, i) ?? t.status(404).send({ error: "NPC not found" });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not update NPC Gallery record"), t.status(500).send({ error: "Could not update NPC Gallery record" });
		}
	}), r.app.delete("/api/capabilities/npc-gallery/npcs/:id", async (e, t) => {
		let n = _(e.params);
		if (!n) return t.status(400).send({ error: "Invalid NPC id" });
		try {
			return await d.remove(n) ? t.status(204).send(null) : t.status(404).send({ error: "NPC not found" });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not delete NPC Gallery record"), t.status(500).send({ error: "Could not delete NPC Gallery record" });
		}
	}), r.app.post("/api/capabilities/npc-gallery/avatars", async (n, i) => {
		let o = S(n.body);
		if (!o) return i.status(400).send({ error: "Expected a PNG, JPEG, GIF, or WebP image no larger than 5 MB" });
		try {
			await t(f, { recursive: !0 });
			let n = `${e()}.${o.image.extension}`;
			return await a(s(f, n), o.buffer, { mode: 384 }), i.status(201).send({ avatar: `/api/capabilities/npc-gallery/avatars/${n}` });
		} catch (e) {
			return r.api.runtime.logger.error(e, "Could not save NPC Gallery avatar"), i.status(500).send({ error: "Could not save NPC Gallery avatar" });
		}
	}), r.app.get("/api/capabilities/npc-gallery/avatars/:filename", async (e, t) => {
		let i = b(e.params);
		if (!i) return t.status(400).send({ error: "Invalid avatar filename" });
		try {
			let e = await n(s(f, i)), r = o(i).toLowerCase(), a = r === ".png" ? "image/png" : r === ".jpg" ? "image/jpeg" : r === ".gif" ? "image/gif" : "image/webp";
			return t.header("Content-Type", a).header("Cache-Control", "public, max-age=31536000, immutable").send(e);
		} catch (e) {
			return (e && typeof e == "object" && "code" in e ? e.code : null) === "ENOENT" ? t.status(404).send({ error: "Avatar not found" }) : (r.api.runtime.logger.error(e, "Could not read NPC Gallery avatar"), t.status(500).send({ error: "Could not read NPC Gallery avatar" }));
		}
	}), r.api.runtime.logger.info("Activated capability package %s@%s", c, l), () => {
		r.api.runtime.logger.info("Deactivated capability package %s@%s", c, l);
	};
}
async function D(e) {
	if (e.package.id !== "npc-gallery") throw Error(`Expected package id npc-gallery, received ${e.package.id}`);
}
//#endregion
export { E as activate, D as selfCheck };
