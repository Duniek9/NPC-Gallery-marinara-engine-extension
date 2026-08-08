import type { AchievementDefinition, AchievementEvent } from "../types/achievement.js";
export declare const ACHIEVEMENT_EVENTS: readonly ["tutorial_completed", "discord_clicked", "kofi_clicked", "credits_viewed", "prof_mari_message_sent", "chat_created", "library_changed"];
export declare const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[];
export declare const ACHIEVEMENT_DEFINITION_BY_ID: Map<string, AchievementDefinition>;
export declare const ACHIEVEMENT_IDS: string[];
export declare const ACHIEVEMENT_DIRECT_EVENT_IDS: Partial<Record<AchievementEvent, string>>;
//# sourceMappingURL=achievements.d.ts.map