/**
 * Resolve the Persona visible to a chat. Explicit chat selection always wins.
 * Conversation may use the globally active Persona for its account-style UX;
 * Roleplay, legacy Visual Novel, and Game remain Persona-less unless selected.
 */
export declare function resolveChatPersonaCandidate<T extends {
    id: string;
    isActive?: unknown;
}>(personas: readonly T[], chatPersonaId: string | null | undefined, chatMode: string | null | undefined): T | null;
//# sourceMappingURL=chat-persona.d.ts.map