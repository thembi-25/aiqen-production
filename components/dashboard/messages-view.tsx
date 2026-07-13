"use client";

import { useState } from "react";

import type { Conversation } from "@/lib/data/portal/messages";
import { ThreadView } from "@/components/dashboard/thread-view";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { cn } from "@/lib/utils";

export function MessagesView({
  conversations,
  currentUserName,
}: {
  conversations: Conversation[];
  currentUserName: string;
}) {
  const [selectedId, setSelectedId] = useState(conversations[0]?.id);
  const selected = conversations.find((conversation) => conversation.id === selectedId);

  return (
    <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
      <AiqenCard className="p-2">
        <ul className="space-y-1">
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <button
                type="button"
                onClick={() => setSelectedId(conversation.id)}
                className={cn(
                  "flex w-full flex-col items-start gap-1 rounded-lg px-3 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                  selectedId === conversation.id
                    ? "bg-primary/10"
                    : "hover:bg-muted"
                )}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span className="text-sm font-medium text-foreground">{conversation.with}</span>
                  {conversation.unread && <span className="size-2 shrink-0 rounded-full bg-primary" />}
                </div>
                <p className="line-clamp-1 text-xs text-muted-foreground">
                  {conversation.lastMessagePreview}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </AiqenCard>

      <AiqenCard>
        {selected ? (
          <>
            <div className="mb-4 border-b border-border pb-4">
              <p className="font-semibold text-foreground">{selected.with}</p>
              <p className="text-xs text-muted-foreground">{selected.role}</p>
            </div>
            <ThreadView initialMessages={selected.messages} currentUserName={currentUserName} />
          </>
        ) : (
          <p className="text-sm text-muted-foreground">Select a conversation to view messages.</p>
        )}
      </AiqenCard>
    </div>
  );
}
