import { z } from "zod";
export declare const folderIdParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const createConnectionFolderSchema: z.ZodObject<{
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    color?: string | undefined;
}, {
    name: string;
    color?: string | undefined;
}>;
export declare const createChatFolderSchema: z.ZodObject<{
    name: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
} & {
    mode: z.ZodEnum<["conversation", "roleplay", "visual_novel", "game"]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    mode: "roleplay" | "game" | "conversation" | "visual_novel";
    color?: string | undefined;
}, {
    name: string;
    mode: "roleplay" | "game" | "conversation" | "visual_novel";
    color?: string | undefined;
}>;
export declare const updateFolderSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
    collapsed: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    sortOrder?: number | undefined;
    color?: string | undefined;
    collapsed?: boolean | undefined;
}, {
    name?: string | undefined;
    sortOrder?: number | undefined;
    color?: string | undefined;
    collapsed?: boolean | undefined;
}>;
export declare const reorderFoldersSchema: z.ZodObject<{
    orderedIds: z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>;
}, "strip", z.ZodTypeAny, {
    orderedIds: string[];
}, {
    orderedIds: string[];
}>;
export declare const moveChatToFolderSchema: z.ZodObject<{
    chatId: z.ZodString;
    folderId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    chatId: string;
    folderId: string | null;
}, {
    chatId: string;
    folderId: string | null;
}>;
export declare const reorderChatsInFolderSchema: z.ZodObject<{
    orderedChatIds: z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>;
    folderId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    folderId: string | null;
    orderedChatIds: string[];
}, {
    folderId: string | null;
    orderedChatIds: string[];
}>;
export declare const moveConnectionToFolderSchema: z.ZodObject<{
    connectionId: z.ZodString;
    folderId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    connectionId: string;
    folderId: string | null;
}, {
    connectionId: string;
    folderId: string | null;
}>;
export declare const reorderConnectionsInFolderSchema: z.ZodObject<{
    orderedConnectionIds: z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>;
    folderId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    folderId: string | null;
    orderedConnectionIds: string[];
}, {
    folderId: string | null;
    orderedConnectionIds: string[];
}>;
export type CreateConnectionFolderInput = z.infer<typeof createConnectionFolderSchema>;
export type CreateChatFolderInput = z.infer<typeof createChatFolderSchema>;
export type UpdateFolderInput = z.infer<typeof updateFolderSchema>;
export type ReorderFoldersInput = z.infer<typeof reorderFoldersSchema>;
export type MoveChatToFolderInput = z.infer<typeof moveChatToFolderSchema>;
export type ReorderChatsInFolderInput = z.infer<typeof reorderChatsInFolderSchema>;
export type MoveConnectionToFolderInput = z.infer<typeof moveConnectionToFolderSchema>;
export type ReorderConnectionsInFolderInput = z.infer<typeof reorderConnectionsInFolderSchema>;
//# sourceMappingURL=folder.schema.d.ts.map