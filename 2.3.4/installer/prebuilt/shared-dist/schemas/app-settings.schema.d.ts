import { z } from "zod";
/** Payload for PUT /api/app-settings/:key — the opaque serialized settings blob. */
export declare const appSettingsUpdateSchema: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
/** Response shape for GET /api/app-settings/:key. */
export declare const appSettingsResponseSchema: z.ZodObject<{
    value: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value: string | null;
}, {
    value: string | null;
}>;
export type AppSettingsUpdateInput = z.infer<typeof appSettingsUpdateSchema>;
export type AppSettingsResponse = z.infer<typeof appSettingsResponseSchema>;
//# sourceMappingURL=app-settings.schema.d.ts.map