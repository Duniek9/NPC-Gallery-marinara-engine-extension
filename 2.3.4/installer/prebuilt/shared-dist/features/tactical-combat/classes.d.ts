import type { Combatant } from "../../types/game.js";
import type { TacticalAttackRange, TacticalClass } from "./types.js";
export interface ClassProfile {
    /** Basic-attack reach in Manhattan distance. */
    attackRange: TacticalAttackRange;
    /** Added to stat-derived movement, then clamped to [2, 7]. */
    moveBonus: number;
    /** Added to the crit formula (still clamped 0..60). */
    critBonus: number;
    label: string;
    blurb: string;
}
export declare const CLASS_PROFILES: Record<TacticalClass, ClassProfile>;
/** Normalize a free-form class string (trim + lowercase) to a valid TacticalClass, else undefined. */
export declare function normalizeClass(value?: string): TacticalClass | undefined;
/**
 * Resolve a Combatant to its tactical class. Pure. Precedence (per the Round 3
 * contract):
 *   1. explicit `combatClass` (normalized) if valid
 *   2. any heal-type skill → healer
 *   3. name/skill keyword scan → archer/mage/rogue/knight
 *   4. ≥2 attack skills carrying an element → mage
 *   5. defense > attack → knight; else speed >= attack + 4 → rogue
 *   6. default fighter
 */
export declare function deriveClass(c: Combatant): TacticalClass;
//# sourceMappingURL=classes.d.ts.map