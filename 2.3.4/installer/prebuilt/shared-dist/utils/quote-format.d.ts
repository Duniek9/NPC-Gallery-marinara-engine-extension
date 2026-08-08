export declare const QUOTE_FORMATS: readonly ["straight", "typographic"];
export type QuoteFormat = (typeof QUOTE_FORMATS)[number];
export declare function normalizeQuoteFormat(value: unknown): QuoteFormat;
export declare function formatTextQuotes(value: string, format: QuoteFormat): string;
//# sourceMappingURL=quote-format.d.ts.map