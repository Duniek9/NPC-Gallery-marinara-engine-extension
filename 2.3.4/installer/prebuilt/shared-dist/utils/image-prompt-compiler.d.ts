import type { ImageGenerationDefaultsProfile } from "../types/image-generation-defaults.js";
import type { ImagePromptKind, ImageStyleProfile, ImageStyleProfileSettings } from "../types/image-style-profile.js";
export interface CompiledImagePrompt {
    prompt: string;
    negativePrompt: string;
    profile: ImageStyleProfile;
    diagnostics: {
        removedPositiveDuplicates: string[];
        removedNegativeDuplicates: string[];
        movedNegativeFragments: string[];
    };
}
export interface CompileImagePromptInput {
    kind: ImagePromptKind;
    prompt: string;
    /** Additional provider-visible prompt text used only to suppress exact repeated inputs. */
    dedupeAgainstPrompt?: string | null;
    negativePrompt?: string | null;
    styleProfiles: ImageStyleProfileSettings;
    styleProfileId?: string | null;
    imageDefaults?: ImageGenerationDefaultsProfile | null;
    generatedStyle?: string | null;
    userPositive?: string | null;
    userNegative?: string | null;
    hardNegative?: string | null;
    /** Apply the selected grammar to generated prose that is normally preserved for review/readability. */
    applyPromptModeToSourcePrompt?: boolean;
}
export declare function compileImagePrompt(input: CompileImagePromptInput): CompiledImagePrompt;
export declare function mergeCompiledPromptMeta(meta: Record<string, unknown> | undefined, compiled: Pick<CompiledImagePrompt, "profile" | "diagnostics">): Record<string, unknown>;
//# sourceMappingURL=image-prompt-compiler.d.ts.map