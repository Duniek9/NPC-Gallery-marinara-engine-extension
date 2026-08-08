import type { ChatMode } from "../types/chat.js";
import { type BuiltInAgentMeta } from "../types/agent.js";
export type ChatParticipantModel = "chat-participants" | "game-party";
export type ChatSettingsSectionId = "chat-settings-presets" | "chat-name" | "connection" | "prompt-preset" | "extra-prompt" | "scene-instructions" | "participants" | "conversation-prompt" | "manual-replies" | "group-chat" | "autonomous-messaging" | "conversation-commands" | "cross-chat-awareness" | "linked-chat" | "conversation-notes" | "lorebooks" | "agents" | "memory-recall" | "automatic-summarization" | "discord-mirror" | "function-calling" | "translation" | "advanced-parameters" | "context-limit" | "impersonation";
export type ChatModeAgentPolicy = {
    kind: "all";
    defaultAgentIds: readonly string[];
    hiddenPickerAgentIds?: readonly string[];
} | {
    kind: "allowlist";
    defaultAgentIds: readonly string[];
    allowedAgentIds: readonly string[];
    hiddenPickerAgentIds?: readonly string[];
};
export interface ChatModeCapabilities {
    mode: ChatMode;
    label: string;
    participantModel: ChatParticipantModel;
    defaultAgentIds: readonly string[];
    agentPolicy: ChatModeAgentPolicy;
    sharedSections: readonly ChatSettingsSectionId[];
    modeSections: readonly ChatSettingsSectionId[];
    supportsChatSettingsPresets: boolean;
    supportsPromptPresets: boolean;
    supportsGroupChatControls: boolean;
    supportsSceneInstructions: boolean;
    supportsConnectedChat: boolean;
}
export declare const SHARED_CHAT_SETTINGS_SECTIONS: readonly ["chat-name", "connection", "participants", "linked-chat", "lorebooks", "agents", "memory-recall", "discord-mirror", "function-calling", "translation", "advanced-parameters", "context-limit", "impersonation"];
export declare const ROLEPLAY_AGENT_PICKER_HIDDEN_IDS: readonly [];
export declare const CONVERSATION_AGENT_IDS: readonly [];
export declare const CONVERSATION_ALLOWED_AGENT_IDS: readonly [];
export declare const ROLEPLAY_DEFAULT_AGENT_IDS: readonly [];
export declare const VISUAL_NOVEL_DEFAULT_AGENT_IDS: readonly [];
export declare const GAME_AGENT_IDS: readonly [];
export declare const GAME_OPTIONAL_AGENT_IDS: readonly [];
export declare const CHAT_MODE_CAPABILITIES: Record<ChatMode, ChatModeCapabilities>;
export declare function getChatModeCapabilities(mode: ChatMode | null | undefined): ChatModeCapabilities;
export declare function isAgentManifestAvailableInChatMode(mode: ChatMode | null | undefined, agent: Pick<BuiltInAgentMeta, "id" | "modeAllowlist" | "execution">): boolean;
export declare function isAgentAvailableInChatMode(mode: ChatMode | null | undefined, agentId: string): boolean;
export declare function isAgentHiddenFromChatSettingsPicker(mode: ChatMode | null | undefined, agentId: string): boolean;
//# sourceMappingURL=chat-mode-capabilities.d.ts.map