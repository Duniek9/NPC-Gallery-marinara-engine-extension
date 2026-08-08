import { z } from "zod";
export declare const ttsSourceSchema: z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>;
export type TTSSource = z.infer<typeof ttsSourceSchema>;
export declare const ttsAudioFormatSchema: z.ZodEnum<["mp3", "wav"]>;
export type TTSAudioFormat = z.infer<typeof ttsAudioFormatSchema>;
export declare const ttsVoiceModeSchema: z.ZodEnum<["single", "per-character"]>;
export type TTSVoiceMode = z.infer<typeof ttsVoiceModeSchema>;
export declare const TTS_DIALOGUE_PAUSE_MIN_SECONDS = 1;
export declare const TTS_DIALOGUE_PAUSE_MAX_SECONDS = 60;
export declare const TTS_DIALOGUE_PAUSE_DEFAULT_SECONDS = 1;
export declare const ttsConversationCallAudioInputModeSchema: z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>;
export type TTSConversationCallAudioInputMode = z.infer<typeof ttsConversationCallAudioInputModeSchema>;
export declare const ttsVoiceAssignmentSchema: z.ZodObject<{
    characterId: z.ZodDefault<z.ZodString>;
    characterName: z.ZodDefault<z.ZodString>;
    voice: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    characterId: string;
    characterName: string;
    voice: string;
}, {
    characterId?: string | undefined;
    characterName?: string | undefined;
    voice?: string | undefined;
}>;
export type TTSVoiceAssignment = z.infer<typeof ttsVoiceAssignmentSchema>;
export declare const ELEVENLABS_TTS_LANGUAGE_OPTIONS: readonly [{
    readonly code: "";
    readonly label: "Auto detect";
}, {
    readonly code: "af";
    readonly label: "Afrikaans";
}, {
    readonly code: "ar";
    readonly label: "Arabic";
}, {
    readonly code: "hy";
    readonly label: "Armenian";
}, {
    readonly code: "as";
    readonly label: "Assamese";
}, {
    readonly code: "az";
    readonly label: "Azerbaijani";
}, {
    readonly code: "be";
    readonly label: "Belarusian";
}, {
    readonly code: "bn";
    readonly label: "Bengali";
}, {
    readonly code: "bs";
    readonly label: "Bosnian";
}, {
    readonly code: "bg";
    readonly label: "Bulgarian";
}, {
    readonly code: "ca";
    readonly label: "Catalan";
}, {
    readonly code: "ceb";
    readonly label: "Cebuano";
}, {
    readonly code: "ny";
    readonly label: "Chichewa";
}, {
    readonly code: "hr";
    readonly label: "Croatian";
}, {
    readonly code: "cs";
    readonly label: "Czech";
}, {
    readonly code: "da";
    readonly label: "Danish";
}, {
    readonly code: "nl";
    readonly label: "Dutch";
}, {
    readonly code: "en";
    readonly label: "English";
}, {
    readonly code: "et";
    readonly label: "Estonian";
}, {
    readonly code: "fil";
    readonly label: "Filipino";
}, {
    readonly code: "fi";
    readonly label: "Finnish";
}, {
    readonly code: "fr";
    readonly label: "French";
}, {
    readonly code: "gl";
    readonly label: "Galician";
}, {
    readonly code: "ka";
    readonly label: "Georgian";
}, {
    readonly code: "de";
    readonly label: "German";
}, {
    readonly code: "el";
    readonly label: "Greek";
}, {
    readonly code: "gu";
    readonly label: "Gujarati";
}, {
    readonly code: "ha";
    readonly label: "Hausa";
}, {
    readonly code: "he";
    readonly label: "Hebrew";
}, {
    readonly code: "hi";
    readonly label: "Hindi";
}, {
    readonly code: "hu";
    readonly label: "Hungarian";
}, {
    readonly code: "is";
    readonly label: "Icelandic";
}, {
    readonly code: "id";
    readonly label: "Indonesian";
}, {
    readonly code: "ga";
    readonly label: "Irish";
}, {
    readonly code: "it";
    readonly label: "Italian";
}, {
    readonly code: "ja";
    readonly label: "Japanese";
}, {
    readonly code: "jv";
    readonly label: "Javanese";
}, {
    readonly code: "kn";
    readonly label: "Kannada";
}, {
    readonly code: "kk";
    readonly label: "Kazakh";
}, {
    readonly code: "ky";
    readonly label: "Kirghiz";
}, {
    readonly code: "ko";
    readonly label: "Korean";
}, {
    readonly code: "lv";
    readonly label: "Latvian";
}, {
    readonly code: "ln";
    readonly label: "Lingala";
}, {
    readonly code: "lt";
    readonly label: "Lithuanian";
}, {
    readonly code: "lb";
    readonly label: "Luxembourgish";
}, {
    readonly code: "mk";
    readonly label: "Macedonian";
}, {
    readonly code: "ms";
    readonly label: "Malay";
}, {
    readonly code: "ml";
    readonly label: "Malayalam";
}, {
    readonly code: "zh";
    readonly label: "Mandarin Chinese";
}, {
    readonly code: "mr";
    readonly label: "Marathi";
}, {
    readonly code: "ne";
    readonly label: "Nepali";
}, {
    readonly code: "no";
    readonly label: "Norwegian";
}, {
    readonly code: "ps";
    readonly label: "Pashto";
}, {
    readonly code: "fa";
    readonly label: "Persian";
}, {
    readonly code: "pl";
    readonly label: "Polish";
}, {
    readonly code: "pt";
    readonly label: "Portuguese";
}, {
    readonly code: "pa";
    readonly label: "Punjabi";
}, {
    readonly code: "ro";
    readonly label: "Romanian";
}, {
    readonly code: "ru";
    readonly label: "Russian";
}, {
    readonly code: "sr";
    readonly label: "Serbian";
}, {
    readonly code: "sd";
    readonly label: "Sindhi";
}, {
    readonly code: "sk";
    readonly label: "Slovak";
}, {
    readonly code: "sl";
    readonly label: "Slovenian";
}, {
    readonly code: "so";
    readonly label: "Somali";
}, {
    readonly code: "es";
    readonly label: "Spanish";
}, {
    readonly code: "sw";
    readonly label: "Swahili";
}, {
    readonly code: "sv";
    readonly label: "Swedish";
}, {
    readonly code: "ta";
    readonly label: "Tamil";
}, {
    readonly code: "te";
    readonly label: "Telugu";
}, {
    readonly code: "th";
    readonly label: "Thai";
}, {
    readonly code: "tr";
    readonly label: "Turkish";
}, {
    readonly code: "uk";
    readonly label: "Ukrainian";
}, {
    readonly code: "ur";
    readonly label: "Urdu";
}, {
    readonly code: "vi";
    readonly label: "Vietnamese";
}, {
    readonly code: "cy";
    readonly label: "Welsh";
}];
export declare const ttsSourceProfileSchema: z.ZodObject<Pick<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
    baseUrl: z.ZodDefault<z.ZodString>;
    /** Plain text on write; masked "••••••" on read when a key is saved */
    apiKey: z.ZodDefault<z.ZodString>;
    voice: z.ZodDefault<z.ZodString>;
    model: z.ZodDefault<z.ZodString>;
    /** 0.25 – 4.0 */
    speed: z.ZodDefault<z.ZodNumber>;
    /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
    elevenLabsStability: z.ZodDefault<z.ZodNumber>;
    /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
    elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
    voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
    voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
        characterId: z.ZodDefault<z.ZodString>;
        characterName: z.ZodDefault<z.ZodString>;
        voice: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        characterId: string;
        characterName: string;
        voice: string;
    }, {
        characterId?: string | undefined;
        characterName?: string | undefined;
        voice?: string | undefined;
    }>, "many">>;
    narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
    narratorVoice: z.ZodDefault<z.ZodString>;
    npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
    npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    autoplayRP: z.ZodDefault<z.ZodBoolean>;
    autoplayConvo: z.ZodDefault<z.ZodBoolean>;
    autoplayGame: z.ZodDefault<z.ZodBoolean>;
    progressivePlayback: z.ZodDefault<z.ZodBoolean>;
    dialogueOnly: z.ZodDefault<z.ZodBoolean>;
    /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
    dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
    audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
    /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
    callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Deprecated: call transcription now uses the active conversation connection. */
    callSttConnectionId: z.ZodDefault<z.ZodString>;
    /** Deprecated: call transcription now follows the selected call audio input mode. */
    callSttModel: z.ZodDefault<z.ZodString>;
    /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
    callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
    /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
    callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Generate and play cached character presence videos during Conversation Calls. */
    callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
    callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Let characters sparsely generate custom call-presence clips on explicit user request. */
    callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Deprecated: soundboard is always available during calls. */
    callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
}, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
    voice: string;
    baseUrl: string;
    apiKey: string;
    model: string;
    speed: number;
    elevenLabsStability: number;
    elevenLabsLanguageCode: string;
    voiceMode: "single" | "per-character";
    voiceAssignments: {
        characterId: string;
        characterName: string;
        voice: string;
    }[];
    narratorVoiceEnabled: boolean;
    narratorVoice: string;
    npcDefaultVoicesEnabled: boolean;
    npcDefaultMaleVoices: string[];
    npcDefaultFemaleVoices: string[];
    audioFormat: "mp3" | "wav";
}, {
    voice?: string | undefined;
    baseUrl?: string | undefined;
    apiKey?: string | undefined;
    model?: string | undefined;
    speed?: number | undefined;
    elevenLabsStability?: number | undefined;
    elevenLabsLanguageCode?: string | undefined;
    voiceMode?: "single" | "per-character" | undefined;
    voiceAssignments?: {
        characterId?: string | undefined;
        characterName?: string | undefined;
        voice?: string | undefined;
    }[] | undefined;
    narratorVoiceEnabled?: boolean | undefined;
    narratorVoice?: string | undefined;
    npcDefaultVoicesEnabled?: boolean | undefined;
    npcDefaultMaleVoices?: string[] | undefined;
    npcDefaultFemaleVoices?: string[] | undefined;
    audioFormat?: "mp3" | "wav" | undefined;
}>;
export type TTSSourceProfile = z.infer<typeof ttsSourceProfileSchema>;
export declare const ttsSourceProfilesSchema: z.ZodDefault<z.ZodObject<{
    openai: z.ZodOptional<z.ZodObject<Pick<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
        baseUrl: z.ZodDefault<z.ZodString>;
        /** Plain text on write; masked "••••••" on read when a key is saved */
        apiKey: z.ZodDefault<z.ZodString>;
        voice: z.ZodDefault<z.ZodString>;
        model: z.ZodDefault<z.ZodString>;
        /** 0.25 – 4.0 */
        speed: z.ZodDefault<z.ZodNumber>;
        /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
        elevenLabsStability: z.ZodDefault<z.ZodNumber>;
        /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
        elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
        voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
        voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
            characterId: z.ZodDefault<z.ZodString>;
            characterName: z.ZodDefault<z.ZodString>;
            voice: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            characterId: string;
            characterName: string;
            voice: string;
        }, {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }>, "many">>;
        narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
        narratorVoice: z.ZodDefault<z.ZodString>;
        npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
        npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoplayRP: z.ZodDefault<z.ZodBoolean>;
        autoplayConvo: z.ZodDefault<z.ZodBoolean>;
        autoplayGame: z.ZodDefault<z.ZodBoolean>;
        progressivePlayback: z.ZodDefault<z.ZodBoolean>;
        dialogueOnly: z.ZodDefault<z.ZodBoolean>;
        /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
        dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
        audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
        /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
        callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Deprecated: call transcription now uses the active conversation connection. */
        callSttConnectionId: z.ZodDefault<z.ZodString>;
        /** Deprecated: call transcription now follows the selected call audio input mode. */
        callSttModel: z.ZodDefault<z.ZodString>;
        /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
        callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
        /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
        callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Generate and play cached character presence videos during Conversation Calls. */
        callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
        callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Let characters sparsely generate custom call-presence clips on explicit user request. */
        callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Deprecated: soundboard is always available during calls. */
        callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
    }, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
        voice: string;
        baseUrl: string;
        apiKey: string;
        model: string;
        speed: number;
        elevenLabsStability: number;
        elevenLabsLanguageCode: string;
        voiceMode: "single" | "per-character";
        voiceAssignments: {
            characterId: string;
            characterName: string;
            voice: string;
        }[];
        narratorVoiceEnabled: boolean;
        narratorVoice: string;
        npcDefaultVoicesEnabled: boolean;
        npcDefaultMaleVoices: string[];
        npcDefaultFemaleVoices: string[];
        audioFormat: "mp3" | "wav";
    }, {
        voice?: string | undefined;
        baseUrl?: string | undefined;
        apiKey?: string | undefined;
        model?: string | undefined;
        speed?: number | undefined;
        elevenLabsStability?: number | undefined;
        elevenLabsLanguageCode?: string | undefined;
        voiceMode?: "single" | "per-character" | undefined;
        voiceAssignments?: {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }[] | undefined;
        narratorVoiceEnabled?: boolean | undefined;
        narratorVoice?: string | undefined;
        npcDefaultVoicesEnabled?: boolean | undefined;
        npcDefaultMaleVoices?: string[] | undefined;
        npcDefaultFemaleVoices?: string[] | undefined;
        audioFormat?: "mp3" | "wav" | undefined;
    }>>;
    elevenlabs: z.ZodOptional<z.ZodObject<Pick<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
        baseUrl: z.ZodDefault<z.ZodString>;
        /** Plain text on write; masked "••••••" on read when a key is saved */
        apiKey: z.ZodDefault<z.ZodString>;
        voice: z.ZodDefault<z.ZodString>;
        model: z.ZodDefault<z.ZodString>;
        /** 0.25 – 4.0 */
        speed: z.ZodDefault<z.ZodNumber>;
        /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
        elevenLabsStability: z.ZodDefault<z.ZodNumber>;
        /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
        elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
        voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
        voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
            characterId: z.ZodDefault<z.ZodString>;
            characterName: z.ZodDefault<z.ZodString>;
            voice: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            characterId: string;
            characterName: string;
            voice: string;
        }, {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }>, "many">>;
        narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
        narratorVoice: z.ZodDefault<z.ZodString>;
        npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
        npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoplayRP: z.ZodDefault<z.ZodBoolean>;
        autoplayConvo: z.ZodDefault<z.ZodBoolean>;
        autoplayGame: z.ZodDefault<z.ZodBoolean>;
        progressivePlayback: z.ZodDefault<z.ZodBoolean>;
        dialogueOnly: z.ZodDefault<z.ZodBoolean>;
        /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
        dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
        audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
        /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
        callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Deprecated: call transcription now uses the active conversation connection. */
        callSttConnectionId: z.ZodDefault<z.ZodString>;
        /** Deprecated: call transcription now follows the selected call audio input mode. */
        callSttModel: z.ZodDefault<z.ZodString>;
        /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
        callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
        /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
        callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Generate and play cached character presence videos during Conversation Calls. */
        callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
        callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Let characters sparsely generate custom call-presence clips on explicit user request. */
        callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Deprecated: soundboard is always available during calls. */
        callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
    }, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
        voice: string;
        baseUrl: string;
        apiKey: string;
        model: string;
        speed: number;
        elevenLabsStability: number;
        elevenLabsLanguageCode: string;
        voiceMode: "single" | "per-character";
        voiceAssignments: {
            characterId: string;
            characterName: string;
            voice: string;
        }[];
        narratorVoiceEnabled: boolean;
        narratorVoice: string;
        npcDefaultVoicesEnabled: boolean;
        npcDefaultMaleVoices: string[];
        npcDefaultFemaleVoices: string[];
        audioFormat: "mp3" | "wav";
    }, {
        voice?: string | undefined;
        baseUrl?: string | undefined;
        apiKey?: string | undefined;
        model?: string | undefined;
        speed?: number | undefined;
        elevenLabsStability?: number | undefined;
        elevenLabsLanguageCode?: string | undefined;
        voiceMode?: "single" | "per-character" | undefined;
        voiceAssignments?: {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }[] | undefined;
        narratorVoiceEnabled?: boolean | undefined;
        narratorVoice?: string | undefined;
        npcDefaultVoicesEnabled?: boolean | undefined;
        npcDefaultMaleVoices?: string[] | undefined;
        npcDefaultFemaleVoices?: string[] | undefined;
        audioFormat?: "mp3" | "wav" | undefined;
    }>>;
    pockettts: z.ZodOptional<z.ZodObject<Pick<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
        baseUrl: z.ZodDefault<z.ZodString>;
        /** Plain text on write; masked "••••••" on read when a key is saved */
        apiKey: z.ZodDefault<z.ZodString>;
        voice: z.ZodDefault<z.ZodString>;
        model: z.ZodDefault<z.ZodString>;
        /** 0.25 – 4.0 */
        speed: z.ZodDefault<z.ZodNumber>;
        /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
        elevenLabsStability: z.ZodDefault<z.ZodNumber>;
        /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
        elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
        voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
        voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
            characterId: z.ZodDefault<z.ZodString>;
            characterName: z.ZodDefault<z.ZodString>;
            voice: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            characterId: string;
            characterName: string;
            voice: string;
        }, {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }>, "many">>;
        narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
        narratorVoice: z.ZodDefault<z.ZodString>;
        npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
        npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoplayRP: z.ZodDefault<z.ZodBoolean>;
        autoplayConvo: z.ZodDefault<z.ZodBoolean>;
        autoplayGame: z.ZodDefault<z.ZodBoolean>;
        progressivePlayback: z.ZodDefault<z.ZodBoolean>;
        dialogueOnly: z.ZodDefault<z.ZodBoolean>;
        /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
        dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
        audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
        /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
        callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Deprecated: call transcription now uses the active conversation connection. */
        callSttConnectionId: z.ZodDefault<z.ZodString>;
        /** Deprecated: call transcription now follows the selected call audio input mode. */
        callSttModel: z.ZodDefault<z.ZodString>;
        /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
        callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
        /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
        callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Generate and play cached character presence videos during Conversation Calls. */
        callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
        callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Let characters sparsely generate custom call-presence clips on explicit user request. */
        callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Deprecated: soundboard is always available during calls. */
        callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
    }, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
        voice: string;
        baseUrl: string;
        apiKey: string;
        model: string;
        speed: number;
        elevenLabsStability: number;
        elevenLabsLanguageCode: string;
        voiceMode: "single" | "per-character";
        voiceAssignments: {
            characterId: string;
            characterName: string;
            voice: string;
        }[];
        narratorVoiceEnabled: boolean;
        narratorVoice: string;
        npcDefaultVoicesEnabled: boolean;
        npcDefaultMaleVoices: string[];
        npcDefaultFemaleVoices: string[];
        audioFormat: "mp3" | "wav";
    }, {
        voice?: string | undefined;
        baseUrl?: string | undefined;
        apiKey?: string | undefined;
        model?: string | undefined;
        speed?: number | undefined;
        elevenLabsStability?: number | undefined;
        elevenLabsLanguageCode?: string | undefined;
        voiceMode?: "single" | "per-character" | undefined;
        voiceAssignments?: {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }[] | undefined;
        narratorVoiceEnabled?: boolean | undefined;
        narratorVoice?: string | undefined;
        npcDefaultVoicesEnabled?: boolean | undefined;
        npcDefaultMaleVoices?: string[] | undefined;
        npcDefaultFemaleVoices?: string[] | undefined;
        audioFormat?: "mp3" | "wav" | undefined;
    }>>;
    xai: z.ZodOptional<z.ZodObject<Pick<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
        baseUrl: z.ZodDefault<z.ZodString>;
        /** Plain text on write; masked "••••••" on read when a key is saved */
        apiKey: z.ZodDefault<z.ZodString>;
        voice: z.ZodDefault<z.ZodString>;
        model: z.ZodDefault<z.ZodString>;
        /** 0.25 – 4.0 */
        speed: z.ZodDefault<z.ZodNumber>;
        /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
        elevenLabsStability: z.ZodDefault<z.ZodNumber>;
        /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
        elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
        voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
        voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
            characterId: z.ZodDefault<z.ZodString>;
            characterName: z.ZodDefault<z.ZodString>;
            voice: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            characterId: string;
            characterName: string;
            voice: string;
        }, {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }>, "many">>;
        narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
        narratorVoice: z.ZodDefault<z.ZodString>;
        npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
        npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoplayRP: z.ZodDefault<z.ZodBoolean>;
        autoplayConvo: z.ZodDefault<z.ZodBoolean>;
        autoplayGame: z.ZodDefault<z.ZodBoolean>;
        progressivePlayback: z.ZodDefault<z.ZodBoolean>;
        dialogueOnly: z.ZodDefault<z.ZodBoolean>;
        /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
        dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
        audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
        /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
        callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Deprecated: call transcription now uses the active conversation connection. */
        callSttConnectionId: z.ZodDefault<z.ZodString>;
        /** Deprecated: call transcription now follows the selected call audio input mode. */
        callSttModel: z.ZodDefault<z.ZodString>;
        /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
        callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
        /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
        callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Generate and play cached character presence videos during Conversation Calls. */
        callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
        callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Let characters sparsely generate custom call-presence clips on explicit user request. */
        callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
        /** Deprecated: soundboard is always available during calls. */
        callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
    }, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
        voice: string;
        baseUrl: string;
        apiKey: string;
        model: string;
        speed: number;
        elevenLabsStability: number;
        elevenLabsLanguageCode: string;
        voiceMode: "single" | "per-character";
        voiceAssignments: {
            characterId: string;
            characterName: string;
            voice: string;
        }[];
        narratorVoiceEnabled: boolean;
        narratorVoice: string;
        npcDefaultVoicesEnabled: boolean;
        npcDefaultMaleVoices: string[];
        npcDefaultFemaleVoices: string[];
        audioFormat: "mp3" | "wav";
    }, {
        voice?: string | undefined;
        baseUrl?: string | undefined;
        apiKey?: string | undefined;
        model?: string | undefined;
        speed?: number | undefined;
        elevenLabsStability?: number | undefined;
        elevenLabsLanguageCode?: string | undefined;
        voiceMode?: "single" | "per-character" | undefined;
        voiceAssignments?: {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }[] | undefined;
        narratorVoiceEnabled?: boolean | undefined;
        narratorVoice?: string | undefined;
        npcDefaultVoicesEnabled?: boolean | undefined;
        npcDefaultMaleVoices?: string[] | undefined;
        npcDefaultFemaleVoices?: string[] | undefined;
        audioFormat?: "mp3" | "wav" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    openai?: {
        voice: string;
        baseUrl: string;
        apiKey: string;
        model: string;
        speed: number;
        elevenLabsStability: number;
        elevenLabsLanguageCode: string;
        voiceMode: "single" | "per-character";
        voiceAssignments: {
            characterId: string;
            characterName: string;
            voice: string;
        }[];
        narratorVoiceEnabled: boolean;
        narratorVoice: string;
        npcDefaultVoicesEnabled: boolean;
        npcDefaultMaleVoices: string[];
        npcDefaultFemaleVoices: string[];
        audioFormat: "mp3" | "wav";
    } | undefined;
    elevenlabs?: {
        voice: string;
        baseUrl: string;
        apiKey: string;
        model: string;
        speed: number;
        elevenLabsStability: number;
        elevenLabsLanguageCode: string;
        voiceMode: "single" | "per-character";
        voiceAssignments: {
            characterId: string;
            characterName: string;
            voice: string;
        }[];
        narratorVoiceEnabled: boolean;
        narratorVoice: string;
        npcDefaultVoicesEnabled: boolean;
        npcDefaultMaleVoices: string[];
        npcDefaultFemaleVoices: string[];
        audioFormat: "mp3" | "wav";
    } | undefined;
    pockettts?: {
        voice: string;
        baseUrl: string;
        apiKey: string;
        model: string;
        speed: number;
        elevenLabsStability: number;
        elevenLabsLanguageCode: string;
        voiceMode: "single" | "per-character";
        voiceAssignments: {
            characterId: string;
            characterName: string;
            voice: string;
        }[];
        narratorVoiceEnabled: boolean;
        narratorVoice: string;
        npcDefaultVoicesEnabled: boolean;
        npcDefaultMaleVoices: string[];
        npcDefaultFemaleVoices: string[];
        audioFormat: "mp3" | "wav";
    } | undefined;
    xai?: {
        voice: string;
        baseUrl: string;
        apiKey: string;
        model: string;
        speed: number;
        elevenLabsStability: number;
        elevenLabsLanguageCode: string;
        voiceMode: "single" | "per-character";
        voiceAssignments: {
            characterId: string;
            characterName: string;
            voice: string;
        }[];
        narratorVoiceEnabled: boolean;
        narratorVoice: string;
        npcDefaultVoicesEnabled: boolean;
        npcDefaultMaleVoices: string[];
        npcDefaultFemaleVoices: string[];
        audioFormat: "mp3" | "wav";
    } | undefined;
}, {
    openai?: {
        voice?: string | undefined;
        baseUrl?: string | undefined;
        apiKey?: string | undefined;
        model?: string | undefined;
        speed?: number | undefined;
        elevenLabsStability?: number | undefined;
        elevenLabsLanguageCode?: string | undefined;
        voiceMode?: "single" | "per-character" | undefined;
        voiceAssignments?: {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }[] | undefined;
        narratorVoiceEnabled?: boolean | undefined;
        narratorVoice?: string | undefined;
        npcDefaultVoicesEnabled?: boolean | undefined;
        npcDefaultMaleVoices?: string[] | undefined;
        npcDefaultFemaleVoices?: string[] | undefined;
        audioFormat?: "mp3" | "wav" | undefined;
    } | undefined;
    elevenlabs?: {
        voice?: string | undefined;
        baseUrl?: string | undefined;
        apiKey?: string | undefined;
        model?: string | undefined;
        speed?: number | undefined;
        elevenLabsStability?: number | undefined;
        elevenLabsLanguageCode?: string | undefined;
        voiceMode?: "single" | "per-character" | undefined;
        voiceAssignments?: {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }[] | undefined;
        narratorVoiceEnabled?: boolean | undefined;
        narratorVoice?: string | undefined;
        npcDefaultVoicesEnabled?: boolean | undefined;
        npcDefaultMaleVoices?: string[] | undefined;
        npcDefaultFemaleVoices?: string[] | undefined;
        audioFormat?: "mp3" | "wav" | undefined;
    } | undefined;
    pockettts?: {
        voice?: string | undefined;
        baseUrl?: string | undefined;
        apiKey?: string | undefined;
        model?: string | undefined;
        speed?: number | undefined;
        elevenLabsStability?: number | undefined;
        elevenLabsLanguageCode?: string | undefined;
        voiceMode?: "single" | "per-character" | undefined;
        voiceAssignments?: {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }[] | undefined;
        narratorVoiceEnabled?: boolean | undefined;
        narratorVoice?: string | undefined;
        npcDefaultVoicesEnabled?: boolean | undefined;
        npcDefaultMaleVoices?: string[] | undefined;
        npcDefaultFemaleVoices?: string[] | undefined;
        audioFormat?: "mp3" | "wav" | undefined;
    } | undefined;
    xai?: {
        voice?: string | undefined;
        baseUrl?: string | undefined;
        apiKey?: string | undefined;
        model?: string | undefined;
        speed?: number | undefined;
        elevenLabsStability?: number | undefined;
        elevenLabsLanguageCode?: string | undefined;
        voiceMode?: "single" | "per-character" | undefined;
        voiceAssignments?: {
            characterId?: string | undefined;
            characterName?: string | undefined;
            voice?: string | undefined;
        }[] | undefined;
        narratorVoiceEnabled?: boolean | undefined;
        narratorVoice?: string | undefined;
        npcDefaultVoicesEnabled?: boolean | undefined;
        npcDefaultMaleVoices?: string[] | undefined;
        npcDefaultFemaleVoices?: string[] | undefined;
        audioFormat?: "mp3" | "wav" | undefined;
    } | undefined;
}>>;
export type TTSSourceProfiles = z.infer<typeof ttsSourceProfilesSchema>;
export declare const ttsConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
    baseUrl: z.ZodDefault<z.ZodString>;
    /** Plain text on write; masked "••••••" on read when a key is saved */
    apiKey: z.ZodDefault<z.ZodString>;
    voice: z.ZodDefault<z.ZodString>;
    model: z.ZodDefault<z.ZodString>;
    /** 0.25 – 4.0 */
    speed: z.ZodDefault<z.ZodNumber>;
    /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
    elevenLabsStability: z.ZodDefault<z.ZodNumber>;
    /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
    elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
    voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
    voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
        characterId: z.ZodDefault<z.ZodString>;
        characterName: z.ZodDefault<z.ZodString>;
        voice: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        characterId: string;
        characterName: string;
        voice: string;
    }, {
        characterId?: string | undefined;
        characterName?: string | undefined;
        voice?: string | undefined;
    }>, "many">>;
    narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
    narratorVoice: z.ZodDefault<z.ZodString>;
    npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
    npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    autoplayRP: z.ZodDefault<z.ZodBoolean>;
    autoplayConvo: z.ZodDefault<z.ZodBoolean>;
    autoplayGame: z.ZodDefault<z.ZodBoolean>;
    progressivePlayback: z.ZodDefault<z.ZodBoolean>;
    dialogueOnly: z.ZodDefault<z.ZodBoolean>;
    /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
    dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
    audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
    /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
    callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Deprecated: call transcription now uses the active conversation connection. */
    callSttConnectionId: z.ZodDefault<z.ZodString>;
    /** Deprecated: call transcription now follows the selected call audio input mode. */
    callSttModel: z.ZodDefault<z.ZodString>;
    /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
    callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
    /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
    callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Generate and play cached character presence videos during Conversation Calls. */
    callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
    callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Let characters sparsely generate custom call-presence clips on explicit user request. */
    callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
    /** Deprecated: soundboard is always available during calls. */
    callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
} & {
    /** Encrypted-at-rest provider fields retained independently for each TTS source. */
    sourceProfiles: z.ZodDefault<z.ZodObject<{
        openai: z.ZodOptional<z.ZodObject<Pick<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
            baseUrl: z.ZodDefault<z.ZodString>;
            /** Plain text on write; masked "••••••" on read when a key is saved */
            apiKey: z.ZodDefault<z.ZodString>;
            voice: z.ZodDefault<z.ZodString>;
            model: z.ZodDefault<z.ZodString>;
            /** 0.25 – 4.0 */
            speed: z.ZodDefault<z.ZodNumber>;
            /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
            elevenLabsStability: z.ZodDefault<z.ZodNumber>;
            /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
            elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
            voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
            voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
                characterId: z.ZodDefault<z.ZodString>;
                characterName: z.ZodDefault<z.ZodString>;
                voice: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                characterId: string;
                characterName: string;
                voice: string;
            }, {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }>, "many">>;
            narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
            narratorVoice: z.ZodDefault<z.ZodString>;
            npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
            npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            autoplayRP: z.ZodDefault<z.ZodBoolean>;
            autoplayConvo: z.ZodDefault<z.ZodBoolean>;
            autoplayGame: z.ZodDefault<z.ZodBoolean>;
            progressivePlayback: z.ZodDefault<z.ZodBoolean>;
            dialogueOnly: z.ZodDefault<z.ZodBoolean>;
            /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
            dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
            audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
            /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
            callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Deprecated: call transcription now uses the active conversation connection. */
            callSttConnectionId: z.ZodDefault<z.ZodString>;
            /** Deprecated: call transcription now follows the selected call audio input mode. */
            callSttModel: z.ZodDefault<z.ZodString>;
            /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
            callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
            /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
            callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Generate and play cached character presence videos during Conversation Calls. */
            callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
            callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Let characters sparsely generate custom call-presence clips on explicit user request. */
            callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Deprecated: soundboard is always available during calls. */
            callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
        }, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        }, {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        }>>;
        elevenlabs: z.ZodOptional<z.ZodObject<Pick<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
            baseUrl: z.ZodDefault<z.ZodString>;
            /** Plain text on write; masked "••••••" on read when a key is saved */
            apiKey: z.ZodDefault<z.ZodString>;
            voice: z.ZodDefault<z.ZodString>;
            model: z.ZodDefault<z.ZodString>;
            /** 0.25 – 4.0 */
            speed: z.ZodDefault<z.ZodNumber>;
            /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
            elevenLabsStability: z.ZodDefault<z.ZodNumber>;
            /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
            elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
            voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
            voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
                characterId: z.ZodDefault<z.ZodString>;
                characterName: z.ZodDefault<z.ZodString>;
                voice: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                characterId: string;
                characterName: string;
                voice: string;
            }, {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }>, "many">>;
            narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
            narratorVoice: z.ZodDefault<z.ZodString>;
            npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
            npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            autoplayRP: z.ZodDefault<z.ZodBoolean>;
            autoplayConvo: z.ZodDefault<z.ZodBoolean>;
            autoplayGame: z.ZodDefault<z.ZodBoolean>;
            progressivePlayback: z.ZodDefault<z.ZodBoolean>;
            dialogueOnly: z.ZodDefault<z.ZodBoolean>;
            /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
            dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
            audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
            /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
            callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Deprecated: call transcription now uses the active conversation connection. */
            callSttConnectionId: z.ZodDefault<z.ZodString>;
            /** Deprecated: call transcription now follows the selected call audio input mode. */
            callSttModel: z.ZodDefault<z.ZodString>;
            /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
            callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
            /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
            callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Generate and play cached character presence videos during Conversation Calls. */
            callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
            callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Let characters sparsely generate custom call-presence clips on explicit user request. */
            callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Deprecated: soundboard is always available during calls. */
            callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
        }, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        }, {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        }>>;
        pockettts: z.ZodOptional<z.ZodObject<Pick<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
            baseUrl: z.ZodDefault<z.ZodString>;
            /** Plain text on write; masked "••••••" on read when a key is saved */
            apiKey: z.ZodDefault<z.ZodString>;
            voice: z.ZodDefault<z.ZodString>;
            model: z.ZodDefault<z.ZodString>;
            /** 0.25 – 4.0 */
            speed: z.ZodDefault<z.ZodNumber>;
            /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
            elevenLabsStability: z.ZodDefault<z.ZodNumber>;
            /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
            elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
            voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
            voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
                characterId: z.ZodDefault<z.ZodString>;
                characterName: z.ZodDefault<z.ZodString>;
                voice: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                characterId: string;
                characterName: string;
                voice: string;
            }, {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }>, "many">>;
            narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
            narratorVoice: z.ZodDefault<z.ZodString>;
            npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
            npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            autoplayRP: z.ZodDefault<z.ZodBoolean>;
            autoplayConvo: z.ZodDefault<z.ZodBoolean>;
            autoplayGame: z.ZodDefault<z.ZodBoolean>;
            progressivePlayback: z.ZodDefault<z.ZodBoolean>;
            dialogueOnly: z.ZodDefault<z.ZodBoolean>;
            /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
            dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
            audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
            /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
            callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Deprecated: call transcription now uses the active conversation connection. */
            callSttConnectionId: z.ZodDefault<z.ZodString>;
            /** Deprecated: call transcription now follows the selected call audio input mode. */
            callSttModel: z.ZodDefault<z.ZodString>;
            /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
            callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
            /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
            callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Generate and play cached character presence videos during Conversation Calls. */
            callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
            callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Let characters sparsely generate custom call-presence clips on explicit user request. */
            callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Deprecated: soundboard is always available during calls. */
            callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
        }, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        }, {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        }>>;
        xai: z.ZodOptional<z.ZodObject<Pick<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            source: z.ZodDefault<z.ZodEnum<["openai", "elevenlabs", "pockettts", "xai"]>>;
            baseUrl: z.ZodDefault<z.ZodString>;
            /** Plain text on write; masked "••••••" on read when a key is saved */
            apiKey: z.ZodDefault<z.ZodString>;
            voice: z.ZodDefault<z.ZodString>;
            model: z.ZodDefault<z.ZodString>;
            /** 0.25 – 4.0 */
            speed: z.ZodDefault<z.ZodNumber>;
            /** ElevenLabs only: 0.0 = more expressive/creative, 1.0 = more stable/robust */
            elevenLabsStability: z.ZodDefault<z.ZodNumber>;
            /** ElevenLabs only: optional language_code. Empty means automatic language detection. */
            elevenLabsLanguageCode: z.ZodDefault<z.ZodString>;
            voiceMode: z.ZodDefault<z.ZodEnum<["single", "per-character"]>>;
            voiceAssignments: z.ZodDefault<z.ZodArray<z.ZodObject<{
                characterId: z.ZodDefault<z.ZodString>;
                characterName: z.ZodDefault<z.ZodString>;
                voice: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                characterId: string;
                characterName: string;
                voice: string;
            }, {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }>, "many">>;
            narratorVoiceEnabled: z.ZodDefault<z.ZodBoolean>;
            narratorVoice: z.ZodDefault<z.ZodString>;
            npcDefaultVoicesEnabled: z.ZodDefault<z.ZodBoolean>;
            npcDefaultMaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            npcDefaultFemaleVoices: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            autoplayRP: z.ZodDefault<z.ZodBoolean>;
            autoplayConvo: z.ZodDefault<z.ZodBoolean>;
            autoplayGame: z.ZodDefault<z.ZodBoolean>;
            progressivePlayback: z.ZodDefault<z.ZodBoolean>;
            dialogueOnly: z.ZodDefault<z.ZodBoolean>;
            /** Stored in milliseconds for backward compatibility; the setting is configured in whole seconds. */
            dialoguePauseMs: z.ZodEffects<z.ZodDefault<z.ZodNumber>, number, number | undefined>;
            audioFormat: z.ZodDefault<z.ZodEnum<["mp3", "wav"]>>;
            /** Global gate for Conversation-mode calls. Individual chats opt in separately. */
            callAudioEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Deprecated: call transcription now uses the active conversation connection. */
            callSttConnectionId: z.ZodDefault<z.ZodString>;
            /** Deprecated: call transcription now follows the selected call audio input mode. */
            callSttModel: z.ZodDefault<z.ZodString>;
            /** Conversation call mic path: local Whisper, browser speech, manual OS dictation, or provider-native media. */
            callAudioInputMode: z.ZodDefault<z.ZodEnum<["system", "auto", "transcribe", "local_whisper"]>>;
            /** UI gate for camera/screen controls. Provider-native video input remains capability-gated by the call pipeline. */
            callVideoInputEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Generate and play cached character presence videos during Conversation Calls. */
            callCharacterVideoEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Automatically generate the minimum idle/talking call-presence clips for call participants. */
            callAutomaticVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Let characters sparsely generate custom call-presence clips on explicit user request. */
            callCustomVideoClipsEnabled: z.ZodDefault<z.ZodBoolean>;
            /** Deprecated: soundboard is always available during calls. */
            callSoundboardEnabled: z.ZodDefault<z.ZodBoolean>;
        }, "voice" | "baseUrl" | "apiKey" | "model" | "speed" | "elevenLabsStability" | "elevenLabsLanguageCode" | "voiceMode" | "voiceAssignments" | "narratorVoiceEnabled" | "narratorVoice" | "npcDefaultVoicesEnabled" | "npcDefaultMaleVoices" | "npcDefaultFemaleVoices" | "audioFormat">, "strip", z.ZodTypeAny, {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        }, {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        openai?: {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        } | undefined;
        elevenlabs?: {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        } | undefined;
        pockettts?: {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        } | undefined;
        xai?: {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        } | undefined;
    }, {
        openai?: {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        } | undefined;
        elevenlabs?: {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        } | undefined;
        pockettts?: {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        } | undefined;
        xai?: {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    voice: string;
    enabled: boolean;
    source: "openai" | "elevenlabs" | "pockettts" | "xai";
    baseUrl: string;
    apiKey: string;
    model: string;
    speed: number;
    elevenLabsStability: number;
    elevenLabsLanguageCode: string;
    voiceMode: "single" | "per-character";
    voiceAssignments: {
        characterId: string;
        characterName: string;
        voice: string;
    }[];
    narratorVoiceEnabled: boolean;
    narratorVoice: string;
    npcDefaultVoicesEnabled: boolean;
    npcDefaultMaleVoices: string[];
    npcDefaultFemaleVoices: string[];
    autoplayRP: boolean;
    autoplayConvo: boolean;
    autoplayGame: boolean;
    progressivePlayback: boolean;
    dialogueOnly: boolean;
    dialoguePauseMs: number;
    audioFormat: "mp3" | "wav";
    callAudioEnabled: boolean;
    callSttConnectionId: string;
    callSttModel: string;
    callAudioInputMode: "system" | "auto" | "transcribe" | "local_whisper";
    callVideoInputEnabled: boolean;
    callCharacterVideoEnabled: boolean;
    callAutomaticVideoClipsEnabled: boolean;
    callCustomVideoClipsEnabled: boolean;
    callSoundboardEnabled: boolean;
    sourceProfiles: {
        openai?: {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        } | undefined;
        elevenlabs?: {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        } | undefined;
        pockettts?: {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        } | undefined;
        xai?: {
            voice: string;
            baseUrl: string;
            apiKey: string;
            model: string;
            speed: number;
            elevenLabsStability: number;
            elevenLabsLanguageCode: string;
            voiceMode: "single" | "per-character";
            voiceAssignments: {
                characterId: string;
                characterName: string;
                voice: string;
            }[];
            narratorVoiceEnabled: boolean;
            narratorVoice: string;
            npcDefaultVoicesEnabled: boolean;
            npcDefaultMaleVoices: string[];
            npcDefaultFemaleVoices: string[];
            audioFormat: "mp3" | "wav";
        } | undefined;
    };
}, {
    voice?: string | undefined;
    enabled?: boolean | undefined;
    source?: "openai" | "elevenlabs" | "pockettts" | "xai" | undefined;
    baseUrl?: string | undefined;
    apiKey?: string | undefined;
    model?: string | undefined;
    speed?: number | undefined;
    elevenLabsStability?: number | undefined;
    elevenLabsLanguageCode?: string | undefined;
    voiceMode?: "single" | "per-character" | undefined;
    voiceAssignments?: {
        characterId?: string | undefined;
        characterName?: string | undefined;
        voice?: string | undefined;
    }[] | undefined;
    narratorVoiceEnabled?: boolean | undefined;
    narratorVoice?: string | undefined;
    npcDefaultVoicesEnabled?: boolean | undefined;
    npcDefaultMaleVoices?: string[] | undefined;
    npcDefaultFemaleVoices?: string[] | undefined;
    autoplayRP?: boolean | undefined;
    autoplayConvo?: boolean | undefined;
    autoplayGame?: boolean | undefined;
    progressivePlayback?: boolean | undefined;
    dialogueOnly?: boolean | undefined;
    dialoguePauseMs?: number | undefined;
    audioFormat?: "mp3" | "wav" | undefined;
    callAudioEnabled?: boolean | undefined;
    callSttConnectionId?: string | undefined;
    callSttModel?: string | undefined;
    callAudioInputMode?: "system" | "auto" | "transcribe" | "local_whisper" | undefined;
    callVideoInputEnabled?: boolean | undefined;
    callCharacterVideoEnabled?: boolean | undefined;
    callAutomaticVideoClipsEnabled?: boolean | undefined;
    callCustomVideoClipsEnabled?: boolean | undefined;
    callSoundboardEnabled?: boolean | undefined;
    sourceProfiles?: {
        openai?: {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        } | undefined;
        elevenlabs?: {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        } | undefined;
        pockettts?: {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        } | undefined;
        xai?: {
            voice?: string | undefined;
            baseUrl?: string | undefined;
            apiKey?: string | undefined;
            model?: string | undefined;
            speed?: number | undefined;
            elevenLabsStability?: number | undefined;
            elevenLabsLanguageCode?: string | undefined;
            voiceMode?: "single" | "per-character" | undefined;
            voiceAssignments?: {
                characterId?: string | undefined;
                characterName?: string | undefined;
                voice?: string | undefined;
            }[] | undefined;
            narratorVoiceEnabled?: boolean | undefined;
            narratorVoice?: string | undefined;
            npcDefaultVoicesEnabled?: boolean | undefined;
            npcDefaultMaleVoices?: string[] | undefined;
            npcDefaultFemaleVoices?: string[] | undefined;
            audioFormat?: "mp3" | "wav" | undefined;
        } | undefined;
    } | undefined;
}>;
export type TTSConfig = z.infer<typeof ttsConfigSchema>;
export declare function ttsSourceProfileFromConfig(config: TTSConfig): TTSSourceProfile;
export declare const TTS_SETTINGS_KEY = "tts";
export declare const TTS_API_KEY_MASK = "\u2022\u2022\u2022\u2022\u2022\u2022";
/** Returned by GET /api/tts/voices */
export interface TTSVoicesResponse {
    voices: string[];
    voiceOptions?: Array<{
        id: string;
        name: string;
        description?: string | null;
        previewUrl?: string | null;
        category?: string | null;
        labels?: Record<string, string | number | boolean | null> | null;
    }>;
    /** True when the list came from the provider; false = local fallback or no provider voices */
    fromProvider: boolean;
    source: TTSSource;
}
//# sourceMappingURL=tts.d.ts.map