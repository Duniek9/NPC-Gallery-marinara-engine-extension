type RegexReplaceMatch = {
    match: string;
    captures: string[];
    offset: number;
    input: string;
    groups?: Record<string, string>;
};
export declare function expandRegexReplacement(replacement: string, ctx: RegexReplaceMatch): string;
export declare function resolveRegexPatternLiteralMacros(pattern: string, resolveLiteral?: (literal: string) => string): string;
export declare function applyRegexReplacement(text: string, regex: RegExp, replacement: string, resolveReplacement?: (replacement: string) => string): string;
export {};
//# sourceMappingURL=regex-replacement.d.ts.map