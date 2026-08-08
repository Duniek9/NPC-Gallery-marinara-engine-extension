import type { ChatMode } from "@marinara-engine/shared";
import { logger } from "../../lib/logger.js";

export interface CapabilityGenerationContextEvent { chatId: string; mode: ChatMode; }
export type GenerationContextContributor = (
  event: CapabilityGenerationContextEvent,
) => string | null | undefined | Promise<string | null | undefined>;

const contributors = new Map<string, GenerationContextContributor>();

export function registerGenerationContextContributor(packageId: string, contributor: GenerationContextContributor): () => void {
  contributors.set(packageId, contributor);
  return () => { if (contributors.get(packageId) === contributor) contributors.delete(packageId); };
}

export async function collectCapabilityGenerationContext(
  activeAgentIds: string[],
  event: CapabilityGenerationContextEvent,
): Promise<string[]> {
  const sections: string[] = [];
  for (const packageId of activeAgentIds) {
    const contributor = contributors.get(packageId);
    if (!contributor) continue;
    try {
      const value = await contributor(event);
      if (typeof value === "string" && value.trim()) sections.push(value.trim());
    } catch (error) {
      logger.warn(error, "Capability %s failed to contribute generation context", packageId);
    }
  }
  return sections;
}
