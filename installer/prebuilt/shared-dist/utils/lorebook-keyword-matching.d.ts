import type { SelectiveLogic } from "../types/lorebook.js";
/** Pluggable executor for compiled regex test calls. Server passes a vm-timeout-bounded executor. */
export type RegexExecutor = (regex: RegExp, text: string) => boolean;
export interface KeywordMatchOptions {
    useRegex: boolean;
    matchWholeWords: boolean;
    caseSensitive: boolean;
    /** Optional override for executing user-supplied regex patterns. Server injects a
     *  vm.runInNewContext-bounded executor so a pathological pattern that survived the
     *  static safety check can still be aborted. Only applied to the `useRegex` path —
     *  the matchWholeWords branch builds its regex from escaped-literal text and cannot
     *  ReDoS, so it skips the executor (and its per-call vm overhead). */
    regexExecutor?: RegexExecutor;
}
/** Test whether a single keyword would match the given text under the given options. */
export declare function testKeyword(keyword: string, text: string, options: KeywordMatchOptions): boolean;
/** Primary key set: any single key matching counts as a match. */
export declare function testPrimaryKeys(keys: string[], text: string, options: KeywordMatchOptions): {
    matched: boolean;
    matchedKeys: string[];
};
/** Secondary key set with selective logic. Empty list passes. */
export declare function testSecondaryKeys(secondaryKeys: string[], text: string, logic: SelectiveLogic, options: KeywordMatchOptions): boolean;
//# sourceMappingURL=lorebook-keyword-matching.d.ts.map