export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What does AIQEN actually build for us?",
    answer:
      "We design and deploy custom AI systems for your business — workflow automations, AI agents, voice AI, and integrations with your existing tools — starting from a strategy engagement and moving through to a live, monitored system.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most engagements move from discovery to a live first automation or agent within 4-8 weeks, depending on scope and system complexity. We share a concrete timeline after the discovery phase.",
  },
  {
    question: "Do we need an in-house technical team?",
    answer:
      "No. We handle strategy, build, and deployment end-to-end. Your team stays involved for domain knowledge and approvals, but doesn't need to write code or manage infrastructure.",
  },
  {
    question: "Which tools and systems do you integrate with?",
    answer:
      "We integrate with most modern CRMs, help desks, calendars, communication tools, and internal databases. If you use a niche or custom system, we assess integration feasibility during discovery.",
  },
  {
    question: "How do you handle data security and privacy?",
    answer:
      "We follow least-privilege access principles, never train models on your proprietary data without explicit agreement, and can accommodate enterprise security and compliance reviews for Enterprise plans.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every engagement includes monitoring and an optimization period after launch. Growth and Enterprise plans include ongoing strategy sessions to keep improving performance as your business changes.",
  },
  {
    question: "Can you replace our existing tools, or just automate around them?",
    answer:
      "Most engagements automate and connect your existing stack rather than replacing it — it's faster and lower-risk. We'll recommend replacing a tool only when it's clearly the better path.",
  },
  {
    question: "What if the AI gets something wrong?",
    answer:
      "We design guardrails and human-in-the-loop checkpoints for anything high-stakes, with full activity logs so you can review and adjust agent behavior at any time.",
  },
];
