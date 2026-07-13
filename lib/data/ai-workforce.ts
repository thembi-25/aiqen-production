import {
  BarChart3,
  Briefcase,
  Headset,
  Megaphone,
  PhoneCall,
  Settings,
  UserCheck,
  UserSearch,
  type LucideIcon,
} from "lucide-react";

export interface AIEmployee {
  slug: string;
  role: string;
  title: string;
  icon: LucideIcon;
  description: string;
  capabilities: string[];
  integrations: string[];
  businessValue: string;
  demoWorkflow: string[];
}

export const aiWorkforce: AIEmployee[] = [
  {
    slug: "sdr",
    role: "Sales",
    title: "AI SDR",
    icon: UserSearch,
    description:
      "Researches prospects, personalizes outreach, and qualifies leads before they ever reach a human rep.",
    capabilities: [
      "Prospect research and enrichment",
      "Personalized multi-channel outreach",
      "Lead qualification and scoring",
      "Meeting booking and handoff",
    ],
    integrations: ["HubSpot", "Salesforce", "LinkedIn Sales Navigator", "Google Calendar"],
    businessValue:
      "Fills your pipeline around the clock without adding headcount — reps spend their time closing qualified meetings instead of prospecting.",
    demoWorkflow: [
      "New prospect list uploaded or synced from CRM",
      "AI SDR researches each company and contact",
      "Personalized outreach sequence sent across email and LinkedIn",
      "Replies are qualified and scored automatically",
      "Qualified leads booked directly onto a rep's calendar",
    ],
  },
  {
    slug: "receptionist",
    role: "Front Office",
    title: "AI Receptionist",
    icon: PhoneCall,
    description:
      "Answers calls, screens inquiries, and schedules appointments around the clock without hold times.",
    capabilities: [
      "24/7 inbound call answering",
      "Appointment scheduling",
      "Call screening and routing",
      "Natural, on-brand conversation",
    ],
    integrations: ["Google Calendar", "Outlook", "Calendly", "Twilio"],
    businessValue:
      "Every call gets answered instantly, every time — no missed inquiries, no hold music, no after-hours voicemail black hole.",
    demoWorkflow: [
      "Inbound call arrives, AI Receptionist answers instantly",
      "Caller intent is identified through natural conversation",
      "Routine requests (booking, hours, directions) handled directly",
      "Complex or urgent calls routed to the right person",
      "Appointment confirmed and added to the calendar automatically",
    ],
  },
  {
    slug: "support-agent",
    role: "Customer Support",
    title: "AI Support Agent",
    icon: Headset,
    description:
      "Resolves common customer issues instantly and escalates complex cases with full context.",
    capabilities: [
      "Instant chat and email responses",
      "Knowledge-base-grounded answers",
      "Smart escalation to human agents",
      "Multilingual support",
    ],
    integrations: ["Zendesk", "Intercom", "Slack", "Knowledge base / docs"],
    businessValue:
      "Cuts first-response time from hours to seconds and resolves the majority of tickets without ever involving a human agent.",
    demoWorkflow: [
      "Customer submits a question via chat or email",
      "AI Support Agent searches your knowledge base for a grounded answer",
      "Resolved instantly if it's a known issue",
      "Escalated to a human agent with full conversation context if not",
      "Resolution logged for future training",
    ],
  },
  {
    slug: "operations-manager",
    role: "Operations",
    title: "AI Operations Manager",
    icon: Settings,
    description:
      "Monitors workflows, flags exceptions, and keeps cross-system processes running without manual babysitting.",
    capabilities: [
      "Workflow monitoring and exception handling",
      "Cross-system process coordination",
      "Automated status reporting",
      "SLA and bottleneck tracking",
    ],
    integrations: ["n8n", "Zapier", "Slack", "Google Sheets"],
    businessValue:
      "Catches breakdowns before they become customer-facing problems, and keeps handoffs between systems and teams moving without manual chasing.",
    demoWorkflow: [
      "Workflow runs across multiple connected systems",
      "AI Operations Manager monitors each step for failures or delays",
      "Exceptions are flagged and routed to the right owner",
      "Status summary posted to Slack automatically",
      "Recurring bottlenecks surfaced in a weekly report",
    ],
  },
  {
    slug: "marketing-assistant",
    role: "Marketing",
    title: "AI Marketing Assistant",
    icon: Megaphone,
    description:
      "Drafts campaigns, repurposes content, and tracks performance across your marketing channels.",
    capabilities: [
      "Content drafting and repurposing",
      "Campaign scheduling and tracking",
      "Performance reporting",
      "On-brand copy at scale",
    ],
    integrations: ["HubSpot", "Mailchimp", "Google Analytics", "Slack"],
    businessValue:
      "Keeps a consistent content and campaign cadence without a bigger marketing team, and reports on what's actually working.",
    demoWorkflow: [
      "Campaign brief or blog post provided as a source",
      "AI Marketing Assistant drafts repurposed variants (social, email, ads)",
      "Drafts routed for quick human approval",
      "Approved content scheduled across channels",
      "Performance summary generated automatically each week",
    ],
  },
  {
    slug: "data-analyst",
    role: "Analytics",
    title: "AI Data Analyst",
    icon: BarChart3,
    description:
      "Turns raw business data into clear reports and answers ad-hoc questions in plain language.",
    capabilities: [
      "Automated reporting and dashboards",
      "Natural-language data queries",
      "Trend and anomaly detection",
      "Cross-source data analysis",
    ],
    integrations: ["Google Sheets", "Stripe", "HubSpot", "Data warehouse"],
    businessValue:
      "Gives every team leader instant answers from your real data instead of waiting on a data team or building another spreadsheet.",
    demoWorkflow: [
      "Question asked in plain language (e.g. \"How did signups trend last month?\")",
      "AI Data Analyst queries the connected data sources",
      "Trends and anomalies are surfaced automatically",
      "Answer returned as a chart or plain-language summary",
      "Recurring questions turned into a saved dashboard",
    ],
  },
  {
    slug: "hr-assistant",
    role: "People",
    title: "AI HR Assistant",
    icon: UserCheck,
    description:
      "Handles onboarding logistics, answers policy questions, and keeps HR workflows moving.",
    capabilities: [
      "Onboarding and offboarding workflows",
      "Policy and benefits Q&A",
      "Interview scheduling",
      "Employee document handling",
    ],
    integrations: ["Google Calendar", "Slack", "HRIS / payroll", "Docs / e-signature"],
    businessValue:
      "Frees your HR team from repetitive policy questions and onboarding logistics so they can focus on people, not paperwork.",
    demoWorkflow: [
      "New hire triggers onboarding workflow",
      "AI HR Assistant sends welcome docs and collects e-signatures",
      "Equipment, accounts, and first-week schedule coordinated automatically",
      "Employee questions about policy or benefits answered instantly",
      "Manager notified once onboarding is complete",
    ],
  },
  {
    slug: "executive-assistant",
    role: "Executive",
    title: "AI Executive Assistant",
    icon: Briefcase,
    description:
      "Manages scheduling, inbox triage, and meeting prep so leadership can focus on decisions.",
    capabilities: [
      "Calendar and scheduling management",
      "Inbox triage and drafting",
      "Meeting prep and summaries",
      "Travel and logistics coordination",
    ],
    integrations: ["Google Calendar", "Outlook", "Slack", "Travel booking tools"],
    businessValue:
      "Gives every executive back hours a week by handling the scheduling, inbox, and prep work that usually eats into decision-making time.",
    demoWorkflow: [
      "Meeting request comes in via email",
      "AI Executive Assistant checks availability and proposes times",
      "Meeting confirmed and briefing doc prepared from relevant context",
      "Inbox triaged with drafts ready for review each morning",
      "Travel logistics booked and itinerary shared automatically",
    ],
  },
];
