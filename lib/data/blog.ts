export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  body: string[];
}

export const blogCategories = [
  "AI Strategy",
  "Automation",
  "AI Agents",
  "Customer Experience",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "where-to-start-with-ai-automation",
    title: "Where to Start With AI Automation (Without Wasting Six Months)",
    excerpt:
      "Most companies start AI automation in the wrong place. Here's the framework we use to find the highest-leverage first project.",
    category: "AI Strategy",
    author: "AIQEN Team",
    date: "2026-05-12",
    readTime: "6 min read",
    body: [
      "The biggest mistake we see is companies picking an AI project based on what's exciting instead of what's high-leverage. A flashy chatbot demo gets attention, but if it doesn't touch a process that costs real time or money, it won't move the business.",
      "Before choosing a first project, we score every candidate process on three things: volume, variability, and value. High volume, low variability, high value processes are the best starting points — think lead qualification, support ticket triage, or invoice reconciliation.",
      "Once you've picked the process, resist the urge to automate the entire thing at once. Start with the highest-friction 20% of the workflow, ship it, and expand from there. Momentum compounds faster than scope.",
      "The companies that get the most out of AI automation treat the first project as a proof point, not the finish line. Pick something real, ship it fast, and use the result to fund the next one.",
    ],
  },
  {
    slug: "ai-agents-vs-automation-whats-the-difference",
    title: "AI Agents vs. Workflow Automation: What's the Difference?",
    excerpt:
      "\"Automation\" and \"AI agent\" get used interchangeably, but they solve different problems. Here's how to tell which one you need.",
    category: "AI Agents",
    author: "AIQEN Team",
    date: "2026-04-28",
    readTime: "5 min read",
    body: [
      "Workflow automation follows fixed rules: if X happens, do Y. It's fast, predictable, and cheap to run — perfect for structured, repetitive work like data syncing or notifications.",
      "AI agents, on the other hand, make judgment calls. They can research, reason across ambiguous inputs, and decide what to do next within a defined scope. That flexibility is powerful, but it needs guardrails.",
      "In practice, most systems we build use both: automation handles the structured backbone, and an AI agent sits at the points where judgment is genuinely required — qualifying a lead, drafting a personalized response, triaging an ambiguous ticket.",
      "If you're not sure which you need, start by asking whether the decision at each step is deterministic. If yes, automate it. If it requires interpreting unstructured input, that's agent territory.",
    ],
  },
  {
    slug: "designing-ai-support-that-customers-trust",
    title: "Designing AI Customer Support That Customers Actually Trust",
    excerpt:
      "Fast responses don't matter if customers don't trust the answers. Here's how we design AI support systems people actually rely on.",
    category: "Customer Experience",
    author: "AIQEN Team",
    date: "2026-04-09",
    readTime: "7 min read",
    body: [
      "Speed is table stakes for AI support. Trust is the actual differentiator, and it comes from three things: grounded answers, honest uncertainty, and a clean escalation path.",
      "Grounded answers mean the AI only responds from your verified knowledge base — not from general model knowledge that might be outdated or wrong for your specific product.",
      "Honest uncertainty means the system says 'I'm not sure' and escalates instead of guessing when a question falls outside its confidence range. This alone prevents most of the trust-eroding mistakes we see in poorly designed systems.",
      "Finally, escalation has to be seamless. When a human picks up the conversation, they should see the full context immediately — no customer should have to repeat themselves.",
    ],
  },
  {
    slug: "the-real-cost-of-manual-workflows",
    title: "The Real Cost of Manual Workflows (It's Not Just Time)",
    excerpt:
      "Manual processes don't just cost hours — they cost accuracy, morale, and growth capacity. Here's how to calculate the full picture.",
    category: "Automation",
    author: "AIQEN Team",
    date: "2026-03-22",
    readTime: "5 min read",
    body: [
      "When we calculate the cost of a manual process, most teams only account for the hours spent. The bigger costs are usually hidden: error rates, employee burnout on repetitive tasks, and the growth capacity you lose because scaling means hiring instead of automating.",
      "A process that takes 10 minutes per instance sounds trivial until you multiply it by volume and add in the cost of the errors that manual re-keying inevitably introduces.",
      "The clearest sign a process is worth automating: your team dreads it, does it inconsistently, and you'd need to hire more people to handle it if volume doubled next quarter.",
    ],
  },
];
