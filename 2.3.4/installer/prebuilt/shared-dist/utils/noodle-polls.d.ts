import type { NoodleInteraction, NoodlePoll, NoodlePost } from "../types/noodle.js";
export declare function createNoodlePoll(value: unknown): NoodlePoll | null;
export declare function readNoodlePoll(value: unknown): NoodlePoll | null;
export declare function readNoodlePollFromMetadata(metadata: Record<string, unknown> | null | undefined): NoodlePoll | null;
/**
 * Preserve durable poll votes when a newly fetched Noodle snapshot races an
 * interaction write. Server-returned votes remain authoritative for each
 * account, while a previously known vote is retained only if its poll and
 * option still exist in the new snapshot.
 */
export declare function mergeNoodlePollVoteInteractions(previousInteractions: NoodleInteraction[], nextPosts: NoodlePost[], nextInteractions: NoodleInteraction[]): NoodleInteraction[];
//# sourceMappingURL=noodle-polls.d.ts.map