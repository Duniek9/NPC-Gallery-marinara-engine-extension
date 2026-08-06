import type { AnyTurnGameEngine } from "./engine.types.js";
export declare function registerTurnGameEngine(engine: AnyTurnGameEngine): () => void;
export declare function resetTurnGameRegistry(): void;
export declare function getTurnGameEngine(gameType: string): AnyTurnGameEngine | null;
export interface TurnGameSummary {
    gameType: string;
    label: string;
    minPlayers: number;
    maxPlayers: number;
}
export declare function listTurnGames(): TurnGameSummary[];
//# sourceMappingURL=registry.d.ts.map