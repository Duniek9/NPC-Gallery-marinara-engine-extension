import type { ChatMode } from "@marinara-engine/shared";
import { logger } from "../../lib/logger.js";

export interface AssistantMessageCommittedEvent {
  chatId: string;
  messageId: string;
  swipeIndex: number;
  mode: ChatMode;
  content: string;
}

export type AssistantMessageObserver = (event: AssistantMessageCommittedEvent) => void | Promise<void>;

const observers = new Set<AssistantMessageObserver>();

export function registerAssistantMessageObserver(observer: AssistantMessageObserver): () => void {
  observers.add(observer);
  return () => observers.delete(observer);
}

export function notifyAssistantMessageCommitted(event: AssistantMessageCommittedEvent): void {
  for (const observer of observers) {
    void Promise.resolve(observer(event)).catch((error) => {
      logger.warn(error, "Capability assistant-message observer failed for message %s", event.messageId);
    });
  }
}
