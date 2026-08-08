import { z } from "zod";
export declare const depthPromptSchema: z.ZodObject<{
    prompt: z.ZodDefault<z.ZodString>;
    depth: z.ZodDefault<z.ZodNumber>;
    role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
}, "strip", z.ZodTypeAny, {
    role: "system" | "user" | "assistant";
    prompt: string;
    depth: number;
}, {
    role?: "system" | "user" | "assistant" | undefined;
    prompt?: string | undefined;
    depth?: number | undefined;
}>;
/** Conversation-mode behavior directive insertion strategy. */
export declare const convoBehaviorInsertionStrategySchema: z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>;
/** Conversation-mode-only behavior directive. */
export declare const convoBehaviorConfigSchema: z.ZodObject<{
    instruction: z.ZodDefault<z.ZodString>;
    insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
}, "strip", z.ZodTypeAny, {
    instruction: string;
    insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
}, {
    instruction?: string | undefined;
    insertionStrategy?: unknown;
}>;
export declare const characterExtensionsSchema: z.ZodObject<{
    talkativeness: z.ZodDefault<z.ZodNumber>;
    fav: z.ZodDefault<z.ZodBoolean>;
    world: z.ZodDefault<z.ZodString>;
    depth_prompt: z.ZodDefault<z.ZodObject<{
        prompt: z.ZodDefault<z.ZodString>;
        depth: z.ZodDefault<z.ZodNumber>;
        role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
    }, "strip", z.ZodTypeAny, {
        role: "system" | "user" | "assistant";
        prompt: string;
        depth: number;
    }, {
        role?: "system" | "user" | "assistant" | undefined;
        prompt?: string | undefined;
        depth?: number | undefined;
    }>>;
    backstory: z.ZodDefault<z.ZodString>;
    appearance: z.ZodDefault<z.ZodString>;
    convoDisplayName: z.ZodOptional<z.ZodString>;
    convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
    aboutMe: z.ZodOptional<z.ZodString>;
    convoBehavior: z.ZodOptional<z.ZodObject<{
        instruction: z.ZodDefault<z.ZodString>;
        insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
    }, "strip", z.ZodTypeAny, {
        instruction: string;
        insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
    }, {
        instruction?: string | undefined;
        insertionStrategy?: unknown;
    }>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    talkativeness: z.ZodDefault<z.ZodNumber>;
    fav: z.ZodDefault<z.ZodBoolean>;
    world: z.ZodDefault<z.ZodString>;
    depth_prompt: z.ZodDefault<z.ZodObject<{
        prompt: z.ZodDefault<z.ZodString>;
        depth: z.ZodDefault<z.ZodNumber>;
        role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
    }, "strip", z.ZodTypeAny, {
        role: "system" | "user" | "assistant";
        prompt: string;
        depth: number;
    }, {
        role?: "system" | "user" | "assistant" | undefined;
        prompt?: string | undefined;
        depth?: number | undefined;
    }>>;
    backstory: z.ZodDefault<z.ZodString>;
    appearance: z.ZodDefault<z.ZodString>;
    convoDisplayName: z.ZodOptional<z.ZodString>;
    convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
    aboutMe: z.ZodOptional<z.ZodString>;
    convoBehavior: z.ZodOptional<z.ZodObject<{
        instruction: z.ZodDefault<z.ZodString>;
        insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
    }, "strip", z.ZodTypeAny, {
        instruction: string;
        insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
    }, {
        instruction?: string | undefined;
        insertionStrategy?: unknown;
    }>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    talkativeness: z.ZodDefault<z.ZodNumber>;
    fav: z.ZodDefault<z.ZodBoolean>;
    world: z.ZodDefault<z.ZodString>;
    depth_prompt: z.ZodDefault<z.ZodObject<{
        prompt: z.ZodDefault<z.ZodString>;
        depth: z.ZodDefault<z.ZodNumber>;
        role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
    }, "strip", z.ZodTypeAny, {
        role: "system" | "user" | "assistant";
        prompt: string;
        depth: number;
    }, {
        role?: "system" | "user" | "assistant" | undefined;
        prompt?: string | undefined;
        depth?: number | undefined;
    }>>;
    backstory: z.ZodDefault<z.ZodString>;
    appearance: z.ZodDefault<z.ZodString>;
    convoDisplayName: z.ZodOptional<z.ZodString>;
    convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
    aboutMe: z.ZodOptional<z.ZodString>;
    convoBehavior: z.ZodOptional<z.ZodObject<{
        instruction: z.ZodDefault<z.ZodString>;
        insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
    }, "strip", z.ZodTypeAny, {
        instruction: string;
        insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
    }, {
        instruction?: string | undefined;
        insertionStrategy?: unknown;
    }>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const characterBookEntrySchema: z.ZodObject<{
    keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    content: z.ZodDefault<z.ZodString>;
    extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    enabled: z.ZodDefault<z.ZodBoolean>;
    insertion_order: z.ZodDefault<z.ZodNumber>;
    case_sensitive: z.ZodDefault<z.ZodBoolean>;
    name: z.ZodDefault<z.ZodString>;
    priority: z.ZodDefault<z.ZodNumber>;
    id: z.ZodDefault<z.ZodNumber>;
    comment: z.ZodDefault<z.ZodString>;
    selective: z.ZodDefault<z.ZodBoolean>;
    secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    constant: z.ZodDefault<z.ZodBoolean>;
    position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
    depth: z.ZodOptional<z.ZodNumber>;
    role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    content: z.ZodDefault<z.ZodString>;
    extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    enabled: z.ZodDefault<z.ZodBoolean>;
    insertion_order: z.ZodDefault<z.ZodNumber>;
    case_sensitive: z.ZodDefault<z.ZodBoolean>;
    name: z.ZodDefault<z.ZodString>;
    priority: z.ZodDefault<z.ZodNumber>;
    id: z.ZodDefault<z.ZodNumber>;
    comment: z.ZodDefault<z.ZodString>;
    selective: z.ZodDefault<z.ZodBoolean>;
    secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    constant: z.ZodDefault<z.ZodBoolean>;
    position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
    depth: z.ZodOptional<z.ZodNumber>;
    role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    content: z.ZodDefault<z.ZodString>;
    extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    enabled: z.ZodDefault<z.ZodBoolean>;
    insertion_order: z.ZodDefault<z.ZodNumber>;
    case_sensitive: z.ZodDefault<z.ZodBoolean>;
    name: z.ZodDefault<z.ZodString>;
    priority: z.ZodDefault<z.ZodNumber>;
    id: z.ZodDefault<z.ZodNumber>;
    comment: z.ZodDefault<z.ZodString>;
    selective: z.ZodDefault<z.ZodBoolean>;
    secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    constant: z.ZodDefault<z.ZodBoolean>;
    position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
    depth: z.ZodOptional<z.ZodNumber>;
    role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const characterBookSchema: z.ZodObject<{
    name: z.ZodDefault<z.ZodString>;
    description: z.ZodDefault<z.ZodString>;
    scan_depth: z.ZodDefault<z.ZodNumber>;
    token_budget: z.ZodDefault<z.ZodNumber>;
    recursive_scanning: z.ZodDefault<z.ZodBoolean>;
    extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodDefault<z.ZodString>;
    description: z.ZodDefault<z.ZodString>;
    scan_depth: z.ZodDefault<z.ZodNumber>;
    token_budget: z.ZodDefault<z.ZodNumber>;
    recursive_scanning: z.ZodDefault<z.ZodBoolean>;
    extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodDefault<z.ZodString>;
    description: z.ZodDefault<z.ZodString>;
    scan_depth: z.ZodDefault<z.ZodNumber>;
    token_budget: z.ZodDefault<z.ZodNumber>;
    recursive_scanning: z.ZodDefault<z.ZodBoolean>;
    extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        content: z.ZodDefault<z.ZodString>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        insertion_order: z.ZodDefault<z.ZodNumber>;
        case_sensitive: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodDefault<z.ZodString>;
        priority: z.ZodDefault<z.ZodNumber>;
        id: z.ZodDefault<z.ZodNumber>;
        comment: z.ZodDefault<z.ZodString>;
        selective: z.ZodDefault<z.ZodBoolean>;
        secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        constant: z.ZodDefault<z.ZodBoolean>;
        position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
        depth: z.ZodOptional<z.ZodNumber>;
        role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
export declare const characterDataSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    personality: z.ZodDefault<z.ZodString>;
    scenario: z.ZodDefault<z.ZodString>;
    first_mes: z.ZodDefault<z.ZodString>;
    mes_example: z.ZodDefault<z.ZodString>;
    creator_notes: z.ZodDefault<z.ZodString>;
    system_prompt: z.ZodDefault<z.ZodString>;
    post_history_instructions: z.ZodDefault<z.ZodString>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    creator: z.ZodDefault<z.ZodString>;
    character_version: z.ZodDefault<z.ZodString>;
    alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    extensions: z.ZodDefault<z.ZodObject<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, z.ZodTypeAny, "passthrough">>>;
    character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    personality: z.ZodDefault<z.ZodString>;
    scenario: z.ZodDefault<z.ZodString>;
    first_mes: z.ZodDefault<z.ZodString>;
    mes_example: z.ZodDefault<z.ZodString>;
    creator_notes: z.ZodDefault<z.ZodString>;
    system_prompt: z.ZodDefault<z.ZodString>;
    post_history_instructions: z.ZodDefault<z.ZodString>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    creator: z.ZodDefault<z.ZodString>;
    character_version: z.ZodDefault<z.ZodString>;
    alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    extensions: z.ZodDefault<z.ZodObject<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, z.ZodTypeAny, "passthrough">>>;
    character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    personality: z.ZodDefault<z.ZodString>;
    scenario: z.ZodDefault<z.ZodString>;
    first_mes: z.ZodDefault<z.ZodString>;
    mes_example: z.ZodDefault<z.ZodString>;
    creator_notes: z.ZodDefault<z.ZodString>;
    system_prompt: z.ZodDefault<z.ZodString>;
    post_history_instructions: z.ZodDefault<z.ZodString>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    creator: z.ZodDefault<z.ZodString>;
    character_version: z.ZodDefault<z.ZodString>;
    alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    extensions: z.ZodDefault<z.ZodObject<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        talkativeness: z.ZodDefault<z.ZodNumber>;
        fav: z.ZodDefault<z.ZodBoolean>;
        world: z.ZodDefault<z.ZodString>;
        depth_prompt: z.ZodDefault<z.ZodObject<{
            prompt: z.ZodDefault<z.ZodString>;
            depth: z.ZodDefault<z.ZodNumber>;
            role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
        }, "strip", z.ZodTypeAny, {
            role: "system" | "user" | "assistant";
            prompt: string;
            depth: number;
        }, {
            role?: "system" | "user" | "assistant" | undefined;
            prompt?: string | undefined;
            depth?: number | undefined;
        }>>;
        backstory: z.ZodDefault<z.ZodString>;
        appearance: z.ZodDefault<z.ZodString>;
        convoDisplayName: z.ZodOptional<z.ZodString>;
        convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
        aboutMe: z.ZodOptional<z.ZodString>;
        convoBehavior: z.ZodOptional<z.ZodObject<{
            instruction: z.ZodDefault<z.ZodString>;
            insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
        }, "strip", z.ZodTypeAny, {
            instruction: string;
            insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
        }, {
            instruction?: string | undefined;
            insertionStrategy?: unknown;
        }>>;
    }, z.ZodTypeAny, "passthrough">>>;
    character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodDefault<z.ZodString>;
        description: z.ZodDefault<z.ZodString>;
        scan_depth: z.ZodDefault<z.ZodNumber>;
        token_budget: z.ZodDefault<z.ZodNumber>;
        recursive_scanning: z.ZodDefault<z.ZodBoolean>;
        extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            content: z.ZodDefault<z.ZodString>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            enabled: z.ZodDefault<z.ZodBoolean>;
            insertion_order: z.ZodDefault<z.ZodNumber>;
            case_sensitive: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodDefault<z.ZodString>;
            priority: z.ZodDefault<z.ZodNumber>;
            id: z.ZodDefault<z.ZodNumber>;
            comment: z.ZodDefault<z.ZodString>;
            selective: z.ZodDefault<z.ZodBoolean>;
            secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            constant: z.ZodDefault<z.ZodBoolean>;
            position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
            depth: z.ZodOptional<z.ZodNumber>;
            role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const characterCardV2Schema: z.ZodObject<{
    spec: z.ZodLiteral<"chara_card_v2">;
    spec_version: z.ZodLiteral<"2.0">;
    data: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        personality: z.ZodDefault<z.ZodString>;
        scenario: z.ZodDefault<z.ZodString>;
        first_mes: z.ZodDefault<z.ZodString>;
        mes_example: z.ZodDefault<z.ZodString>;
        creator_notes: z.ZodDefault<z.ZodString>;
        system_prompt: z.ZodDefault<z.ZodString>;
        post_history_instructions: z.ZodDefault<z.ZodString>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        creator: z.ZodDefault<z.ZodString>;
        character_version: z.ZodDefault<z.ZodString>;
        alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        extensions: z.ZodDefault<z.ZodObject<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        personality: z.ZodDefault<z.ZodString>;
        scenario: z.ZodDefault<z.ZodString>;
        first_mes: z.ZodDefault<z.ZodString>;
        mes_example: z.ZodDefault<z.ZodString>;
        creator_notes: z.ZodDefault<z.ZodString>;
        system_prompt: z.ZodDefault<z.ZodString>;
        post_history_instructions: z.ZodDefault<z.ZodString>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        creator: z.ZodDefault<z.ZodString>;
        character_version: z.ZodDefault<z.ZodString>;
        alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        extensions: z.ZodDefault<z.ZodObject<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        personality: z.ZodDefault<z.ZodString>;
        scenario: z.ZodDefault<z.ZodString>;
        first_mes: z.ZodDefault<z.ZodString>;
        mes_example: z.ZodDefault<z.ZodString>;
        creator_notes: z.ZodDefault<z.ZodString>;
        system_prompt: z.ZodDefault<z.ZodString>;
        post_history_instructions: z.ZodDefault<z.ZodString>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        creator: z.ZodDefault<z.ZodString>;
        character_version: z.ZodDefault<z.ZodString>;
        alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        extensions: z.ZodDefault<z.ZodObject<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, z.ZodTypeAny, "passthrough">>;
}, "strip", z.ZodTypeAny, {
    data: {
        name: string;
        scenario: string;
        description: string;
        personality: string;
        first_mes: string;
        mes_example: string;
        creator_notes: string;
        system_prompt: string;
        post_history_instructions: string;
        extensions: {
            backstory: string;
            appearance: string;
            talkativeness: number;
            fav: boolean;
            world: string;
            depth_prompt: {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            };
            aboutMe?: string | undefined;
            convoDisplayName?: string | undefined;
            convoDisplayNameInCard?: boolean | undefined;
            convoBehavior?: {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            } | undefined;
        } & {
            [k: string]: unknown;
        };
        tags: string[];
        creator: string;
        character_version: string;
        alternate_greetings: string[];
        character_book: z.objectOutputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough"> | null;
    } & {
        [k: string]: unknown;
    };
    spec: "chara_card_v2";
    spec_version: "2.0";
}, {
    data: {
        name: string;
        scenario?: string | undefined;
        description?: string | undefined;
        personality?: string | undefined;
        first_mes?: string | undefined;
        mes_example?: string | undefined;
        creator_notes?: string | undefined;
        system_prompt?: string | undefined;
        post_history_instructions?: string | undefined;
        extensions?: z.objectInputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough"> | undefined;
        tags?: string[] | undefined;
        creator?: string | undefined;
        character_version?: string | undefined;
        alternate_greetings?: string[] | undefined;
        character_book?: z.objectInputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough"> | null | undefined;
    } & {
        [k: string]: unknown;
    };
    spec: "chara_card_v2";
    spec_version: "2.0";
}>;
export declare const createCharacterSchema: z.ZodObject<{
    data: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        personality: z.ZodDefault<z.ZodString>;
        scenario: z.ZodDefault<z.ZodString>;
        first_mes: z.ZodDefault<z.ZodString>;
        mes_example: z.ZodDefault<z.ZodString>;
        creator_notes: z.ZodDefault<z.ZodString>;
        system_prompt: z.ZodDefault<z.ZodString>;
        post_history_instructions: z.ZodDefault<z.ZodString>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        creator: z.ZodDefault<z.ZodString>;
        character_version: z.ZodDefault<z.ZodString>;
        alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        extensions: z.ZodDefault<z.ZodObject<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        personality: z.ZodDefault<z.ZodString>;
        scenario: z.ZodDefault<z.ZodString>;
        first_mes: z.ZodDefault<z.ZodString>;
        mes_example: z.ZodDefault<z.ZodString>;
        creator_notes: z.ZodDefault<z.ZodString>;
        system_prompt: z.ZodDefault<z.ZodString>;
        post_history_instructions: z.ZodDefault<z.ZodString>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        creator: z.ZodDefault<z.ZodString>;
        character_version: z.ZodDefault<z.ZodString>;
        alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        extensions: z.ZodDefault<z.ZodObject<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        personality: z.ZodDefault<z.ZodString>;
        scenario: z.ZodDefault<z.ZodString>;
        first_mes: z.ZodDefault<z.ZodString>;
        mes_example: z.ZodDefault<z.ZodString>;
        creator_notes: z.ZodDefault<z.ZodString>;
        system_prompt: z.ZodDefault<z.ZodString>;
        post_history_instructions: z.ZodDefault<z.ZodString>;
        tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        creator: z.ZodDefault<z.ZodString>;
        character_version: z.ZodDefault<z.ZodString>;
        alternate_greetings: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        extensions: z.ZodDefault<z.ZodObject<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodDefault<z.ZodNullable<z.ZodObject<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, z.ZodTypeAny, "passthrough">>;
}, "strip", z.ZodTypeAny, {
    data: {
        name: string;
        scenario: string;
        description: string;
        personality: string;
        first_mes: string;
        mes_example: string;
        creator_notes: string;
        system_prompt: string;
        post_history_instructions: string;
        extensions: {
            backstory: string;
            appearance: string;
            talkativeness: number;
            fav: boolean;
            world: string;
            depth_prompt: {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            };
            aboutMe?: string | undefined;
            convoDisplayName?: string | undefined;
            convoDisplayNameInCard?: boolean | undefined;
            convoBehavior?: {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            } | undefined;
        } & {
            [k: string]: unknown;
        };
        tags: string[];
        creator: string;
        character_version: string;
        alternate_greetings: string[];
        character_book: z.objectOutputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough"> | null;
    } & {
        [k: string]: unknown;
    };
}, {
    data: {
        name: string;
        scenario?: string | undefined;
        description?: string | undefined;
        personality?: string | undefined;
        first_mes?: string | undefined;
        mes_example?: string | undefined;
        creator_notes?: string | undefined;
        system_prompt?: string | undefined;
        post_history_instructions?: string | undefined;
        extensions?: z.objectInputType<{
            talkativeness: z.ZodDefault<z.ZodNumber>;
            fav: z.ZodDefault<z.ZodBoolean>;
            world: z.ZodDefault<z.ZodString>;
            depth_prompt: z.ZodDefault<z.ZodObject<{
                prompt: z.ZodDefault<z.ZodString>;
                depth: z.ZodDefault<z.ZodNumber>;
                role: z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>;
            }, "strip", z.ZodTypeAny, {
                role: "system" | "user" | "assistant";
                prompt: string;
                depth: number;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            backstory: z.ZodDefault<z.ZodString>;
            appearance: z.ZodDefault<z.ZodString>;
            convoDisplayName: z.ZodOptional<z.ZodString>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodBoolean>;
            aboutMe: z.ZodOptional<z.ZodString>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodDefault<z.ZodString>;
                insertionStrategy: z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>;
            }, "strip", z.ZodTypeAny, {
                instruction: string;
                insertionStrategy: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro";
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough"> | undefined;
        tags?: string[] | undefined;
        creator?: string | undefined;
        character_version?: string | undefined;
        alternate_greetings?: string[] | undefined;
        character_book?: z.objectInputType<{
            name: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            scan_depth: z.ZodDefault<z.ZodNumber>;
            token_budget: z.ZodDefault<z.ZodNumber>;
            recursive_scanning: z.ZodDefault<z.ZodBoolean>;
            extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            entries: z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough"> | null | undefined;
    } & {
        [k: string]: unknown;
    };
}>;
export declare const updateCharacterSchema: z.ZodObject<{
    data: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        personality: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        scenario: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        first_mes: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        mes_example: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        creator_notes: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        system_prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        post_history_instructions: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        tags: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
        creator: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        character_version: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        alternate_greetings: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    } & {
        extensions: z.ZodOptional<z.ZodObject<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        personality: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        scenario: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        first_mes: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        mes_example: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        creator_notes: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        system_prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        post_history_instructions: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        tags: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
        creator: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        character_version: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        alternate_greetings: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    } & {
        extensions: z.ZodOptional<z.ZodObject<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        personality: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        scenario: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        first_mes: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        mes_example: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        creator_notes: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        system_prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        post_history_instructions: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        tags: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
        creator: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        character_version: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        alternate_greetings: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    } & {
        extensions: z.ZodOptional<z.ZodObject<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough">>>;
        character_book: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, z.ZodTypeAny, "passthrough">>>>;
    }, z.ZodTypeAny, "passthrough">>;
}, "strip", z.ZodTypeAny, {
    data: {
        name?: string | undefined;
        scenario?: string | undefined;
        description?: string | undefined;
        personality?: string | undefined;
        first_mes?: string | undefined;
        mes_example?: string | undefined;
        creator_notes?: string | undefined;
        system_prompt?: string | undefined;
        post_history_instructions?: string | undefined;
        extensions?: z.objectOutputType<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough"> | undefined;
        tags?: string[] | undefined;
        creator?: string | undefined;
        character_version?: string | undefined;
        alternate_greetings?: string[] | undefined;
        character_book?: z.objectOutputType<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, z.ZodTypeAny, "passthrough"> | null | undefined;
    } & {
        [k: string]: unknown;
    };
}, {
    data: {
        name?: string | undefined;
        scenario?: string | undefined;
        description?: string | undefined;
        personality?: string | undefined;
        first_mes?: string | undefined;
        mes_example?: string | undefined;
        creator_notes?: string | undefined;
        system_prompt?: string | undefined;
        post_history_instructions?: string | undefined;
        extensions?: z.objectInputType<{
            talkativeness: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            fav: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            world: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            backstory: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            appearance: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            convoDisplayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            convoDisplayNameInCard: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            aboutMe: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        } & {
            depth_prompt: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
                role: z.ZodOptional<z.ZodDefault<z.ZodEnum<["system", "user", "assistant"]>>>;
            }, "strip", z.ZodTypeAny, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }, {
                role?: "system" | "user" | "assistant" | undefined;
                prompt?: string | undefined;
                depth?: number | undefined;
            }>>;
            convoBehavior: z.ZodOptional<z.ZodObject<{
                instruction: z.ZodOptional<z.ZodDefault<z.ZodString>>;
                insertionStrategy: z.ZodOptional<z.ZodDefault<z.ZodCatch<z.ZodEnum<["constant_before", "constant_after", "post_history_replace", "post_history_before", "post_history_after", "macro"]>>>>;
            }, "strip", z.ZodTypeAny, {
                instruction?: string | undefined;
                insertionStrategy?: "constant_before" | "constant_after" | "post_history_replace" | "post_history_before" | "post_history_after" | "macro" | undefined;
            }, {
                instruction?: string | undefined;
                insertionStrategy?: unknown;
            }>>;
        }, z.ZodTypeAny, "passthrough"> | undefined;
        tags?: string[] | undefined;
        creator?: string | undefined;
        character_version?: string | undefined;
        alternate_greetings?: string[] | undefined;
        character_book?: z.objectInputType<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            scan_depth: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            token_budget: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
            recursive_scanning: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            extensions: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            entries: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                content: z.ZodDefault<z.ZodString>;
                extensions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                enabled: z.ZodDefault<z.ZodBoolean>;
                insertion_order: z.ZodDefault<z.ZodNumber>;
                case_sensitive: z.ZodDefault<z.ZodBoolean>;
                name: z.ZodDefault<z.ZodString>;
                priority: z.ZodDefault<z.ZodNumber>;
                id: z.ZodDefault<z.ZodNumber>;
                comment: z.ZodDefault<z.ZodString>;
                selective: z.ZodDefault<z.ZodBoolean>;
                secondary_keys: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                constant: z.ZodDefault<z.ZodBoolean>;
                position: z.ZodDefault<z.ZodCatch<z.ZodUnion<[z.ZodEnum<["before_char", "after_char", "at_depth", "depth"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>>>;
                depth: z.ZodOptional<z.ZodNumber>;
                role: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["system", "user", "assistant"]>, z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>]>>;
            }, z.ZodTypeAny, "passthrough">>, "many">>>;
        }, z.ZodTypeAny, "passthrough"> | null | undefined;
    } & {
        [k: string]: unknown;
    };
}>;
export declare const createGroupSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    avatarPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    characterIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    characterIds: string[];
    avatarPath?: string | null | undefined;
}, {
    name: string;
    description?: string | undefined;
    characterIds?: string[] | undefined;
    avatarPath?: string | null | undefined;
}>;
export declare const updateGroupSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    avatarPath: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    characterIds: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    characterIds?: string[] | undefined;
    avatarPath?: string | null | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    characterIds?: string[] | undefined;
    avatarPath?: string | null | undefined;
}>;
export declare const createPersonaGroupSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    personaIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    personaIds: string[];
}, {
    name: string;
    description?: string | undefined;
    personaIds?: string[] | undefined;
}>;
export declare const updatePersonaGroupSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    personaIds: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    personaIds?: string[] | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    personaIds?: string[] | undefined;
}>;
export type CreateCharacterInput = z.infer<typeof createCharacterSchema>;
export type UpdateCharacterInput = z.infer<typeof updateCharacterSchema>;
export type CharacterCardV2Input = z.infer<typeof characterCardV2Schema>;
export type CreateGroupInput = z.infer<typeof createGroupSchema>;
export type UpdateGroupInput = z.infer<typeof updateGroupSchema>;
export type CreatePersonaGroupInput = z.infer<typeof createPersonaGroupSchema>;
export type UpdatePersonaGroupInput = z.infer<typeof updatePersonaGroupSchema>;
//# sourceMappingURL=character.schema.d.ts.map