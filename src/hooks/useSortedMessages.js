import { useMemo } from "react";

export const useSortedMessages = (messages) => {
  return useMemo(() => {
    if (!messages) return [];
    return Object.values(messages).sort((a, b) => a.timestamp - b.timestamp);
  }, [messages]);
};
