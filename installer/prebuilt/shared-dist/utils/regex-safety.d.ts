export interface PatternSafetyOptions {
    /** Reject any source string longer than this. Default 1000. */
    maxLength?: number;
    /** Reject star height greater than this. 1 allows `a+`, `(a+)`, `(a)+`; rejects `(a+)+`. Default 1. */
    maxStarHeight?: number;
    /** Reject `{n,m}` (or `{n,}`) where m (or the unbounded upper) exceeds this. Default Infinity. */
    maxRepetition?: number;
}
/**
 * Decide whether a regex source string is safe to compile and run against
 * untrusted input. Returns false for patterns likely to cause catastrophic
 * backtracking; the caller should fall back to literal substring matching.
 */
export declare function isPatternSafe(source: string, options?: PatternSafetyOptions): boolean;
//# sourceMappingURL=regex-safety.d.ts.map