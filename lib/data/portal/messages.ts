import type { ThreadMessage } from "@/lib/data/portal/types";

export interface Conversation {
  id: string;
  with: string;
  role: string;
  avatarInitials: string;
  lastMessagePreview: string;
  lastMessageAt: string;
  unread: boolean;
  messages: ThreadMessage[];
}

export const conversations: Conversation[] = [
  {
    id: "conv-account-team",
    with: "AIQEN Account Team",
    role: "Your dedicated account team",
    avatarInitials: "AQ",
    lastMessagePreview: "Sounds good — we'll bring the updated timeline to Thursday's call.",
    lastMessageAt: "Jul 11, 2026",
    unread: true,
    messages: [
      {
        id: "m1",
        author: "You",
        authorRole: "client",
        body: "Can we push our weekly sync to Thursday this week? Half the team is at an offsite Tuesday.",
        timestamp: "Jul 10, 2026, 1:15 PM",
      },
      {
        id: "m2",
        author: "AIQEN Account Team",
        authorRole: "aiqen",
        body: "Thursday works on our end. Sounds good — we'll bring the updated timeline to Thursday's call.",
        timestamp: "Jul 11, 2026, 8:40 AM",
      },
    ],
  },
  {
    id: "conv-priya",
    with: "Priya Nair",
    role: "Solutions Architect",
    avatarInitials: "PN",
    lastMessagePreview: "Sent over the revised integration diagram for review.",
    lastMessageAt: "Jul 8, 2026",
    unread: false,
    messages: [
      {
        id: "m1",
        author: "Priya Nair",
        authorRole: "aiqen",
        body: "Sent over the revised integration diagram for review — see the Documents tab. Let me know if the HubSpot field mapping looks right.",
        timestamp: "Jul 8, 2026, 4:05 PM",
      },
    ],
  },
];

export function getConversations() {
  return conversations;
}

export function getConversationById(id: string) {
  return conversations.find((conversation) => conversation.id === id);
}
