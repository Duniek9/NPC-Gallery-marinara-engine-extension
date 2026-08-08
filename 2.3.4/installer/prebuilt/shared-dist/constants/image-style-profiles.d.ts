import type { ImageStyleProfile, ImageStyleProfileSettings } from "../types/image-style-profile.js";
export declare const IMAGE_STYLE_PROFILES_STORAGE_KEY = "imageStyleProfiles";
export declare const DEFAULT_IMAGE_STYLE_PROFILE_ID = "auto";
export declare const DEFAULT_IMAGE_STYLE_PROFILES: ImageStyleProfile[];
export declare function createDefaultImageStyleProfileSettings(): ImageStyleProfileSettings;
export declare function normalizeImageStyleProfileSettings(raw: unknown): ImageStyleProfileSettings;
export declare function normalizeImageStyleProfile(raw: unknown): ImageStyleProfile | null;
export declare function suggestImageStyleProfileIdForModel(model: string | null | undefined, source?: string | null, service?: string | null): string | null;
export declare function findImageStyleProfile(settings: ImageStyleProfileSettings, profileId: string | null | undefined): ImageStyleProfile;
//# sourceMappingURL=image-style-profiles.d.ts.map