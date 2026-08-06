import { z } from "zod";
export declare const spatialOwnerModeSchema: z.ZodEnum<["roleplay", "game"]>;
export declare const spatialLocationKindSchema: z.ZodEnum<["region", "settlement", "place", "building", "floor", "room"]>;
export declare const spatialChildPresentationSchema: z.ZodEnum<["map", "layers", "list"]>;
export declare const spatialLocationStatusSchema: z.ZodEnum<["active", "archived"]>;
export declare const spatialLinkStateSchema: z.ZodEnum<["available", "hidden", "blocked"]>;
export declare const spatialMapDraftSizeSchema: z.ZodEnum<["small", "medium", "large"]>;
export declare const spatialMapDraftOperationSchema: z.ZodEnum<["create", "replace", "expand"]>;
export declare const spatialMapGroundingModeSchema: z.ZodEnum<["setup", "lore_strict", "lore_expand"]>;
export declare const spatialLocationPlacementSchema: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    x: number;
    y: number;
}, {
    x: number;
    y: number;
}>;
export declare const spatialLocationLinkSchema: z.ZodObject<{
    targetId: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    bidirectional: z.ZodDefault<z.ZodBoolean>;
    state: z.ZodDefault<z.ZodEnum<["available", "hidden", "blocked"]>>;
}, "strict", z.ZodTypeAny, {
    targetId: string;
    bidirectional: boolean;
    state: "available" | "hidden" | "blocked";
    label?: string | undefined;
}, {
    targetId: string;
    label?: string | undefined;
    bidirectional?: boolean | undefined;
    state?: "available" | "hidden" | "blocked" | undefined;
}>;
export declare const spatialLocationSchema: z.ZodObject<{
    id: z.ZodString;
    parentId: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    kind: z.ZodEnum<["region", "settlement", "place", "building", "floor", "room"]>;
    description: z.ZodString;
    modelMemory: z.ZodOptional<z.ZodString>;
    awarenessSummary: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    lorebookEntryIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    childPresentation: z.ZodDefault<z.ZodEnum<["map", "layers", "list"]>>;
    placement: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
    layerOrder: z.ZodOptional<z.ZodNumber>;
    links: z.ZodDefault<z.ZodArray<z.ZodObject<{
        targetId: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        bidirectional: z.ZodDefault<z.ZodBoolean>;
        state: z.ZodDefault<z.ZodEnum<["available", "hidden", "blocked"]>>;
    }, "strict", z.ZodTypeAny, {
        targetId: string;
        bidirectional: boolean;
        state: "available" | "hidden" | "blocked";
        label?: string | undefined;
    }, {
        targetId: string;
        label?: string | undefined;
        bidirectional?: boolean | undefined;
        state?: "available" | "hidden" | "blocked" | undefined;
    }>, "many">>;
    status: z.ZodDefault<z.ZodEnum<["active", "archived"]>>;
    sortOrder: z.ZodDefault<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    status: "active" | "archived";
    id: string;
    name: string;
    description: string;
    parentId: string | null;
    kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
    lorebookEntryIds: string[];
    childPresentation: "map" | "layers" | "list";
    links: {
        targetId: string;
        bidirectional: boolean;
        state: "available" | "hidden" | "blocked";
        label?: string | undefined;
    }[];
    sortOrder: number;
    modelMemory?: string | undefined;
    awarenessSummary?: string | undefined;
    icon?: string | undefined;
    placement?: {
        x: number;
        y: number;
    } | undefined;
    layerOrder?: number | undefined;
}, {
    id: string;
    name: string;
    description: string;
    parentId: string | null;
    kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
    status?: "active" | "archived" | undefined;
    modelMemory?: string | undefined;
    awarenessSummary?: string | undefined;
    icon?: string | undefined;
    lorebookEntryIds?: string[] | undefined;
    childPresentation?: "map" | "layers" | "list" | undefined;
    placement?: {
        x: number;
        y: number;
    } | undefined;
    layerOrder?: number | undefined;
    links?: {
        targetId: string;
        label?: string | undefined;
        bidirectional?: boolean | undefined;
        state?: "available" | "hidden" | "blocked" | undefined;
    }[] | undefined;
    sortOrder?: number | undefined;
}>;
export declare const spatialContextDefinitionSchema: z.ZodEffects<z.ZodObject<{
    schemaVersion: z.ZodLiteral<1>;
    ownerMode: z.ZodEnum<["roleplay", "game"]>;
    enabled: z.ZodBoolean;
    locations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        parentId: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        kind: z.ZodEnum<["region", "settlement", "place", "building", "floor", "room"]>;
        description: z.ZodString;
        modelMemory: z.ZodOptional<z.ZodString>;
        awarenessSummary: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        lorebookEntryIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        childPresentation: z.ZodDefault<z.ZodEnum<["map", "layers", "list"]>>;
        placement: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
        layerOrder: z.ZodOptional<z.ZodNumber>;
        links: z.ZodDefault<z.ZodArray<z.ZodObject<{
            targetId: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            bidirectional: z.ZodDefault<z.ZodBoolean>;
            state: z.ZodDefault<z.ZodEnum<["available", "hidden", "blocked"]>>;
        }, "strict", z.ZodTypeAny, {
            targetId: string;
            bidirectional: boolean;
            state: "available" | "hidden" | "blocked";
            label?: string | undefined;
        }, {
            targetId: string;
            label?: string | undefined;
            bidirectional?: boolean | undefined;
            state?: "available" | "hidden" | "blocked" | undefined;
        }>, "many">>;
        status: z.ZodDefault<z.ZodEnum<["active", "archived"]>>;
        sortOrder: z.ZodDefault<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        status: "active" | "archived";
        id: string;
        name: string;
        description: string;
        parentId: string | null;
        kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
        lorebookEntryIds: string[];
        childPresentation: "map" | "layers" | "list";
        links: {
            targetId: string;
            bidirectional: boolean;
            state: "available" | "hidden" | "blocked";
            label?: string | undefined;
        }[];
        sortOrder: number;
        modelMemory?: string | undefined;
        awarenessSummary?: string | undefined;
        icon?: string | undefined;
        placement?: {
            x: number;
            y: number;
        } | undefined;
        layerOrder?: number | undefined;
    }, {
        id: string;
        name: string;
        description: string;
        parentId: string | null;
        kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
        status?: "active" | "archived" | undefined;
        modelMemory?: string | undefined;
        awarenessSummary?: string | undefined;
        icon?: string | undefined;
        lorebookEntryIds?: string[] | undefined;
        childPresentation?: "map" | "layers" | "list" | undefined;
        placement?: {
            x: number;
            y: number;
        } | undefined;
        layerOrder?: number | undefined;
        links?: {
            targetId: string;
            label?: string | undefined;
            bidirectional?: boolean | undefined;
            state?: "available" | "hidden" | "blocked" | undefined;
        }[] | undefined;
        sortOrder?: number | undefined;
    }>, "many">;
    startingLocationId: z.ZodNullable<z.ZodString>;
    revision: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    enabled: boolean;
    schemaVersion: 1;
    ownerMode: "roleplay" | "game";
    locations: {
        status: "active" | "archived";
        id: string;
        name: string;
        description: string;
        parentId: string | null;
        kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
        lorebookEntryIds: string[];
        childPresentation: "map" | "layers" | "list";
        links: {
            targetId: string;
            bidirectional: boolean;
            state: "available" | "hidden" | "blocked";
            label?: string | undefined;
        }[];
        sortOrder: number;
        modelMemory?: string | undefined;
        awarenessSummary?: string | undefined;
        icon?: string | undefined;
        placement?: {
            x: number;
            y: number;
        } | undefined;
        layerOrder?: number | undefined;
    }[];
    startingLocationId: string | null;
    revision: number;
}, {
    enabled: boolean;
    schemaVersion: 1;
    ownerMode: "roleplay" | "game";
    locations: {
        id: string;
        name: string;
        description: string;
        parentId: string | null;
        kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
        status?: "active" | "archived" | undefined;
        modelMemory?: string | undefined;
        awarenessSummary?: string | undefined;
        icon?: string | undefined;
        lorebookEntryIds?: string[] | undefined;
        childPresentation?: "map" | "layers" | "list" | undefined;
        placement?: {
            x: number;
            y: number;
        } | undefined;
        layerOrder?: number | undefined;
        links?: {
            targetId: string;
            label?: string | undefined;
            bidirectional?: boolean | undefined;
            state?: "available" | "hidden" | "blocked" | undefined;
        }[] | undefined;
        sortOrder?: number | undefined;
    }[];
    startingLocationId: string | null;
    revision: number;
}>, {
    enabled: boolean;
    schemaVersion: 1;
    ownerMode: "roleplay" | "game";
    locations: {
        status: "active" | "archived";
        id: string;
        name: string;
        description: string;
        parentId: string | null;
        kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
        lorebookEntryIds: string[];
        childPresentation: "map" | "layers" | "list";
        links: {
            targetId: string;
            bidirectional: boolean;
            state: "available" | "hidden" | "blocked";
            label?: string | undefined;
        }[];
        sortOrder: number;
        modelMemory?: string | undefined;
        awarenessSummary?: string | undefined;
        icon?: string | undefined;
        placement?: {
            x: number;
            y: number;
        } | undefined;
        layerOrder?: number | undefined;
    }[];
    startingLocationId: string | null;
    revision: number;
}, {
    enabled: boolean;
    schemaVersion: 1;
    ownerMode: "roleplay" | "game";
    locations: {
        id: string;
        name: string;
        description: string;
        parentId: string | null;
        kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
        status?: "active" | "archived" | undefined;
        modelMemory?: string | undefined;
        awarenessSummary?: string | undefined;
        icon?: string | undefined;
        lorebookEntryIds?: string[] | undefined;
        childPresentation?: "map" | "layers" | "list" | undefined;
        placement?: {
            x: number;
            y: number;
        } | undefined;
        layerOrder?: number | undefined;
        links?: {
            targetId: string;
            label?: string | undefined;
            bidirectional?: boolean | undefined;
            state?: "available" | "hidden" | "blocked" | undefined;
        }[] | undefined;
        sortOrder?: number | undefined;
    }[];
    startingLocationId: string | null;
    revision: number;
}>;
export declare const pendingSpatialTransitionSchema: z.ZodObject<{
    destinationId: z.ZodString;
    expectedDefinitionRevision: z.ZodNumber;
    expectedCurrentLocationId: z.ZodNullable<z.ZodString>;
    commandId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    destinationId: string;
    expectedDefinitionRevision: number;
    expectedCurrentLocationId: string | null;
    commandId: string;
}, {
    destinationId: string;
    expectedDefinitionRevision: number;
    expectedCurrentLocationId: string | null;
    commandId: string;
}>;
export declare const spatialSnapshotSourceSchema: z.ZodEnum<["bootstrap", "owner_turn", "assistant_swipe", "definition_repair", "branch_copy"]>;
export declare const spatialContextSnapshotSchema: z.ZodObject<{
    id: z.ZodString;
    chatId: z.ZodString;
    messageId: z.ZodString;
    swipeIndex: z.ZodNumber;
    currentLocationId: z.ZodNullable<z.ZodString>;
    definitionRevision: z.ZodNumber;
    source: z.ZodEnum<["bootstrap", "owner_turn", "assistant_swipe", "definition_repair", "branch_copy"]>;
    transitionCommandId: z.ZodNullable<z.ZodString>;
    transitionPayloadHash: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    source: "bootstrap" | "owner_turn" | "assistant_swipe" | "definition_repair" | "branch_copy";
    messageId: string;
    chatId: string;
    swipeIndex: number;
    currentLocationId: string | null;
    definitionRevision: number;
    transitionCommandId: string | null;
    transitionPayloadHash: string | null;
    createdAt: string;
}, {
    id: string;
    source: "bootstrap" | "owner_turn" | "assistant_swipe" | "definition_repair" | "branch_copy";
    messageId: string;
    chatId: string;
    swipeIndex: number;
    currentLocationId: string | null;
    definitionRevision: number;
    transitionCommandId: string | null;
    transitionPayloadHash: string | null;
    createdAt: string;
}>;
export declare const updateSpatialContextRequestSchema: z.ZodObject<{
    expectedRevision: z.ZodNumber;
    expectedCurrentLocationId: z.ZodNullable<z.ZodString>;
    replacementCurrentLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    definition: z.ZodEffects<z.ZodObject<{
        schemaVersion: z.ZodLiteral<1>;
        ownerMode: z.ZodEnum<["roleplay", "game"]>;
        enabled: z.ZodBoolean;
        locations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            parentId: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            kind: z.ZodEnum<["region", "settlement", "place", "building", "floor", "room"]>;
            description: z.ZodString;
            modelMemory: z.ZodOptional<z.ZodString>;
            awarenessSummary: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            lorebookEntryIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            childPresentation: z.ZodDefault<z.ZodEnum<["map", "layers", "list"]>>;
            placement: z.ZodOptional<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>>;
            layerOrder: z.ZodOptional<z.ZodNumber>;
            links: z.ZodDefault<z.ZodArray<z.ZodObject<{
                targetId: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                bidirectional: z.ZodDefault<z.ZodBoolean>;
                state: z.ZodDefault<z.ZodEnum<["available", "hidden", "blocked"]>>;
            }, "strict", z.ZodTypeAny, {
                targetId: string;
                bidirectional: boolean;
                state: "available" | "hidden" | "blocked";
                label?: string | undefined;
            }, {
                targetId: string;
                label?: string | undefined;
                bidirectional?: boolean | undefined;
                state?: "available" | "hidden" | "blocked" | undefined;
            }>, "many">>;
            status: z.ZodDefault<z.ZodEnum<["active", "archived"]>>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            status: "active" | "archived";
            id: string;
            name: string;
            description: string;
            parentId: string | null;
            kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
            lorebookEntryIds: string[];
            childPresentation: "map" | "layers" | "list";
            links: {
                targetId: string;
                bidirectional: boolean;
                state: "available" | "hidden" | "blocked";
                label?: string | undefined;
            }[];
            sortOrder: number;
            modelMemory?: string | undefined;
            awarenessSummary?: string | undefined;
            icon?: string | undefined;
            placement?: {
                x: number;
                y: number;
            } | undefined;
            layerOrder?: number | undefined;
        }, {
            id: string;
            name: string;
            description: string;
            parentId: string | null;
            kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
            status?: "active" | "archived" | undefined;
            modelMemory?: string | undefined;
            awarenessSummary?: string | undefined;
            icon?: string | undefined;
            lorebookEntryIds?: string[] | undefined;
            childPresentation?: "map" | "layers" | "list" | undefined;
            placement?: {
                x: number;
                y: number;
            } | undefined;
            layerOrder?: number | undefined;
            links?: {
                targetId: string;
                label?: string | undefined;
                bidirectional?: boolean | undefined;
                state?: "available" | "hidden" | "blocked" | undefined;
            }[] | undefined;
            sortOrder?: number | undefined;
        }>, "many">;
        startingLocationId: z.ZodNullable<z.ZodString>;
        revision: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        enabled: boolean;
        schemaVersion: 1;
        ownerMode: "roleplay" | "game";
        locations: {
            status: "active" | "archived";
            id: string;
            name: string;
            description: string;
            parentId: string | null;
            kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
            lorebookEntryIds: string[];
            childPresentation: "map" | "layers" | "list";
            links: {
                targetId: string;
                bidirectional: boolean;
                state: "available" | "hidden" | "blocked";
                label?: string | undefined;
            }[];
            sortOrder: number;
            modelMemory?: string | undefined;
            awarenessSummary?: string | undefined;
            icon?: string | undefined;
            placement?: {
                x: number;
                y: number;
            } | undefined;
            layerOrder?: number | undefined;
        }[];
        startingLocationId: string | null;
        revision: number;
    }, {
        enabled: boolean;
        schemaVersion: 1;
        ownerMode: "roleplay" | "game";
        locations: {
            id: string;
            name: string;
            description: string;
            parentId: string | null;
            kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
            status?: "active" | "archived" | undefined;
            modelMemory?: string | undefined;
            awarenessSummary?: string | undefined;
            icon?: string | undefined;
            lorebookEntryIds?: string[] | undefined;
            childPresentation?: "map" | "layers" | "list" | undefined;
            placement?: {
                x: number;
                y: number;
            } | undefined;
            layerOrder?: number | undefined;
            links?: {
                targetId: string;
                label?: string | undefined;
                bidirectional?: boolean | undefined;
                state?: "available" | "hidden" | "blocked" | undefined;
            }[] | undefined;
            sortOrder?: number | undefined;
        }[];
        startingLocationId: string | null;
        revision: number;
    }>, {
        enabled: boolean;
        schemaVersion: 1;
        ownerMode: "roleplay" | "game";
        locations: {
            status: "active" | "archived";
            id: string;
            name: string;
            description: string;
            parentId: string | null;
            kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
            lorebookEntryIds: string[];
            childPresentation: "map" | "layers" | "list";
            links: {
                targetId: string;
                bidirectional: boolean;
                state: "available" | "hidden" | "blocked";
                label?: string | undefined;
            }[];
            sortOrder: number;
            modelMemory?: string | undefined;
            awarenessSummary?: string | undefined;
            icon?: string | undefined;
            placement?: {
                x: number;
                y: number;
            } | undefined;
            layerOrder?: number | undefined;
        }[];
        startingLocationId: string | null;
        revision: number;
    }, {
        enabled: boolean;
        schemaVersion: 1;
        ownerMode: "roleplay" | "game";
        locations: {
            id: string;
            name: string;
            description: string;
            parentId: string | null;
            kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
            status?: "active" | "archived" | undefined;
            modelMemory?: string | undefined;
            awarenessSummary?: string | undefined;
            icon?: string | undefined;
            lorebookEntryIds?: string[] | undefined;
            childPresentation?: "map" | "layers" | "list" | undefined;
            placement?: {
                x: number;
                y: number;
            } | undefined;
            layerOrder?: number | undefined;
            links?: {
                targetId: string;
                label?: string | undefined;
                bidirectional?: boolean | undefined;
                state?: "available" | "hidden" | "blocked" | undefined;
            }[] | undefined;
            sortOrder?: number | undefined;
        }[];
        startingLocationId: string | null;
        revision: number;
    }>;
}, "strict", z.ZodTypeAny, {
    expectedCurrentLocationId: string | null;
    expectedRevision: number;
    definition: {
        enabled: boolean;
        schemaVersion: 1;
        ownerMode: "roleplay" | "game";
        locations: {
            status: "active" | "archived";
            id: string;
            name: string;
            description: string;
            parentId: string | null;
            kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
            lorebookEntryIds: string[];
            childPresentation: "map" | "layers" | "list";
            links: {
                targetId: string;
                bidirectional: boolean;
                state: "available" | "hidden" | "blocked";
                label?: string | undefined;
            }[];
            sortOrder: number;
            modelMemory?: string | undefined;
            awarenessSummary?: string | undefined;
            icon?: string | undefined;
            placement?: {
                x: number;
                y: number;
            } | undefined;
            layerOrder?: number | undefined;
        }[];
        startingLocationId: string | null;
        revision: number;
    };
    replacementCurrentLocationId?: string | null | undefined;
}, {
    expectedCurrentLocationId: string | null;
    expectedRevision: number;
    definition: {
        enabled: boolean;
        schemaVersion: 1;
        ownerMode: "roleplay" | "game";
        locations: {
            id: string;
            name: string;
            description: string;
            parentId: string | null;
            kind: "region" | "settlement" | "place" | "building" | "floor" | "room";
            status?: "active" | "archived" | undefined;
            modelMemory?: string | undefined;
            awarenessSummary?: string | undefined;
            icon?: string | undefined;
            lorebookEntryIds?: string[] | undefined;
            childPresentation?: "map" | "layers" | "list" | undefined;
            placement?: {
                x: number;
                y: number;
            } | undefined;
            layerOrder?: number | undefined;
            links?: {
                targetId: string;
                label?: string | undefined;
                bidirectional?: boolean | undefined;
                state?: "available" | "hidden" | "blocked" | undefined;
            }[] | undefined;
            sortOrder?: number | undefined;
        }[];
        startingLocationId: string | null;
        revision: number;
    };
    replacementCurrentLocationId?: string | null | undefined;
}>;
export declare const generateSpatialMapDraftRequestSchema: z.ZodEffects<z.ZodObject<{
    operation: z.ZodDefault<z.ZodEnum<["create", "replace", "expand"]>>;
    size: z.ZodDefault<z.ZodEnum<["small", "medium", "large"]>>;
    targetLocationId: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    connectionId: z.ZodOptional<z.ZodString>;
    groundingMode: z.ZodDefault<z.ZodOptional<z.ZodEnum<["setup", "lore_strict", "lore_expand"]>>>;
    sourceLorebookIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    sourceEntryIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    debugMode: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strict", z.ZodTypeAny, {
    operation: "create" | "replace" | "expand";
    size: "small" | "medium" | "large";
    groundingMode: "setup" | "lore_strict" | "lore_expand";
    sourceLorebookIds: string[];
    sourceEntryIds: string[];
    debugMode: boolean;
    targetLocationId?: string | undefined;
    instructions?: string | undefined;
    connectionId?: string | undefined;
}, {
    operation?: "create" | "replace" | "expand" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    targetLocationId?: string | undefined;
    instructions?: string | undefined;
    connectionId?: string | undefined;
    groundingMode?: "setup" | "lore_strict" | "lore_expand" | undefined;
    sourceLorebookIds?: string[] | undefined;
    sourceEntryIds?: string[] | undefined;
    debugMode?: boolean | undefined;
}>, {
    operation: "create" | "replace" | "expand";
    size: "small" | "medium" | "large";
    groundingMode: "setup" | "lore_strict" | "lore_expand";
    sourceLorebookIds: string[];
    sourceEntryIds: string[];
    debugMode: boolean;
    targetLocationId?: string | undefined;
    instructions?: string | undefined;
    connectionId?: string | undefined;
}, {
    operation?: "create" | "replace" | "expand" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    targetLocationId?: string | undefined;
    instructions?: string | undefined;
    connectionId?: string | undefined;
    groundingMode?: "setup" | "lore_strict" | "lore_expand" | undefined;
    sourceLorebookIds?: string[] | undefined;
    sourceEntryIds?: string[] | undefined;
    debugMode?: boolean | undefined;
}>;
export type SpatialContextDefinitionInput = z.input<typeof spatialContextDefinitionSchema>;
export type SpatialContextDefinitionOutput = z.output<typeof spatialContextDefinitionSchema>;
export type PendingSpatialTransitionInput = z.input<typeof pendingSpatialTransitionSchema>;
export type UpdateSpatialContextRequestInput = z.input<typeof updateSpatialContextRequestSchema>;
export type GenerateSpatialMapDraftRequestInput = z.input<typeof generateSpatialMapDraftRequestSchema>;
//# sourceMappingURL=spatial-context.schema.d.ts.map