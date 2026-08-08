import { z } from "zod";
export declare const conversationCallStatusSchema: z.ZodEnum<["ringing", "active", "ended", "declined", "missed"]>;
export declare const conversationCallModeSchema: z.ZodEnum<["audio", "video"]>;
export declare const conversationCallInitiatorSchema: z.ZodEnum<["user", "character"]>;
export declare const conversationCallMessageKindSchema: z.ZodEnum<["speech", "text", "system", "command", "soundboard"]>;
export declare const conversationCallTurnModeSchema: z.ZodEnum<["voice", "text", "command"]>;
export declare const conversationCallAudioInputModeSchema: z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>;
export declare const conversationCallMusicPlayerSourceSchema: z.ZodEnum<["spotify", "youtube", "custom"]>;
export declare const startConversationCallSchema: z.ZodObject<{
    chatId: z.ZodString;
    mode: z.ZodDefault<z.ZodEnum<["audio", "video"]>>;
    initiator: z.ZodDefault<z.ZodEnum<["user", "character"]>>;
    initiatorCharacterId: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    metadata: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    mode: "audio" | "video";
    chatId: string;
    metadata: Record<string, unknown>;
    initiator: "user" | "character";
    initiatorCharacterId: string | null;
}, {
    chatId: string;
    mode?: "audio" | "video" | undefined;
    metadata?: Record<string, unknown> | undefined;
    initiator?: "user" | "character" | undefined;
    initiatorCharacterId?: string | null | undefined;
}>;
export declare const conversationCallIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const sendConversationCallMessageSchema: z.ZodObject<{
    content: z.ZodString;
    inputMode: z.ZodDefault<z.ZodEnum<["typed", "speech"]>>;
    debugMode: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    musicPlayerEnabled: z.ZodOptional<z.ZodBoolean>;
    musicPlayerSource: z.ZodOptional<z.ZodEnum<["spotify", "youtube", "custom"]>>;
}, "strip", z.ZodTypeAny, {
    content: string;
    debugMode: boolean;
    inputMode: "speech" | "typed";
    musicPlayerEnabled?: boolean | undefined;
    musicPlayerSource?: "custom" | "spotify" | "youtube" | undefined;
}, {
    content: string;
    debugMode?: boolean | undefined;
    musicPlayerEnabled?: boolean | undefined;
    musicPlayerSource?: "custom" | "spotify" | "youtube" | undefined;
    inputMode?: "speech" | "typed" | undefined;
}>;
export declare const conversationCallIdleSchema: z.ZodObject<{
    quietMs: z.ZodDefault<z.ZodNumber>;
    debugMode: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    musicPlayerEnabled: z.ZodOptional<z.ZodBoolean>;
    musicPlayerSource: z.ZodOptional<z.ZodEnum<["spotify", "youtube", "custom"]>>;
}, "strip", z.ZodTypeAny, {
    debugMode: boolean;
    quietMs: number;
    musicPlayerEnabled?: boolean | undefined;
    musicPlayerSource?: "custom" | "spotify" | "youtube" | undefined;
}, {
    debugMode?: boolean | undefined;
    musicPlayerEnabled?: boolean | undefined;
    musicPlayerSource?: "custom" | "spotify" | "youtube" | undefined;
    quietMs?: number | undefined;
}>;
export declare const conversationCallInterruptionSchema: z.ZodObject<{
    characterId: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    speakerName: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    spokenText: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    characterId: string | null;
    speakerName: string | null;
    spokenText: string;
}, {
    characterId?: string | null | undefined;
    speakerName?: string | null | undefined;
    spokenText?: string | undefined;
}>;
export declare const conversationCallTurnSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    speakerName: z.ZodString;
    mode: z.ZodEnum<["voice", "text", "command"]>;
    content: z.ZodDefault<z.ZodString>;
    tone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    content: string;
    mode: "voice" | "text" | "command";
    speakerName: string;
    id?: string | undefined;
    tone?: string | null | undefined;
}, {
    mode: "voice" | "text" | "command";
    speakerName: string;
    id?: string | undefined;
    content?: string | undefined;
    tone?: string | null | undefined;
}>;
export declare const conversationCallModelResponseSchema: z.ZodObject<{
    turns: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        speakerName: z.ZodString;
        mode: z.ZodEnum<["voice", "text", "command"]>;
        content: z.ZodDefault<z.ZodString>;
        tone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        content: string;
        mode: "voice" | "text" | "command";
        speakerName: string;
        id?: string | undefined;
        tone?: string | null | undefined;
    }, {
        mode: "voice" | "text" | "command";
        speakerName: string;
        id?: string | undefined;
        content?: string | undefined;
        tone?: string | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    turns: {
        content: string;
        mode: "voice" | "text" | "command";
        speakerName: string;
        id?: string | undefined;
        tone?: string | null | undefined;
    }[];
}, {
    turns?: {
        mode: "voice" | "text" | "command";
        speakerName: string;
        id?: string | undefined;
        content?: string | undefined;
        tone?: string | null | undefined;
    }[] | undefined;
}>;
export type StartConversationCallInput = z.infer<typeof startConversationCallSchema>;
export type SendConversationCallMessageInput = z.infer<typeof sendConversationCallMessageSchema>;
export type ConversationCallIdleInput = z.infer<typeof conversationCallIdleSchema>;
export type ConversationCallInterruptionInput = z.infer<typeof conversationCallInterruptionSchema>;
export type ConversationCallModelResponseInput = z.infer<typeof conversationCallModelResponseSchema>;
//# sourceMappingURL=conversation-call.schema.d.ts.map