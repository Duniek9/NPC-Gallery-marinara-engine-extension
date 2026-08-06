import { z } from "zod";
export declare const toolExecutionTypeSchema: z.ZodEnum<["webhook", "static", "script"]>;
export declare const createCustomToolSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    parametersSchema: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    executionType: z.ZodDefault<z.ZodEnum<["webhook", "static", "script"]>>;
    webhookUrl: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    staticResult: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    scriptBody: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    includeHiddenContext: z.ZodDefault<z.ZodBoolean>;
    enabled: z.ZodDefault<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    name: string;
    description: string;
    parametersSchema: Record<string, unknown>;
    executionType: "webhook" | "static" | "script";
    webhookUrl: string | null;
    staticResult: string | null;
    scriptBody: string | null;
    includeHiddenContext: boolean;
    sortOrder?: number | undefined;
}, {
    name: string;
    description: string;
    enabled?: boolean | undefined;
    sortOrder?: number | undefined;
    parametersSchema?: Record<string, unknown> | undefined;
    executionType?: "webhook" | "static" | "script" | undefined;
    webhookUrl?: string | null | undefined;
    staticResult?: string | null | undefined;
    scriptBody?: string | null | undefined;
    includeHiddenContext?: boolean | undefined;
}>;
export declare const updateCustomToolSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    parametersSchema: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    executionType: z.ZodOptional<z.ZodDefault<z.ZodEnum<["webhook", "static", "script"]>>>;
    webhookUrl: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    staticResult: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    scriptBody: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    includeHiddenContext: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    enabled: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    sortOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    enabled?: boolean | undefined;
    name?: string | undefined;
    description?: string | undefined;
    sortOrder?: number | undefined;
    parametersSchema?: Record<string, unknown> | undefined;
    executionType?: "webhook" | "static" | "script" | undefined;
    webhookUrl?: string | null | undefined;
    staticResult?: string | null | undefined;
    scriptBody?: string | null | undefined;
    includeHiddenContext?: boolean | undefined;
}, {
    enabled?: boolean | undefined;
    name?: string | undefined;
    description?: string | undefined;
    sortOrder?: number | undefined;
    parametersSchema?: Record<string, unknown> | undefined;
    executionType?: "webhook" | "static" | "script" | undefined;
    webhookUrl?: string | null | undefined;
    staticResult?: string | null | undefined;
    scriptBody?: string | null | undefined;
    includeHiddenContext?: boolean | undefined;
}>;
export declare const reorderCustomToolsSchema: z.ZodObject<{
    toolIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    toolIds: string[];
}, {
    toolIds: string[];
}>;
export type CreateCustomToolInput = z.infer<typeof createCustomToolSchema>;
export type UpdateCustomToolInput = z.infer<typeof updateCustomToolSchema>;
export type ReorderCustomToolsInput = z.infer<typeof reorderCustomToolsSchema>;
//# sourceMappingURL=custom-tool.schema.d.ts.map