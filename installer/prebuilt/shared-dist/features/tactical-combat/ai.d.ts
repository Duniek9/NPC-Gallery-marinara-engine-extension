import type { TacticalCombatState, TacticalEvent } from "./types.js";
/**
 * Resolve the entire enemy phase: every living enemy acts (in speed order),
 * then the round ticks (statuses/cooldowns) and play returns to the player.
 * Pure — clones the input state.
 */
export declare function runEnemyPhase(state: TacticalCombatState): {
    state: TacticalCombatState;
    events: TacticalEvent[];
};
//# sourceMappingURL=ai.d.ts.map