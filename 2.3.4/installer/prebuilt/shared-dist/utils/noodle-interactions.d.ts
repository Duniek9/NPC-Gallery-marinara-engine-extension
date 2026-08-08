import type { NoodleAccountKind } from "../types/noodle.js";
interface NoodleReplyManagementInput {
    actorKind: NoodleAccountKind | null | undefined;
    actorAccountId: string;
    personaAccountId: string | null | undefined;
}
/**
 * Users may manage their current persona's replies and replies authored by
 * their characters. Generated random-user replies remain read-only.
 */
export declare function canManageNoodleReply({ actorKind, actorAccountId, personaAccountId, }: NoodleReplyManagementInput): boolean;
export {};
//# sourceMappingURL=noodle-interactions.d.ts.map