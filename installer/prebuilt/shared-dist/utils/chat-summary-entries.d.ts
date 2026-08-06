import type { ChatSummaryEntry } from "../types/chat.js";
export declare const MAX_AUTOMATED_CHAT_SUMMARY_ENTRIES = 200;
export type ChatSummaryEntryInput = Partial<ChatSummaryEntry> & {
    content: string;
};
export interface ChatSummaryEntryNormalizeOptions {
    legacySummary?: string | null;
    createId?: () => string;
    now?: string;
}
/** Cheap token approximation for UI and metadata. */
export declare function estimateChatSummaryTokens(content: string): number;
/** Generate a concise default title from an entry's origin and source metadata. */
export declare function generateChatSummaryEntryTitle(entry: Pick<ChatSummaryEntry, "origin" | "sourceMode" | "messageCount" | "rangeStartIndex" | "rangeEndIndex">): string;
export declare function createLegacyChatSummaryEntry(summary: string | null | undefined, options?: ChatSummaryEntryNormalizeOptions): ChatSummaryEntry | null;
export declare function normalizeChatSummaryEntry(raw: unknown, options?: ChatSummaryEntryNormalizeOptions): ChatSummaryEntry | null;
export declare function createChatSummaryEntry(input: ChatSummaryEntryInput, options?: ChatSummaryEntryNormalizeOptions): ChatSummaryEntry;
export declare function sortChatSummaryEntries(entries: ChatSummaryEntry[]): ChatSummaryEntry[];
export declare function normalizeChatSummaryEntries(rawEntries: unknown, options?: ChatSummaryEntryNormalizeOptions): ChatSummaryEntry[];
export declare function compileChatSummaryEntries(entries: ChatSummaryEntry[]): string | null;
export declare function appendChatSummaryEntryToMetadata(metadata: Record<string, unknown>, input: ChatSummaryEntryInput, options?: ChatSummaryEntryNormalizeOptions): {
    entry: ChatSummaryEntry;
    entries: ChatSummaryEntry[];
    summary: string | null;
};
//# sourceMappingURL=chat-summary-entries.d.ts.map