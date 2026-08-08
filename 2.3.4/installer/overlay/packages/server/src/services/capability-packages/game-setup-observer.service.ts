import { logger } from "../../lib/logger.js";

export interface CapabilityGameSetupContextEvent {
  chatId: string;
  chatName: string;
  partyCharacterNames: string[];
}

export interface CapabilityGameSetupCompletedEvent extends CapabilityGameSetupContextEvent {
  startingNpcs: Array<Record<string, unknown>>;
}

export type GameSetupContextContributor = (
  event: CapabilityGameSetupContextEvent,
) => string | null | undefined | Promise<string | null | undefined>;
export type GameSetupCompletedObserver = (event: CapabilityGameSetupCompletedEvent) => void | Promise<void>;

const contextContributors = new Map<string, GameSetupContextContributor>();
const completedObservers = new Map<string, GameSetupCompletedObserver>();

export function registerGameSetupContextContributor(packageId: string, contributor: GameSetupContextContributor): () => void {
  contextContributors.set(packageId, contributor);
  return () => { if (contextContributors.get(packageId) === contributor) contextContributors.delete(packageId); };
}

export function registerGameSetupCompletedObserver(packageId: string, observer: GameSetupCompletedObserver): () => void {
  completedObservers.set(packageId, observer);
  return () => { if (completedObservers.get(packageId) === observer) completedObservers.delete(packageId); };
}

export async function collectCapabilityGameSetupContext(
  activeAgentIds: string[],
  event: CapabilityGameSetupContextEvent,
): Promise<string[]> {
  const sections: string[] = [];
  for (const packageId of activeAgentIds) {
    const contributor = contextContributors.get(packageId);
    if (!contributor) continue;
    try {
      const value = await contributor(event);
      if (typeof value === "string" && value.trim()) sections.push(value.trim());
    } catch (error) {
      logger.warn(error, "Capability %s failed to contribute Game setup context", packageId);
    }
  }
  return sections;
}

export function notifyCapabilityGameSetupCompleted(
  activeAgentIds: string[],
  event: CapabilityGameSetupCompletedEvent,
): void {
  for (const packageId of activeAgentIds) {
    const observer = completedObservers.get(packageId);
    if (!observer) continue;
    void Promise.resolve(observer(event)).catch((error) => {
      logger.warn(error, "Capability %s failed to observe completed Game setup", packageId);
    });
  }
}
