import type { ChatMode, ChatMetadata } from "./chat.js";
/** Settings stored in a chat preset. All fields optional — only set ones override defaults. */
export interface ChatPresetSettings {
    /** Top-level chat fields */
    connectionId?: string | null;
    promptPresetId?: string | null;
    /** Subset of ChatMetadata — chat-specific keys (sprites, summary, tags, etc.) are stripped before saving. */
    metadata?: Partial<ChatMetadata>;
}
/** A chat preset stored in the database. */
export interface ChatPreset {
    id: string;
    name: string;
    /** Which chat mode this preset applies to. */
    mode: ChatMode;
    /** True for the built-in "Default" preset (cannot be deleted, renamed, or saved into). */
    isDefault: boolean;
    /** True for the preset currently used as the starting state for new chats of this mode. */
    isActive: boolean;
    /** Bundled chat settings (JSON). */
    settings: ChatPresetSettings;
    createdAt: string;
    updatedAt: string;
}
/** Metadata keys that must NOT be saved into a preset (chat-specific). */
export declare const CHAT_PRESET_EXCLUDED_METADATA_KEYS: readonly string[];
/** Top-level chat keys that CAN be saved into a preset. */
export declare const CHAT_PRESET_INCLUDED_CHAT_KEYS: readonly string[];
//# sourceMappingURL=chat-preset.d.ts.map