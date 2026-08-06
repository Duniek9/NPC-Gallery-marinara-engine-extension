import type { BuiltInAgentManifest } from "../features/agents/agent-manifest.types.js";
import type { AgentToolConfig, ToolDefinition } from "../features/function-calls/tool-definitions.js";
import type { ChatMode } from "./chat.js";
import type { WrapFormat } from "./prompt.js";
/** When in the generation pipeline an agent runs. */
export type AgentPhase = 
/** Before the main generation (can modify prompt context) */
"pre_generation"
/** Fires alongside the main generation (does not receive mainResponse) */
 | "parallel"
/** After the main response is complete (can modify it) */
 | "post_processing";
export declare function normalizeAgentPhaseValue(value: unknown, fallback?: AgentPhase): AgentPhase;
export declare function normalizeAgentPhaseForType(_agentType: string, configuredPhase: unknown, fallback?: AgentPhase): AgentPhase;
/** The result type an agent can produce. */
export type AgentResultType = "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "quest_update" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update";
/** Configuration for a single agent. */
export interface AgentConfig {
    id: string;
    /** Agent type identifier (e.g. "world-state", "prose-guardian") */
    type: string;
    /** Display name */
    name: string;
    description: string;
    /** When this agent runs in the pipeline */
    phase: AgentPhase;
    /** Whether globally enabled */
    enabled: boolean;
    /** Override: use a different connection/model for this agent */
    connectionId: string | null;
    /** Agent-specific prompt template */
    promptTemplate: string;
    /** Agent-specific settings */
    settings: Record<string, unknown>;
    /** Function/tool definitions this agent can use */
    tools: ToolDefinition[];
    /** Tool calling configuration */
    toolConfig: AgentToolConfig | null;
    createdAt: string;
    updatedAt: string;
}
export declare const DEFAULT_AGENT_AUTHOR = "Pasta Devs";
export declare const DEFAULT_AGENT_PROMPT_TEMPLATE_ID = "default";
/** A named prompt variant that can be selected per chat for an agent. */
export interface AgentPromptTemplateOption {
    id: string;
    name: string;
    promptTemplate: string;
    description?: string;
}
export declare function parseAgentSettingsRecord(value: unknown): Record<string, unknown>;
export declare const AGENT_CONFIG_DELETED_SETTING_KEY = "deletedFromLibrary";
export declare function isAgentConfigDeleted(settings: unknown): boolean;
export declare function markAgentConfigDeletedSettings(settings: unknown): Record<string, unknown>;
export declare function normalizeAgentPromptTemplateOptions(value: unknown): AgentPromptTemplateOption[];
export declare function getAgentPromptTemplateOptions(input: {
    promptTemplate?: string | null;
    fallbackPromptTemplate?: string | null;
    settings?: unknown;
}): AgentPromptTemplateOption[];
export declare function resolveDefaultAgentPromptTemplateId(settingsValue: unknown): string;
export declare function normalizeAgentPromptTemplateSelectionMap(value: unknown): Record<string, string>;
export declare function resolveAgentPromptTemplate(input: {
    promptTemplate?: string | null;
    fallbackPromptTemplate?: string | null;
    settings?: unknown;
    selectedPromptTemplateId?: string | null;
}): string;
/** Result produced by an agent after execution. */
export interface AgentResult {
    agentId: string;
    agentType: string;
    type: AgentResultType;
    /** The result payload (varies by type) */
    data: unknown;
    /** Token usage */
    tokensUsed: number;
    /** How long the agent took */
    durationMs: number;
    /** Whether the agent succeeded */
    success: boolean;
    error: string | null;
}
export type AgentWriteApprovalKind = "lorebook_update" | "summary_update";
export interface AgentWriteApprovalProposal {
    kind: AgentWriteApprovalKind;
    chatId: string;
    agentType: string | null;
    agentName: string;
    title: string;
    text: string;
    payload?: Record<string, unknown>;
    canRegenerate?: boolean;
    createdAt?: string;
}
export interface AgentWriteApprovalEnvelope {
    requiresApproval: true;
    approval: AgentWriteApprovalProposal;
}
export interface AgentCallDebugMessage {
    role: string;
    content: string;
    name?: string;
}
export interface AgentCallDebugEvent {
    stage: "request" | "response" | "retry_request" | "retry_response" | "error";
    agentId: string;
    agentType: string;
    agentName: string;
    phase: string;
    model: string;
    temperature: number;
    maxTokens: number;
    messageCount: number;
    messages?: AgentCallDebugMessage[];
    tools?: string[];
    round?: number;
    promptTokens?: number;
    completionTokens?: number;
    reasoningTokens?: number;
    totalTokens?: number;
    durationMs?: number;
    finishReason?: string | null;
    response?: string;
    responsePreview?: string;
    error?: string;
    batchedAgentTypes?: string[];
}
/** Shared context passed to every agent. */
export interface AgentContext {
    chatId: string;
    chatMode: string;
    /** Prompt wrapper format selected for this generation. */
    wrapFormat?: WrapFormat;
    /** Recent chat history (last N messages) */
    recentMessages: Array<{
        id?: string;
        role: string;
        content: string;
        characterId?: string;
        /** Tracker state snapshot for this message (if any). */
        gameState?: import("./game-state.js").GameState | null;
    }>;
    /** The main response text (available for post-processing agents) */
    mainResponse: string | null;
    /** Current game state (if any) */
    gameState: import("./game-state.js").GameState | null;
    /**
     * Active characters in the chat. The base shape (id/name/description) is
     * always populated. Richer card fields are optional — they're present in
     * practice, but agents should not rely on them unless needed. The Card
     * Evolution Auditor agent uses them to emit exact-match oldText edits.
     */
    characters: Array<{
        id: string;
        name: string;
        description: string;
        personality?: string;
        scenario?: string;
        creatorNotes?: string;
        systemPrompt?: string;
        backstory?: string;
        appearance?: string;
        mesExample?: string;
        firstMes?: string;
        postHistoryInstructions?: string;
        avatarPath?: string | null;
        avatarCrop?: unknown;
        rpgStats?: import("./character.js").RPGStatsConfig;
    }>;
    /** Latest known tracker entries, including recurring characters that are currently absent. */
    characterTrackerHistory?: import("./game-state.js").PresentCharacter[];
    /** User persona info */
    persona: {
        name: string;
        description: string;
        personality?: string;
        backstory?: string;
        appearance?: string;
        scenario?: string;
        personaStats?: {
            enabled: boolean;
            bars: Array<{
                name: string;
                value: number;
                max: number;
                color: string;
            }>;
        };
        rpgStats?: {
            enabled: boolean;
            attributes: Array<{
                name: string;
                value: number;
            }>;
            hp: {
                value: number;
                max: number;
            };
            pools?: import("./character.js").RPGStatPool[];
        };
    } | null;
    /** The agent's own persistent memory (key-value) */
    memory: Record<string, unknown>;
    /** All lorebook IDs the agent can write to */
    writableLorebookIds: string[] | null;
    /** Chat summary text (if any) — helps agents avoid duplicating summarized info */
    chatSummary: string | null;
    /** Current-turn pre-generation injections, only present for agents that opt in */
    preGenInjections?: Array<{
        agentType: string;
        agentName?: string;
        text: string;
    }>;
    /** Current-turn parallel-phase results, only present for agents that opt in */
    parallelResults?: AgentResult[];
    /** Whether internal agent LLM calls should use transport streaming. */
    streaming?: boolean;
    /** Emits full agent call diagnostics for the client debug console. */
    agentDebug?: (event: AgentCallDebugEvent) => void;
    /** Abort signal — when triggered, agent execution should stop. Typed as `any` to avoid DOM/Node lib dependency. */
    signal?: any;
}
/** Built-in agent type identifiers. */
export declare const BUILT_IN_AGENT_IDS: {
    readonly WORLD_STATE: "world-state";
    readonly PROSE_GUARDIAN: "prose-guardian";
    readonly CONTINUITY: "continuity";
    readonly EXPRESSION: "expression";
    readonly ECHO_CHAMBER: "echo-chamber";
    readonly DIRECTOR: "director";
    readonly QUEST: "quest";
    readonly ILLUSTRATOR: "illustrator";
    readonly LOREBOOK_KEEPER: "lorebook-keeper";
    readonly CARD_EVOLUTION_AUDITOR: "card-evolution-auditor";
    readonly COMBAT: "combat";
    readonly BACKGROUND: "background";
    readonly CHARACTER_TRACKER: "character-tracker";
    readonly PERSONA_STATS: "persona-stats";
    readonly HTML: "html";
    readonly SPOTIFY: "spotify";
    readonly KNOWLEDGE_RETRIEVAL: "knowledge-retrieval";
    readonly KNOWLEDGE_ROUTER: "knowledge-router";
    readonly CUSTOM_TRACKER: "custom-tracker";
    readonly HAPTIC: "haptic";
    readonly CYOA: "cyoa";
};
export declare const RETIRED_BUILT_IN_AGENT_IDS: readonly ["about-me-keeper", "prompt-reviewer", "response-orchestrator", "schedule-planner", "chat-summary", "autonomous-messenger", "youtube", "secret-plot-driver"];
export declare function isRetiredBuiltInAgentId(agentId: string): boolean;
export type AgentCategory = "writer" | "tracker" | "misc";
export interface BuiltInAgentMeta {
    id: string;
    name: string;
    description: string;
    author: string;
    phase: AgentPhase;
    enabledByDefault: boolean;
    /** Whether "Add as Prompt Section" should default to on when first created */
    defaultInjectAsSection?: boolean;
    category: AgentCategory;
    /** Hide this built-in from public agent library and chat agent pickers. */
    libraryHidden?: boolean;
    /** Keep legacy configs recognized, but never run this built-in in generation pipelines. */
    runtimeDisabled?: boolean;
    modeAllowlist?: readonly ChatMode[];
    promptTemplates?: AgentPromptTemplateOption[];
    execution?: "pipeline" | "feature";
}
export declare const BUILT_IN_AGENTS: BuiltInAgentMeta[];
export declare const DEFAULT_AGENT_CONTEXT_SIZE = 5;
export declare const DEFAULT_AGENT_MAX_TOKENS = 4096;
export declare const MIN_AGENT_MAX_TOKENS = 128;
export declare const MAX_AGENT_MAX_TOKENS = 32768;
export declare const CUSTOM_AGENT_CAPABILITY_IDS: readonly ["create_lorebooks", "edit_lorebooks", "edit_messages", "edit_trackers", "change_frontend_styling", "trigger_image_generation", "access_vectors", "edit_main_prompt"];
export type CustomAgentCapability = (typeof CUSTOM_AGENT_CAPABILITY_IDS)[number];
export type CustomAgentCapabilityMap = Partial<Record<CustomAgentCapability, boolean>>;
export declare function normalizeCustomAgentCapabilities(settings: Record<string, unknown> | null | undefined): CustomAgentCapabilityMap;
export declare function customAgentHasCapability(settings: Record<string, unknown> | null | undefined, capability: CustomAgentCapability): boolean;
export declare function getCustomAgentResultCapability(resultType: AgentResultType): CustomAgentCapability | null;
export declare function getDefaultBuiltInAgentSettings(agentType: string): Record<string, unknown>;
export declare function mergeBuiltInAgentSettings(agentType: string, settings: unknown): Record<string, unknown>;
/** Recommended default tools for each built-in agent type. */
export declare const DEFAULT_AGENT_TOOLS: Record<string, string[]>;
export declare function replaceBuiltInAgentDefinitions(manifests: readonly BuiltInAgentManifest[]): void;
/** Data shape for a lorebook_update agent result. */
export interface LorebookUpdateResult {
    /** "create" | "update" | "delete" */
    action: "create" | "update" | "delete";
    /** Target lorebook ID */
    lorebookId: string;
    /** Entry ID (for update/delete) */
    entryId?: string;
    /** Entry data (for create/update) */
    entry?: {
        name: string;
        content: string;
        keys: string[];
        tag?: string;
    };
}
/**
 * Single proposed edit to a character card field.
 *
 * Unlike LorebookUpdateResult, these edits are NEVER applied automatically —
 * the server emits them as an agent_result SSE event and the client shows
 * a confirmation modal. Character cards are more sensitive than lorebook
 * entries because they define the character's identity.
 */
export declare const EDITABLE_CHARACTER_CARD_FIELDS: readonly ["description", "personality", "scenario", "first_mes", "mes_example", "creator_notes", "system_prompt", "post_history_instructions", "backstory", "appearance", "aboutMe"];
export type EditableCharacterCardField = (typeof EDITABLE_CHARACTER_CARD_FIELDS)[number];
export interface CharacterCardFieldUpdate {
    /** Stable target character id from the <character id="..."> context block. */
    characterId: string;
    /** Currently only "update" is supported; reserved for future create/delete. */
    action: "update";
    /** Which stored character-card field this edit targets. */
    field: EditableCharacterCardField;
    /** The existing field value the agent observed. */
    oldText: string;
    /** The proposed replacement text. */
    newText: string;
    /** Why the agent thinks this edit is warranted (shown to the user). */
    reason: string;
}
/** Data shape for a character_card_update agent result. */
export interface CharacterCardUpdateResult {
    updates: CharacterCardFieldUpdate[];
}
//# sourceMappingURL=agent.d.ts.map