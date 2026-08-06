export declare const GAME_STATE_TEXT_FIELDS: readonly ["date", "time", "location", "weather", "temperature"];
export type GameStateTextField = (typeof GAME_STATE_TEXT_FIELDS)[number];
export declare function coerceGameStateTextValue(value: unknown): string | null;
export declare function coerceGameStateTextFields(fields: Partial<Record<GameStateTextField, unknown>>): Partial<Record<"date" | "temperature" | "location" | "time" | "weather", string | null>>;
//# sourceMappingURL=game-state-text.d.ts.map