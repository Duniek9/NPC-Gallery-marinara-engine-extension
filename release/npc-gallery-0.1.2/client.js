//#region src/client/main.ts
var e = "marinara-capability-npc-gallery", t = "/api/capabilities/npc-gallery/settings", n = class extends HTMLElement {
	settings = null;
	connections = [];
	errorMessage = "";
	saving = !1;
	connectedCallback() {
		this.render(), this.loadSettings();
	}
	async loadSettings() {
		try {
			let [e, n] = await Promise.all([fetch(t, { cache: "no-store" }), fetch("/api/connections", { cache: "no-store" })]);
			if (!e.ok) throw Error(`Settings request failed with status ${e.status}`);
			if (!n.ok) throw Error(`Connections request failed with status ${n.status}`);
			this.settings = await e.json();
			let r = await n.json();
			this.connections = Array.isArray(r) ? r.filter((e) => {
				if (!e || typeof e != "object" || Array.isArray(e)) return !1;
				let t = e;
				return typeof t.id == "string" && typeof t.name == "string" && typeof t.provider == "string" && t.provider !== "image_generation" && t.provider !== "video_generation";
			}) : [], this.errorMessage = "";
		} catch (e) {
			this.errorMessage = e instanceof Error ? e.message : "Could not load settings";
		}
		this.render();
	}
	async setEnabled(e) {
		!this.settings || this.saving || await this.saveSettings({
			...this.settings,
			enabled: e
		});
	}
	async setConnectionId(e) {
		!this.settings || this.saving || await this.saveSettings({
			...this.settings,
			connectionId: e || null
		});
	}
	async saveSettings(e) {
		if (!this.settings || this.saving) return;
		let n = this.settings;
		this.settings = e, this.saving = !0, this.errorMessage = "", this.render();
		try {
			let n = await fetch(t, {
				method: "PUT",
				headers: {
					"content-type": "application/json",
					"x-marinara-csrf": "1"
				},
				body: JSON.stringify(e)
			});
			if (!n.ok) throw Error(`Save failed with status ${n.status}`);
			this.settings = await n.json();
		} catch (e) {
			this.settings = n, this.errorMessage = e instanceof Error ? e.message : "Could not save settings";
		} finally {
			this.saving = !1, this.render();
		}
	}
	render() {
		let e = this.getAttribute("view") ?? "unknown";
		this.replaceChildren();
		let t = document.createElement("section");
		t.setAttribute("data-npc-gallery-view", e), t.style.cssText = [
			"border: 1px solid var(--border)",
			"border-radius: 0.75rem",
			"background: var(--card)",
			"color: var(--foreground)",
			"padding: 1rem"
		].join(";");
		let n = document.createElement("strong");
		n.textContent = "NPC Gallery";
		let r = document.createElement("p");
		r.textContent = this.settings ? this.settings.enabled ? "NPC memory is enabled." : "NPC memory is disabled. Saved data is preserved." : "Loading NPC Gallery settings…", r.style.cssText = "margin: 0.5rem 0; color: var(--muted-foreground); font-size: 0.875rem";
		let i = document.createElement("label");
		i.style.cssText = "display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem";
		let a = document.createElement("input");
		a.type = "checkbox", a.checked = this.settings?.enabled ?? !1, a.disabled = !this.settings || this.saving, a.setAttribute("aria-label", "Enable NPC Gallery"), a.addEventListener("change", () => void this.setEnabled(a.checked));
		let o = document.createElement("span");
		o.textContent = this.saving ? "Saving…" : "Enable NPC Gallery", i.append(a, o);
		let s = document.createElement("label");
		s.textContent = "Model connection", s.style.cssText = [
			"display: flex",
			"flex-direction: column",
			"gap: 0.375rem",
			"margin-top: 1rem",
			"font-size: 0.75rem",
			"font-weight: 600"
		].join(";");
		let c = document.createElement("select");
		c.disabled = !this.settings || this.saving, c.style.cssText = [
			"width: 100%",
			"border: 1px solid var(--border)",
			"border-radius: 0.5rem",
			"background: var(--secondary)",
			"color: var(--foreground)",
			"padding: 0.625rem 0.75rem",
			"font-size: 0.875rem"
		].join(";");
		let l = this.connections.find((e) => e.defaultForAgents), u = document.createElement("option");
		u.value = "", u.textContent = l ? `Agents default (${l.name})` : "Agents default connection", c.append(u);
		let d = this.settings?.connectionId ?? "";
		if (d && !this.connections.some((e) => e.id === d)) {
			let e = document.createElement("option");
			e.value = d, e.textContent = "Saved connection (currently unavailable)", c.append(e);
		}
		for (let e of this.connections) {
			let t = document.createElement("option");
			t.value = e.id, t.textContent = `${e.name} (${e.provider})`, c.append(t);
		}
		c.value = d, c.addEventListener("change", () => void this.setConnectionId(c.value)), s.append(c);
		let f = document.createElement("span");
		f.textContent = "Agents default follows the connection marked as the default for agents in Marinara. An override stays selected until changed here.", f.style.cssText = "color: var(--muted-foreground); font-size: 0.6875rem; font-weight: 400; line-height: 1.4", s.append(f);
		let p = document.createElement("p");
		p.textContent = this.errorMessage, p.style.cssText = "margin: 0.5rem 0 0; color: var(--destructive); font-size: 0.75rem", t.append(n, r, i, s), this.errorMessage && t.append(p), this.append(t);
	}
};
customElements.get(e) || customElements.define(e, n);
//#endregion
