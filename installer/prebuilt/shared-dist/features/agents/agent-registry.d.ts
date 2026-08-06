import type { BuiltInAgentManifest } from "./agent-manifest.types.js";
/** Active runtime registry. Fresh installs populate it only from downloaded packages. */
export declare const BUILT_IN_AGENT_MANIFESTS: BuiltInAgentManifest[];
export declare function replaceBuiltInAgentManifestRegistry(manifests: readonly BuiltInAgentManifest[]): void;
export declare function getBuiltInAgentManifest(agentId: string): BuiltInAgentManifest | null;
export declare function isBuiltInAgentRuntimeDisabled(agentId: string): boolean;
//# sourceMappingURL=agent-registry.d.ts.map