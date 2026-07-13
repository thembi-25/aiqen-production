export interface WorkforceMessage {
  id: string;
  author: string;
  authorRole: "employee" | "customer";
  body: string;
  timestamp: string;
}

export type ConversationChannel = "chat" | "email" | "sms" | "call";
export type ConversationStatus = "open" | "resolved";

export interface Conversation {
  id: string;
  employeeId: string;
  withName: string;
  channel: ConversationChannel;
  status: ConversationStatus;
  lastMessageAt: string;
  messages: WorkforceMessage[];
}

export const conversations: Conversation[] = [
  {
    id: "conv-1",
    employeeId: "emp-support-1",
    withName: "Alex Kim",
    channel: "chat",
    status: "open",
    lastMessageAt: "34 minutes ago",
    messages: [
      {
        id: "m1",
        author: "Alex Kim",
        authorRole: "customer",
        body: "Hi, I was charged twice for my subscription this month, can you help?",
        timestamp: "40 minutes ago",
      },
      {
        id: "m2",
        author: "Support Agent — Tier 1",
        authorRole: "employee",
        body: "I can see the duplicate charge on your account — I've submitted a refund for the extra charge, it should post within 3-5 business days. Anything else I can help with?",
        timestamp: "38 minutes ago",
      },
      {
        id: "m3",
        author: "Alex Kim",
        authorRole: "customer",
        body: "That's perfect, thank you!",
        timestamp: "34 minutes ago",
      },
    ],
  },
  {
    id: "conv-2",
    employeeId: "emp-sdr-1",
    withName: "Nova Health — Dana Whitfield",
    channel: "email",
    status: "open",
    lastMessageAt: "5 hours ago",
    messages: [
      {
        id: "m1",
        author: "Outbound SDR",
        authorRole: "employee",
        body: "Hi Dana — saw Nova Health is scaling its intake team. We've helped similar clinics cut intake call volume by 40% with an AI receptionist. Worth a quick chat this week?",
        timestamp: "1 day ago",
      },
      {
        id: "m2",
        author: "Dana Whitfield",
        authorRole: "customer",
        body: "Interesting timing, we're actually evaluating options right now. Can we do Thursday at 2pm?",
        timestamp: "6 hours ago",
      },
      {
        id: "m3",
        author: "Outbound SDR",
        authorRole: "employee",
        body: "Thursday 2pm works — sending a calendar invite now, looking forward to it.",
        timestamp: "5 hours ago",
      },
    ],
  },
  {
    id: "conv-3",
    employeeId: "emp-receptionist-1",
    withName: "Marcus Boone",
    channel: "call",
    status: "resolved",
    lastMessageAt: "This morning",
    messages: [
      {
        id: "m1",
        author: "Marcus Boone",
        authorRole: "customer",
        body: "I'd like to book a consultation for sometime next week.",
        timestamp: "This morning",
      },
      {
        id: "m2",
        author: "Front Desk",
        authorRole: "employee",
        body: "I have Tuesday at 10am or Thursday at 2pm open next week — either work for you?",
        timestamp: "This morning",
      },
      {
        id: "m3",
        author: "Marcus Boone",
        authorRole: "customer",
        body: "Thursday at 2pm is great.",
        timestamp: "This morning",
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
