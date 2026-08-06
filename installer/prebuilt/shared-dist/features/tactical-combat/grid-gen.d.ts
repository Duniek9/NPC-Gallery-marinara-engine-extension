import type { TacticalEnvironment, TacticalFormation, TacticalGrid, TacticalUnit } from "./types.js";
/** Grid dimensions scale with the number of combatants. Default 12x8, cap 14x10. */
export declare function gridDimensions(unitCount: number): {
    width: number;
    height: number;
};
/** Build a seeded terrain grid with clear spawn strips and guaranteed left↔right connectivity. */
export declare function generateGrid(unitCount: number, rng: () => number, environment?: TacticalEnvironment): TacticalGrid;
/**
 * Place units according to `formation`. Party/enemy target tiles come from
 * `formationTargets`; claimNear resolves collisions + passability so every unit
 * lands on a unique passable tile; ensureConnectivity carves corridors so every
 * enemy is BFS-reachable from every party unit. Mutates each unit's x/y in place.
 *
 * Deterministic: given the same grid + units + formation + rng stream, the
 * placement is identical.
 */
export declare function placeSpawns(grid: TacticalGrid, units: TacticalUnit[], formation?: TacticalFormation, rng?: () => number): void;
//# sourceMappingURL=grid-gen.d.ts.map