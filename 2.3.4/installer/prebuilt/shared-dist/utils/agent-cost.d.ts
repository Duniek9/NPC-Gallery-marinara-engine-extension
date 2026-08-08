import type { AgentPhase } from "../types/agent.js";
/** Minimal shape needed to estimate an agent's contribution. */
export interface AgentCostInput {
    /** Agent type identifier, e.g. "world-state". Used to special-case static agents. */
    type: string;
    phase: AgentPhase;
    /** Per-agent connection override; falls back to the chat default when null. */
    connectionId: string | null;
    /** Resolved prompt template (custom override OR built-in default). */
    promptTemplate: string;
    /** Resolved output format, used to isolate custom rewrite agents. */
    resultType?: string;
}
export interface AgentLoadCost {
    instructionTokens: number;
    extraCalls: number;
    /** Soft warning level. "high" when the loadout crosses a threshold likely to
     *  matter on small-context (~8k) local models. */
    level: "ok" | "high";
}
export declare const AGENT_COST_HIGH_CALLS = 4;
export declare const AGENT_COST_HIGH_TOKENS = 4000;
export declare function estimateAgentLoadCost(enabled: AgentCostInput[], defaultConnectionId: string | null): AgentLoadCost;
//# sourceMappingURL=agent-cost.d.ts.map