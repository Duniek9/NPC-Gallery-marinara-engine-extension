import { z } from "zod";
export declare const noodleAccountKindSchema: z.ZodEnum<["persona", "character", "random_user"]>;
export declare const noodleInteractionTypeSchema: z.ZodEnum<["like", "repost", "reply", "vote"]>;
export declare const noodlePostAccessSchema: z.ZodEnum<["public", "subscriber", "ppv"]>;
export declare const noodleParticipantSelectionModeSchema: z.ZodEnum<["all", "random_range", "exact"]>;
export declare const noodleCarryoverModeSchema: z.ZodEnum<["off", "conversation", "roleplay", "game", "all"]>;
export declare const noodleCarryoverTargetSchema: z.ZodEnum<["conversation", "roleplay", "game"]>;
export declare const noodleThemeSchema: z.ZodEnum<["system", "light", "dark"]>;
export declare const noodleIdentityDisclosureSchema: z.ZodEnum<["open", "hinted", "secret"]>;
export declare const DEFAULT_NOODLE_SETTINGS: {
    readonly refreshesPerDay: 2;
    readonly participantSelectionMode: "random_range";
    readonly participantMin: 2;
    readonly participantMax: 5;
    readonly maxGeneratedPostsPerRefresh: 8;
    readonly maxRepliesPerRefresh: 12;
    readonly maxRepostsPerRefresh: 4;
    readonly maxLikesPerRefresh: 18;
    readonly maxImagesPerRefresh: 3;
    readonly enableImagePrompts: false;
    readonly imageGenerationConnectionId: null;
    readonly imageGenerationPrompt: "Create either a social-media-ready character image or an in-character meme for the post. For character images, mention build, clothing, visible appearance, pose, expression, setting, lighting, mood, and composition. For memes, mention meme format, visual gag, composition, and short readable caption/text when relevant.";
    readonly imageGenerationUseAvatarReferences: true;
    readonly imageGenerationIncludeDescriptions: true;
    readonly allowGalleryImageAttachments: false;
    readonly imageCaptioningEnabled: false;
    readonly imageCaptioningConnectionId: null;
    readonly enableLorebookContext: false;
    readonly includeCharacterSchedules: false;
    readonly enableEnhancedTimelineWriting: false;
    readonly allowProfessorMari: true;
    readonly allowRandomUsers: false;
    readonly invitedCharacterGroupIds: readonly [];
    readonly carryoverMode: "off";
    readonly carryoverModes: readonly [];
    readonly carryoverHours: 48;
    readonly carryoverMaxItems: 8;
    readonly theme: "system";
    readonly generationConnectionId: null;
    readonly enableNoodler: false;
};
export declare const noodleSettingsSchema: z.ZodObject<{
    refreshesPerDay: z.ZodDefault<z.ZodNumber>;
    participantSelectionMode: z.ZodDefault<z.ZodEnum<["all", "random_range", "exact"]>>;
    participantMin: z.ZodDefault<z.ZodNumber>;
    participantMax: z.ZodDefault<z.ZodNumber>;
    maxGeneratedPostsPerRefresh: z.ZodDefault<z.ZodNumber>;
    maxRepliesPerRefresh: z.ZodDefault<z.ZodNumber>;
    maxRepostsPerRefresh: z.ZodDefault<z.ZodNumber>;
    maxLikesPerRefresh: z.ZodDefault<z.ZodNumber>;
    maxImagesPerRefresh: z.ZodDefault<z.ZodNumber>;
    enableImagePrompts: z.ZodDefault<z.ZodBoolean>;
    imageGenerationConnectionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    imageGenerationPrompt: z.ZodDefault<z.ZodString>;
    imageGenerationUseAvatarReferences: z.ZodDefault<z.ZodBoolean>;
    imageGenerationIncludeDescriptions: z.ZodDefault<z.ZodBoolean>;
    allowGalleryImageAttachments: z.ZodDefault<z.ZodBoolean>;
    imageCaptioningEnabled: z.ZodDefault<z.ZodBoolean>;
    imageCaptioningConnectionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    enableLorebookContext: z.ZodDefault<z.ZodBoolean>;
    includeCharacterSchedules: z.ZodDefault<z.ZodBoolean>;
    enableEnhancedTimelineWriting: z.ZodDefault<z.ZodBoolean>;
    allowProfessorMari: z.ZodDefault<z.ZodBoolean>;
    allowRandomUsers: z.ZodDefault<z.ZodBoolean>;
    invitedCharacterGroupIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    carryoverMode: z.ZodDefault<z.ZodEnum<["off", "conversation", "roleplay", "game", "all"]>>;
    carryoverModes: z.ZodDefault<z.ZodArray<z.ZodEnum<["conversation", "roleplay", "game"]>, "many">>;
    carryoverHours: z.ZodDefault<z.ZodNumber>;
    carryoverMaxItems: z.ZodDefault<z.ZodNumber>;
    theme: z.ZodDefault<z.ZodEnum<["system", "light", "dark"]>>;
    generationConnectionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    enableNoodler: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    refreshesPerDay: number;
    participantSelectionMode: "exact" | "all" | "random_range";
    participantMin: number;
    participantMax: number;
    maxGeneratedPostsPerRefresh: number;
    maxRepliesPerRefresh: number;
    maxRepostsPerRefresh: number;
    maxLikesPerRefresh: number;
    maxImagesPerRefresh: number;
    enableImagePrompts: boolean;
    imageGenerationConnectionId: string | null;
    imageGenerationPrompt: string;
    imageGenerationUseAvatarReferences: boolean;
    imageGenerationIncludeDescriptions: boolean;
    allowGalleryImageAttachments: boolean;
    imageCaptioningEnabled: boolean;
    imageCaptioningConnectionId: string | null;
    enableLorebookContext: boolean;
    includeCharacterSchedules: boolean;
    enableEnhancedTimelineWriting: boolean;
    allowProfessorMari: boolean;
    allowRandomUsers: boolean;
    invitedCharacterGroupIds: string[];
    carryoverMode: "roleplay" | "game" | "conversation" | "all" | "off";
    carryoverModes: ("roleplay" | "game" | "conversation")[];
    carryoverHours: number;
    carryoverMaxItems: number;
    theme: "system" | "light" | "dark";
    generationConnectionId: string | null;
    enableNoodler: boolean;
}, {
    refreshesPerDay?: number | undefined;
    participantSelectionMode?: "exact" | "all" | "random_range" | undefined;
    participantMin?: number | undefined;
    participantMax?: number | undefined;
    maxGeneratedPostsPerRefresh?: number | undefined;
    maxRepliesPerRefresh?: number | undefined;
    maxRepostsPerRefresh?: number | undefined;
    maxLikesPerRefresh?: number | undefined;
    maxImagesPerRefresh?: number | undefined;
    enableImagePrompts?: boolean | undefined;
    imageGenerationConnectionId?: string | null | undefined;
    imageGenerationPrompt?: string | undefined;
    imageGenerationUseAvatarReferences?: boolean | undefined;
    imageGenerationIncludeDescriptions?: boolean | undefined;
    allowGalleryImageAttachments?: boolean | undefined;
    imageCaptioningEnabled?: boolean | undefined;
    imageCaptioningConnectionId?: string | null | undefined;
    enableLorebookContext?: boolean | undefined;
    includeCharacterSchedules?: boolean | undefined;
    enableEnhancedTimelineWriting?: boolean | undefined;
    allowProfessorMari?: boolean | undefined;
    allowRandomUsers?: boolean | undefined;
    invitedCharacterGroupIds?: string[] | undefined;
    carryoverMode?: "roleplay" | "game" | "conversation" | "all" | "off" | undefined;
    carryoverModes?: ("roleplay" | "game" | "conversation")[] | undefined;
    carryoverHours?: number | undefined;
    carryoverMaxItems?: number | undefined;
    theme?: "system" | "light" | "dark" | undefined;
    generationConnectionId?: string | null | undefined;
    enableNoodler?: boolean | undefined;
}>;
export declare const noodleSettingsUpdateSchema: z.ZodObject<{
    refreshesPerDay: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    participantSelectionMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<["all", "random_range", "exact"]>>>;
    participantMin: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    participantMax: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    maxGeneratedPostsPerRefresh: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    maxRepliesPerRefresh: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    maxRepostsPerRefresh: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    maxLikesPerRefresh: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    maxImagesPerRefresh: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    enableImagePrompts: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    imageGenerationConnectionId: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    imageGenerationPrompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    imageGenerationUseAvatarReferences: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    imageGenerationIncludeDescriptions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    allowGalleryImageAttachments: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    imageCaptioningEnabled: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    imageCaptioningConnectionId: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    enableLorebookContext: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    includeCharacterSchedules: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    enableEnhancedTimelineWriting: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    allowProfessorMari: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    allowRandomUsers: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    invitedCharacterGroupIds: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    carryoverMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<["off", "conversation", "roleplay", "game", "all"]>>>;
    carryoverModes: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEnum<["conversation", "roleplay", "game"]>, "many">>>;
    carryoverHours: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    carryoverMaxItems: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    theme: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "light", "dark"]>>>;
    generationConnectionId: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    enableNoodler: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    refreshesPerDay?: number | undefined;
    participantSelectionMode?: "exact" | "all" | "random_range" | undefined;
    participantMin?: number | undefined;
    participantMax?: number | undefined;
    maxGeneratedPostsPerRefresh?: number | undefined;
    maxRepliesPerRefresh?: number | undefined;
    maxRepostsPerRefresh?: number | undefined;
    maxLikesPerRefresh?: number | undefined;
    maxImagesPerRefresh?: number | undefined;
    enableImagePrompts?: boolean | undefined;
    imageGenerationConnectionId?: string | null | undefined;
    imageGenerationPrompt?: string | undefined;
    imageGenerationUseAvatarReferences?: boolean | undefined;
    imageGenerationIncludeDescriptions?: boolean | undefined;
    allowGalleryImageAttachments?: boolean | undefined;
    imageCaptioningEnabled?: boolean | undefined;
    imageCaptioningConnectionId?: string | null | undefined;
    enableLorebookContext?: boolean | undefined;
    includeCharacterSchedules?: boolean | undefined;
    enableEnhancedTimelineWriting?: boolean | undefined;
    allowProfessorMari?: boolean | undefined;
    allowRandomUsers?: boolean | undefined;
    invitedCharacterGroupIds?: string[] | undefined;
    carryoverMode?: "roleplay" | "game" | "conversation" | "all" | "off" | undefined;
    carryoverModes?: ("roleplay" | "game" | "conversation")[] | undefined;
    carryoverHours?: number | undefined;
    carryoverMaxItems?: number | undefined;
    theme?: "system" | "light" | "dark" | undefined;
    generationConnectionId?: string | null | undefined;
    enableNoodler?: boolean | undefined;
}, {
    refreshesPerDay?: number | undefined;
    participantSelectionMode?: "exact" | "all" | "random_range" | undefined;
    participantMin?: number | undefined;
    participantMax?: number | undefined;
    maxGeneratedPostsPerRefresh?: number | undefined;
    maxRepliesPerRefresh?: number | undefined;
    maxRepostsPerRefresh?: number | undefined;
    maxLikesPerRefresh?: number | undefined;
    maxImagesPerRefresh?: number | undefined;
    enableImagePrompts?: boolean | undefined;
    imageGenerationConnectionId?: string | null | undefined;
    imageGenerationPrompt?: string | undefined;
    imageGenerationUseAvatarReferences?: boolean | undefined;
    imageGenerationIncludeDescriptions?: boolean | undefined;
    allowGalleryImageAttachments?: boolean | undefined;
    imageCaptioningEnabled?: boolean | undefined;
    imageCaptioningConnectionId?: string | null | undefined;
    enableLorebookContext?: boolean | undefined;
    includeCharacterSchedules?: boolean | undefined;
    enableEnhancedTimelineWriting?: boolean | undefined;
    allowProfessorMari?: boolean | undefined;
    allowRandomUsers?: boolean | undefined;
    invitedCharacterGroupIds?: string[] | undefined;
    carryoverMode?: "roleplay" | "game" | "conversation" | "all" | "off" | undefined;
    carryoverModes?: ("roleplay" | "game" | "conversation")[] | undefined;
    carryoverHours?: number | undefined;
    carryoverMaxItems?: number | undefined;
    theme?: "system" | "light" | "dark" | undefined;
    generationConnectionId?: string | null | undefined;
    enableNoodler?: boolean | undefined;
}>;
export declare const noodleAccountProfileSettingsSchema: z.ZodObject<{
    avatarCrop: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
        srcX: z.ZodNumber;
        srcY: z.ZodNumber;
        srcWidth: z.ZodNumber;
        srcHeight: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        srcX: number;
        srcY: number;
        srcWidth: number;
        srcHeight: number;
    }, {
        srcX: number;
        srcY: number;
        srcWidth: number;
        srcHeight: number;
    }>, z.ZodObject<{
        zoom: z.ZodNumber;
        offsetX: z.ZodNumber;
        offsetY: z.ZodNumber;
        fullImage: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        zoom: number;
        offsetX: number;
        offsetY: number;
        fullImage?: boolean | undefined;
    }, {
        zoom: number;
        offsetX: number;
        offsetY: number;
        fullImage?: boolean | undefined;
    }>]>>>;
    bannerUrl: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    profileGenerated: z.ZodOptional<z.ZodBoolean>;
    profileManuallyEdited: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    avatarCrop?: {
        srcX: number;
        srcY: number;
        srcWidth: number;
        srcHeight: number;
    } | {
        zoom: number;
        offsetX: number;
        offsetY: number;
        fullImage?: boolean | undefined;
    } | null | undefined;
    bannerUrl?: string | undefined;
    location?: string | undefined;
    profileGenerated?: boolean | undefined;
    profileManuallyEdited?: boolean | undefined;
}, {
    avatarCrop?: {
        srcX: number;
        srcY: number;
        srcWidth: number;
        srcHeight: number;
    } | {
        zoom: number;
        offsetX: number;
        offsetY: number;
        fullImage?: boolean | undefined;
    } | null | undefined;
    bannerUrl?: string | undefined;
    location?: string | undefined;
    profileGenerated?: boolean | undefined;
    profileManuallyEdited?: boolean | undefined;
}>;
export declare const noodleAccountSocialSettingsSchema: z.ZodObject<{
    followingAccountIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    followingAccountTimestamps: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    notificationsReadAt: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    followingAccountIds?: string[] | undefined;
    followingAccountTimestamps?: Record<string, string> | undefined;
    notificationsReadAt?: string | undefined;
}, {
    followingAccountIds?: string[] | undefined;
    followingAccountTimestamps?: Record<string, string> | undefined;
    notificationsReadAt?: string | undefined;
}>;
export declare const noodleAccountSchedulerSettingsSchema: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
export declare const noodleAccountAccessSettingsSchema: z.ZodObject<{
    hiddenFromAccountIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    subscriptionIncludesPpv: z.ZodDefault<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    hiddenFromAccountIds: string[];
    subscriptionIncludesPpv: boolean;
}, {
    hiddenFromAccountIds?: string[] | undefined;
    subscriptionIncludesPpv?: boolean | undefined;
}>;
export declare const noodleAccountPrivacySettingsSchema: z.ZodObject<{
    identityDisclosure: z.ZodOptional<z.ZodEnum<["open", "hinted", "secret"]>>;
    stagePersonality: z.ZodOptional<z.ZodString>;
    access: z.ZodDefault<z.ZodObject<{
        hiddenFromAccountIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        subscriptionIncludesPpv: z.ZodDefault<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        hiddenFromAccountIds: string[];
        subscriptionIncludesPpv: boolean;
    }, {
        hiddenFromAccountIds?: string[] | undefined;
        subscriptionIncludesPpv?: boolean | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    access: {
        hiddenFromAccountIds: string[];
        subscriptionIncludesPpv: boolean;
    };
    identityDisclosure?: "open" | "hinted" | "secret" | undefined;
    stagePersonality?: string | undefined;
}, {
    identityDisclosure?: "open" | "hinted" | "secret" | undefined;
    stagePersonality?: string | undefined;
    access?: {
        hiddenFromAccountIds?: string[] | undefined;
        subscriptionIncludesPpv?: boolean | undefined;
    } | undefined;
}>;
export declare const noodleAccountPrivacyPatchSchema: z.ZodObject<Omit<{
    identityDisclosure: z.ZodOptional<z.ZodEnum<["open", "hinted", "secret"]>>;
    stagePersonality: z.ZodOptional<z.ZodString>;
    access: z.ZodDefault<z.ZodObject<{
        hiddenFromAccountIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        subscriptionIncludesPpv: z.ZodDefault<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        hiddenFromAccountIds: string[];
        subscriptionIncludesPpv: boolean;
    }, {
        hiddenFromAccountIds?: string[] | undefined;
        subscriptionIncludesPpv?: boolean | undefined;
    }>>;
}, "access"> & {
    access: z.ZodOptional<z.ZodObject<{
        hiddenFromAccountIds: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
        subscriptionIncludesPpv: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        hiddenFromAccountIds?: string[] | undefined;
        subscriptionIncludesPpv?: boolean | undefined;
    }, {
        hiddenFromAccountIds?: string[] | undefined;
        subscriptionIncludesPpv?: boolean | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    identityDisclosure?: "open" | "hinted" | "secret" | undefined;
    stagePersonality?: string | undefined;
    access?: {
        hiddenFromAccountIds?: string[] | undefined;
        subscriptionIncludesPpv?: boolean | undefined;
    } | undefined;
}, {
    identityDisclosure?: "open" | "hinted" | "secret" | undefined;
    stagePersonality?: string | undefined;
    access?: {
        hiddenFromAccountIds?: string[] | undefined;
        subscriptionIncludesPpv?: boolean | undefined;
    } | undefined;
}>;
export declare const noodleAccountSocialPatchSchema: z.ZodObject<Pick<{
    followingAccountIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    followingAccountTimestamps: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    notificationsReadAt: z.ZodOptional<z.ZodString>;
}, "notificationsReadAt">, "strict", z.ZodTypeAny, {
    notificationsReadAt?: string | undefined;
}, {
    notificationsReadAt?: string | undefined;
}>;
export declare const noodleAccountSettingsPatchSchema: z.ZodDiscriminatedUnion<"subtree", [z.ZodObject<{
    subtree: z.ZodLiteral<"social">;
    patch: z.ZodObject<Pick<{
        followingAccountIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        followingAccountTimestamps: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        notificationsReadAt: z.ZodOptional<z.ZodString>;
    }, "notificationsReadAt">, "strict", z.ZodTypeAny, {
        notificationsReadAt?: string | undefined;
    }, {
        notificationsReadAt?: string | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    subtree: "social";
    patch: {
        notificationsReadAt?: string | undefined;
    };
}, {
    subtree: "social";
    patch: {
        notificationsReadAt?: string | undefined;
    };
}>, z.ZodObject<{
    subtree: z.ZodLiteral<"scheduler">;
    patch: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
}, "strict", z.ZodTypeAny, {
    subtree: "scheduler";
    patch: {};
}, {
    subtree: "scheduler";
    patch: {};
}>, z.ZodObject<{
    subtree: z.ZodLiteral<"privacy">;
    patch: z.ZodObject<Omit<{
        identityDisclosure: z.ZodOptional<z.ZodEnum<["open", "hinted", "secret"]>>;
        stagePersonality: z.ZodOptional<z.ZodString>;
        access: z.ZodDefault<z.ZodObject<{
            hiddenFromAccountIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            subscriptionIncludesPpv: z.ZodDefault<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            hiddenFromAccountIds: string[];
            subscriptionIncludesPpv: boolean;
        }, {
            hiddenFromAccountIds?: string[] | undefined;
            subscriptionIncludesPpv?: boolean | undefined;
        }>>;
    }, "access"> & {
        access: z.ZodOptional<z.ZodObject<{
            hiddenFromAccountIds: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
            subscriptionIncludesPpv: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        }, "strict", z.ZodTypeAny, {
            hiddenFromAccountIds?: string[] | undefined;
            subscriptionIncludesPpv?: boolean | undefined;
        }, {
            hiddenFromAccountIds?: string[] | undefined;
            subscriptionIncludesPpv?: boolean | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        identityDisclosure?: "open" | "hinted" | "secret" | undefined;
        stagePersonality?: string | undefined;
        access?: {
            hiddenFromAccountIds?: string[] | undefined;
            subscriptionIncludesPpv?: boolean | undefined;
        } | undefined;
    }, {
        identityDisclosure?: "open" | "hinted" | "secret" | undefined;
        stagePersonality?: string | undefined;
        access?: {
            hiddenFromAccountIds?: string[] | undefined;
            subscriptionIncludesPpv?: boolean | undefined;
        } | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    subtree: "privacy";
    patch: {
        identityDisclosure?: "open" | "hinted" | "secret" | undefined;
        stagePersonality?: string | undefined;
        access?: {
            hiddenFromAccountIds?: string[] | undefined;
            subscriptionIncludesPpv?: boolean | undefined;
        } | undefined;
    };
}, {
    subtree: "privacy";
    patch: {
        identityDisclosure?: "open" | "hinted" | "secret" | undefined;
        stagePersonality?: string | undefined;
        access?: {
            hiddenFromAccountIds?: string[] | undefined;
            subscriptionIncludesPpv?: boolean | undefined;
        } | undefined;
    };
}>]>;
export declare const noodleAccountUpdateSchema: z.ZodObject<{
    invited: z.ZodOptional<z.ZodBoolean>;
    handle: z.ZodOptional<z.ZodString>;
    displayName: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    avatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    invited?: boolean | undefined;
    handle?: string | undefined;
    displayName?: string | undefined;
    bio?: string | undefined;
    avatarUrl?: string | null | undefined;
}, {
    invited?: boolean | undefined;
    handle?: string | undefined;
    displayName?: string | undefined;
    bio?: string | undefined;
    avatarUrl?: string | null | undefined;
}>;
export declare const noodleAccountProfileUpdateSchema: z.ZodObject<{
    profile: z.ZodObject<{
        avatarCrop: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
            srcX: z.ZodNumber;
            srcY: z.ZodNumber;
            srcWidth: z.ZodNumber;
            srcHeight: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            srcX: number;
            srcY: number;
            srcWidth: number;
            srcHeight: number;
        }, {
            srcX: number;
            srcY: number;
            srcWidth: number;
            srcHeight: number;
        }>, z.ZodObject<{
            zoom: z.ZodNumber;
            offsetX: z.ZodNumber;
            offsetY: z.ZodNumber;
            fullImage: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            zoom: number;
            offsetX: number;
            offsetY: number;
            fullImage?: boolean | undefined;
        }, {
            zoom: number;
            offsetX: number;
            offsetY: number;
            fullImage?: boolean | undefined;
        }>]>>>;
        bannerUrl: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        profileGenerated: z.ZodOptional<z.ZodBoolean>;
        profileManuallyEdited: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        avatarCrop?: {
            srcX: number;
            srcY: number;
            srcWidth: number;
            srcHeight: number;
        } | {
            zoom: number;
            offsetX: number;
            offsetY: number;
            fullImage?: boolean | undefined;
        } | null | undefined;
        bannerUrl?: string | undefined;
        location?: string | undefined;
        profileGenerated?: boolean | undefined;
        profileManuallyEdited?: boolean | undefined;
    }, {
        avatarCrop?: {
            srcX: number;
            srcY: number;
            srcWidth: number;
            srcHeight: number;
        } | {
            zoom: number;
            offsetX: number;
            offsetY: number;
            fullImage?: boolean | undefined;
        } | null | undefined;
        bannerUrl?: string | undefined;
        location?: string | undefined;
        profileGenerated?: boolean | undefined;
        profileManuallyEdited?: boolean | undefined;
    }>;
    handle: z.ZodOptional<z.ZodString>;
    displayName: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    avatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    profile: {
        avatarCrop?: {
            srcX: number;
            srcY: number;
            srcWidth: number;
            srcHeight: number;
        } | {
            zoom: number;
            offsetX: number;
            offsetY: number;
            fullImage?: boolean | undefined;
        } | null | undefined;
        bannerUrl?: string | undefined;
        location?: string | undefined;
        profileGenerated?: boolean | undefined;
        profileManuallyEdited?: boolean | undefined;
    };
    handle?: string | undefined;
    displayName?: string | undefined;
    bio?: string | undefined;
    avatarUrl?: string | null | undefined;
}, {
    profile: {
        avatarCrop?: {
            srcX: number;
            srcY: number;
            srcWidth: number;
            srcHeight: number;
        } | {
            zoom: number;
            offsetX: number;
            offsetY: number;
            fullImage?: boolean | undefined;
        } | null | undefined;
        bannerUrl?: string | undefined;
        location?: string | undefined;
        profileGenerated?: boolean | undefined;
        profileManuallyEdited?: boolean | undefined;
    };
    handle?: string | undefined;
    displayName?: string | undefined;
    bio?: string | undefined;
    avatarUrl?: string | null | undefined;
}>;
export declare const noodleAccountFollowUpdateSchema: z.ZodObject<{
    followed: z.ZodBoolean;
}, "strict", z.ZodTypeAny, {
    followed: boolean;
}, {
    followed: boolean;
}>;
export declare const noodleStageProfileSchema: z.ZodObject<{
    displayName: z.ZodString;
    handle: z.ZodString;
    bio: z.ZodString;
    stagePersonality: z.ZodString;
    disclosureMode: z.ZodEnum<["open", "hinted", "secret"]>;
}, "strict", z.ZodTypeAny, {
    stagePersonality: string;
    handle: string;
    displayName: string;
    bio: string;
    disclosureMode: "open" | "hinted" | "secret";
}, {
    stagePersonality: string;
    handle: string;
    displayName: string;
    bio: string;
    disclosureMode: "open" | "hinted" | "secret";
}>;
export declare const noodlePrivateAccountCreateSchema: z.ZodObject<{
    stageProfile: z.ZodObject<{
        displayName: z.ZodString;
        handle: z.ZodString;
        bio: z.ZodString;
        stagePersonality: z.ZodString;
        disclosureMode: z.ZodEnum<["open", "hinted", "secret"]>;
    }, "strict", z.ZodTypeAny, {
        stagePersonality: string;
        handle: string;
        displayName: string;
        bio: string;
        disclosureMode: "open" | "hinted" | "secret";
    }, {
        stagePersonality: string;
        handle: string;
        displayName: string;
        bio: string;
        disclosureMode: "open" | "hinted" | "secret";
    }>;
}, "strict", z.ZodTypeAny, {
    stageProfile: {
        stagePersonality: string;
        handle: string;
        displayName: string;
        bio: string;
        disclosureMode: "open" | "hinted" | "secret";
    };
}, {
    stageProfile: {
        stagePersonality: string;
        handle: string;
        displayName: string;
        bio: string;
        disclosureMode: "open" | "hinted" | "secret";
    };
}>;
export declare const noodleStageProfileUpdateSchema: z.ZodObject<{
    displayName: z.ZodString;
    handle: z.ZodString;
    bio: z.ZodString;
    stagePersonality: z.ZodString;
    disclosureMode: z.ZodEnum<["open", "hinted", "secret"]>;
}, "strict", z.ZodTypeAny, {
    stagePersonality: string;
    handle: string;
    displayName: string;
    bio: string;
    disclosureMode: "open" | "hinted" | "secret";
}, {
    stagePersonality: string;
    handle: string;
    displayName: string;
    bio: string;
    disclosureMode: "open" | "hinted" | "secret";
}>;
export declare const noodleStageProfileDraftRequestSchema: z.ZodEffects<z.ZodObject<{
    publicAccountId: z.ZodOptional<z.ZodString>;
    privateAccountId: z.ZodOptional<z.ZodString>;
    disclosureMode: z.ZodEnum<["open", "hinted", "secret"]>;
    guidance: z.ZodDefault<z.ZodString>;
    currentDraft: z.ZodOptional<z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        handle: z.ZodOptional<z.ZodString>;
        bio: z.ZodOptional<z.ZodString>;
        stagePersonality: z.ZodOptional<z.ZodString>;
        disclosureMode: z.ZodOptional<z.ZodEnum<["open", "hinted", "secret"]>>;
    }, "strict", z.ZodTypeAny, {
        stagePersonality?: string | undefined;
        handle?: string | undefined;
        displayName?: string | undefined;
        bio?: string | undefined;
        disclosureMode?: "open" | "hinted" | "secret" | undefined;
    }, {
        stagePersonality?: string | undefined;
        handle?: string | undefined;
        displayName?: string | undefined;
        bio?: string | undefined;
        disclosureMode?: "open" | "hinted" | "secret" | undefined;
    }>>;
    connectionId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    disclosureMode: "open" | "hinted" | "secret";
    guidance: string;
    connectionId?: string | undefined;
    publicAccountId?: string | undefined;
    privateAccountId?: string | undefined;
    currentDraft?: {
        stagePersonality?: string | undefined;
        handle?: string | undefined;
        displayName?: string | undefined;
        bio?: string | undefined;
        disclosureMode?: "open" | "hinted" | "secret" | undefined;
    } | undefined;
}, {
    disclosureMode: "open" | "hinted" | "secret";
    connectionId?: string | undefined;
    publicAccountId?: string | undefined;
    privateAccountId?: string | undefined;
    guidance?: string | undefined;
    currentDraft?: {
        stagePersonality?: string | undefined;
        handle?: string | undefined;
        displayName?: string | undefined;
        bio?: string | undefined;
        disclosureMode?: "open" | "hinted" | "secret" | undefined;
    } | undefined;
}>, {
    disclosureMode: "open" | "hinted" | "secret";
    guidance: string;
    connectionId?: string | undefined;
    publicAccountId?: string | undefined;
    privateAccountId?: string | undefined;
    currentDraft?: {
        stagePersonality?: string | undefined;
        handle?: string | undefined;
        displayName?: string | undefined;
        bio?: string | undefined;
        disclosureMode?: "open" | "hinted" | "secret" | undefined;
    } | undefined;
}, {
    disclosureMode: "open" | "hinted" | "secret";
    connectionId?: string | undefined;
    publicAccountId?: string | undefined;
    privateAccountId?: string | undefined;
    guidance?: string | undefined;
    currentDraft?: {
        stagePersonality?: string | undefined;
        handle?: string | undefined;
        displayName?: string | undefined;
        bio?: string | undefined;
        disclosureMode?: "open" | "hinted" | "secret" | undefined;
    } | undefined;
}>;
export declare const noodleStageProfileDraftResponseSchema: z.ZodObject<{
    displayName: z.ZodString;
    handle: z.ZodString;
    bio: z.ZodString;
    stagePersonality: z.ZodString;
    disclosureMode: z.ZodEnum<["open", "hinted", "secret"]>;
}, "strict", z.ZodTypeAny, {
    stagePersonality: string;
    handle: string;
    displayName: string;
    bio: string;
    disclosureMode: "open" | "hinted" | "secret";
}, {
    stagePersonality: string;
    handle: string;
    displayName: string;
    bio: string;
    disclosureMode: "open" | "hinted" | "secret";
}>;
export declare const noodleInviteSchema: z.ZodObject<{
    characterId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    characterId: string;
}, {
    characterId: string;
}>;
export declare const noodleBulkInviteSchema: z.ZodObject<{
    characterIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    characterIds: string[];
}, {
    characterIds: string[];
}>;
export declare const noodlePollInputSchema: z.ZodEffects<z.ZodObject<{
    question: z.ZodString;
    options: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    options: string[];
    question: string;
}, {
    options: string[];
    question: string;
}>, {
    options: string[];
    question: string;
}, {
    options: string[];
    question: string;
}>;
export declare const noodlePollSchema: z.ZodObject<{
    question: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
    }, {
        id: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    options: {
        id: string;
        label: string;
    }[];
    question: string;
}, {
    options: {
        id: string;
        label: string;
    }[];
    question: string;
}>;
export declare const noodleCreatePostSchema: z.ZodObject<{
    authorKind: z.ZodEnum<["persona", "character", "random_user"]>;
    authorEntityId: z.ZodString;
    content: z.ZodString;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imagePrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentPostId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quotePostId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    poll: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodObject<{
        question: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        question: string;
    }, {
        options: string[];
        question: string;
    }>, {
        options: string[];
        question: string;
    }, {
        options: string[];
        question: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    content: string;
    authorKind: "character" | "persona" | "random_user";
    authorEntityId: string;
    imageUrl?: string | null | undefined;
    imagePrompt?: string | null | undefined;
    parentPostId?: string | null | undefined;
    quotePostId?: string | null | undefined;
    poll?: {
        options: string[];
        question: string;
    } | null | undefined;
}, {
    content: string;
    authorKind: "character" | "persona" | "random_user";
    authorEntityId: string;
    imageUrl?: string | null | undefined;
    imagePrompt?: string | null | undefined;
    parentPostId?: string | null | undefined;
    quotePostId?: string | null | undefined;
    poll?: {
        options: string[];
        question: string;
    } | null | undefined;
}>;
export declare const noodlerViewerPersonaSchema: z.ZodObject<{
    personaId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    personaId: string;
}, {
    personaId: string;
}>;
export declare const noodlerSubscriptionSchema: z.ZodObject<{
    personaId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    personaId: string;
}, {
    personaId: string;
}>;
export declare const noodlerUnlockSchema: z.ZodObject<{
    personaId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    personaId: string;
}, {
    personaId: string;
}>;
export declare const noodlerCreateInteractionSchema: z.ZodEffects<z.ZodObject<{
    personaId: z.ZodString;
} & {
    type: z.ZodEnum<["like", "repost", "reply"]>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentInteractionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    type: "like" | "repost" | "reply";
    personaId: string;
    content?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
}, {
    type: "like" | "repost" | "reply";
    personaId: string;
    content?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
}>, {
    type: "like" | "repost" | "reply";
    personaId: string;
    content?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
}, {
    type: "like" | "repost" | "reply";
    personaId: string;
    content?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
}>;
export declare const noodlerRemoveInteractionSchema: z.ZodEffects<z.ZodObject<{
    personaId: z.ZodString;
} & {
    type: z.ZodEnum<["like", "repost"]>;
    parentInteractionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    type: "like" | "repost";
    personaId: string;
    parentInteractionId?: string | null | undefined;
}, {
    type: "like" | "repost";
    personaId: string;
    parentInteractionId?: string | null | undefined;
}>, {
    type: "like" | "repost";
    personaId: string;
    parentInteractionId?: string | null | undefined;
}, {
    type: "like" | "repost";
    personaId: string;
    parentInteractionId?: string | null | undefined;
}>;
export declare const noodlePostUpdateSchema: z.ZodObject<{
    content: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imagePrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    content?: string | undefined;
    imageUrl?: string | null | undefined;
    imagePrompt?: string | null | undefined;
}, {
    content?: string | undefined;
    imageUrl?: string | null | undefined;
    imagePrompt?: string | null | undefined;
}>;
export declare const noodleCreateInteractionSchema: z.ZodEffects<z.ZodObject<{
    actorKind: z.ZodEnum<["persona", "character", "random_user"]>;
    actorEntityId: z.ZodString;
    type: z.ZodEnum<["like", "repost", "reply", "vote"]>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentInteractionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "like" | "repost" | "reply" | "vote";
    actorKind: "character" | "persona" | "random_user";
    actorEntityId: string;
    content?: string | null | undefined;
    imageUrl?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
}, {
    type: "like" | "repost" | "reply" | "vote";
    actorKind: "character" | "persona" | "random_user";
    actorEntityId: string;
    content?: string | null | undefined;
    imageUrl?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
}>, {
    type: "like" | "repost" | "reply" | "vote";
    actorKind: "character" | "persona" | "random_user";
    actorEntityId: string;
    content?: string | null | undefined;
    imageUrl?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
}, {
    type: "like" | "repost" | "reply" | "vote";
    actorKind: "character" | "persona" | "random_user";
    actorEntityId: string;
    content?: string | null | undefined;
    imageUrl?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
}>;
export declare const noodleRemoveInteractionSchema: z.ZodEffects<z.ZodObject<{
    actorKind: z.ZodEnum<["persona", "character", "random_user"]>;
    actorEntityId: z.ZodString;
    type: z.ZodEnum<["like", "repost"]>;
    parentInteractionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "like" | "repost";
    actorKind: "character" | "persona" | "random_user";
    actorEntityId: string;
    parentInteractionId?: string | null | undefined;
}, {
    type: "like" | "repost";
    actorKind: "character" | "persona" | "random_user";
    actorEntityId: string;
    parentInteractionId?: string | null | undefined;
}>, {
    type: "like" | "repost";
    actorKind: "character" | "persona" | "random_user";
    actorEntityId: string;
    parentInteractionId?: string | null | undefined;
}, {
    type: "like" | "repost";
    actorKind: "character" | "persona" | "random_user";
    actorEntityId: string;
    parentInteractionId?: string | null | undefined;
}>;
export declare const noodleInteractionOwnerSchema: z.ZodObject<{
    personaId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    personaId: string;
}, {
    personaId: string;
}>;
export declare const noodleInteractionUpdateSchema: z.ZodEffects<z.ZodObject<{
    personaId: z.ZodString;
} & {
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    personaId: string;
    content?: string | null | undefined;
    imageUrl?: string | null | undefined;
}, {
    personaId: string;
    content?: string | null | undefined;
    imageUrl?: string | null | undefined;
}>, {
    personaId: string;
    content?: string | null | undefined;
    imageUrl?: string | null | undefined;
}, {
    personaId: string;
    content?: string | null | undefined;
    imageUrl?: string | null | undefined;
}>;
export declare const noodlePublicGenerationRequestSchema: z.ZodObject<{
    personaId: z.ZodOptional<z.ZodString>;
    timeZone: z.ZodOptional<z.ZodString>;
    reviewImagePromptsBeforeSend: z.ZodOptional<z.ZodBoolean>;
    connectionId: z.ZodOptional<z.ZodString>;
    debugMode: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodLiteral<"public">;
}, "strict", z.ZodTypeAny, {
    mode: "public";
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    personaId?: string | undefined;
    timeZone?: string | undefined;
    reviewImagePromptsBeforeSend?: boolean | undefined;
}, {
    mode: "public";
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    personaId?: string | undefined;
    timeZone?: string | undefined;
    reviewImagePromptsBeforeSend?: boolean | undefined;
}>;
export declare const noodlePrivatePostGuideSchema: z.ZodString;
export declare const noodlePrivateProjectWorkSchema: z.ZodString;
export declare const noodlePrivateGenerationRequestSchema: z.ZodUnion<[z.ZodObject<{
    access: z.ZodDefault<z.ZodLiteral<"public">>;
    targetAccountId: z.ZodString;
    privatePostGuide: z.ZodOptional<z.ZodString>;
    privateProjectWork: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    debugMode: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodLiteral<"private">;
}, "strict", z.ZodTypeAny, {
    mode: "private";
    access: "public";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
}, {
    mode: "private";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    access?: "public" | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
}>, z.ZodObject<{
    access: z.ZodLiteral<"subscriber">;
    targetAccountId: z.ZodString;
    privatePostGuide: z.ZodOptional<z.ZodString>;
    privateProjectWork: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    debugMode: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodLiteral<"private">;
}, "strict", z.ZodTypeAny, {
    mode: "private";
    access: "subscriber";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
}, {
    mode: "private";
    access: "subscriber";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
}>, z.ZodObject<{
    access: z.ZodLiteral<"ppv">;
    ppvPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    targetAccountId: z.ZodString;
    privatePostGuide: z.ZodOptional<z.ZodString>;
    privateProjectWork: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    debugMode: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodLiteral<"private">;
}, "strict", z.ZodTypeAny, {
    mode: "private";
    access: "ppv";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
    ppvPrice?: number | null | undefined;
}, {
    mode: "private";
    access: "ppv";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
    ppvPrice?: number | null | undefined;
}>]>;
export declare const noodleGenerationRequestSchema: z.ZodUnion<[z.ZodObject<{
    personaId: z.ZodOptional<z.ZodString>;
    timeZone: z.ZodOptional<z.ZodString>;
    reviewImagePromptsBeforeSend: z.ZodOptional<z.ZodBoolean>;
    connectionId: z.ZodOptional<z.ZodString>;
    debugMode: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodLiteral<"public">;
}, "strict", z.ZodTypeAny, {
    mode: "public";
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    personaId?: string | undefined;
    timeZone?: string | undefined;
    reviewImagePromptsBeforeSend?: boolean | undefined;
}, {
    mode: "public";
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    personaId?: string | undefined;
    timeZone?: string | undefined;
    reviewImagePromptsBeforeSend?: boolean | undefined;
}>, z.ZodUnion<[z.ZodObject<{
    access: z.ZodDefault<z.ZodLiteral<"public">>;
    targetAccountId: z.ZodString;
    privatePostGuide: z.ZodOptional<z.ZodString>;
    privateProjectWork: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    debugMode: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodLiteral<"private">;
}, "strict", z.ZodTypeAny, {
    mode: "private";
    access: "public";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
}, {
    mode: "private";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    access?: "public" | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
}>, z.ZodObject<{
    access: z.ZodLiteral<"subscriber">;
    targetAccountId: z.ZodString;
    privatePostGuide: z.ZodOptional<z.ZodString>;
    privateProjectWork: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    debugMode: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodLiteral<"private">;
}, "strict", z.ZodTypeAny, {
    mode: "private";
    access: "subscriber";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
}, {
    mode: "private";
    access: "subscriber";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
}>, z.ZodObject<{
    access: z.ZodLiteral<"ppv">;
    ppvPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    targetAccountId: z.ZodString;
    privatePostGuide: z.ZodOptional<z.ZodString>;
    privateProjectWork: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    debugMode: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodLiteral<"private">;
}, "strict", z.ZodTypeAny, {
    mode: "private";
    access: "ppv";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
    ppvPrice?: number | null | undefined;
}, {
    mode: "private";
    access: "ppv";
    targetAccountId: string;
    connectionId?: string | undefined;
    debugMode?: boolean | undefined;
    privatePostGuide?: string | undefined;
    privateProjectWork?: string | undefined;
    ppvPrice?: number | null | undefined;
}>]>]>;
export declare const noodleRescheduleRefreshSchema: z.ZodObject<{
    scheduledTime: z.ZodString;
    time: z.ZodString;
}, "strip", z.ZodTypeAny, {
    time: string;
    scheduledTime: string;
}, {
    time: string;
    scheduledTime: string;
}>;
export declare const noodleGeneratedPostSchema: z.ZodObject<{
    tempId: z.ZodOptional<z.ZodString>;
    authorHandle: z.ZodString;
    content: z.ZodString;
    imagePrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attachGalleryImage: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    poll: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodObject<{
        question: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        question: string;
    }, {
        options: string[];
        question: string;
    }>, {
        options: string[];
        question: string;
    }, {
        options: string[];
        question: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    content: string;
    authorHandle: string;
    attachGalleryImage: boolean;
    imagePrompt?: string | null | undefined;
    poll?: {
        options: string[];
        question: string;
    } | null | undefined;
    tempId?: string | undefined;
}, {
    content: string;
    authorHandle: string;
    imagePrompt?: string | null | undefined;
    poll?: {
        options: string[];
        question: string;
    } | null | undefined;
    tempId?: string | undefined;
    attachGalleryImage?: boolean | undefined;
}>;
export declare const noodleGeneratedPrivatePostSchema: z.ZodObject<{
    content: z.ZodString;
    imagePrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    poll: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodObject<{
        question: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        question: string;
    }, {
        options: string[];
        question: string;
    }>, {
        options: string[];
        question: string;
    }, {
        options: string[];
        question: string;
    }>>>;
}, "strict", z.ZodTypeAny, {
    content: string;
    imagePrompt?: string | null | undefined;
    poll?: {
        options: string[];
        question: string;
    } | null | undefined;
}, {
    content: string;
    imagePrompt?: string | null | undefined;
    poll?: {
        options: string[];
        question: string;
    } | null | undefined;
}>;
export declare const noodleGeneratedInteractionSchema: z.ZodEffects<z.ZodObject<{
    actorHandle: z.ZodString;
    targetTempId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | undefined, string | null | undefined>;
    targetPostId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | undefined, string | null | undefined>;
    parentInteractionId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | undefined, string | null | undefined>;
    type: z.ZodEnum<["like", "repost", "reply", "vote"]>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    pollOptionIndex: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodNumber>>, number | undefined, number | null | undefined>;
}, "strip", z.ZodTypeAny, {
    type: "like" | "repost" | "reply" | "vote";
    actorHandle: string;
    content?: string | null | undefined;
    parentInteractionId?: string | undefined;
    targetTempId?: string | undefined;
    targetPostId?: string | undefined;
    pollOptionIndex?: number | undefined;
}, {
    type: "like" | "repost" | "reply" | "vote";
    actorHandle: string;
    content?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
    targetTempId?: string | null | undefined;
    targetPostId?: string | null | undefined;
    pollOptionIndex?: number | null | undefined;
}>, {
    type: "like" | "repost" | "reply" | "vote";
    actorHandle: string;
    content?: string | null | undefined;
    parentInteractionId?: string | undefined;
    targetTempId?: string | undefined;
    targetPostId?: string | undefined;
    pollOptionIndex?: number | undefined;
}, {
    type: "like" | "repost" | "reply" | "vote";
    actorHandle: string;
    content?: string | null | undefined;
    parentInteractionId?: string | null | undefined;
    targetTempId?: string | null | undefined;
    targetPostId?: string | null | undefined;
    pollOptionIndex?: number | null | undefined;
}>;
export declare const noodleGeneratedFollowSchema: z.ZodObject<{
    actorHandle: z.ZodString;
    targetHandle: z.ZodString;
}, "strip", z.ZodTypeAny, {
    actorHandle: string;
    targetHandle: string;
}, {
    actorHandle: string;
    targetHandle: string;
}>;
export declare const noodleGeneratedDigestSchema: z.ZodObject<{
    accountEntityIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    accountEntityIds: string[];
}, {
    content: string;
    accountEntityIds?: string[] | undefined;
}>;
export declare const noodleGeneratedProfileSchema: z.ZodObject<{
    entityId: z.ZodString;
    name: z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>;
    handle: z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>;
    bio: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>>;
    location: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    location: string;
    handle: string;
    bio: string;
    entityId: string;
}, {
    name: string;
    handle: string;
    entityId: string;
    location?: string | undefined;
    bio?: string | undefined;
}>;
export declare const noodleGeneratedRefreshSchema: z.ZodObject<{
    posts: z.ZodDefault<z.ZodArray<z.ZodObject<{
        tempId: z.ZodOptional<z.ZodString>;
        authorHandle: z.ZodString;
        content: z.ZodString;
        imagePrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attachGalleryImage: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        poll: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodObject<{
            question: z.ZodString;
            options: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            options: string[];
            question: string;
        }, {
            options: string[];
            question: string;
        }>, {
            options: string[];
            question: string;
        }, {
            options: string[];
            question: string;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        content: string;
        authorHandle: string;
        attachGalleryImage: boolean;
        imagePrompt?: string | null | undefined;
        poll?: {
            options: string[];
            question: string;
        } | null | undefined;
        tempId?: string | undefined;
    }, {
        content: string;
        authorHandle: string;
        imagePrompt?: string | null | undefined;
        poll?: {
            options: string[];
            question: string;
        } | null | undefined;
        tempId?: string | undefined;
        attachGalleryImage?: boolean | undefined;
    }>, "many">>;
    interactions: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodObject<{
        actorHandle: z.ZodString;
        targetTempId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | undefined, string | null | undefined>;
        targetPostId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | undefined, string | null | undefined>;
        parentInteractionId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | undefined, string | null | undefined>;
        type: z.ZodEnum<["like", "repost", "reply", "vote"]>;
        content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pollOptionIndex: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodNumber>>, number | undefined, number | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        type: "like" | "repost" | "reply" | "vote";
        actorHandle: string;
        content?: string | null | undefined;
        parentInteractionId?: string | undefined;
        targetTempId?: string | undefined;
        targetPostId?: string | undefined;
        pollOptionIndex?: number | undefined;
    }, {
        type: "like" | "repost" | "reply" | "vote";
        actorHandle: string;
        content?: string | null | undefined;
        parentInteractionId?: string | null | undefined;
        targetTempId?: string | null | undefined;
        targetPostId?: string | null | undefined;
        pollOptionIndex?: number | null | undefined;
    }>, {
        type: "like" | "repost" | "reply" | "vote";
        actorHandle: string;
        content?: string | null | undefined;
        parentInteractionId?: string | undefined;
        targetTempId?: string | undefined;
        targetPostId?: string | undefined;
        pollOptionIndex?: number | undefined;
    }, {
        type: "like" | "repost" | "reply" | "vote";
        actorHandle: string;
        content?: string | null | undefined;
        parentInteractionId?: string | null | undefined;
        targetTempId?: string | null | undefined;
        targetPostId?: string | null | undefined;
        pollOptionIndex?: number | null | undefined;
    }>, "many">>;
    follows: z.ZodDefault<z.ZodArray<z.ZodObject<{
        actorHandle: z.ZodString;
        targetHandle: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        actorHandle: string;
        targetHandle: string;
    }, {
        actorHandle: string;
        targetHandle: string;
    }>, "many">>;
    digests: z.ZodDefault<z.ZodArray<z.ZodObject<{
        accountEntityIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
        accountEntityIds: string[];
    }, {
        content: string;
        accountEntityIds?: string[] | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    posts: {
        content: string;
        authorHandle: string;
        attachGalleryImage: boolean;
        imagePrompt?: string | null | undefined;
        poll?: {
            options: string[];
            question: string;
        } | null | undefined;
        tempId?: string | undefined;
    }[];
    interactions: {
        type: "like" | "repost" | "reply" | "vote";
        actorHandle: string;
        content?: string | null | undefined;
        parentInteractionId?: string | undefined;
        targetTempId?: string | undefined;
        targetPostId?: string | undefined;
        pollOptionIndex?: number | undefined;
    }[];
    follows: {
        actorHandle: string;
        targetHandle: string;
    }[];
    digests: {
        content: string;
        accountEntityIds: string[];
    }[];
}, {
    posts?: {
        content: string;
        authorHandle: string;
        imagePrompt?: string | null | undefined;
        poll?: {
            options: string[];
            question: string;
        } | null | undefined;
        tempId?: string | undefined;
        attachGalleryImage?: boolean | undefined;
    }[] | undefined;
    interactions?: {
        type: "like" | "repost" | "reply" | "vote";
        actorHandle: string;
        content?: string | null | undefined;
        parentInteractionId?: string | null | undefined;
        targetTempId?: string | null | undefined;
        targetPostId?: string | null | undefined;
        pollOptionIndex?: number | null | undefined;
    }[] | undefined;
    follows?: {
        actorHandle: string;
        targetHandle: string;
    }[] | undefined;
    digests?: {
        content: string;
        accountEntityIds?: string[] | undefined;
    }[] | undefined;
}>;
export declare const noodleGeneratedProfilesSchema: z.ZodObject<{
    profiles: z.ZodDefault<z.ZodArray<z.ZodObject<{
        entityId: z.ZodString;
        name: z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>;
        handle: z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>;
        bio: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>>;
        location: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        location: string;
        handle: string;
        bio: string;
        entityId: string;
    }, {
        name: string;
        handle: string;
        entityId: string;
        location?: string | undefined;
        bio?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    profiles: {
        name: string;
        location: string;
        handle: string;
        bio: string;
        entityId: string;
    }[];
}, {
    profiles?: {
        name: string;
        handle: string;
        entityId: string;
        location?: string | undefined;
        bio?: string | undefined;
    }[] | undefined;
}>;
export type NoodleSettingsInput = z.infer<typeof noodleSettingsSchema>;
export type NoodleSettingsUpdateInput = z.infer<typeof noodleSettingsUpdateSchema>;
export type NoodleAccountUpdateInput = z.infer<typeof noodleAccountUpdateSchema>;
export type NoodleAccountProfileUpdateInput = z.infer<typeof noodleAccountProfileUpdateSchema>;
export type NoodleAccountSettingsPatchInput = z.infer<typeof noodleAccountSettingsPatchSchema>;
export type NoodleAccountFollowUpdateInput = z.infer<typeof noodleAccountFollowUpdateSchema>;
export type NoodlePrivateAccountCreateInput = z.infer<typeof noodlePrivateAccountCreateSchema>;
export type NoodleStageProfileInput = z.infer<typeof noodleStageProfileSchema>;
export type NoodleStageProfileDraftRequest = z.infer<typeof noodleStageProfileDraftRequestSchema>;
export type NoodleInviteInput = z.infer<typeof noodleInviteSchema>;
export type NoodleBulkInviteInput = z.infer<typeof noodleBulkInviteSchema>;
export type NoodlePollInput = z.infer<typeof noodlePollInputSchema>;
export type NoodlePollData = z.infer<typeof noodlePollSchema>;
export type NoodleCreatePostInput = z.infer<typeof noodleCreatePostSchema>;
export type NoodlePostUpdateInput = z.infer<typeof noodlePostUpdateSchema>;
export type NoodleCreateInteractionInput = z.infer<typeof noodleCreateInteractionSchema>;
export type NoodleRemoveInteractionInput = z.infer<typeof noodleRemoveInteractionSchema>;
export type NoodleInteractionOwnerInput = z.infer<typeof noodleInteractionOwnerSchema>;
export type NoodleInteractionUpdateInput = z.infer<typeof noodleInteractionUpdateSchema>;
export type NoodlerCreateInteractionInput = z.infer<typeof noodlerCreateInteractionSchema>;
export type NoodlerRemoveInteractionInput = z.infer<typeof noodlerRemoveInteractionSchema>;
type InferredNoodlePublicGenerationRequest = z.infer<typeof noodlePublicGenerationRequestSchema>;
type AssertNoKeys<T extends never> = T;
export type NoodlePublicGenerationRequest = InferredNoodlePublicGenerationRequest & Record<AssertNoKeys<Extract<keyof InferredNoodlePublicGenerationRequest, "targetAccountId" | "privatePostGuide" | "privateProjectWork">>, never>;
export type NoodlePrivatePostGuide = z.infer<typeof noodlePrivatePostGuideSchema>;
export type NoodlePrivateProjectWork = z.infer<typeof noodlePrivateProjectWorkSchema>;
export type NoodlePrivateGenerationRequest = z.infer<typeof noodlePrivateGenerationRequestSchema>;
export type NoodleGenerationRequest = z.infer<typeof noodleGenerationRequestSchema>;
export type NoodleRescheduleRefreshInput = z.infer<typeof noodleRescheduleRefreshSchema>;
export type NoodleGeneratedRefresh = z.infer<typeof noodleGeneratedRefreshSchema>;
export type NoodleGeneratedPrivatePost = z.infer<typeof noodleGeneratedPrivatePostSchema>;
export type NoodleGeneratedProfiles = z.infer<typeof noodleGeneratedProfilesSchema>;
export type NoodleGeneratedProfile = z.infer<typeof noodleGeneratedProfileSchema>;
export {};
//# sourceMappingURL=noodle.schema.d.ts.map