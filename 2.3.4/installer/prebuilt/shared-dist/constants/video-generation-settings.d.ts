import { type ConversationCallCharacterVideoClipKind } from "../types/conversation-call.js";
import type { ConversationCallVideoClipDurations, VideoGenerationUserSettings } from "../types/video-generation-settings.js";
export declare const VIDEO_GENERATION_SETTINGS_KEY = "video-generation";
export declare const VIDEO_SCENE_DURATION_MIN = 1;
export declare const VIDEO_SCENE_DURATION_MAX = 60;
export declare const VIDEO_CALL_CLIP_DURATION_MIN = 1;
export declare const VIDEO_CALL_CLIP_DURATION_MAX = 15;
export declare const VIDEO_ANIMATED_EXPRESSION_CLIP_DURATION_MIN = 1;
export declare const VIDEO_ANIMATED_EXPRESSION_CLIP_DURATION_MAX = 8;
export declare const DEFAULT_CONVERSATION_CALL_VIDEO_CLIP_DURATIONS: ConversationCallVideoClipDurations;
export declare const DEFAULT_VIDEO_GENERATION_USER_SETTINGS: VideoGenerationUserSettings;
export declare function clampVideoDuration(value: unknown, fallback: number, min: number, max: number): number;
export declare function normalizeVideoGenerationUserSettings(raw: unknown): VideoGenerationUserSettings;
export declare function getConversationCallVideoClipDuration(settings: VideoGenerationUserSettings, kind: ConversationCallCharacterVideoClipKind): number;
//# sourceMappingURL=video-generation-settings.d.ts.map