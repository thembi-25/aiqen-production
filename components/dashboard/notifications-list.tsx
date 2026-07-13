"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, MessageSquare, Ticket, Receipt, FolderKanban, CheckCheck } from "lucide-react";

import type { Notification, NotificationType } from "@/lib/data/portal/notifications";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const typeIcon: Record<NotificationType, typeof Bell> = {
  ticket: Ticket,
  invoice: Receipt,
  project: FolderKanban,
  message: MessageSquare,
  system: Bell,
};

export function NotificationsList({ initialNotifications }: { initialNotifications: Notification[] }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((notification) => !notification.read).length;

  function markAllRead() {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })));
  }

  function markRead(id: string) {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification))
    );
  }

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={markAllRead}
          disabled={unreadCount === 0}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5")}
        >
          <CheckCheck className="size-3.5" /> Mark all as read
        </button>
      </div>

      <AiqenCard className="divide-y divide-border p-0">
        {notifications.map((notification) => {
          const Icon = typeIcon[notification.type];
          return (
            <Link
              key={notification.id}
              href={notification.href}
              onClick={() => markRead(notification.id)}
              className="flex items-start gap-3 px-6 py-4 transition-colors hover:bg-muted"
            >
              <div
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full",
                  notification.read ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary-text"
                )}
              >
                <Icon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "text-sm",
                    notification.read ? "text-muted-foreground" : "font-medium text-foreground"
                  )}
                >
                  {notification.title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{notification.description}</p>
                <p className="mt-1 text-xs text-muted-foreground">{notification.timestamp}</p>
              </div>
              {!notification.read && <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />}
            </Link>
          );
        })}
      </AiqenCard>
    </div>
  );
}
