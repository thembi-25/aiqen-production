"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import type { ThreadMessage } from "@/lib/data/portal/types";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThreadView({
  initialMessages,
  currentUserName,
}: {
  initialMessages: ThreadMessage[];
  currentUserName: string;
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  function handleSend(event: FormEvent) {
    event.preventDefault();
    if (!draft.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        author: currentUserName,
        authorRole: "client",
        body: draft.trim(),
        timestamp: "Just now",
      },
    ]);
    setDraft("");
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "max-w-[85%] rounded-2xl px-4 py-3 text-sm",
              message.authorRole === "client"
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

      <form onSubmit={handleSend} className="flex items-end gap-3 border-t border-border pt-4">
        <Textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Write a reply..."
          className="min-h-[44px] flex-1"
          rows={1}
        />
        <button type="submit" className={cn(buttonVariants({ size: "lg" }), "h-11 gap-1.5")}>
          <Send className="size-4" />
          Send
        </button>
      </form>
    </div>
  );
}
