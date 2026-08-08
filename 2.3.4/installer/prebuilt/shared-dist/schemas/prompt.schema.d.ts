import { z } from "zod";
export declare const promptRoleSchema: z.ZodEnum<["system", "user", "assistant"]>;
export declare const injectionPositionSchema: z.ZodEnum<["ordered", "depth"]>;
export declare const wrapFormatSchema: z.ZodEnum<["xml", "markdown", "none"]>;
export declare const markerTypeSchema: z.ZodEnum<["character", "lorebook", "persona", "chat_history", "chat_summary", "world_info_before", "world_info_after", "dialogue_examples", "agent_data"]>;
export declare const markerConfigSchema: z.ZodObject<{
    type: z.ZodEnum<["character", "lorebook", "persona", "chat_history", "chat_summary", "world_info_before", "world_info_after", "dialogue_examples", "agent_data"]>;
    characterFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    lorebookFormat: z.ZodOptional<z.ZodEnum<["full", "worldbook_only", "character_only"]>>;
    chatHistoryOptions: z.ZodOptional<z.ZodObject<{
        maxMessages: z.ZodOptional<z.ZodNumber>;
        includeSystemMessages: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        maxMessages?: number | undefined;
        includeSystemMessages?: boolean | undefined;
    }, {
        maxMessages?: number | undefined;
        includeSystemMessages?: boolean | undefined;
    }>>;
    agentType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
    agentType?: string | undefined;
    characterFields?: string[] | undefined;
    lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
    chatHistoryOptions?: {
        maxMessages?: number | undefined;
        includeSystemMessages?: boolean | undefined;
    } | undefined;
}, {
    type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
    agentType?: string | undefined;
    characterFields?: string[] | undefined;
    lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
    chatHistoryOptions?: {
        maxMessages?: number | undefined;
        includeSystemMessages?: boolean | undefined;
    } | undefined;
}>;
export declare const generationParametersSchema: z.ZodObject<{
    temperature: z.ZodDefault<z.ZodNumber>;
    topP: z.ZodDefault<z.ZodNumber>;
    topK: z.ZodDefault<z.ZodNumber>;
    minP: z.ZodDefault<z.ZodNumber>;
    maxTokens: z.ZodDefault<z.ZodNumber>;
    maxContext: z.ZodDefault<z.ZodNumber>;
    frequencyPenalty: z.ZodDefault<z.ZodNumber>;
    presencePenalty: z.ZodDefault<z.ZodNumber>;
    reasoningEffort: z.ZodDefault<z.ZodNullable<z.ZodEnum<["low", "medium", "high", "xhigh", "maximum"]>>>;
    verbosity: z.ZodDefault<z.ZodNullable<z.ZodEnum<["low", "medium", "high"]>>>;
    serviceTier: z.ZodDefault<z.ZodNullable<z.ZodEnum<["flex", "priority"]>>>;
    assistantPrefill: z.ZodDefault<z.ZodString>;
    customThinkingTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
        open: z.ZodString;
        close: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        open: string;
        close: string;
    }, {
        open: string;
        close: string;
    }>, "many">>;
    customParameters: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    enabledParameters: z.ZodOptional<z.ZodObject<{
        temperature: z.ZodOptional<z.ZodBoolean>;
        maxTokens: z.ZodOptional<z.ZodBoolean>;
        topP: z.ZodOptional<z.ZodBoolean>;
        topK: z.ZodOptional<z.ZodBoolean>;
        frequencyPenalty: z.ZodOptional<z.ZodBoolean>;
        presencePenalty: z.ZodOptional<z.ZodBoolean>;
        reasoningEffort: z.ZodOptional<z.ZodBoolean>;
        verbosity: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        temperature?: boolean | undefined;
        maxTokens?: boolean | undefined;
        topP?: boolean | undefined;
        topK?: boolean | undefined;
        frequencyPenalty?: boolean | undefined;
        presencePenalty?: boolean | undefined;
        reasoningEffort?: boolean | undefined;
        verbosity?: boolean | undefined;
    }, {
        temperature?: boolean | undefined;
        maxTokens?: boolean | undefined;
        topP?: boolean | undefined;
        topK?: boolean | undefined;
        frequencyPenalty?: boolean | undefined;
        presencePenalty?: boolean | undefined;
        reasoningEffort?: boolean | undefined;
        verbosity?: boolean | undefined;
    }>>;
    squashSystemMessages: z.ZodDefault<z.ZodBoolean>;
    showThoughts: z.ZodDefault<z.ZodBoolean>;
    useMaxContext: z.ZodDefault<z.ZodBoolean>;
    stopSequences: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    strictRoleFormatting: z.ZodDefault<z.ZodBoolean>;
    singleUserMessage: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    temperature: number;
    maxTokens: number;
    topP: number;
    topK: number;
    frequencyPenalty: number;
    presencePenalty: number;
    reasoningEffort: "maximum" | "medium" | "low" | "high" | "xhigh" | null;
    verbosity: "medium" | "low" | "high" | null;
    minP: number;
    maxContext: number;
    serviceTier: "priority" | "flex" | null;
    assistantPrefill: string;
    customThinkingTags: {
        open: string;
        close: string;
    }[];
    customParameters: Record<string, unknown>;
    squashSystemMessages: boolean;
    showThoughts: boolean;
    useMaxContext: boolean;
    stopSequences: string[];
    strictRoleFormatting: boolean;
    singleUserMessage: boolean;
    enabledParameters?: {
        temperature?: boolean | undefined;
        maxTokens?: boolean | undefined;
        topP?: boolean | undefined;
        topK?: boolean | undefined;
        frequencyPenalty?: boolean | undefined;
        presencePenalty?: boolean | undefined;
        reasoningEffort?: boolean | undefined;
        verbosity?: boolean | undefined;
    } | undefined;
}, {
    temperature?: number | undefined;
    maxTokens?: number | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    frequencyPenalty?: number | undefined;
    presencePenalty?: number | undefined;
    reasoningEffort?: "maximum" | "medium" | "low" | "high" | "xhigh" | null | undefined;
    verbosity?: "medium" | "low" | "high" | null | undefined;
    minP?: number | undefined;
    maxContext?: number | undefined;
    serviceTier?: "priority" | "flex" | null | undefined;
    assistantPrefill?: string | undefined;
    customThinkingTags?: {
        open: string;
        close: string;
    }[] | undefined;
    customParameters?: Record<string, unknown> | undefined;
    enabledParameters?: {
        temperature?: boolean | undefined;
        maxTokens?: boolean | undefined;
        topP?: boolean | undefined;
        topK?: boolean | undefined;
        frequencyPenalty?: boolean | undefined;
        presencePenalty?: boolean | undefined;
        reasoningEffort?: boolean | undefined;
        verbosity?: boolean | undefined;
    } | undefined;
    squashSystemMessages?: boolean | undefined;
    showThoughts?: boolean | undefined;
    useMaxContext?: boolean | undefined;
    stopSequences?: string[] | undefined;
    strictRoleFormatting?: boolean | undefined;
    singleUserMessage?: boolean | undefined;
}>;
export declare const promptVariableOptionSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: string;
}, {
    value: string;
    label: string;
}>;
export declare const promptVariableGroupSchema: z.ZodObject<{
    name: z.ZodString;
    label: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    options: {
        value: string;
        label: string;
    }[];
    name: string;
    label: string;
}, {
    options: {
        value: string;
        label: string;
    }[];
    name: string;
    label: string;
}>;
export declare const choiceOptionSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    id: string;
    label: string;
}, {
    value: string;
    id: string;
    label: string;
}>;
export declare const choiceDisplayModeSchema: z.ZodEnum<["auto", "buttons", "listbox"]>;
export declare const choiceOptionSortSchema: z.ZodEnum<["manual", "alphabetical"]>;
export declare const createChoiceBlockSchema: z.ZodObject<{
    presetId: z.ZodString;
    variableName: z.ZodString;
    question: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id: string;
        label: string;
    }, {
        value: string;
        id: string;
        label: string;
    }>, "many">;
    multiSelect: z.ZodDefault<z.ZodBoolean>;
    separator: z.ZodDefault<z.ZodString>;
    randomPick: z.ZodDefault<z.ZodBoolean>;
    displayMode: z.ZodDefault<z.ZodEnum<["auto", "buttons", "listbox"]>>;
    optionSort: z.ZodDefault<z.ZodEnum<["manual", "alphabetical"]>>;
}, "strip", z.ZodTypeAny, {
    options: {
        value: string;
        id: string;
        label: string;
    }[];
    presetId: string;
    variableName: string;
    question: string;
    multiSelect: boolean;
    separator: string;
    randomPick: boolean;
    displayMode: "auto" | "buttons" | "listbox";
    optionSort: "manual" | "alphabetical";
}, {
    options: {
        value: string;
        id: string;
        label: string;
    }[];
    presetId: string;
    variableName: string;
    question: string;
    multiSelect?: boolean | undefined;
    separator?: string | undefined;
    randomPick?: boolean | undefined;
    displayMode?: "auto" | "buttons" | "listbox" | undefined;
    optionSort?: "manual" | "alphabetical" | undefined;
}>;
export declare const updateChoiceBlockSchema: z.ZodObject<{
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id: string;
        label: string;
    }, {
        value: string;
        id: string;
        label: string;
    }>, "many">>;
    variableName: z.ZodOptional<z.ZodString>;
    question: z.ZodOptional<z.ZodString>;
    multiSelect: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    separator: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    randomPick: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    displayMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<["auto", "buttons", "listbox"]>>>;
    optionSort: z.ZodOptional<z.ZodDefault<z.ZodEnum<["manual", "alphabetical"]>>>;
}, "strip", z.ZodTypeAny, {
    options?: {
        value: string;
        id: string;
        label: string;
    }[] | undefined;
    variableName?: string | undefined;
    question?: string | undefined;
    multiSelect?: boolean | undefined;
    separator?: string | undefined;
    randomPick?: boolean | undefined;
    displayMode?: "auto" | "buttons" | "listbox" | undefined;
    optionSort?: "manual" | "alphabetical" | undefined;
}, {
    options?: {
        value: string;
        id: string;
        label: string;
    }[] | undefined;
    variableName?: string | undefined;
    question?: string | undefined;
    multiSelect?: boolean | undefined;
    separator?: string | undefined;
    randomPick?: boolean | undefined;
    displayMode?: "auto" | "buttons" | "listbox" | undefined;
    optionSort?: "manual" | "alphabetical" | undefined;
}>;
export declare const createPromptGroupSchema: z.ZodObject<{
    presetId: z.ZodString;
    name: z.ZodString;
    parentGroupId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    order: z.ZodDefault<z.ZodNumber>;
    enabled: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    name: string;
    order: number;
    presetId: string;
    parentGroupId: string | null;
}, {
    name: string;
    presetId: string;
    enabled?: boolean | undefined;
    order?: number | undefined;
    parentGroupId?: string | null | undefined;
}>;
export declare const updatePromptGroupSchema: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    parentGroupId: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
}, "strip", z.ZodTypeAny, {
    enabled?: boolean | undefined;
    name?: string | undefined;
    order?: number | undefined;
    parentGroupId?: string | null | undefined;
}, {
    enabled?: boolean | undefined;
    name?: string | undefined;
    order?: number | undefined;
    parentGroupId?: string | null | undefined;
}>;
export declare const createPromptPresetSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    conversationPrompt: z.ZodDefault<z.ZodString>;
    gamePrompt: z.ZodDefault<z.ZodString>;
    variableGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        label: z.ZodString;
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: string;
        }, {
            value: string;
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        label: string;
    }, {
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        label: string;
    }>, "many">>;
    variableValues: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    parameters: z.ZodDefault<z.ZodObject<{
        temperature: z.ZodDefault<z.ZodNumber>;
        topP: z.ZodDefault<z.ZodNumber>;
        topK: z.ZodDefault<z.ZodNumber>;
        minP: z.ZodDefault<z.ZodNumber>;
        maxTokens: z.ZodDefault<z.ZodNumber>;
        maxContext: z.ZodDefault<z.ZodNumber>;
        frequencyPenalty: z.ZodDefault<z.ZodNumber>;
        presencePenalty: z.ZodDefault<z.ZodNumber>;
        reasoningEffort: z.ZodDefault<z.ZodNullable<z.ZodEnum<["low", "medium", "high", "xhigh", "maximum"]>>>;
        verbosity: z.ZodDefault<z.ZodNullable<z.ZodEnum<["low", "medium", "high"]>>>;
        serviceTier: z.ZodDefault<z.ZodNullable<z.ZodEnum<["flex", "priority"]>>>;
        assistantPrefill: z.ZodDefault<z.ZodString>;
        customThinkingTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
            open: z.ZodString;
            close: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            open: string;
            close: string;
        }, {
            open: string;
            close: string;
        }>, "many">>;
        customParameters: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabledParameters: z.ZodOptional<z.ZodObject<{
            temperature: z.ZodOptional<z.ZodBoolean>;
            maxTokens: z.ZodOptional<z.ZodBoolean>;
            topP: z.ZodOptional<z.ZodBoolean>;
            topK: z.ZodOptional<z.ZodBoolean>;
            frequencyPenalty: z.ZodOptional<z.ZodBoolean>;
            presencePenalty: z.ZodOptional<z.ZodBoolean>;
            reasoningEffort: z.ZodOptional<z.ZodBoolean>;
            verbosity: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        }, {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        }>>;
        squashSystemMessages: z.ZodDefault<z.ZodBoolean>;
        showThoughts: z.ZodDefault<z.ZodBoolean>;
        useMaxContext: z.ZodDefault<z.ZodBoolean>;
        stopSequences: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        strictRoleFormatting: z.ZodDefault<z.ZodBoolean>;
        singleUserMessage: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        temperature: number;
        maxTokens: number;
        topP: number;
        topK: number;
        frequencyPenalty: number;
        presencePenalty: number;
        reasoningEffort: "maximum" | "medium" | "low" | "high" | "xhigh" | null;
        verbosity: "medium" | "low" | "high" | null;
        minP: number;
        maxContext: number;
        serviceTier: "priority" | "flex" | null;
        assistantPrefill: string;
        customThinkingTags: {
            open: string;
            close: string;
        }[];
        customParameters: Record<string, unknown>;
        squashSystemMessages: boolean;
        showThoughts: boolean;
        useMaxContext: boolean;
        stopSequences: string[];
        strictRoleFormatting: boolean;
        singleUserMessage: boolean;
        enabledParameters?: {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        } | undefined;
    }, {
        temperature?: number | undefined;
        maxTokens?: number | undefined;
        topP?: number | undefined;
        topK?: number | undefined;
        frequencyPenalty?: number | undefined;
        presencePenalty?: number | undefined;
        reasoningEffort?: "maximum" | "medium" | "low" | "high" | "xhigh" | null | undefined;
        verbosity?: "medium" | "low" | "high" | null | undefined;
        minP?: number | undefined;
        maxContext?: number | undefined;
        serviceTier?: "priority" | "flex" | null | undefined;
        assistantPrefill?: string | undefined;
        customThinkingTags?: {
            open: string;
            close: string;
        }[] | undefined;
        customParameters?: Record<string, unknown> | undefined;
        enabledParameters?: {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        } | undefined;
        squashSystemMessages?: boolean | undefined;
        showThoughts?: boolean | undefined;
        useMaxContext?: boolean | undefined;
        stopSequences?: string[] | undefined;
        strictRoleFormatting?: boolean | undefined;
        singleUserMessage?: boolean | undefined;
    }>>;
    wrapFormat: z.ZodDefault<z.ZodEnum<["xml", "markdown", "none"]>>;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    author: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    conversationPrompt: string;
    gamePrompt: string;
    variableGroups: {
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        label: string;
    }[];
    variableValues: Record<string, string>;
    parameters: {
        temperature: number;
        maxTokens: number;
        topP: number;
        topK: number;
        frequencyPenalty: number;
        presencePenalty: number;
        reasoningEffort: "maximum" | "medium" | "low" | "high" | "xhigh" | null;
        verbosity: "medium" | "low" | "high" | null;
        minP: number;
        maxContext: number;
        serviceTier: "priority" | "flex" | null;
        assistantPrefill: string;
        customThinkingTags: {
            open: string;
            close: string;
        }[];
        customParameters: Record<string, unknown>;
        squashSystemMessages: boolean;
        showThoughts: boolean;
        useMaxContext: boolean;
        stopSequences: string[];
        strictRoleFormatting: boolean;
        singleUserMessage: boolean;
        enabledParameters?: {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        } | undefined;
    };
    wrapFormat: "none" | "xml" | "markdown";
    isDefault: boolean;
    author: string;
}, {
    name: string;
    description?: string | undefined;
    conversationPrompt?: string | undefined;
    gamePrompt?: string | undefined;
    variableGroups?: {
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        label: string;
    }[] | undefined;
    variableValues?: Record<string, string> | undefined;
    parameters?: {
        temperature?: number | undefined;
        maxTokens?: number | undefined;
        topP?: number | undefined;
        topK?: number | undefined;
        frequencyPenalty?: number | undefined;
        presencePenalty?: number | undefined;
        reasoningEffort?: "maximum" | "medium" | "low" | "high" | "xhigh" | null | undefined;
        verbosity?: "medium" | "low" | "high" | null | undefined;
        minP?: number | undefined;
        maxContext?: number | undefined;
        serviceTier?: "priority" | "flex" | null | undefined;
        assistantPrefill?: string | undefined;
        customThinkingTags?: {
            open: string;
            close: string;
        }[] | undefined;
        customParameters?: Record<string, unknown> | undefined;
        enabledParameters?: {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        } | undefined;
        squashSystemMessages?: boolean | undefined;
        showThoughts?: boolean | undefined;
        useMaxContext?: boolean | undefined;
        stopSequences?: string[] | undefined;
        strictRoleFormatting?: boolean | undefined;
        singleUserMessage?: boolean | undefined;
    } | undefined;
    wrapFormat?: "none" | "xml" | "markdown" | undefined;
    isDefault?: boolean | undefined;
    author?: string | undefined;
}>;
export declare const updatePromptPresetSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    conversationPrompt: z.ZodOptional<z.ZodString>;
    gamePrompt: z.ZodOptional<z.ZodString>;
    sectionOrder: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    groupOrder: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    variableGroups: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        label: z.ZodString;
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: string;
        }, {
            value: string;
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        label: string;
    }, {
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        label: string;
    }>, "many">>;
    variableValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    parameters: z.ZodOptional<z.ZodObject<{
        temperature: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        topP: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        topK: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        minP: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        maxTokens: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        maxContext: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        frequencyPenalty: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        presencePenalty: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        reasoningEffort: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodEnum<["low", "medium", "high", "xhigh", "maximum"]>>>>;
        verbosity: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodEnum<["low", "medium", "high"]>>>>;
        serviceTier: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodEnum<["flex", "priority"]>>>>;
        assistantPrefill: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        customThinkingTags: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
            open: z.ZodString;
            close: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            open: string;
            close: string;
        }, {
            open: string;
            close: string;
        }>, "many">>>;
        customParameters: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        enabledParameters: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            temperature: z.ZodOptional<z.ZodBoolean>;
            maxTokens: z.ZodOptional<z.ZodBoolean>;
            topP: z.ZodOptional<z.ZodBoolean>;
            topK: z.ZodOptional<z.ZodBoolean>;
            frequencyPenalty: z.ZodOptional<z.ZodBoolean>;
            presencePenalty: z.ZodOptional<z.ZodBoolean>;
            reasoningEffort: z.ZodOptional<z.ZodBoolean>;
            verbosity: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        }, {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        }>>>;
        squashSystemMessages: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        showThoughts: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        useMaxContext: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        stopSequences: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
        strictRoleFormatting: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        singleUserMessage: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        temperature?: number | undefined;
        maxTokens?: number | undefined;
        topP?: number | undefined;
        topK?: number | undefined;
        frequencyPenalty?: number | undefined;
        presencePenalty?: number | undefined;
        reasoningEffort?: "maximum" | "medium" | "low" | "high" | "xhigh" | null | undefined;
        verbosity?: "medium" | "low" | "high" | null | undefined;
        minP?: number | undefined;
        maxContext?: number | undefined;
        serviceTier?: "priority" | "flex" | null | undefined;
        assistantPrefill?: string | undefined;
        customThinkingTags?: {
            open: string;
            close: string;
        }[] | undefined;
        customParameters?: Record<string, unknown> | undefined;
        enabledParameters?: {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        } | undefined;
        squashSystemMessages?: boolean | undefined;
        showThoughts?: boolean | undefined;
        useMaxContext?: boolean | undefined;
        stopSequences?: string[] | undefined;
        strictRoleFormatting?: boolean | undefined;
        singleUserMessage?: boolean | undefined;
    }, {
        temperature?: number | undefined;
        maxTokens?: number | undefined;
        topP?: number | undefined;
        topK?: number | undefined;
        frequencyPenalty?: number | undefined;
        presencePenalty?: number | undefined;
        reasoningEffort?: "maximum" | "medium" | "low" | "high" | "xhigh" | null | undefined;
        verbosity?: "medium" | "low" | "high" | null | undefined;
        minP?: number | undefined;
        maxContext?: number | undefined;
        serviceTier?: "priority" | "flex" | null | undefined;
        assistantPrefill?: string | undefined;
        customThinkingTags?: {
            open: string;
            close: string;
        }[] | undefined;
        customParameters?: Record<string, unknown> | undefined;
        enabledParameters?: {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        } | undefined;
        squashSystemMessages?: boolean | undefined;
        showThoughts?: boolean | undefined;
        useMaxContext?: boolean | undefined;
        stopSequences?: string[] | undefined;
        strictRoleFormatting?: boolean | undefined;
        singleUserMessage?: boolean | undefined;
    }>>;
    wrapFormat: z.ZodOptional<z.ZodEnum<["xml", "markdown", "none"]>>;
    author: z.ZodOptional<z.ZodString>;
    defaultChoices: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    conversationPrompt?: string | undefined;
    gamePrompt?: string | undefined;
    variableGroups?: {
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        label: string;
    }[] | undefined;
    variableValues?: Record<string, string> | undefined;
    parameters?: {
        temperature?: number | undefined;
        maxTokens?: number | undefined;
        topP?: number | undefined;
        topK?: number | undefined;
        frequencyPenalty?: number | undefined;
        presencePenalty?: number | undefined;
        reasoningEffort?: "maximum" | "medium" | "low" | "high" | "xhigh" | null | undefined;
        verbosity?: "medium" | "low" | "high" | null | undefined;
        minP?: number | undefined;
        maxContext?: number | undefined;
        serviceTier?: "priority" | "flex" | null | undefined;
        assistantPrefill?: string | undefined;
        customThinkingTags?: {
            open: string;
            close: string;
        }[] | undefined;
        customParameters?: Record<string, unknown> | undefined;
        enabledParameters?: {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        } | undefined;
        squashSystemMessages?: boolean | undefined;
        showThoughts?: boolean | undefined;
        useMaxContext?: boolean | undefined;
        stopSequences?: string[] | undefined;
        strictRoleFormatting?: boolean | undefined;
        singleUserMessage?: boolean | undefined;
    } | undefined;
    wrapFormat?: "none" | "xml" | "markdown" | undefined;
    author?: string | undefined;
    sectionOrder?: string[] | undefined;
    groupOrder?: string[] | undefined;
    defaultChoices?: Record<string, string | string[]> | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    conversationPrompt?: string | undefined;
    gamePrompt?: string | undefined;
    variableGroups?: {
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        label: string;
    }[] | undefined;
    variableValues?: Record<string, string> | undefined;
    parameters?: {
        temperature?: number | undefined;
        maxTokens?: number | undefined;
        topP?: number | undefined;
        topK?: number | undefined;
        frequencyPenalty?: number | undefined;
        presencePenalty?: number | undefined;
        reasoningEffort?: "maximum" | "medium" | "low" | "high" | "xhigh" | null | undefined;
        verbosity?: "medium" | "low" | "high" | null | undefined;
        minP?: number | undefined;
        maxContext?: number | undefined;
        serviceTier?: "priority" | "flex" | null | undefined;
        assistantPrefill?: string | undefined;
        customThinkingTags?: {
            open: string;
            close: string;
        }[] | undefined;
        customParameters?: Record<string, unknown> | undefined;
        enabledParameters?: {
            temperature?: boolean | undefined;
            maxTokens?: boolean | undefined;
            topP?: boolean | undefined;
            topK?: boolean | undefined;
            frequencyPenalty?: boolean | undefined;
            presencePenalty?: boolean | undefined;
            reasoningEffort?: boolean | undefined;
            verbosity?: boolean | undefined;
        } | undefined;
        squashSystemMessages?: boolean | undefined;
        showThoughts?: boolean | undefined;
        useMaxContext?: boolean | undefined;
        stopSequences?: string[] | undefined;
        strictRoleFormatting?: boolean | undefined;
        singleUserMessage?: boolean | undefined;
    } | undefined;
    wrapFormat?: "none" | "xml" | "markdown" | undefined;
    author?: string | undefined;
    sectionOrder?: string[] | undefined;
    groupOrder?: string[] | undefined;
    defaultChoices?: Record<string, string | string[]> | undefined;
}>;
export declare const createPromptSectionSchema: z.ZodObject<{
    presetId: z.ZodString;
    identifier: z.ZodString;
    name: z.ZodString;
    content: z.ZodDefault<z.ZodString>;
    role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
    enabled: z.ZodDefault<z.ZodBoolean>;
    isMarker: z.ZodDefault<z.ZodBoolean>;
    groupId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    markerConfig: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        type: z.ZodEnum<["character", "lorebook", "persona", "chat_history", "chat_summary", "world_info_before", "world_info_after", "dialogue_examples", "agent_data"]>;
        characterFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        lorebookFormat: z.ZodOptional<z.ZodEnum<["full", "worldbook_only", "character_only"]>>;
        chatHistoryOptions: z.ZodOptional<z.ZodObject<{
            maxMessages: z.ZodOptional<z.ZodNumber>;
            includeSystemMessages: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        }, {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        }>>;
        agentType: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
        agentType?: string | undefined;
        characterFields?: string[] | undefined;
        lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
        chatHistoryOptions?: {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        } | undefined;
    }, {
        type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
        agentType?: string | undefined;
        characterFields?: string[] | undefined;
        lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
        chatHistoryOptions?: {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        } | undefined;
    }>>>;
    injectionPosition: z.ZodDefault<z.ZodEnum<["ordered", "depth"]>>;
    injectionDepth: z.ZodDefault<z.ZodNumber>;
    injectionOrder: z.ZodDefault<z.ZodNumber>;
    forbidOverrides: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    name: string;
    content: string;
    groupId: string | null;
    role: "system" | "user" | "assistant";
    presetId: string;
    identifier: string;
    isMarker: boolean;
    markerConfig: {
        type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
        agentType?: string | undefined;
        characterFields?: string[] | undefined;
        lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
        chatHistoryOptions?: {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        } | undefined;
    } | null;
    injectionPosition: "depth" | "ordered";
    injectionDepth: number;
    injectionOrder: number;
    forbidOverrides: boolean;
}, {
    name: string;
    presetId: string;
    identifier: string;
    enabled?: boolean | undefined;
    content?: string | undefined;
    groupId?: string | null | undefined;
    role?: "system" | "user" | "assistant" | undefined;
    isMarker?: boolean | undefined;
    markerConfig?: {
        type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
        agentType?: string | undefined;
        characterFields?: string[] | undefined;
        lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
        chatHistoryOptions?: {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        } | undefined;
    } | null | undefined;
    injectionPosition?: "depth" | "ordered" | undefined;
    injectionDepth?: number | undefined;
    injectionOrder?: number | undefined;
    forbidOverrides?: boolean | undefined;
}>;
export declare const updatePromptSectionSchema: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    groupId: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
    role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
    markerConfig: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodObject<{
        type: z.ZodEnum<["character", "lorebook", "persona", "chat_history", "chat_summary", "world_info_before", "world_info_after", "dialogue_examples", "agent_data"]>;
        characterFields: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        lorebookFormat: z.ZodOptional<z.ZodEnum<["full", "worldbook_only", "character_only"]>>;
        chatHistoryOptions: z.ZodOptional<z.ZodObject<{
            maxMessages: z.ZodOptional<z.ZodNumber>;
            includeSystemMessages: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        }, {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        }>>;
        agentType: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
        agentType?: string | undefined;
        characterFields?: string[] | undefined;
        lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
        chatHistoryOptions?: {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        } | undefined;
    }, {
        type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
        agentType?: string | undefined;
        characterFields?: string[] | undefined;
        lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
        chatHistoryOptions?: {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        } | undefined;
    }>>>>;
    injectionPosition: z.ZodOptional<z.ZodDefault<z.ZodEnum<["ordered", "depth"]>>>;
    injectionDepth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    injectionOrder: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    forbidOverrides: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    enabled?: boolean | undefined;
    name?: string | undefined;
    content?: string | undefined;
    groupId?: string | null | undefined;
    role?: "system" | "user" | "assistant" | undefined;
    markerConfig?: {
        type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
        agentType?: string | undefined;
        characterFields?: string[] | undefined;
        lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
        chatHistoryOptions?: {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        } | undefined;
    } | null | undefined;
    injectionPosition?: "depth" | "ordered" | undefined;
    injectionDepth?: number | undefined;
    injectionOrder?: number | undefined;
    forbidOverrides?: boolean | undefined;
}, {
    enabled?: boolean | undefined;
    name?: string | undefined;
    content?: string | undefined;
    groupId?: string | null | undefined;
    role?: "system" | "user" | "assistant" | undefined;
    markerConfig?: {
        type: "character" | "lorebook" | "persona" | "chat_history" | "chat_summary" | "world_info_before" | "world_info_after" | "dialogue_examples" | "agent_data";
        agentType?: string | undefined;
        characterFields?: string[] | undefined;
        lorebookFormat?: "full" | "worldbook_only" | "character_only" | undefined;
        chatHistoryOptions?: {
            maxMessages?: number | undefined;
            includeSystemMessages?: boolean | undefined;
        } | undefined;
    } | null | undefined;
    injectionPosition?: "depth" | "ordered" | undefined;
    injectionDepth?: number | undefined;
    injectionOrder?: number | undefined;
    forbidOverrides?: boolean | undefined;
}>;
export type CreatePromptPresetInput = z.input<typeof createPromptPresetSchema>;
export type UpdatePromptPresetInput = z.infer<typeof updatePromptPresetSchema>;
export type CreatePromptSectionInput = z.input<typeof createPromptSectionSchema>;
export type UpdatePromptSectionInput = z.infer<typeof updatePromptSectionSchema>;
export type CreatePromptGroupInput = z.input<typeof createPromptGroupSchema>;
export type UpdatePromptGroupInput = z.infer<typeof updatePromptGroupSchema>;
export type CreateChoiceBlockInput = z.infer<typeof createChoiceBlockSchema>;
export type UpdateChoiceBlockInput = z.infer<typeof updateChoiceBlockSchema>;
export type GenerationParametersInput = z.infer<typeof generationParametersSchema>;
//# sourceMappingURL=prompt.schema.d.ts.map