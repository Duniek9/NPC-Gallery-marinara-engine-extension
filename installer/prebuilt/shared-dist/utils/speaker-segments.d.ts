export declare const CLOCK_TOKEN_SOURCE: string;
export declare const FULL_DATE_TOKEN_SOURCE: string;
export declare const DATE_TIME_TOKEN_SOURCE: string;
export declare function decodeEncodedSpeakerTags(value: string): string;
/**
 * Strip leaked line-leading `[HH:MM]`, `[DD.MM.YYYY]`, or combined
 * `[DD.MM HH:MM]` / `[DD.MM.YYYY HH:MM]` timestamp tokens — the
 * display shape the conversation client renders and segments. The server strips
 * the same way before resolving reaction segment indexes, so both sides parse
 * identical content. Only line-leading tokens go; interior text is untouched
 * and — unlike the prompt sanitizer — trailing whitespace is preserved, so an
 * empty `Name: ` part keeps parsing as a (filtered) speaker line on both sides.
 */
export declare function stripLeadingMessageTimestamps(text: string): string;
/** One parsed speaker turn: the speaker's name (null = narration) + its text. */
export interface SpeakerSegment {
    speaker: string | null;
    text: string;
    /** Character offset in the source content where this segment's raw span starts. */
    start: number;
    /**
     * Character offset just past this segment's content: the closing tag for a
     * tagged segment, the end of the last non-blank line for a name-prefixed one
     * (untagged narration chunks keep their raw span, trailing whitespace included).
     */
    end: number;
}
/** Consecutive same-speaker segments merged into one display group. */
export interface GroupedSegment {
    speaker: string | null;
    lines: string[];
    /** Raw source span the group covers: start of its first part... */
    start: number;
    /** ...to the end of its last part. Lets callers inject text directly under a group. */
    end: number;
}
/**
 * Parse `<speaker="Name">...</speaker>` tagged segments. Returns null when the
 * content contains no complete tag (callers then fall back to the `Name: `
 * line-prefix format). Unknown speaker names become narration (null speaker);
 * `knownNames` holds normalizeTextForMatch()-normalized character names.
 */
export declare function parseSpeakerTags(content: string, knownNames: Set<string>): SpeakerSegment[] | null;
/**
 * Parse `Name: text` line-prefixed segments (the fallback format when no speaker
 * tags are present). Returns null when no known name prefixes any line.
 * `knownNames` holds normalizeTextForMatch()-normalized character names.
 */
export declare function parseNamePrefixFormat(content: string, knownNames: Set<string>, leadingSpeaker?: string | null): SpeakerSegment[] | null;
/** Merge consecutive segments by the same speaker into one grouped segment. */
export declare function groupConsecutiveSegments(segments: SpeakerSegment[]): GroupedSegment[];
/**
 * Expand the source lines inside one canonical speaker group for Bubble display.
 * Reaction indexes stay attached to the stable group while inherited `Name:`
 * lines can still render as individual message bubbles.
 */
export declare function splitGroupedSegmentDisplayLines(segment: GroupedSegment): string[];
/**
 * The full grouped-segment derivation for a message's content: complete speaker
 * tags win; the `Name: ` prefix format is only consulted when no tag exists;
 * null when the content has no recognizable speaker structure. This is the
 * canonical definition of "segment index N" — both the client's grouped layout
 * and the server's reaction attribution must derive indexes through it.
 */
export declare function parseGroupedSpeakerSegments(content: string, knownNames: Set<string>, leadingSpeaker?: string | null): GroupedSegment[] | null;
//# sourceMappingURL=speaker-segments.d.ts.map