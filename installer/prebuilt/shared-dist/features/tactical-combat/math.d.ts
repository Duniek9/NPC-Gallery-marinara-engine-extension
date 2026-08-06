import type { CombatStatusEffect } from "../../types/game.js";
import { type TacticalCoord, type TacticalDifficulty, type TacticalGrid, type TacticalTerrain, type TacticalUnit } from "./types.js";
export declare function clamp(value: number, lo: number, hi: number): number;
export declare function manhattan(a: TacticalCoord, b: TacticalCoord): number;
export declare function inBounds(grid: TacticalGrid, x: number, y: number): boolean;
export declare function terrainAt(grid: TacticalGrid, x: number, y: number): TacticalTerrain;
export declare function terrainInfoAt(grid: TacticalGrid, x: number, y: number): import("./types.js").TerrainInfo;
export declare function isImpassable(grid: TacticalGrid, x: number, y: number): boolean;
/** Movement points per turn from speed (class moveBonus is applied at unit creation). */
export declare function deriveMovement(speed: number): number;
/** Classic combat difficulty multipliers (combat.service.ts). Applied to ENEMY damage in tactical. */
export declare const DIFFICULTY_DAMAGE_MULT: Record<TacticalDifficulty, number>;
export declare function elementMultiplier(attackElement?: string, defenderElement?: string): number;
export declare function activeEffects(unit: TacticalUnit): CombatStatusEffect[];
export declare function effectiveAttack(unit: TacticalUnit): number;
export declare function effectiveDefense(unit: TacticalUnit): number;
export declare function effectiveSpeed(unit: TacticalUnit): number;
export declare function terrainAvoid(grid: TacticalGrid, unit: TacticalUnit): number;
/** 0–100 chance the attack lands. */
export declare function hitChance(grid: TacticalGrid, attacker: TacticalUnit, defender: TacticalUnit): number;
/** 0–60 chance of a x2 critical. Adds the attacker's class crit bonus (absent class → fighter, +0). */
export declare function critChance(attacker: TacticalUnit, defender: TacticalUnit): number;
export interface DamageInputs {
    grid: TacticalGrid;
    attacker: TacticalUnit;
    defender: TacticalUnit;
    /** Damage roll in [0.9, 1.1]. Use 1.0 for expected/forecast. */
    roll: number;
    crit: boolean;
    difficulty: TacticalDifficulty;
    /** Skill power multiplier against the attack stat (basic attack = 1). */
    power?: number;
    /** Element carried by this strike (skill element overrides unit element). */
    element?: string;
}
/**
 * Damage for a single landed strike. Deterministic given inputs.
 * base = attack*power*roll, scaled by level difference (±50% cap), minus
 * defense*0.6 + terrainDef*2; then element, crit (x2), defending (halve), and
 * enemy-side difficulty multiplier. Floors to >= 1.
 */
export declare function computeDamage(inp: DamageInputs): number;
/** Heal amount for a heal skill (mirrors classic resolveSkillAction heal math). */
export declare function computeHeal(caster: TacticalUnit, power: number): number;
//# sourceMappingURL=math.d.ts.map