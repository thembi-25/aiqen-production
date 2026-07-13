export interface Resource {
  slug: string;
  title: string;
  excerpt: string;
  type: (typeof resourceTypes)[number];
  readTime: string;
  body: string[];
}

export const resourceTypes = [
  "Guides",
  "Playbooks",
  "Templates",
  "AI Insights",
  "Automation Library",
] as const;

export const resources: Resource[] = [
  {
    slug: "getting-started-with-ai-automation-guide",
    title: "The Complete Guide to Getting Started With AI Automation",
    excerpt:
      "A step-by-step walkthrough of how to scope, pilot, and scale your first AI automation project.",
    type: "Guides",
    readTime: "10 min read",
    body: [
      "Every successful AI automation program starts the same way: with a narrow, well-scoped pilot rather than an ambitious platform rebuild. This guide walks through the exact process we use with clients — from identifying candidate processes to shipping a first live system.",
      "Step one is process discovery: mapping every recurring workflow across sales, support, and operations, then scoring each on volume, variability, and value. The highest-scoring process is almost always your best starting point.",
      "Step two is a two-to-four week pilot scoped to the highest-friction 20% of that process, with a clear before/after metric agreed upfront.",
      "Step three is expansion: once the pilot proves value, extend it to the rest of the workflow, then repeat the discovery process for the next-highest-scoring candidate.",
    ],
  },
  {
    slug: "choosing-the-right-ai-employee-guide",
    title: "How to Choose the Right AI Employee for Your First Deployment",
    excerpt:
      "A practical framework for deciding whether an AI SDR, Support Agent, or Operations Manager should be your first hire.",
    type: "Guides",
    readTime: "7 min read",
    body: [
      "Most teams ask 'which AI employee is best?' when the better question is 'which role has the clearest, most measurable bottleneck today?'",
      "If your pipeline is thin and reps spend most of their time prospecting instead of closing, an AI SDR is usually the highest-leverage first deployment.",
      "If support tickets are piling up and first-response time is your biggest customer complaint, an AI Support Agent pays for itself the fastest.",
      "If nothing is customer-facing but cross-system handoffs keep breaking silently, an AI Operations Manager is the right starting point instead.",
    ],
  },
  {
    slug: "ai-support-agent-rollout-playbook",
    title: "The 30-Day AI Support Agent Rollout Playbook",
    excerpt:
      "Week-by-week plan for deploying an AI Support Agent without disrupting your existing support team.",
    type: "Playbooks",
    readTime: "8 min read",
    body: [
      "Week 1: audit your knowledge base and existing macros/canned responses — this becomes the AI Support Agent's grounding source. Fix gaps and outdated answers before go-live.",
      "Week 2: deploy in shadow mode, where the AI drafts responses for your human agents to review and send. This builds confidence and surfaces knowledge gaps without customer risk.",
      "Week 3: turn on autonomous resolution for the highest-confidence, lowest-risk ticket categories only (password resets, order status, hours of operation).",
      "Week 4: expand autonomous resolution based on week 3's escalation data, and set up a weekly review of escalated tickets to keep the knowledge base current.",
    ],
  },
  {
    slug: "lead-response-sla-playbook",
    title: "The Zero-Delay Lead Response Playbook",
    excerpt:
      "How to guarantee every inbound lead gets a personalized response within 60 seconds, every time.",
    type: "Playbooks",
    readTime: "6 min read",
    body: [
      "Studies consistently show that lead conversion drops sharply after the first five minutes of silence. Most teams can't staff for that, which is exactly where an AI SDR or lead-routing automation pays off.",
      "Step one: route every inbound lead through a scoring model the moment it arrives, before any human ever sees it.",
      "Step two: trigger an instant, personalized first response referencing what the lead actually asked about — not a generic autoresponder.",
      "Step three: hand qualified leads to a human rep with full context attached, so the rep's first message continues the conversation instead of restarting it.",
    ],
  },
  {
    slug: "workflow-discovery-worksheet-template",
    title: "Workflow Discovery Worksheet",
    excerpt:
      "A fill-in template for scoring every candidate process in your business on volume, variability, and value.",
    type: "Templates",
    readTime: "3 min read",
    body: [
      "Use this worksheet to list every recurring workflow across your teams, then score each one from 1-5 on volume (how often it happens), variability (how much it changes each time), and value (what it costs when done manually or wrong).",
      "Processes that score high on volume and value, but low on variability, are your best automation candidates — they're structured enough to automate reliably and impactful enough to matter.",
      "Once scored, sort the list and take the top three to your next planning conversation as automation candidates.",
    ],
  },
  {
    slug: "ai-readiness-checklist-template",
    title: "AI Readiness Checklist",
    excerpt:
      "A pre-project checklist covering data access, systems, and stakeholder alignment before any AI deployment.",
    type: "Templates",
    readTime: "4 min read",
    body: [
      "Before starting any AI deployment, confirm: which systems hold the data the AI will need, and do you have API or export access to them?",
      "Confirm who owns the outcome metric for this workflow, and whether they're aligned on what 'success' looks like before the project starts.",
      "Confirm your team has a designated point of contact who can review AI outputs during the pilot phase — no deployment should go fully autonomous on day one.",
      "Confirm there's a rollback plan if the automation needs to be paused or reversed during the pilot.",
    ],
  },
  {
    slug: "state-of-ai-agents-2026",
    title: "The State of AI Agents in 2026: What's Actually Working",
    excerpt:
      "A look at which AI agent use cases are delivering real ROI today versus which are still mostly hype.",
    type: "AI Insights",
    readTime: "9 min read",
    body: [
      "Three years into the AI agent hype cycle, the use cases delivering consistent, measurable ROI have narrowed to a fairly specific set: lead qualification, support ticket triage, scheduling coordination, and structured document processing.",
      "The common thread across all of them: a well-scoped decision space, grounded data to reason over, and a clear escalation path when confidence is low.",
      "The use cases still mostly underdelivering are open-ended 'do anything' agents without a narrow task definition — they demo well but struggle to hit production reliability bars.",
      "Our recommendation: treat 2026 as the year to deploy narrow, high-confidence agents in production, not the year to chase general-purpose autonomy.",
    ],
  },
  {
    slug: "why-most-ai-pilots-stall",
    title: "Why Most AI Pilots Stall Before Scaling (And How to Avoid It)",
    excerpt:
      "The three most common reasons a promising AI pilot never makes it past the proof-of-concept stage.",
    type: "AI Insights",
    readTime: "6 min read",
    body: [
      "The most common reason a pilot stalls isn't the technology — it's the absence of a pre-agreed success metric. Without one, a successful pilot has nothing to point to when asking for budget to scale.",
      "The second most common reason is scope creep during the pilot itself — trying to automate the entire workflow instead of the highest-friction slice, which extends timelines and dilutes the result.",
      "The third is a missing owner: pilots that don't have a single accountable stakeholder tend to lose momentum the moment the person who championed them gets pulled onto something else.",
    ],
  },
  {
    slug: "lead-qualification-automation-library",
    title: "Automation: Instant Lead Qualification & Routing",
    excerpt:
      "A ready-to-adapt automation blueprint that scores, routes, and responds to inbound leads the moment they arrive.",
    type: "Automation Library",
    readTime: "5 min read",
    body: [
      "Trigger: a new lead is created in your CRM or form tool.",
      "Step 1: enrich the lead with firmographic and intent data from connected sources.",
      "Step 2: score the lead against your qualification criteria and assign a priority tier.",
      "Step 3: send an instant, personalized first response referencing the lead's specific inquiry.",
      "Step 4: route high-priority leads directly to a rep's calendar; route lower-priority leads into a nurture sequence.",
    ],
  },
  {
    slug: "support-ticket-triage-automation-library",
    title: "Automation: Support Ticket Triage & Auto-Resolution",
    excerpt:
      "A blueprint for classifying, resolving, and escalating support tickets automatically based on confidence.",
    type: "Automation Library",
    readTime: "5 min read",
    body: [
      "Trigger: a new support ticket is submitted via chat, email, or form.",
      "Step 1: classify the ticket by category and urgency.",
      "Step 2: attempt a grounded answer from your knowledge base for known issue categories.",
      "Step 3: resolve automatically if confidence is high; escalate to a human agent with full context if not.",
      "Step 4: log the resolution outcome to continuously improve the knowledge base.",
    ],
  },
];

export function getResources() {
  return resources;
}

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
