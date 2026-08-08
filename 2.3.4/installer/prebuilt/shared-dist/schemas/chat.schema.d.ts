import { z } from "zod";
export declare const chatModeSchema: z.ZodEnum<["conversation", "roleplay", "visual_novel", "game"]>;
export declare const messageRoleSchema: z.ZodEnum<["user", "assistant", "system", "narrator"]>;
export declare const createChatSchema: z.ZodObject<{
    name: z.ZodString;
    mode: z.ZodEnum<["conversation", "roleplay", "visual_novel", "game"]>;
    characterIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    groupId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    personaId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    promptPresetId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    connectionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    mode: "roleplay" | "game" | "conversation" | "visual_novel";
    connectionId: string | null;
    characterIds: string[];
    groupId: string | null;
    personaId: string | null;
    promptPresetId: string | null;
}, {
    name: string;
    mode: "roleplay" | "game" | "conversation" | "visual_novel";
    connectionId?: string | null | undefined;
    characterIds?: string[] | undefined;
    groupId?: string | null | undefined;
    personaId?: string | null | undefined;
    promptPresetId?: string | null | undefined;
}>;
export declare const createMessageSchema: z.ZodObject<{
    chatId: z.ZodString;
    role: z.ZodEnum<["user", "assistant", "system", "narrator"]>;
    characterId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    content: z.ZodString;
    extra: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    characterId: string | null;
    content: string;
    chatId: string;
    role: "system" | "user" | "assistant" | "narrator";
    extra?: unknown;
}, {
    content: string;
    chatId: string;
    role: "system" | "user" | "assistant" | "narrator";
    characterId?: string | null | undefined;
    extra?: unknown;
}>;
export declare const generateRequestSchema: z.ZodObject<{
    chatId: z.ZodString;
    userMessage: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    regenerateMessageId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    continueMessageId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    connectionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    pendingSpatialTransition: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        destinationId: z.ZodString;
        expectedDefinitionRevision: z.ZodNumber;
        expectedCurrentLocationId: z.ZodNullable<z.ZodString>;
        commandId: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        destinationId: string;
        expectedDefinitionRevision: number;
        expectedCurrentLocationId: string | null;
        commandId: string;
    }, {
        destinationId: string;
        expectedDefinitionRevision: number;
        expectedCurrentLocationId: string | null;
        commandId: string;
    }>>>>;
    impersonate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    /** When true, this generation drives the active turn-game's bot seats instead of a normal chat reply. */
    turnGameBots: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    streaming: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    userStatus: z.ZodDefault<z.ZodOptional<z.ZodEnum<["active", "idle", "dnd", "invisible"]>>>;
    userActivity: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    autonomous: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    autonomousIntentKey: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    userTimeZone: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    currentBackground: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mentionedCharacterNames: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    forCharacterId: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    skipPresenceDelay: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    narrativeDirectorMode: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodEnum<["natural", "random"]>>>>;
    generationGuide: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    generationGuideSource: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodEnum<["narrator", "guide", "game_start"]>>>>;
    agentInjectionOverrides: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        agentType: z.ZodString;
        agentName: z.ZodOptional<z.ZodString>;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        agentType: string;
        agentName?: string | undefined;
    }, {
        text: string;
        agentType: string;
        agentName?: string | undefined;
    }>, "many">>>;
    debugMode: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    trimIncompleteModelOutput: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    musicPlayerEnabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    musicPlayerSource: z.ZodDefault<z.ZodOptional<z.ZodEnum<["spotify", "youtube", "custom"]>>>;
    attachments: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        data: z.ZodString;
        filename: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        data: string;
        name?: string | undefined;
        filename?: string | undefined;
    }, {
        type: string;
        data: string;
        name?: string | undefined;
        filename?: string | undefined;
    }>, "many">>>;
    impersonatePresetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    impersonateConnectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    impersonateBlockAgents: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    impersonatePromptTemplate: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    chatId: string;
    connectionId: string | null;
    debugMode: boolean;
    userMessage: string | null;
    regenerateMessageId: string | null;
    continueMessageId: string | null;
    pendingSpatialTransition: {
        destinationId: string;
        expectedDefinitionRevision: number;
        expectedCurrentLocationId: string | null;
        commandId: string;
    } | null;
    impersonate: boolean;
    turnGameBots: boolean;
    streaming: boolean;
    userStatus: "idle" | "active" | "dnd" | "invisible";
    userActivity: string;
    autonomous: boolean;
    autonomousIntentKey: string;
    userTimeZone: string;
    mentionedCharacterNames: string[];
    forCharacterId: string | null;
    skipPresenceDelay: boolean;
    narrativeDirectorMode: "random" | "natural" | null;
    generationGuide: string | null;
    generationGuideSource: "narrator" | "guide" | "game_start" | null;
    agentInjectionOverrides: {
        text: string;
        agentType: string;
        agentName?: string | undefined;
    }[];
    trimIncompleteModelOutput: boolean;
    musicPlayerEnabled: boolean;
    musicPlayerSource: "custom" | "spotify" | "youtube";
    attachments: {
        type: string;
        data: string;
        name?: string | undefined;
        filename?: string | undefined;
    }[];
    impersonateBlockAgents: boolean;
    currentBackground?: string | null | undefined;
    impersonatePresetId?: string | null | undefined;
    impersonateConnectionId?: string | null | undefined;
    impersonatePromptTemplate?: string | undefined;
}, {
    chatId: string;
    connectionId?: string | null | undefined;
    debugMode?: boolean | undefined;
    userMessage?: string | null | undefined;
    regenerateMessageId?: string | null | undefined;
    continueMessageId?: string | null | undefined;
    pendingSpatialTransition?: {
        destinationId: string;
        expectedDefinitionRevision: number;
        expectedCurrentLocationId: string | null;
        commandId: string;
    } | null | undefined;
    impersonate?: boolean | undefined;
    turnGameBots?: boolean | undefined;
    streaming?: boolean | undefined;
    userStatus?: "idle" | "active" | "dnd" | "invisible" | undefined;
    userActivity?: string | undefined;
    autonomous?: boolean | undefined;
    autonomousIntentKey?: string | undefined;
    userTimeZone?: string | undefined;
    currentBackground?: string | null | undefined;
    mentionedCharacterNames?: string[] | undefined;
    forCharacterId?: string | null | undefined;
    skipPresenceDelay?: boolean | undefined;
    narrativeDirectorMode?: "random" | "natural" | null | undefined;
    generationGuide?: string | null | undefined;
    generationGuideSource?: "narrator" | "guide" | "game_start" | null | undefined;
    agentInjectionOverrides?: {
        text: string;
        agentType: string;
        agentName?: string | undefined;
    }[] | undefined;
    trimIncompleteModelOutput?: boolean | undefined;
    musicPlayerEnabled?: boolean | undefined;
    musicPlayerSource?: "custom" | "spotify" | "youtube" | undefined;
    attachments?: {
        type: string;
        data: string;
        name?: string | undefined;
        filename?: string | undefined;
    }[] | undefined;
    impersonatePresetId?: string | null | undefined;
    impersonateConnectionId?: string | null | undefined;
    impersonateBlockAgents?: boolean | undefined;
    impersonatePromptTemplate?: string | undefined;
}>;
export declare const summaryEntrySchema: z.ZodObject<{
    summary: z.ZodString;
    keyDetails: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    summary: string;
    keyDetails: string[];
}, {
    summary: string;
    keyDetails: string[];
}>;
export declare const summariesPatchSchema: z.ZodObject<{
    daySummaries: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        summary: z.ZodString;
        keyDetails: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        summary: string;
        keyDetails: string[];
    }, {
        summary: string;
        keyDetails: string[];
    }>>>;
    weekSummaries: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        summary: z.ZodString;
        keyDetails: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        summary: string;
        keyDetails: string[];
    }, {
        summary: string;
        keyDetails: string[];
    }>>>;
}, "strip", z.ZodTypeAny, {
    daySummaries?: Record<string, {
        summary: string;
        keyDetails: string[];
    }> | undefined;
    weekSummaries?: Record<string, {
        summary: string;
        keyDetails: string[];
    }> | undefined;
}, {
    daySummaries?: Record<string, {
        summary: string;
        keyDetails: string[];
    }> | undefined;
    weekSummaries?: Record<string, {
        summary: string;
        keyDetails: string[];
    }> | undefined;
}>;
export declare const markAutonomousUnreadSchema: z.ZodObject<{
    characterId: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    count: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    characterId: string | null;
    count: number;
}, {
    characterId?: string | null | undefined;
    count?: number | undefined;
}>;
export type CreateChatInput = z.infer<typeof createChatSchema>;
export type CreateMessageInput = z.infer<typeof createMessageSchema>;
export type GenerateRequestInput = z.infer<typeof generateRequestSchema>;
export type SummariesPatchInput = z.infer<typeof summariesPatchSchema>;
export type MarkAutonomousUnreadInput = z.infer<typeof markAutonomousUnreadSchema>;
//# sourceMappingURL=chat.schema.d.ts.map