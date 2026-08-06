import type { RPGStatPool, RPGStatsConfig } from "../types/character.js";
export declare const DEFAULT_RPG_STAT_POOLS: readonly RPGStatPool[];
export declare function createDefaultRpgStatPools(): RPGStatPool[];
export declare function normalizeRpgStatPools(rpgStats: Pick<RPGStatsConfig, "hp" | "pools"> | null | undefined): RPGStatPool[];
export declare function syncRpgHpFromPools(pools: readonly RPGStatPool[], fallbackHp?: RPGStatsConfig["hp"]): RPGStatsConfig["hp"];
export declare function formatRpgStatsForPrompt(rpgStats: RPGStatsConfig | undefined): string;
//# sourceMappingURL=rpg-stats.d.ts.map