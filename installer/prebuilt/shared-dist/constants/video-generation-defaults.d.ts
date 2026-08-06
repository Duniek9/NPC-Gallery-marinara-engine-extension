import type { GeminiOmniVideoDefaults, GoogleVeoVideoDefaults, OpenRouterVideoDefaults, ComfyUiVideoDefaults, SeedanceVideoDefaults, VideoDefaultsService, VideoGenerationDefaultsProfile, XaiVideoDefaults } from "../types/video-generation-defaults.js";
export declare const VIDEO_DEFAULTS_STORAGE_KEY = "videoGeneration";
export declare const VIDEO_GENERATION_DEFAULTS_VERSION: 1;
export declare const VIDEO_DEFAULTS_SERVICES: VideoDefaultsService[];
export declare const DEFAULT_GEMINI_OMNI_VIDEO_DEFAULTS: GeminiOmniVideoDefaults;
export declare const DEFAULT_XAI_VIDEO_DEFAULTS: XaiVideoDefaults;
export declare const DEFAULT_GOOGLE_VEO_VIDEO_DEFAULTS: GoogleVeoVideoDefaults;
export declare const DEFAULT_OPENROUTER_VIDEO_DEFAULTS: OpenRouterVideoDefaults;
export declare const DEFAULT_SEEDANCE_VIDEO_DEFAULTS: SeedanceVideoDefaults;
export declare const DEFAULT_COMFYUI_VIDEO_DEFAULTS: ComfyUiVideoDefaults;
export declare function createDefaultVideoGenerationProfile(service?: VideoDefaultsService): VideoGenerationDefaultsProfile;
export declare function normalizeVideoGenerationProfile(rawProfile: unknown): {
    profile: VideoGenerationDefaultsProfile;
    changed: boolean;
};
export declare function sanitizeVideoGenerationProfile(profile: VideoGenerationDefaultsProfile): VideoGenerationDefaultsProfile;
//# sourceMappingURL=video-generation-defaults.d.ts.map