export interface NoodleTextMention {
    handle: string;
    start: number;
    end: number;
}
export declare function findNoodleTextMentions(text: string): NoodleTextMention[];
export declare function extractNoodleMentionHandles(text: string): string[];
export declare function noodleTextMentionsHandle(text: string | null | undefined, handle: string): boolean;
//# sourceMappingURL=noodle-mentions.d.ts.map