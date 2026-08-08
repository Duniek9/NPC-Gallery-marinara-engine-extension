import type { Combatant, CombatSkill, CombatSummary } from "../../types/game.js";
import type { ApplyActionResult, TacticalAction, TacticalCombatState, TacticalCoord, TacticalEvent, TacticalForecast, TacticalUnit } from "./types.js";
/**
 * Build a fresh tactical battle. Seeded: same (party, enemies, seed, difficulty)
 * always yields the identical grid + spawns. Cursor 0 of the rng stream is
 * reserved for setup; gameplay draws start at cursor 1.
 */
export declare function createTacticalCombat(party: Combatant[], enemies: Combatant[], opts: {
    seed: number;
    difficulty: string;
    environment?: string;
    formation?: string;
}): TacticalCombatState;
export declare function getUnit(state: TacticalCombatState, id: string): TacticalUnit | undefined;
declare function aliveUnits(state: TacticalCombatState, side?: "party" | "enemy"): TacticalUnit[];
/**
 * Dijkstra over terrain move-costs. Can pass THROUGH living allies but never
 * enemies or impassable terrain, and cannot END on an occupied tile. Always
 * includes the unit's own tile (staying put).
 */
export declare function getMovementRange(state: TacticalCombatState, unitId: string): TacticalCoord[];
/** Enemy-side unit ids within basic-attack range from `fromTile` (or the unit's tile). */
export declare function getTargetsInRange(state: TacticalCombatState, unitId: string, fromTile?: TacticalCoord): string[];
declare function forecastFrom(state: TacticalCombatState, attacker: TacticalUnit, defender: TacticalUnit, from: TacticalCoord, opts?: {
    power?: number;
    element?: string;
    hitPenalty?: number;
}): {
    damage: number;
    hitChance: number;
    critChance: number;
};
/** FE-style forecast from the attacker's CURRENT tile. Matches `applyAction` statistically. */
export declare function forecastAttack(state: TacticalCombatState, attackerId: string, defenderId: string): TacticalForecast;
/** True if `defender` can retaliate against `attacker` after surviving a strike. */
declare function canCounter(attacker: TacticalUnit, defender: TacticalUnit): boolean;
declare function skillReady(unit: TacticalUnit, skill: CombatSkill): boolean;
declare function findSkill(unit: TacticalUnit, skillName: string): CombatSkill | undefined;
/**
 * Apply a single unit action (move+act flow) with NO legality pre-checks beyond
 * the essentials — used internally by both player `applyAction` and the AI.
 * Mutates `state`. Returns events. Assumes `unit` is alive and it's a legal
 * moment for it to act.
 */
declare function performUnitAction(state: TacticalCombatState, unit: TacticalUnit, action: Extract<TacticalAction, {
    unitId: string;
}>, events: TacticalEvent[]): void;
declare function tickRound(state: TacticalCombatState, events: TacticalEvent[]): void;
declare function checkTerminal(state: TacticalCombatState, events: TacticalEvent[]): boolean;
export declare function isTerminal(state: TacticalCombatState): boolean;
declare function appendLog(state: TacticalCombatState, events: TacticalEvent[]): void;
declare function clone(state: TacticalCombatState): TacticalCombatState;
/**
 * Validate + apply a player action. Never throws — illegal input returns
 * `{ ok: false, error }`. On a turn-ending action that leaves every party unit
 * acted, the phase auto-advances to "enemy" (the caller then runs
 * `runEnemyPhase`).
 */
export declare function applyAction(state: TacticalCombatState, action: TacticalAction): ApplyActionResult;
/** Post-battle summary in the EXACT classic `CombatSummary` shape (drives GM narration). */
export declare function buildTacticalSummary(state: TacticalCombatState): CombatSummary;
export { aliveUnits, appendLog, canCounter, checkTerminal, clone, findSkill, forecastFrom, performUnitAction, skillReady, tickRound };
//# sourceMappingURL=engine.d.ts.map