import { z } from "zod";
export declare const createThemeSchema: z.ZodObject<{
    name: z.ZodString;
    css: z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>;
    installedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    css: string;
    installedAt?: string | undefined;
}, {
    name: string;
    css?: string | undefined;
    installedAt?: string | undefined;
}>;
export declare const updateThemeSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    css: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    css?: string | undefined;
}, {
    name?: string | undefined;
    css?: string | undefined;
}>, {
    name?: string | undefined;
    css?: string | undefined;
}, {
    name?: string | undefined;
    css?: string | undefined;
}>;
export declare const setActiveThemeSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
}, {
    id: string | null;
}>;
export type CreateThemeInput = z.infer<typeof createThemeSchema>;
export type UpdateThemeInput = z.infer<typeof updateThemeSchema>;
export type SetActiveThemeInput = z.infer<typeof setActiveThemeSchema>;
//# sourceMappingURL=theme.schema.d.ts.map