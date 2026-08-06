import type { PendingSpatialTransition, SpatialArchiveValidationResult, SpatialContextDefinition, SpatialDefinitionValidationResult, SpatialDestination, SpatialLocation, SpatialTransitionValidationResult } from "../types/spatial-context.js";
export declare const SPATIAL_CONTEXT_LIMITS: {
    readonly maxLocations: 500;
    readonly maxDepth: 20;
    readonly maxLinksPerLocation: 50;
    readonly maxNameLength: 200;
    readonly maxDescriptionLength: 4000;
    readonly maxAwarenessSummaryLength: 1000;
    readonly maxModelMemoryLength: 8000;
    readonly maxIdLength: 128;
    readonly maxLinkLabelLength: 200;
    readonly maxCommandIdLength: 200;
    readonly maxPromptDestinations: 50;
    readonly maxLorebookEntryIdsPerLocation: 50;
};
export declare function buildSpatialLocationIndex(definition: Pick<SpatialContextDefinition, "locations">): Map<string, SpatialLocation>;
export declare function getSpatialDescendantIds(definition: Pick<SpatialContextDefinition, "locations">, locationId: string): Set<string>;
export declare function wouldCreateSpatialCycle(definition: Pick<SpatialContextDefinition, "locations">, locationId: string, parentId: string): boolean;
export declare function resolveSpatialLocationDepth(definition: Pick<SpatialContextDefinition, "locations">, location: SpatialLocation): number;
export declare function spatialRadialPlacement(index: number, count: number, radius?: number): SpatialLocation["placement"];
export declare function compareSpatialLocations(left: SpatialLocation, right: SpatialLocation): number;
export declare function validateSpatialContextDefinition(definition: SpatialContextDefinition): SpatialDefinitionValidationResult;
export declare function resolveSpatialBreadcrumb(definition: Pick<SpatialContextDefinition, "locations">, locationId: string | null): SpatialLocation[];
export declare function resolveSpatialDestinations(definition: Pick<SpatialContextDefinition, "enabled" | "locations">, currentLocationId: string | null): SpatialDestination[];
export declare function validateSpatialArchive(definition: SpatialContextDefinition, locationId: string, options: {
    currentLocationId: string | null;
    replacementLocationId?: string | null;
}): SpatialArchiveValidationResult;
export declare function validateSpatialTransition(definition: SpatialContextDefinition, currentLocationId: string | null, request: PendingSpatialTransition): SpatialTransitionValidationResult;
//# sourceMappingURL=spatial-context.d.ts.map