import { z } from "zod";
export declare const agentPhaseSchema: z.ZodEnum<["pre_generation", "parallel", "post_processing"]>;
export declare const agentResultTypeSchema: z.ZodEnum<["game_state_update", "text_rewrite", "sprite_change", "echo_message", "quest_update", "image_prompt", "context_injection", "continuity_check", "director_event", "lorebook_update", "character_card_update", "background_change", "character_tracker_update", "persona_stats_update", "custom_tracker_update", "spotify_control", "youtube_control", "local_music_control", "haptic_command", "cyoa_choices", "secret_plot", "game_master_narration", "party_action", "game_map_update", "game_state_transition", "prompt_patch", "frontend_theme_update", "about_me_update"]>;
export declare const customAgentActivationSettingsSchema: z.ZodObject<{
    activationKeywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    activationScanDepth: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    activationKeywords?: string[] | undefined;
    activationScanDepth?: number | undefined;
}, {
    activationKeywords?: string[] | undefined;
    activationScanDepth?: number | undefined;
}>;
export declare const createAgentConfigSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    phase: z.ZodEnum<["pre_generation", "parallel", "post_processing"]>;
    /** Legacy compatibility only. Agent activation is chat-scoped via chat metadata. */
    enabled: z.ZodOptional<z.ZodBoolean>;
    connectionId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    imagePath: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    resultType: z.ZodOptional<z.ZodEnum<["game_state_update", "text_rewrite", "sprite_change", "echo_message", "quest_update", "image_prompt", "context_injection", "continuity_check", "director_event", "lorebook_update", "character_card_update", "background_change", "character_tracker_update", "persona_stats_update", "custom_tracker_update", "spotify_control", "youtube_control", "local_music_control", "haptic_command", "cyoa_choices", "secret_plot", "game_master_narration", "party_action", "game_map_update", "game_state_transition", "prompt_patch", "frontend_theme_update", "about_me_update"]>>;
    promptTemplate: z.ZodDefault<z.ZodString>;
    settings: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    description: string;
    connectionId: string | null;
    settings: Record<string, unknown>;
    imagePath: string | null;
    phase: "pre_generation" | "parallel" | "post_processing";
    promptTemplate: string;
    enabled?: boolean | undefined;
    resultType?: "quest_update" | "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update" | undefined;
}, {
    type: string;
    name: string;
    phase: "pre_generation" | "parallel" | "post_processing";
    enabled?: boolean | undefined;
    description?: string | undefined;
    connectionId?: string | null | undefined;
    settings?: Record<string, unknown> | undefined;
    imagePath?: string | null | undefined;
    resultType?: "quest_update" | "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update" | undefined;
    promptTemplate?: string | undefined;
}>;
export declare const updateAgentConfigSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    phase: z.ZodOptional<z.ZodEnum<["pre_generation", "parallel", "post_processing"]>>;
    enabled: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    connectionId: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    imagePath: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    resultType: z.ZodOptional<z.ZodOptional<z.ZodEnum<["game_state_update", "text_rewrite", "sprite_change", "echo_message", "quest_update", "image_prompt", "context_injection", "continuity_check", "director_event", "lorebook_update", "character_card_update", "background_change", "character_tracker_update", "persona_stats_update", "custom_tracker_update", "spotify_control", "youtube_control", "local_music_control", "haptic_command", "cyoa_choices", "secret_plot", "game_master_narration", "party_action", "game_map_update", "game_state_transition", "prompt_patch", "frontend_theme_update", "about_me_update"]>>>;
    promptTemplate: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    settings: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    type?: string | undefined;
    enabled?: boolean | undefined;
    name?: string | undefined;
    description?: string | undefined;
    connectionId?: string | null | undefined;
    settings?: Record<string, unknown> | undefined;
    imagePath?: string | null | undefined;
    phase?: "pre_generation" | "parallel" | "post_processing" | undefined;
    resultType?: "quest_update" | "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update" | undefined;
    promptTemplate?: string | undefined;
}, {
    type?: string | undefined;
    enabled?: boolean | undefined;
    name?: string | undefined;
    description?: string | undefined;
    connectionId?: string | null | undefined;
    settings?: Record<string, unknown> | undefined;
    imagePath?: string | null | undefined;
    phase?: "pre_generation" | "parallel" | "post_processing" | undefined;
    resultType?: "quest_update" | "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update" | undefined;
    promptTemplate?: string | undefined;
}>;
/** AI-assisted rewrite of a fragment of stored agent data (Agent Suite). */
export declare const agentSuiteRewriteSchema: z.ZodObject<{
    connectionId: z.ZodString;
    instruction: z.ZodString;
    selectedText: z.ZodString;
    /** Full document the excerpt was selected from — context only, never rewritten. */
    documentText: z.ZodOptional<z.ZodString>;
    agentName: z.ZodOptional<z.ZodString>;
    dataLabel: z.ZodOptional<z.ZodString>;
    /** User-selected grounding context (character cards, lorebook entries) — never rewritten. */
    contextSections: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
        label: string;
    }, {
        content: string;
        label: string;
    }>, "many">, {
        content: string;
        label: string;
    }[], {
        content: string;
        label: string;
    }[]>>;
}, "strip", z.ZodTypeAny, {
    connectionId: string;
    instruction: string;
    selectedText: string;
    agentName?: string | undefined;
    documentText?: string | undefined;
    dataLabel?: string | undefined;
    contextSections?: {
        content: string;
        label: string;
    }[] | undefined;
}, {
    connectionId: string;
    instruction: string;
    selectedText: string;
    agentName?: string | undefined;
    documentText?: string | undefined;
    dataLabel?: string | undefined;
    contextSections?: {
        content: string;
        label: string;
    }[] | undefined;
}>;
export type CreateAgentConfigInput = z.infer<typeof createAgentConfigSchema>;
export type UpdateAgentConfigInput = z.infer<typeof updateAgentConfigSchema>;
export type AgentSuiteRewriteInput = z.infer<typeof agentSuiteRewriteSchema>;
//# sourceMappingURL=agent.schema.d.ts.map