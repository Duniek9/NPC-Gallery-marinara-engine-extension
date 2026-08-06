/** mulberry32: tiny, fast, well-distributed 32-bit PRNG. Returns a [0,1) stream. */
export declare function mulberry32(seed: number): () => number;
/**
 * Derive an independent 32-bit sub-seed from a base seed and a cursor position,
 * via splitmix32 finalization. Each distinct cursor yields an uncorrelated
 * stream, so one "randomness draw" costs exactly one cursor tick regardless of
 * how many random numbers it internally consumes.
 */
export declare function deriveSubSeed(seed: number, cursor: number): number;
/** Fisher-Yates using the supplied [0,1) generator. Returns a NEW array; does not mutate input. */
export declare function shuffleWith<T>(items: readonly T[], rng: () => number): T[];
/** Deterministically shuffle `items` from (seed, cursor). Pure. */
export declare function deterministicShuffle<T>(items: readonly T[], seed: number, cursor: number): T[];
/** The per-draw rng stream: keyed on the action cursor. */
export declare function deterministicRng(seed: number, actionCounter: number): () => number;
//# sourceMappingURL=rng.d.ts.map