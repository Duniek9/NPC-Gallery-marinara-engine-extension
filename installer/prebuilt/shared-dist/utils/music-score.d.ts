import type { GameActiveState } from "../types/game.js";
export declare const MUSIC_GENRES: readonly ["fantasy", "horror", "romance", "mystery", "scifi", "modern", "slice_of_life", "adventure", "drama", "custom"];
export type MusicGenre = (typeof MUSIC_GENRES)[number];
export declare const MUSIC_INTENSITIES: readonly ["calm", "tense", "intense"];
export type MusicIntensity = (typeof MUSIC_INTENSITIES)[number];
export declare const LOCATION_KINDS: readonly ["interior", "exterior", "underground", "urban", "nature"];
export type LocationKind = (typeof LOCATION_KINDS)[number];
export interface MusicScoreInput {
    state: GameActiveState;
    /** Small tie-breaker only. Main music selection comes from musicGenre/musicIntensity. */
    weather?: string | null;
    /** Small tie-breaker only. Main music selection comes from musicGenre/musicIntensity. */
    timeOfDay?: string | null;
    musicGenre?: MusicGenre | string | null;
    musicIntensity?: MusicIntensity | string | null;
    currentMusic?: string | null;
    recentMusic?: string[] | null;
    availableMusic: string[];
}
export interface AmbientScoreInput {
    state: GameActiveState;
    weather?: string | null;
    timeOfDay?: string | null;
    locationKind?: LocationKind | string | null;
    currentAmbient?: string | null;
    availableAmbient: string[];
    /** LLM-selected background tag — fallback only when locationKind is missing. */
    background?: string | null;
}
export declare function normalizeMusicGenre(value: unknown): MusicGenre | null;
export declare function normalizeMusicIntensity(value: unknown): MusicIntensity | null;
export declare function normalizeLocationKind(value: unknown): LocationKind | null;
/**
 * Pick the best music tag for the current game context.
 * Returns `null` only when there is no music or no structured candidates for this state; deliberately
 * rotates off `currentMusic` when alternatives exist (the keep-current contract belongs to `scoreAmbient`).
 */
export declare function scoreMusic(input: MusicScoreInput): string | null;
/**
 * Pick the best ambient tag for the current game context.
 * Returns `null` when the current ambient is already appropriate or no match found.
 */
export declare function scoreAmbient(input: AmbientScoreInput): string | null;
//# sourceMappingURL=music-score.d.ts.map