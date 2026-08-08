import type { SkillCheckResult } from "../types/game.js";
export declare function getSkillCheckOutcomeLabel(result: Pick<SkillCheckResult, "success" | "criticalSuccess" | "criticalFailure">): string;
export declare function getSkillCheckOutcomeKey(result: Pick<SkillCheckResult, "success" | "criticalSuccess" | "criticalFailure">): string;
export declare function formatSkillCheckResultSummary(result: SkillCheckResult): string;
export declare function serializeResolvedSkillCheckTag(result: SkillCheckResult): string;
//# sourceMappingURL=skill-check-format.d.ts.map