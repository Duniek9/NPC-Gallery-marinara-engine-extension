// ──────────────────────────────────────────────
// Conversation Presence — schedule/override status derivation
// ──────────────────────────────────────────────
// Pure helpers shared by the server (schedule service, generation, autonomous
// scheduler, status route) and the client (chat list + in-chat presence dots)
// so every surface derives a character's current conversation status the same
// way: active manual override > current schedule block > "online" default.
// ── Constants ──
/** Schedule day order, Monday-first to match getDay() remapping below. */
export const CONVERSATION_SCHEDULE_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
/**
 * Re-express an instant as a local wall-clock Date in an IANA timezone.
 * This lets schedule code keep using Date's weekday/hour accessors without
 * tying evaluation to the browser or server host timezone.
 */
export function toConversationScheduleWallClockDate(date, timeZone) {
    if (!timeZone)
        return date;
    try {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone,
            hourCycle: "h23",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).formatToParts(date);
        const readPart = (type) => Number(parts.find((part) => part.type === type)?.value ?? 0);
        const hour = readPart("hour");
        return new Date(readPart("year"), readPart("month") - 1, readPart("day"), hour === 24 ? 0 : hour, readPart("minute"), readPart("second"));
    }
    catch {
        return date;
    }
}
// ── Status Derivation ──
/**
 * Get the current status and activity for a character based on their schedule.
 */
export function getCurrentStatus(schedule, now = new Date()) {
    const dayName = CONVERSATION_SCHEDULE_DAYS[(now.getDay() + 6) % 7]; // JS Sunday=0, we want Monday=0
    const daySchedule = schedule.days[dayName];
    if (!daySchedule || daySchedule.length === 0) {
        return { status: "online", activity: "free time" };
    }
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    for (const block of daySchedule) {
        if (!block || typeof block.time !== "string")
            continue;
        const [startStr, endStr] = block.time.split("-");
        if (!startStr || !endStr)
            continue;
        const [sh, sm] = startStr.split(":").map(Number);
        const [eh, em] = endStr.split(":").map(Number);
        const startMin = (sh ?? 0) * 60 + (sm ?? 0);
        const endMin = (eh ?? 0) * 60 + (em ?? 0);
        // Handle blocks that don't wrap around midnight
        if (startMin <= currentMinutes && currentMinutes < endMin) {
            return { status: block.status, activity: block.activity };
        }
        // Handle midnight-wrapping blocks (e.g., 23:00-07:00)
        if (startMin > endMin && (currentMinutes >= startMin || currentMinutes < endMin)) {
            return { status: block.status, activity: block.activity };
        }
    }
    return { status: "online", activity: "free time" };
}
function isManualPresenceStatus(value) {
    return value === "online" || value === "idle" || value === "dnd" || value === "offline";
}
export function getActiveStatusOverride(override, now = new Date()) {
    if (!override || !isManualPresenceStatus(override.status))
        return null;
    if (typeof override.expiresAt === "string") {
        const expiresAt = new Date(override.expiresAt).getTime();
        if (!override.expiresAt.trim() || !Number.isFinite(expiresAt) || expiresAt <= now.getTime())
            return null;
    }
    return override;
}
export function getEffectiveCurrentStatus(schedule, override, now = new Date(), fallbackActivity = "free time", scheduleNow = now) {
    const scheduled = schedule
        ? getCurrentStatus(schedule, scheduleNow)
        : { status: "online", activity: fallbackActivity };
    const activeOverride = getActiveStatusOverride(override, now);
    if (!activeOverride)
        return scheduled;
    const activity = typeof activeOverride.activity === "string" ? activeOverride.activity.trim() : scheduled.activity;
    return { status: activeOverride.status, activity, override: activeOverride };
}
//# sourceMappingURL=conversation-presence.js.map