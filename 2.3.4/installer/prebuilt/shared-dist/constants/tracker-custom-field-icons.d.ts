import type { WorldCustomField } from "../types/game-state.js";
export declare const DEFAULT_WORLD_CUSTOM_FIELD_ICON = "tag";
export declare const SUPPORTED_WORLD_CUSTOM_FIELD_ICONS: readonly ["activity", "anchor", "backpack", "bed", "beer", "book-open", "building-2", "calendar-days", "car", "castle", "church", "clock", "cloud", "cloud-rain", "coffee", "coins", "compass", "crown", "drama", "eye", "factory", "flame", "gem", "heart", "home", "hospital", "key", "landmark", "lock", "map-pin", "moon", "mountain", "music", "package", "plane", "sailboat", "school", "scroll", "shield", "ship", "skull", "smile", "snowflake", "sparkles", "stars", "store", "sun", "sword", "swords", "tag", "tent", "thermometer", "train", "tree-pine", "trees", "umbrella", "user", "users", "utensils", "venetian-mask", "warehouse", "waves", "wind", "zap"];
export type SupportedWorldCustomFieldIcon = (typeof SUPPORTED_WORLD_CUSTOM_FIELD_ICONS)[number];
export declare function normalizeWorldCustomFieldIcon(value: unknown): SupportedWorldCustomFieldIcon | null;
export declare function normalizeWorldCustomFields(value: unknown): WorldCustomField[];
//# sourceMappingURL=tracker-custom-field-icons.d.ts.map