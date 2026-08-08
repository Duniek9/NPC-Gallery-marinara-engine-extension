import type { PlayerStats, QuestProgress } from "../types/game-state.js";
type QuestObjective = QuestProgress["objectives"][number];
export type QuestUpdateAction = "create" | "update" | "complete" | "fail";
export interface NormalizedQuestUpdate {
    action: QuestUpdateAction;
    questName: string;
    description?: string;
    objectives?: QuestObjective[];
    rewards?: string[];
    notes?: string;
}
export interface QuestMergeResult {
    updates: NormalizedQuestUpdate[];
    originalQuests: QuestProgress[];
    quests: QuestProgress[];
    playerStats: PlayerStats & Record<string, unknown>;
    changed: boolean;
}
export declare function normalizeQuestCollectionForQuestMerge(value: unknown, depth?: number): QuestProgress[];
export declare function normalizeQuestUpdates(value: unknown): NormalizedQuestUpdate[];
export declare function normalizePlayerStatsForQuestMerge(value: unknown): PlayerStats & Record<string, unknown>;
export declare function compactQuestProgressForContext(value: unknown): QuestProgress[];
export declare function applyQuestUpdatesToPlayerStats(value: unknown, updatesValue: unknown, options?: {
    autoRemoveFullyCompleted?: boolean;
}): QuestMergeResult;
export declare function buildQuestJournalData(update: NormalizedQuestUpdate): {
    id: string;
    name: string;
    status: "active" | "completed" | "failed";
    description: string;
    objectives: string[];
};
export {};
//# sourceMappingURL=quest-state.d.ts.map