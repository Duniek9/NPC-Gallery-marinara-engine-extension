import { z } from "zod";
/** Custom sticker names are slugs used in `sticker:name:` tokens — lowercase letters, digits, underscores. */
export declare const CUSTOM_STICKER_NAME_PATTERN: RegExp;
/** Custom stickers are dimension-gated like gallery-tagged stickers (max 512x512). */
export declare const CUSTOM_STICKER_MAX_DIMENSION = 512;
export declare const customStickerNameSchema: z.ZodString;
export declare const createCustomStickerSchema: z.ZodObject<{
    name: z.ZodString;
    filePath: z.ZodString;
    width: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    height: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    filePath: string;
    width: number | null;
    height: number | null;
}, {
    name: string;
    filePath: string;
    width?: number | null | undefined;
    height?: number | null | undefined;
}>;
export declare const updateCustomStickerSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type CreateCustomStickerInput = z.infer<typeof createCustomStickerSchema>;
export type UpdateCustomStickerInput = z.infer<typeof updateCustomStickerSchema>;
//# sourceMappingURL=custom-sticker.schema.d.ts.map