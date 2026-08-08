import { z } from "zod";
export declare const capabilityPackageKindSchema: z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>;
export declare const capabilityPermissionSchema: z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>;
export declare const supportedCapabilityApi: Readonly<{
    readonly major: 1;
    readonly minor: 3;
}>;
export declare const capabilityPackageManifestV1Schema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    version: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    engine: z.ZodObject<{
        min: z.ZodString;
        maxExclusive: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        min: string;
        maxExclusive: string;
    }, {
        min: string;
        maxExclusive: string;
    }>;
    kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
    entrypoints: z.ZodObject<{
        server: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        agents: z.ZodOptional<z.ZodString>;
        knowledge: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    }, {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    }>;
    contributions: z.ZodOptional<z.ZodObject<{
        slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
        conversationGame: z.ZodOptional<z.ZodObject<{
            command: z.ZodString;
            aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            playerLabel: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            command: string;
            aliases: string[];
            playerLabel: string;
        }, {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        }>>;
        agentDetail: z.ZodOptional<z.ZodObject<{
            agentIds: z.ZodArray<z.ZodString, "many">;
        }, "strict", z.ZodTypeAny, {
            agentIds: string[];
        }, {
            agentIds: string[];
        }>>;
    }, "strict", z.ZodTypeAny, {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            aliases: string[];
            playerLabel: string;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    }, {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    }>>;
    files: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        sha256: z.ZodString;
        bytes: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        path: string;
        sha256: string;
        bytes: number;
    }, {
        path: string;
        sha256: string;
        bytes: number;
    }>, "many">;
    permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
    restartRequired: z.ZodDefault<z.ZodBoolean>;
} & {
    schemaVersion: z.ZodLiteral<1>;
}, "strict", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string;
    kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
    schemaVersion: 1;
    version: string;
    engine: {
        min: string;
        maxExclusive: string;
    };
    entrypoints: {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    };
    files: {
        path: string;
        sha256: string;
        bytes: number;
    }[];
    permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
    restartRequired: boolean;
    contributions?: {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            aliases: string[];
            playerLabel: string;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    } | undefined;
}, {
    id: string;
    name: string;
    kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
    schemaVersion: 1;
    version: string;
    engine: {
        min: string;
        maxExclusive: string;
    };
    entrypoints: {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    };
    files: {
        path: string;
        sha256: string;
        bytes: number;
    }[];
    permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
    description?: string | undefined;
    contributions?: {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    } | undefined;
    restartRequired?: boolean | undefined;
}>;
export declare const capabilityPackageManifestV2Schema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    version: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    engine: z.ZodObject<{
        min: z.ZodString;
        maxExclusive: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        min: string;
        maxExclusive: string;
    }, {
        min: string;
        maxExclusive: string;
    }>;
    kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
    entrypoints: z.ZodObject<{
        server: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        agents: z.ZodOptional<z.ZodString>;
        knowledge: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    }, {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    }>;
    contributions: z.ZodOptional<z.ZodObject<{
        slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
        conversationGame: z.ZodOptional<z.ZodObject<{
            command: z.ZodString;
            aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            playerLabel: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            command: string;
            aliases: string[];
            playerLabel: string;
        }, {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        }>>;
        agentDetail: z.ZodOptional<z.ZodObject<{
            agentIds: z.ZodArray<z.ZodString, "many">;
        }, "strict", z.ZodTypeAny, {
            agentIds: string[];
        }, {
            agentIds: string[];
        }>>;
    }, "strict", z.ZodTypeAny, {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            aliases: string[];
            playerLabel: string;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    }, {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    }>>;
    files: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        sha256: z.ZodString;
        bytes: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        path: string;
        sha256: string;
        bytes: number;
    }, {
        path: string;
        sha256: string;
        bytes: number;
    }>, "many">;
    permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
    restartRequired: z.ZodDefault<z.ZodBoolean>;
} & {
    schemaVersion: z.ZodLiteral<2>;
    capabilityApi: z.ZodObject<{
        major: z.ZodNumber;
        minor: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        major: number;
        minor: number;
    }, {
        major: number;
        minor: number;
    }>;
    builtAgainst: z.ZodObject<{
        engineVersion: z.ZodString;
        engineCommit: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        engineVersion: string;
        engineCommit: string;
    }, {
        engineVersion: string;
        engineCommit: string;
    }>;
}, "strict", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string;
    kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
    schemaVersion: 2;
    version: string;
    engine: {
        min: string;
        maxExclusive: string;
    };
    entrypoints: {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    };
    files: {
        path: string;
        sha256: string;
        bytes: number;
    }[];
    permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
    restartRequired: boolean;
    capabilityApi: {
        major: number;
        minor: number;
    };
    builtAgainst: {
        engineVersion: string;
        engineCommit: string;
    };
    contributions?: {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            aliases: string[];
            playerLabel: string;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    } | undefined;
}, {
    id: string;
    name: string;
    kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
    schemaVersion: 2;
    version: string;
    engine: {
        min: string;
        maxExclusive: string;
    };
    entrypoints: {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    };
    files: {
        path: string;
        sha256: string;
        bytes: number;
    }[];
    permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
    capabilityApi: {
        major: number;
        minor: number;
    };
    builtAgainst: {
        engineVersion: string;
        engineCommit: string;
    };
    description?: string | undefined;
    contributions?: {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    } | undefined;
    restartRequired?: boolean | undefined;
}>;
export declare const capabilityPackageManifestSchema: z.ZodDiscriminatedUnion<"schemaVersion", [z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    version: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    engine: z.ZodObject<{
        min: z.ZodString;
        maxExclusive: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        min: string;
        maxExclusive: string;
    }, {
        min: string;
        maxExclusive: string;
    }>;
    kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
    entrypoints: z.ZodObject<{
        server: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        agents: z.ZodOptional<z.ZodString>;
        knowledge: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    }, {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    }>;
    contributions: z.ZodOptional<z.ZodObject<{
        slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
        conversationGame: z.ZodOptional<z.ZodObject<{
            command: z.ZodString;
            aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            playerLabel: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            command: string;
            aliases: string[];
            playerLabel: string;
        }, {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        }>>;
        agentDetail: z.ZodOptional<z.ZodObject<{
            agentIds: z.ZodArray<z.ZodString, "many">;
        }, "strict", z.ZodTypeAny, {
            agentIds: string[];
        }, {
            agentIds: string[];
        }>>;
    }, "strict", z.ZodTypeAny, {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            aliases: string[];
            playerLabel: string;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    }, {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    }>>;
    files: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        sha256: z.ZodString;
        bytes: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        path: string;
        sha256: string;
        bytes: number;
    }, {
        path: string;
        sha256: string;
        bytes: number;
    }>, "many">;
    permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
    restartRequired: z.ZodDefault<z.ZodBoolean>;
} & {
    schemaVersion: z.ZodLiteral<1>;
}, "strict", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string;
    kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
    schemaVersion: 1;
    version: string;
    engine: {
        min: string;
        maxExclusive: string;
    };
    entrypoints: {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    };
    files: {
        path: string;
        sha256: string;
        bytes: number;
    }[];
    permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
    restartRequired: boolean;
    contributions?: {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            aliases: string[];
            playerLabel: string;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    } | undefined;
}, {
    id: string;
    name: string;
    kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
    schemaVersion: 1;
    version: string;
    engine: {
        min: string;
        maxExclusive: string;
    };
    entrypoints: {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    };
    files: {
        path: string;
        sha256: string;
        bytes: number;
    }[];
    permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
    description?: string | undefined;
    contributions?: {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    } | undefined;
    restartRequired?: boolean | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    version: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    engine: z.ZodObject<{
        min: z.ZodString;
        maxExclusive: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        min: string;
        maxExclusive: string;
    }, {
        min: string;
        maxExclusive: string;
    }>;
    kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
    entrypoints: z.ZodObject<{
        server: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        agents: z.ZodOptional<z.ZodString>;
        knowledge: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    }, {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    }>;
    contributions: z.ZodOptional<z.ZodObject<{
        slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
        conversationGame: z.ZodOptional<z.ZodObject<{
            command: z.ZodString;
            aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            playerLabel: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            command: string;
            aliases: string[];
            playerLabel: string;
        }, {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        }>>;
        agentDetail: z.ZodOptional<z.ZodObject<{
            agentIds: z.ZodArray<z.ZodString, "many">;
        }, "strict", z.ZodTypeAny, {
            agentIds: string[];
        }, {
            agentIds: string[];
        }>>;
    }, "strict", z.ZodTypeAny, {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            aliases: string[];
            playerLabel: string;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    }, {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    }>>;
    files: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        sha256: z.ZodString;
        bytes: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        path: string;
        sha256: string;
        bytes: number;
    }, {
        path: string;
        sha256: string;
        bytes: number;
    }>, "many">;
    permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
    restartRequired: z.ZodDefault<z.ZodBoolean>;
} & {
    schemaVersion: z.ZodLiteral<2>;
    capabilityApi: z.ZodObject<{
        major: z.ZodNumber;
        minor: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        major: number;
        minor: number;
    }, {
        major: number;
        minor: number;
    }>;
    builtAgainst: z.ZodObject<{
        engineVersion: z.ZodString;
        engineCommit: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        engineVersion: string;
        engineCommit: string;
    }, {
        engineVersion: string;
        engineCommit: string;
    }>;
}, "strict", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string;
    kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
    schemaVersion: 2;
    version: string;
    engine: {
        min: string;
        maxExclusive: string;
    };
    entrypoints: {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    };
    files: {
        path: string;
        sha256: string;
        bytes: number;
    }[];
    permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
    restartRequired: boolean;
    capabilityApi: {
        major: number;
        minor: number;
    };
    builtAgainst: {
        engineVersion: string;
        engineCommit: string;
    };
    contributions?: {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            aliases: string[];
            playerLabel: string;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    } | undefined;
}, {
    id: string;
    name: string;
    kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
    schemaVersion: 2;
    version: string;
    engine: {
        min: string;
        maxExclusive: string;
    };
    entrypoints: {
        server?: string | undefined;
        client?: string | undefined;
        agents?: string | undefined;
        knowledge?: string | undefined;
    };
    files: {
        path: string;
        sha256: string;
        bytes: number;
    }[];
    permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
    capabilityApi: {
        major: number;
        minor: number;
    };
    builtAgainst: {
        engineVersion: string;
        engineCommit: string;
    };
    description?: string | undefined;
    contributions?: {
        slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
        conversationGame?: {
            command: string;
            playerLabel: string;
            aliases?: string[] | undefined;
        } | undefined;
        agentDetail?: {
            agentIds: string[];
        } | undefined;
    } | undefined;
    restartRequired?: boolean | undefined;
}>]>;
export declare const capabilityCatalogPackageSchema: z.ZodObject<{
    manifest: z.ZodDiscriminatedUnion<"schemaVersion", [z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        engine: z.ZodObject<{
            min: z.ZodString;
            maxExclusive: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            min: string;
            maxExclusive: string;
        }, {
            min: string;
            maxExclusive: string;
        }>;
        kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
        entrypoints: z.ZodObject<{
            server: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            agents: z.ZodOptional<z.ZodString>;
            knowledge: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        }, {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        }>;
        contributions: z.ZodOptional<z.ZodObject<{
            slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
            conversationGame: z.ZodOptional<z.ZodObject<{
                command: z.ZodString;
                aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                playerLabel: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                command: string;
                aliases: string[];
                playerLabel: string;
            }, {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            }>>;
            agentDetail: z.ZodOptional<z.ZodObject<{
                agentIds: z.ZodArray<z.ZodString, "many">;
            }, "strict", z.ZodTypeAny, {
                agentIds: string[];
            }, {
                agentIds: string[];
            }>>;
        }, "strict", z.ZodTypeAny, {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        }, {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        }>>;
        files: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            sha256: z.ZodString;
            bytes: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            path: string;
            sha256: string;
            bytes: number;
        }, {
            path: string;
            sha256: string;
            bytes: number;
        }>, "many">;
        permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
        restartRequired: z.ZodDefault<z.ZodBoolean>;
    } & {
        schemaVersion: z.ZodLiteral<1>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        name: string;
        description: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 1;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        restartRequired: boolean;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
    }, {
        id: string;
        name: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 1;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        description?: string | undefined;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
        restartRequired?: boolean | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        engine: z.ZodObject<{
            min: z.ZodString;
            maxExclusive: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            min: string;
            maxExclusive: string;
        }, {
            min: string;
            maxExclusive: string;
        }>;
        kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
        entrypoints: z.ZodObject<{
            server: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            agents: z.ZodOptional<z.ZodString>;
            knowledge: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        }, {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        }>;
        contributions: z.ZodOptional<z.ZodObject<{
            slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
            conversationGame: z.ZodOptional<z.ZodObject<{
                command: z.ZodString;
                aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                playerLabel: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                command: string;
                aliases: string[];
                playerLabel: string;
            }, {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            }>>;
            agentDetail: z.ZodOptional<z.ZodObject<{
                agentIds: z.ZodArray<z.ZodString, "many">;
            }, "strict", z.ZodTypeAny, {
                agentIds: string[];
            }, {
                agentIds: string[];
            }>>;
        }, "strict", z.ZodTypeAny, {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        }, {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        }>>;
        files: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            sha256: z.ZodString;
            bytes: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            path: string;
            sha256: string;
            bytes: number;
        }, {
            path: string;
            sha256: string;
            bytes: number;
        }>, "many">;
        permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
        restartRequired: z.ZodDefault<z.ZodBoolean>;
    } & {
        schemaVersion: z.ZodLiteral<2>;
        capabilityApi: z.ZodObject<{
            major: z.ZodNumber;
            minor: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            major: number;
            minor: number;
        }, {
            major: number;
            minor: number;
        }>;
        builtAgainst: z.ZodObject<{
            engineVersion: z.ZodString;
            engineCommit: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            engineVersion: string;
            engineCommit: string;
        }, {
            engineVersion: string;
            engineCommit: string;
        }>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        name: string;
        description: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 2;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        restartRequired: boolean;
        capabilityApi: {
            major: number;
            minor: number;
        };
        builtAgainst: {
            engineVersion: string;
            engineCommit: string;
        };
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
    }, {
        id: string;
        name: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 2;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        capabilityApi: {
            major: number;
            minor: number;
        };
        builtAgainst: {
            engineVersion: string;
            engineCommit: string;
        };
        description?: string | undefined;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
        restartRequired?: boolean | undefined;
    }>]>;
    category: z.ZodDefault<z.ZodEnum<["writer", "tracker", "misc"]>>;
    artifact: z.ZodObject<{
        url: z.ZodString;
        sha256: z.ZodString;
        bytes: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        url: string;
        sha256: string;
        bytes: number;
    }, {
        url: string;
        sha256: string;
        bytes: number;
    }>;
    iconUrl: z.ZodOptional<z.ZodString>;
    documentationUrl: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    category: "writer" | "tracker" | "misc";
    manifest: {
        id: string;
        name: string;
        description: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 1;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        restartRequired: boolean;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
    } | {
        id: string;
        name: string;
        description: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 2;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        restartRequired: boolean;
        capabilityApi: {
            major: number;
            minor: number;
        };
        builtAgainst: {
            engineVersion: string;
            engineCommit: string;
        };
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
    };
    artifact: {
        url: string;
        sha256: string;
        bytes: number;
    };
    iconUrl?: string | undefined;
    documentationUrl?: string | undefined;
}, {
    manifest: {
        id: string;
        name: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 1;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        description?: string | undefined;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
        restartRequired?: boolean | undefined;
    } | {
        id: string;
        name: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 2;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        capabilityApi: {
            major: number;
            minor: number;
        };
        builtAgainst: {
            engineVersion: string;
            engineCommit: string;
        };
        description?: string | undefined;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
        restartRequired?: boolean | undefined;
    };
    artifact: {
        url: string;
        sha256: string;
        bytes: number;
    };
    category?: "writer" | "tracker" | "misc" | undefined;
    iconUrl?: string | undefined;
    documentationUrl?: string | undefined;
}>;
export declare const capabilityCatalogSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<1>;
    generatedAt: z.ZodString;
    packages: z.ZodArray<z.ZodObject<{
        manifest: z.ZodDiscriminatedUnion<"schemaVersion", [z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            description: z.ZodDefault<z.ZodString>;
            engine: z.ZodObject<{
                min: z.ZodString;
                maxExclusive: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                min: string;
                maxExclusive: string;
            }, {
                min: string;
                maxExclusive: string;
            }>;
            kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
            entrypoints: z.ZodObject<{
                server: z.ZodOptional<z.ZodString>;
                client: z.ZodOptional<z.ZodString>;
                agents: z.ZodOptional<z.ZodString>;
                knowledge: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            }, {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            }>;
            contributions: z.ZodOptional<z.ZodObject<{
                slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
                conversationGame: z.ZodOptional<z.ZodObject<{
                    command: z.ZodString;
                    aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                    playerLabel: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                }, {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                }>>;
                agentDetail: z.ZodOptional<z.ZodObject<{
                    agentIds: z.ZodArray<z.ZodString, "many">;
                }, "strict", z.ZodTypeAny, {
                    agentIds: string[];
                }, {
                    agentIds: string[];
                }>>;
            }, "strict", z.ZodTypeAny, {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            }, {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            }>>;
            files: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                sha256: z.ZodString;
                bytes: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                path: string;
                sha256: string;
                bytes: number;
            }, {
                path: string;
                sha256: string;
                bytes: number;
            }>, "many">;
            permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
            restartRequired: z.ZodDefault<z.ZodBoolean>;
        } & {
            schemaVersion: z.ZodLiteral<1>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        }, {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            description: z.ZodDefault<z.ZodString>;
            engine: z.ZodObject<{
                min: z.ZodString;
                maxExclusive: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                min: string;
                maxExclusive: string;
            }, {
                min: string;
                maxExclusive: string;
            }>;
            kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
            entrypoints: z.ZodObject<{
                server: z.ZodOptional<z.ZodString>;
                client: z.ZodOptional<z.ZodString>;
                agents: z.ZodOptional<z.ZodString>;
                knowledge: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            }, {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            }>;
            contributions: z.ZodOptional<z.ZodObject<{
                slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
                conversationGame: z.ZodOptional<z.ZodObject<{
                    command: z.ZodString;
                    aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                    playerLabel: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                }, {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                }>>;
                agentDetail: z.ZodOptional<z.ZodObject<{
                    agentIds: z.ZodArray<z.ZodString, "many">;
                }, "strict", z.ZodTypeAny, {
                    agentIds: string[];
                }, {
                    agentIds: string[];
                }>>;
            }, "strict", z.ZodTypeAny, {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            }, {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            }>>;
            files: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                sha256: z.ZodString;
                bytes: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                path: string;
                sha256: string;
                bytes: number;
            }, {
                path: string;
                sha256: string;
                bytes: number;
            }>, "many">;
            permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
            restartRequired: z.ZodDefault<z.ZodBoolean>;
        } & {
            schemaVersion: z.ZodLiteral<2>;
            capabilityApi: z.ZodObject<{
                major: z.ZodNumber;
                minor: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                major: number;
                minor: number;
            }, {
                major: number;
                minor: number;
            }>;
            builtAgainst: z.ZodObject<{
                engineVersion: z.ZodString;
                engineCommit: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                engineVersion: string;
                engineCommit: string;
            }, {
                engineVersion: string;
                engineCommit: string;
            }>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        }, {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        }>]>;
        category: z.ZodDefault<z.ZodEnum<["writer", "tracker", "misc"]>>;
        artifact: z.ZodObject<{
            url: z.ZodString;
            sha256: z.ZodString;
            bytes: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            url: string;
            sha256: string;
            bytes: number;
        }, {
            url: string;
            sha256: string;
            bytes: number;
        }>;
        iconUrl: z.ZodOptional<z.ZodString>;
        documentationUrl: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        category: "writer" | "tracker" | "misc";
        manifest: {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        } | {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        };
        artifact: {
            url: string;
            sha256: string;
            bytes: number;
        };
        iconUrl?: string | undefined;
        documentationUrl?: string | undefined;
    }, {
        manifest: {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        } | {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        };
        artifact: {
            url: string;
            sha256: string;
            bytes: number;
        };
        category?: "writer" | "tracker" | "misc" | undefined;
        iconUrl?: string | undefined;
        documentationUrl?: string | undefined;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    schemaVersion: 1;
    generatedAt: string;
    packages: {
        category: "writer" | "tracker" | "misc";
        manifest: {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        } | {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        };
        artifact: {
            url: string;
            sha256: string;
            bytes: number;
        };
        iconUrl?: string | undefined;
        documentationUrl?: string | undefined;
    }[];
}, {
    schemaVersion: 1;
    generatedAt: string;
    packages: {
        manifest: {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        } | {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        };
        artifact: {
            url: string;
            sha256: string;
            bytes: number;
        };
        category?: "writer" | "tracker" | "misc" | undefined;
        iconUrl?: string | undefined;
        documentationUrl?: string | undefined;
    }[];
}>;
export declare const capabilityPackageReadinessSchema: z.ZodEnum<["pending", "registered", "ready", "error"]>;
export declare const installedCapabilityPackageSchema: z.ZodObject<{
    id: z.ZodString;
    version: z.ZodString;
    manifest: z.ZodDiscriminatedUnion<"schemaVersion", [z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        engine: z.ZodObject<{
            min: z.ZodString;
            maxExclusive: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            min: string;
            maxExclusive: string;
        }, {
            min: string;
            maxExclusive: string;
        }>;
        kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
        entrypoints: z.ZodObject<{
            server: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            agents: z.ZodOptional<z.ZodString>;
            knowledge: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        }, {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        }>;
        contributions: z.ZodOptional<z.ZodObject<{
            slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
            conversationGame: z.ZodOptional<z.ZodObject<{
                command: z.ZodString;
                aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                playerLabel: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                command: string;
                aliases: string[];
                playerLabel: string;
            }, {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            }>>;
            agentDetail: z.ZodOptional<z.ZodObject<{
                agentIds: z.ZodArray<z.ZodString, "many">;
            }, "strict", z.ZodTypeAny, {
                agentIds: string[];
            }, {
                agentIds: string[];
            }>>;
        }, "strict", z.ZodTypeAny, {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        }, {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        }>>;
        files: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            sha256: z.ZodString;
            bytes: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            path: string;
            sha256: string;
            bytes: number;
        }, {
            path: string;
            sha256: string;
            bytes: number;
        }>, "many">;
        permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
        restartRequired: z.ZodDefault<z.ZodBoolean>;
    } & {
        schemaVersion: z.ZodLiteral<1>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        name: string;
        description: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 1;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        restartRequired: boolean;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
    }, {
        id: string;
        name: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 1;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        description?: string | undefined;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
        restartRequired?: boolean | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        description: z.ZodDefault<z.ZodString>;
        engine: z.ZodObject<{
            min: z.ZodString;
            maxExclusive: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            min: string;
            maxExclusive: string;
        }, {
            min: string;
            maxExclusive: string;
        }>;
        kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
        entrypoints: z.ZodObject<{
            server: z.ZodOptional<z.ZodString>;
            client: z.ZodOptional<z.ZodString>;
            agents: z.ZodOptional<z.ZodString>;
            knowledge: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        }, {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        }>;
        contributions: z.ZodOptional<z.ZodObject<{
            slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
            conversationGame: z.ZodOptional<z.ZodObject<{
                command: z.ZodString;
                aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                playerLabel: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                command: string;
                aliases: string[];
                playerLabel: string;
            }, {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            }>>;
            agentDetail: z.ZodOptional<z.ZodObject<{
                agentIds: z.ZodArray<z.ZodString, "many">;
            }, "strict", z.ZodTypeAny, {
                agentIds: string[];
            }, {
                agentIds: string[];
            }>>;
        }, "strict", z.ZodTypeAny, {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        }, {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        }>>;
        files: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            sha256: z.ZodString;
            bytes: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            path: string;
            sha256: string;
            bytes: number;
        }, {
            path: string;
            sha256: string;
            bytes: number;
        }>, "many">;
        permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
        restartRequired: z.ZodDefault<z.ZodBoolean>;
    } & {
        schemaVersion: z.ZodLiteral<2>;
        capabilityApi: z.ZodObject<{
            major: z.ZodNumber;
            minor: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            major: number;
            minor: number;
        }, {
            major: number;
            minor: number;
        }>;
        builtAgainst: z.ZodObject<{
            engineVersion: z.ZodString;
            engineCommit: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            engineVersion: string;
            engineCommit: string;
        }, {
            engineVersion: string;
            engineCommit: string;
        }>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        name: string;
        description: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 2;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        restartRequired: boolean;
        capabilityApi: {
            major: number;
            minor: number;
        };
        builtAgainst: {
            engineVersion: string;
            engineCommit: string;
        };
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
    }, {
        id: string;
        name: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 2;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        capabilityApi: {
            major: number;
            minor: number;
        };
        builtAgainst: {
            engineVersion: string;
            engineCommit: string;
        };
        description?: string | undefined;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
        restartRequired?: boolean | undefined;
    }>]>;
    installedAt: z.ZodString;
    status: z.ZodEnum<["active", "restart-required", "error"]>;
    error: z.ZodNullable<z.ZodString>;
    readiness: z.ZodDefault<z.ZodEnum<["pending", "registered", "ready", "error"]>>;
    readinessError: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    legacy: z.ZodDefault<z.ZodBoolean>;
    previousVersion: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "active" | "error" | "restart-required";
    id: string;
    installedAt: string;
    version: string;
    manifest: {
        id: string;
        name: string;
        description: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 1;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        restartRequired: boolean;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
    } | {
        id: string;
        name: string;
        description: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 2;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        restartRequired: boolean;
        capabilityApi: {
            major: number;
            minor: number;
        };
        builtAgainst: {
            engineVersion: string;
            engineCommit: string;
        };
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                aliases: string[];
                playerLabel: string;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
    };
    error: string | null;
    readiness: "pending" | "registered" | "ready" | "error";
    readinessError: string | null;
    legacy: boolean;
    previousVersion?: string | undefined;
}, {
    status: "active" | "error" | "restart-required";
    id: string;
    installedAt: string;
    version: string;
    manifest: {
        id: string;
        name: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 1;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        description?: string | undefined;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
        restartRequired?: boolean | undefined;
    } | {
        id: string;
        name: string;
        kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
        schemaVersion: 2;
        version: string;
        engine: {
            min: string;
            maxExclusive: string;
        };
        entrypoints: {
            server?: string | undefined;
            client?: string | undefined;
            agents?: string | undefined;
            knowledge?: string | undefined;
        };
        files: {
            path: string;
            sha256: string;
            bytes: number;
        }[];
        permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
        capabilityApi: {
            major: number;
            minor: number;
        };
        builtAgainst: {
            engineVersion: string;
            engineCommit: string;
        };
        description?: string | undefined;
        contributions?: {
            slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
            conversationGame?: {
                command: string;
                playerLabel: string;
                aliases?: string[] | undefined;
            } | undefined;
            agentDetail?: {
                agentIds: string[];
            } | undefined;
        } | undefined;
        restartRequired?: boolean | undefined;
    };
    error: string | null;
    readiness?: "pending" | "registered" | "ready" | "error" | undefined;
    readinessError?: string | null | undefined;
    legacy?: boolean | undefined;
    previousVersion?: string | undefined;
}>;
export declare const installedCapabilityRegistrySchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<1>;
    packages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        version: z.ZodString;
        manifest: z.ZodDiscriminatedUnion<"schemaVersion", [z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            description: z.ZodDefault<z.ZodString>;
            engine: z.ZodObject<{
                min: z.ZodString;
                maxExclusive: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                min: string;
                maxExclusive: string;
            }, {
                min: string;
                maxExclusive: string;
            }>;
            kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
            entrypoints: z.ZodObject<{
                server: z.ZodOptional<z.ZodString>;
                client: z.ZodOptional<z.ZodString>;
                agents: z.ZodOptional<z.ZodString>;
                knowledge: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            }, {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            }>;
            contributions: z.ZodOptional<z.ZodObject<{
                slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
                conversationGame: z.ZodOptional<z.ZodObject<{
                    command: z.ZodString;
                    aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                    playerLabel: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                }, {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                }>>;
                agentDetail: z.ZodOptional<z.ZodObject<{
                    agentIds: z.ZodArray<z.ZodString, "many">;
                }, "strict", z.ZodTypeAny, {
                    agentIds: string[];
                }, {
                    agentIds: string[];
                }>>;
            }, "strict", z.ZodTypeAny, {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            }, {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            }>>;
            files: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                sha256: z.ZodString;
                bytes: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                path: string;
                sha256: string;
                bytes: number;
            }, {
                path: string;
                sha256: string;
                bytes: number;
            }>, "many">;
            permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
            restartRequired: z.ZodDefault<z.ZodBoolean>;
        } & {
            schemaVersion: z.ZodLiteral<1>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        }, {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            description: z.ZodDefault<z.ZodString>;
            engine: z.ZodObject<{
                min: z.ZodString;
                maxExclusive: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                min: string;
                maxExclusive: string;
            }, {
                min: string;
                maxExclusive: string;
            }>;
            kind: z.ZodArray<z.ZodEnum<["agent", "maps", "conversation-calls", "turn-game"]>, "many">;
            entrypoints: z.ZodObject<{
                server: z.ZodOptional<z.ZodString>;
                client: z.ZodOptional<z.ZodString>;
                agents: z.ZodOptional<z.ZodString>;
                knowledge: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            }, {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            }>;
            contributions: z.ZodOptional<z.ZodObject<{
                slots: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation-surface", "conversation-toolbar", "chat-settings", "spatial-workspace", "chat-runtime", "game-world-map"]>, "many">>;
                conversationGame: z.ZodOptional<z.ZodObject<{
                    command: z.ZodString;
                    aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                    playerLabel: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                }, {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                }>>;
                agentDetail: z.ZodOptional<z.ZodObject<{
                    agentIds: z.ZodArray<z.ZodString, "many">;
                }, "strict", z.ZodTypeAny, {
                    agentIds: string[];
                }, {
                    agentIds: string[];
                }>>;
            }, "strict", z.ZodTypeAny, {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            }, {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            }>>;
            files: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                sha256: z.ZodString;
                bytes: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                path: string;
                sha256: string;
                bytes: number;
            }, {
                path: string;
                sha256: string;
                bytes: number;
            }>, "many">;
            permissions: z.ZodArray<z.ZodEnum<["agent-runtime", "chat-read", "chat-write", "network", "prompt-context", "routes", "storage", "ui"]>, "many">;
            restartRequired: z.ZodDefault<z.ZodBoolean>;
        } & {
            schemaVersion: z.ZodLiteral<2>;
            capabilityApi: z.ZodObject<{
                major: z.ZodNumber;
                minor: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                major: number;
                minor: number;
            }, {
                major: number;
                minor: number;
            }>;
            builtAgainst: z.ZodObject<{
                engineVersion: z.ZodString;
                engineCommit: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                engineVersion: string;
                engineCommit: string;
            }, {
                engineVersion: string;
                engineCommit: string;
            }>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        }, {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        }>]>;
        installedAt: z.ZodString;
        status: z.ZodEnum<["active", "restart-required", "error"]>;
        error: z.ZodNullable<z.ZodString>;
        readiness: z.ZodDefault<z.ZodEnum<["pending", "registered", "ready", "error"]>>;
        readinessError: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        legacy: z.ZodDefault<z.ZodBoolean>;
        previousVersion: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "active" | "error" | "restart-required";
        id: string;
        installedAt: string;
        version: string;
        manifest: {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        } | {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        };
        error: string | null;
        readiness: "pending" | "registered" | "ready" | "error";
        readinessError: string | null;
        legacy: boolean;
        previousVersion?: string | undefined;
    }, {
        status: "active" | "error" | "restart-required";
        id: string;
        installedAt: string;
        version: string;
        manifest: {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        } | {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        };
        error: string | null;
        readiness?: "pending" | "registered" | "ready" | "error" | undefined;
        readinessError?: string | null | undefined;
        legacy?: boolean | undefined;
        previousVersion?: string | undefined;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    schemaVersion: 1;
    packages: {
        status: "active" | "error" | "restart-required";
        id: string;
        installedAt: string;
        version: string;
        manifest: {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        } | {
            id: string;
            name: string;
            description: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            restartRequired: boolean;
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    aliases: string[];
                    playerLabel: string;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
        };
        error: string | null;
        readiness: "pending" | "registered" | "ready" | "error";
        readinessError: string | null;
        legacy: boolean;
        previousVersion?: string | undefined;
    }[];
}, {
    schemaVersion: 1;
    packages: {
        status: "active" | "error" | "restart-required";
        id: string;
        installedAt: string;
        version: string;
        manifest: {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 1;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        } | {
            id: string;
            name: string;
            kind: ("agent" | "maps" | "conversation-calls" | "turn-game")[];
            schemaVersion: 2;
            version: string;
            engine: {
                min: string;
                maxExclusive: string;
            };
            entrypoints: {
                server?: string | undefined;
                client?: string | undefined;
                agents?: string | undefined;
                knowledge?: string | undefined;
            };
            files: {
                path: string;
                sha256: string;
                bytes: number;
            }[];
            permissions: ("agent-runtime" | "chat-read" | "chat-write" | "network" | "prompt-context" | "routes" | "storage" | "ui")[];
            capabilityApi: {
                major: number;
                minor: number;
            };
            builtAgainst: {
                engineVersion: string;
                engineCommit: string;
            };
            description?: string | undefined;
            contributions?: {
                slots?: ("conversation-surface" | "conversation-toolbar" | "chat-settings" | "spatial-workspace" | "chat-runtime" | "game-world-map")[] | undefined;
                conversationGame?: {
                    command: string;
                    playerLabel: string;
                    aliases?: string[] | undefined;
                } | undefined;
                agentDetail?: {
                    agentIds: string[];
                } | undefined;
            } | undefined;
            restartRequired?: boolean | undefined;
        };
        error: string | null;
        readiness?: "pending" | "registered" | "ready" | "error" | undefined;
        readinessError?: string | null | undefined;
        legacy?: boolean | undefined;
        previousVersion?: string | undefined;
    }[];
}>;
export declare const packagedAgentDefinitionSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    author: z.ZodOptional<z.ZodString>;
    phase: z.ZodEnum<["pre_generation", "parallel", "post_processing"]>;
    enabledByDefault: z.ZodBoolean;
    defaultInjectAsSection: z.ZodOptional<z.ZodBoolean>;
    category: z.ZodEnum<["writer", "tracker", "misc"]>;
    libraryHidden: z.ZodOptional<z.ZodBoolean>;
    runtimeDisabled: z.ZodOptional<z.ZodBoolean>;
    /** @deprecated Legacy package compatibility; author resultType in defaultSettings instead. */
    resultType: z.ZodOptional<z.ZodEnum<["game_state_update", "text_rewrite", "sprite_change", "echo_message", "quest_update", "image_prompt", "context_injection", "continuity_check", "director_event", "lorebook_update", "character_card_update", "background_change", "character_tracker_update", "persona_stats_update", "custom_tracker_update", "spotify_control", "youtube_control", "local_music_control", "haptic_command", "cyoa_choices", "secret_plot", "game_master_narration", "party_action", "game_map_update", "game_state_transition", "prompt_patch", "frontend_theme_update", "about_me_update"]>>;
    modeAllowlist: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation", "roleplay", "visual_novel", "game"]>, "many">>;
    defaultTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    defaultSettings: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    promptTemplates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        promptTemplate: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        name: string;
        promptTemplate: string;
        description?: string | undefined;
    }, {
        id: string;
        name: string;
        promptTemplate: string;
        description?: string | undefined;
    }>, "many">>;
    runInterval: z.ZodOptional<z.ZodNumber>;
    defaultPromptTemplate: z.ZodString;
    execution: z.ZodOptional<z.ZodEnum<["pipeline", "feature"]>>;
}, "strict", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string;
    category: "writer" | "tracker" | "misc";
    phase: "pre_generation" | "parallel" | "post_processing";
    enabledByDefault: boolean;
    defaultPromptTemplate: string;
    author?: string | undefined;
    resultType?: "quest_update" | "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update" | undefined;
    defaultInjectAsSection?: boolean | undefined;
    libraryHidden?: boolean | undefined;
    runtimeDisabled?: boolean | undefined;
    modeAllowlist?: ("roleplay" | "game" | "conversation" | "visual_novel")[] | undefined;
    defaultTools?: string[] | undefined;
    defaultSettings?: Record<string, unknown> | undefined;
    promptTemplates?: {
        id: string;
        name: string;
        promptTemplate: string;
        description?: string | undefined;
    }[] | undefined;
    runInterval?: number | undefined;
    execution?: "pipeline" | "feature" | undefined;
}, {
    id: string;
    name: string;
    description: string;
    category: "writer" | "tracker" | "misc";
    phase: "pre_generation" | "parallel" | "post_processing";
    enabledByDefault: boolean;
    defaultPromptTemplate: string;
    author?: string | undefined;
    resultType?: "quest_update" | "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update" | undefined;
    defaultInjectAsSection?: boolean | undefined;
    libraryHidden?: boolean | undefined;
    runtimeDisabled?: boolean | undefined;
    modeAllowlist?: ("roleplay" | "game" | "conversation" | "visual_novel")[] | undefined;
    defaultTools?: string[] | undefined;
    defaultSettings?: Record<string, unknown> | undefined;
    promptTemplates?: {
        id: string;
        name: string;
        promptTemplate: string;
        description?: string | undefined;
    }[] | undefined;
    runInterval?: number | undefined;
    execution?: "pipeline" | "feature" | undefined;
}>;
export declare const packagedAgentDefinitionsSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    author: z.ZodOptional<z.ZodString>;
    phase: z.ZodEnum<["pre_generation", "parallel", "post_processing"]>;
    enabledByDefault: z.ZodBoolean;
    defaultInjectAsSection: z.ZodOptional<z.ZodBoolean>;
    category: z.ZodEnum<["writer", "tracker", "misc"]>;
    libraryHidden: z.ZodOptional<z.ZodBoolean>;
    runtimeDisabled: z.ZodOptional<z.ZodBoolean>;
    /** @deprecated Legacy package compatibility; author resultType in defaultSettings instead. */
    resultType: z.ZodOptional<z.ZodEnum<["game_state_update", "text_rewrite", "sprite_change", "echo_message", "quest_update", "image_prompt", "context_injection", "continuity_check", "director_event", "lorebook_update", "character_card_update", "background_change", "character_tracker_update", "persona_stats_update", "custom_tracker_update", "spotify_control", "youtube_control", "local_music_control", "haptic_command", "cyoa_choices", "secret_plot", "game_master_narration", "party_action", "game_map_update", "game_state_transition", "prompt_patch", "frontend_theme_update", "about_me_update"]>>;
    modeAllowlist: z.ZodOptional<z.ZodArray<z.ZodEnum<["conversation", "roleplay", "visual_novel", "game"]>, "many">>;
    defaultTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    defaultSettings: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    promptTemplates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        promptTemplate: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        name: string;
        promptTemplate: string;
        description?: string | undefined;
    }, {
        id: string;
        name: string;
        promptTemplate: string;
        description?: string | undefined;
    }>, "many">>;
    runInterval: z.ZodOptional<z.ZodNumber>;
    defaultPromptTemplate: z.ZodString;
    execution: z.ZodOptional<z.ZodEnum<["pipeline", "feature"]>>;
}, "strict", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string;
    category: "writer" | "tracker" | "misc";
    phase: "pre_generation" | "parallel" | "post_processing";
    enabledByDefault: boolean;
    defaultPromptTemplate: string;
    author?: string | undefined;
    resultType?: "quest_update" | "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update" | undefined;
    defaultInjectAsSection?: boolean | undefined;
    libraryHidden?: boolean | undefined;
    runtimeDisabled?: boolean | undefined;
    modeAllowlist?: ("roleplay" | "game" | "conversation" | "visual_novel")[] | undefined;
    defaultTools?: string[] | undefined;
    defaultSettings?: Record<string, unknown> | undefined;
    promptTemplates?: {
        id: string;
        name: string;
        promptTemplate: string;
        description?: string | undefined;
    }[] | undefined;
    runInterval?: number | undefined;
    execution?: "pipeline" | "feature" | undefined;
}, {
    id: string;
    name: string;
    description: string;
    category: "writer" | "tracker" | "misc";
    phase: "pre_generation" | "parallel" | "post_processing";
    enabledByDefault: boolean;
    defaultPromptTemplate: string;
    author?: string | undefined;
    resultType?: "quest_update" | "game_state_update" | "text_rewrite" | "sprite_change" | "echo_message" | "image_prompt" | "context_injection" | "continuity_check" | "director_event" | "lorebook_update" | "character_card_update" | "background_change" | "character_tracker_update" | "persona_stats_update" | "custom_tracker_update" | "spotify_control" | "youtube_control" | "local_music_control" | "haptic_command" | "cyoa_choices" | "secret_plot" | "game_master_narration" | "party_action" | "game_map_update" | "game_state_transition" | "prompt_patch" | "frontend_theme_update" | "about_me_update" | undefined;
    defaultInjectAsSection?: boolean | undefined;
    libraryHidden?: boolean | undefined;
    runtimeDisabled?: boolean | undefined;
    modeAllowlist?: ("roleplay" | "game" | "conversation" | "visual_novel")[] | undefined;
    defaultTools?: string[] | undefined;
    defaultSettings?: Record<string, unknown> | undefined;
    promptTemplates?: {
        id: string;
        name: string;
        promptTemplate: string;
        description?: string | undefined;
    }[] | undefined;
    runInterval?: number | undefined;
    execution?: "pipeline" | "feature" | undefined;
}>, "many">;
export type CapabilityPackageManifest = z.infer<typeof capabilityPackageManifestSchema>;
export type CapabilityCatalogPackage = z.infer<typeof capabilityCatalogPackageSchema>;
export type CapabilityCatalog = z.infer<typeof capabilityCatalogSchema>;
export type InstalledCapabilityPackage = z.infer<typeof installedCapabilityPackageSchema>;
export type PackagedAgentDefinition = z.infer<typeof packagedAgentDefinitionSchema>;
export interface CustomAgentRepository {
    id: string;
    url: string;
    owner: string;
    name: string;
    lastDigest: string | null;
    lastSyncedAt: string | null;
    agentCount: number;
}
export type CustomAgentRepositoryChangeStatus = "new" | "updated" | "unchanged" | "removed";
export interface CustomAgentRepositoryChange {
    agentId: string;
    name: string;
    status: CustomAgentRepositoryChangeStatus;
    changedFields: string[];
    definition?: PackagedAgentDefinition;
}
export interface CustomAgentRepositoryPreview {
    repository: Pick<CustomAgentRepository, "id" | "url" | "owner" | "name">;
    digest: string;
    changes: CustomAgentRepositoryChange[];
}
export interface CustomAgentRepositoryState {
    enabled: boolean;
    repositories: CustomAgentRepository[];
}
export declare function getCapabilityApiCompatibilityIssue(manifest: CapabilityPackageManifest): string | null;
export declare function compareCapabilityPackageVersions(left: string, right: string): number;
export declare function isInstalledCapabilityReady(installed: InstalledCapabilityPackage): boolean;
//# sourceMappingURL=capability-package.schema.d.ts.map