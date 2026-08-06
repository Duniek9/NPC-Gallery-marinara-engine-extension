function normalizeTemplates(value) {
    if (!Array.isArray(value))
        return [];
    const seen = new Set();
    const templates = [];
    for (const item of value) {
        if (!item || typeof item !== "object" || Array.isArray(item))
            continue;
        const record = item;
        const id = typeof record.id === "string" ? record.id.trim() : "";
        const name = typeof record.name === "string" ? record.name.trim() : "";
        const prompt = typeof record.prompt === "string" ? record.prompt.trim() : "";
        if (!id || !name || !prompt || seen.has(id))
            continue;
        seen.add(id);
        templates.push({ id, name, prompt });
    }
    return templates;
}
export function normalizeChatSummaryPromptSettings(value) {
    let parsed = value;
    if (typeof parsed === "string") {
        try {
            parsed = JSON.parse(parsed);
        }
        catch {
            parsed = null;
        }
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return { templates: [], activeTemplateId: null };
    }
    const record = parsed;
    const templates = normalizeTemplates(record.templates);
    const activeTemplateId = typeof record.activeTemplateId === "string" && record.activeTemplateId.trim()
        ? record.activeTemplateId.trim()
        : null;
    return {
        templates,
        activeTemplateId: activeTemplateId && templates.some((template) => template.id === activeTemplateId) ? activeTemplateId : null,
    };
}
//# sourceMappingURL=chat-summary-prompt-settings.js.map