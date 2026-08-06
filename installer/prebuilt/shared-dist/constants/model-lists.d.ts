import type { APIProvider } from "../types/connection.js";
export interface KnownModel {
    id: string;
    name: string;
    context: number;
    /** Output / max completion tokens (0 = unknown / model default) */
    maxOutput: number;
}
export declare function isClaudeAdaptiveOnlyNoSamplingModel(model: string): boolean;
export declare function supportsXhighReasoningEffort(model: string): boolean;
export declare function isOpenAIGpt56Model(model: string): boolean;
export declare function isOpenAIGpt56SolProAlias(model: string): boolean;
export declare function resolveOpenAIGpt56ModelForRequest(model: string): string;
export type StoredReasoningEffort = "low" | "medium" | "high" | "xhigh" | "maximum" | "max" | null;
export type ProviderReasoningEffort = "low" | "medium" | "high" | "xhigh" | "max" | null;
export declare function resolveProviderReasoningEffort(args: {
    provider: string;
    model: string;
    reasoningEffort: StoredReasoningEffort | undefined;
}): ProviderReasoningEffort;
export declare function isXaiConfigurableReasoningModel(model: string): boolean;
export declare function isXaiAutoReasoningModel(model: string): boolean;
export declare const OPENAI_MODELS: KnownModel[];
export declare const ANTHROPIC_MODELS: KnownModel[];
export declare const CLAUDE_SUBSCRIPTION_MODELS: KnownModel[];
export declare const OPENAI_CHATGPT_MODELS: KnownModel[];
export declare const GOOGLE_MODELS: KnownModel[];
export declare const MISTRAL_MODELS: KnownModel[];
export declare const COHERE_MODELS: KnownModel[];
export declare const OPENROUTER_MODELS: KnownModel[];
export declare const XAI_MODELS: KnownModel[];
export declare const GROK_SUBSCRIPTION_MODELS: KnownModel[];
export declare const GROQ_MODELS: KnownModel[];
export declare const DEEPSEEK_MODELS: KnownModel[];
export declare const PERPLEXITY_MODELS: KnownModel[];
export declare const MOONSHOT_MODELS: KnownModel[];
export declare const ZAI_MODELS: KnownModel[];
export declare const AI21_MODELS: KnownModel[];
export interface ImageGenSource {
    id: string;
    name: string;
    description: string;
    defaultBaseUrl: string;
    requiresApiKey: boolean;
}
export interface VideoGenSource {
    id: string;
    name: string;
    description: string;
    defaultBaseUrl: string;
    requiresApiKey: boolean;
}
export declare const VIDEO_GENERATION_SOURCES: VideoGenSource[];
export declare const IMAGE_GENERATION_SOURCES: ImageGenSource[];
export declare function inferVideoSource(model: string, baseUrl: string): string;
/**
 * Infer which image generation API source to use from the model name and base URL.
 * The caller should fall back to "openai" (OpenAI-compatible) if no match is found.
 */
export declare function inferImageSource(model: string, baseUrl: string): string;
export declare const MODEL_LISTS: Record<APIProvider, KnownModel[]>;
/**
 * Look up a known model by ID across all providers.
 */
export declare function findKnownModel(provider: APIProvider, modelId: string): KnownModel | undefined;
export declare function shouldSuppressUnknownModelParameters(provider: APIProvider | string | null | undefined, modelId: string | null | undefined): boolean;
//# sourceMappingURL=model-lists.d.ts.map