import {
  Bot,
  Brain,
  Headset,
  Mic,
  Network,
  TrendingUp,
  Wrench,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  overview: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    icon: Brain,
    summary:
      "Identify where AI can create measurable improvements across your business operations.",
    overview:
      "We audit your operations, data, and tooling to find the highest-leverage places to apply AI, then build a roadmap your team can actually execute against.",
    benefits: [
      "Clear, prioritized AI opportunity roadmap",
      "Realistic ROI estimates before you invest",
      "Vendor- and tool-agnostic recommendations",
      "Alignment across leadership and operators",
    ],
    process: [
      "Discovery workshops with stakeholders",
      "Operational and data readiness audit",
      "Opportunity scoring and roadmap design",
      "Executive readout and rollout plan",
    ],
    deliverables: [
      "AI opportunity assessment report",
      "Prioritized 90-day roadmap",
      "Build vs. buy recommendations",
      "Executive presentation deck",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: Workflow,
    summary:
      "Automate repetitive processes and connect your business tools using intelligent workflows.",
    overview:
      "We replace manual, error-prone processes with automated workflows that connect the tools you already use, so your team spends time on judgment calls, not data entry.",
    benefits: [
      "Fewer manual handoffs and errors",
      "Faster turnaround on repetitive tasks",
      "Full visibility into workflow status",
      "Systems that scale with headcount-free growth",
    ],
    process: [
      "Map current-state workflows and bottlenecks",
      "Design automated workflow architecture",
      "Build and integrate with existing tools",
      "Test, monitor, and iterate post-launch",
    ],
    deliverables: [
      "Workflow architecture diagrams",
      "Production automations",
      "Monitoring and alerting setup",
      "Team training and documentation",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    icon: Bot,
    summary: "Build AI assistants that handle specialized business tasks and workflows.",
    overview:
      "We design and deploy custom AI agents that take on specific, well-scoped jobs across your business — from research to reporting — with human oversight built in.",
    benefits: [
      "Agents scoped to real, measurable outcomes",
      "Human-in-the-loop approval where it matters",
      "Reusable agent infrastructure across teams",
      "Transparent logs of every agent action",
    ],
    process: [
      "Define agent scope and success metrics",
      "Design tools, guardrails, and permissions",
      "Build, evaluate, and red-team the agent",
      "Deploy with monitoring and human checkpoints",
    ],
    deliverables: [
      "Production-ready AI agent",
      "Evaluation and guardrail report",
      "Access and permission configuration",
      "Ongoing performance dashboard",
    ],
  },
  {
    slug: "voice-ai",
    title: "Voice AI",
    icon: Mic,
    summary: "Deploy natural-sounding voice AI for calls, scheduling, and support.",
    overview:
      "We build voice AI systems that handle inbound and outbound calls — booking, screening, and support — with natural conversation flow and clean handoffs to humans.",
    benefits: [
      "24/7 call coverage without added headcount",
      "Consistent, on-brand conversation quality",
      "Seamless escalation to human agents",
      "Full call transcripts and analytics",
    ],
    process: [
      "Script and conversation flow design",
      "Voice, tone, and persona configuration",
      "Integration with phone and calendar systems",
      "Live testing and escalation tuning",
    ],
    deliverables: [
      "Deployed voice AI line",
      "Conversation flow documentation",
      "Escalation and handoff rules",
      "Call analytics dashboard",
    ],
  },
  {
    slug: "customer-support-ai",
    title: "Customer Support AI",
    icon: Headset,
    summary:
      "Deploy AI-powered support systems that respond faster and improve customer experience.",
    overview:
      "We deploy AI support agents across chat, email, and help center that resolve common issues instantly and route complex cases to the right human, with your knowledge base as the source of truth.",
    benefits: [
      "Faster first-response and resolution times",
      "Consistent answers grounded in your docs",
      "Lower ticket volume for your human team",
      "Seamless escalation with full context",
    ],
    process: [
      "Knowledge base audit and structuring",
      "Support agent design and tone calibration",
      "Channel integration (chat, email, help desk)",
      "Launch with escalation monitoring",
    ],
    deliverables: [
      "Deployed AI support agent",
      "Structured knowledge base",
      "Escalation and routing rules",
      "Resolution rate reporting",
    ],
  },
  {
    slug: "sales-automation",
    title: "Sales Automation",
    icon: TrendingUp,
    summary: "Automate lead research, outreach, qualification, and sales workflows.",
    overview:
      "We automate the repetitive parts of your sales motion — research, outreach, qualification — so reps spend their time on conversations that close.",
    benefits: [
      "More qualified pipeline without more reps",
      "Consistent, personalized outreach at scale",
      "Faster lead response times",
      "Cleaner CRM data with less manual entry",
    ],
    process: [
      "Audit current sales motion and CRM data",
      "Design automated research and outreach flows",
      "Build qualification and routing logic",
      "Launch, measure, and optimize conversion",
    ],
    deliverables: [
      "Automated outreach and qualification system",
      "CRM automation and data hygiene rules",
      "Lead scoring model",
      "Pipeline performance dashboard",
    ],
  },
  {
    slug: "internal-ai-tools",
    title: "Internal AI Tools",
    icon: Wrench,
    summary: "Build custom internal AI tools tailored to your team's workflows.",
    overview:
      "We build purpose-built internal tools — copilots, dashboards, search — that give your team AI leverage on the specific work they do every day.",
    benefits: [
      "Tools built for your exact workflows",
      "Faster internal research and reporting",
      "Reduced tool sprawl and manual copy-paste",
      "Owned, extensible internal infrastructure",
    ],
    process: [
      "Identify highest-friction internal workflows",
      "Design tool scope and interface",
      "Build, integrate with internal data sources",
      "Roll out with team training",
    ],
    deliverables: [
      "Custom internal AI tool",
      "Data integration and access setup",
      "Internal documentation",
      "Usage and adoption tracking",
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM & Business Automation",
    icon: Network,
    summary: "Connect your existing systems and create a unified AI-powered operation.",
    overview:
      "We connect your CRM, support, finance, and ops tools into one AI-powered operating layer, so data flows automatically and nothing falls through the cracks.",
    benefits: [
      "One source of truth across systems",
      "Automatic data sync between tools",
      "Fewer dropped handoffs between teams",
      "AI-powered insights across your stack",
    ],
    process: [
      "Map systems, data flows, and gaps",
      "Design integration and automation architecture",
      "Build and test cross-system automations",
      "Launch with monitoring and alerting",
    ],
    deliverables: [
      "Connected multi-system architecture",
      "Automated data sync pipelines",
      "Unified reporting layer",
      "Monitoring and alerting setup",
    ],
  },
];
