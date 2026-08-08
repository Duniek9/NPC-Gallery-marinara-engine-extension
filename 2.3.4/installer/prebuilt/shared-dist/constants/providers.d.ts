import type { APIProvider } from "../types/connection.js";
export interface ProviderDefinition {
    id: APIProvider;
    name: string;
    defaultBaseUrl: string;
    modelsEndpoint: string;
    supportsStreaming: boolean;
    /** Whether the API key is sent via Authorization header (vs custom header) */
    usesAuthHeader: boolean;
    /** Custom header name for API key (e.g. "x-api-key" for Anthropic) */
    apiKeyHeader: string | null;
}
export declare const LOCAL_AUTH_PROVIDERS: readonly ["openai_chatgpt", "claude_subscription", "grok_subscription"];
export declare function isLocalAuthProvider(provider: string | null | undefined): boolean;
export declare function localAuthProviderBaseUrl(provider: string | null | undefined): string | null;
export declare const PROVIDERS: Record<APIProvider, ProviderDefinition>;
//# sourceMappingURL=providers.d.ts.map