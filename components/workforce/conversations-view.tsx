"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, Smartphone } from "lucide-react";

import type { Conversation, ConversationChannel } from "@/lib/data/workforce/conversations";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { conversationStatusToneAndLabel } from "@/lib/data/workforce/status-presentation";
import { cn } from "@/lib/utils";

const channelIcon: Record<ConversationChannel, typeof Phone> = {
  chat: MessageCircle,
  email: Mail,
  sms: Smartphone,
  call: Phone,
};

export function ConversationsView({
  conversations,
  employeeNameById,
}: {
  conversations: Conversation[];
  employeeNameById: Record<string, string>;
}) {
  const [selectedId, setSelectedId] = useState(conversations[0]?.id);
  const selected = conversations.find((conversation) => conversation.id === selectedId);
  const selectedStatus = selected ? conversationStatusToneAndLabel(selected.status) : null;

  return (
    <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
      <AiqenCard className="p-2">
        <ul className="space-y-1">
          {conversations.map((conversation) => {
            const ChannelIcon = channelIcon[conversation.channel];
            const status = conversationStatusToneAndLabel(conversation.status);

            return (
              <li key={conversation.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(conversation.id)}
                  className={cn(
                    "flex w-full flex-col items-start gap-1 rounded-lg px-3 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                    selectedId === conversation.id ? "bg-primary/10" : "hover:bg-muted"
                  )}
                >
                  <div className="flex w-full items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                      <ChannelIcon className="size-3.5 text-muted-foreground" />
                      {conversation.withName}
                    </span>
                    <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {employeeNameById[conversation.employeeId] ?? "Unassigned"} &middot;{" "}
                    {conversation.lastMessageAt}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </AiqenCard>

      <AiqenCard>
        {selected && selectedStatus ? (
          <>
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="font-semibold text-foreground">{selected.withName}</p>
                <p className="text-xs text-muted-foreground">
                  Handled by {employeeNameById[selected.employeeId] ?? "Unassigned"}
                </p>
              </div>
              <StatusBadge tone={selectedStatus.tone}>{selectedStatus.label}</StatusBadge>
            </div>

            <div className="space-y-4">
              {selected.messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm",
                    message.authorRole === "employee"
                      ? "ml-auto bg-primary/15 text-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{message.author}</span>
                    <span>{message.timestamp}</span>
                  </div>
                  <p className="leading-relaxed">{message.body}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">Select a conversation to view the transcript.</p>
        )}
      </AiqenCard>
    </div>
  );
}
