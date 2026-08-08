import { z } from "zod";
export declare const chatPresetSettingsSchema: z.ZodObject<{
    connectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPresetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    connectionId?: string | null | undefined;
    promptPresetId?: string | null | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    connectionId?: string | null | undefined;
    promptPresetId?: string | null | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export declare const createChatPresetSchema: z.ZodObject<{
    name: z.ZodString;
    mode: z.ZodEnum<["conversation", "roleplay", "visual_novel", "game"]>;
    settings: z.ZodDefault<z.ZodObject<{
        connectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        promptPresetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strict", z.ZodTypeAny, {
        connectionId?: string | null | undefined;
        promptPresetId?: string | null | undefined;
        metadata?: Record<string, unknown> | undefined;
    }, {
        connectionId?: string | null | undefined;
        promptPresetId?: string | null | undefined;
        metadata?: Record<string, unknown> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    mode: "roleplay" | "game" | "conversation" | "visual_novel";
    settings: {
        connectionId?: string | null | undefined;
        promptPresetId?: string | null | undefined;
        metadata?: Record<string, unknown> | undefined;
    };
}, {
    name: string;
    mode: "roleplay" | "game" | "conversation" | "visual_novel";
    settings?: {
        connectionId?: string | null | undefined;
        promptPresetId?: string | null | undefined;
        metadata?: Record<string, unknown> | undefined;
    } | undefined;
}>;
export declare const updateChatPresetSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    settings: z.ZodOptional<z.ZodObject<{
        connectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        promptPresetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strict", z.ZodTypeAny, {
        connectionId?: string | null | undefined;
        promptPresetId?: string | null | undefined;
        metadata?: Record<string, unknown> | undefined;
    }, {
        connectionId?: string | null | undefined;
        promptPresetId?: string | null | undefined;
        metadata?: Record<string, unknown> | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    settings?: {
        connectionId?: string | null | undefined;
        promptPresetId?: string | null | undefined;
        metadata?: Record<string, unknown> | undefined;
    } | undefined;
}, {
    name?: string | undefined;
    settings?: {
        connectionId?: string | null | undefined;
        promptPresetId?: string | null | undefined;
        metadata?: Record<string, unknown> | undefined;
    } | undefined;
}>;
export type CreateChatPresetInput = z.infer<typeof createChatPresetSchema>;
export type UpdateChatPresetInput = z.infer<typeof updateChatPresetSchema>;
export type ChatPresetSettingsInput = z.infer<typeof chatPresetSettingsSchema>;
//# sourceMappingURL=chat-preset.schema.d.ts.map