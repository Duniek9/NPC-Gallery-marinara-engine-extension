//#region src/client/main.ts
var e = "marinara-capability-npc-gallery", t = "/api/capabilities/npc-gallery/settings", n = class extends HTMLElement {
	settings = null;
	errorMessage = "";
	saving = !1;
	connectedCallback() {
		this.render(), this.loadSettings();
	}
	async loadSettings() {
		try {
			let e = await fetch(t, { cache: "no-store" });
			if (!e.ok) throw Error(`Request failed with status ${e.status}`);
			this.settings = await e.json(), this.errorMessage = "";
		} catch (e) {
			this.errorMessage = e instanceof Error ? e.message : "Could not load settings";
		}
		this.render();
	}
	async setEnabled(e) {
		if (!this.settings || this.saving) return;
		let n = this.settings;
		this.settings = {
			...n,
			enabled: e
		}, this.saving = !0, this.errorMessage = "", this.render();
		try {
			let e = await fetch(t, {
				method: "PUT",
				headers: {
					"content-type": "application/json",
					"x-marinara-csrf": "1"
				},
				body: JSON.stringify(this.settings)
			});
			if (!e.ok) throw Error(`Save failed with status ${e.status}`);
			this.settings = await e.json();
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
		let s = document.createElement("p");
		s.textContent = this.errorMessage, s.style.cssText = "margin: 0.5rem 0 0; color: var(--destructive); font-size: 0.75rem", t.append(n, r, i), this.errorMessage && t.append(s), this.append(t);
	}
};
customElements.get(e) || customElements.define(e, n);
//#endregion
