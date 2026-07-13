import {
  TrendingUp,
  Target,
  UserPlus,
  Headset,
  Cog,
  Users,
  UserSearch,
  BookOpen,
  FileBarChart,
  LayoutDashboard,
  BarChart3,
  PieChart,
  type LucideIcon,
} from "lucide-react";

export interface Solution {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  outcomes: string[];
}

export const solutions: Solution[] = [
  {
    slug: "revenue-growth",
    title: "Revenue Growth",
    icon: TrendingUp,
    description: "Identify and act on revenue opportunities faster with AI-driven insight and outreach.",
    outcomes: [
      "Faster lead-to-close cycles",
      "Higher win rates through better qualification",
      "Upsell and renewal signals surfaced automatically",
    ],
  },
  {
    slug: "sales-automation",
    title: "Sales Automation",
    icon: Target,
    description: "Automate prospecting, outreach, and follow-up so reps spend time closing, not admin work.",
    outcomes: [
      "Automated multi-channel outreach sequences",
      "Meeting booking without manual back-and-forth",
      "CRM data entry handled automatically",
    ],
  },
  {
    slug: "lead-management",
    title: "Lead Management",
    icon: UserPlus,
    description: "Score, route, and follow up on every lead the moment it arrives.",
    outcomes: [
      "Instant lead scoring and routing",
      "Zero-delay first response",
      "No lead falls through the cracks",
    ],
  },
  {
    slug: "customer-service",
    title: "Customer Service",
    icon: Headset,
    description: "Resolve common issues instantly and give agents full context on everything else.",
    outcomes: [
      "24/7 instant first response",
      "Consistent, on-brand answers",
      "Smart escalation with full context",
    ],
  },
  {
    slug: "internal-ops",
    title: "Internal Ops",
    icon: Cog,
    description: "Keep cross-system processes running without manual monitoring and babysitting.",
    outcomes: [
      "Automated exception handling",
      "Cross-system process coordination",
      "Fewer dropped handoffs between teams",
    ],
  },
  {
    slug: "hr",
    title: "HR",
    icon: Users,
    description: "Automate onboarding, policy questions, and the administrative side of people operations.",
    outcomes: [
      "Faster onboarding and offboarding",
      "Instant policy and benefits Q&A",
      "Less manual paperwork for HR teams",
    ],
  },
  {
    slug: "recruitment",
    title: "Recruitment",
    icon: UserSearch,
    description: "Screen candidates, schedule interviews, and keep pipelines moving automatically.",
    outcomes: [
      "Automated resume screening",
      "Interview scheduling without the email chain",
      "Faster time-to-hire",
    ],
  },
  {
    slug: "knowledge-management",
    title: "Knowledge Management",
    icon: BookOpen,
    description: "Turn scattered docs and tribal knowledge into instant, accurate answers.",
    outcomes: [
      "Grounded answers from your own knowledge base",
      "Less time spent searching for information",
      "Consistent answers across teams",
    ],
  },
  {
    slug: "executive-reporting",
    title: "Executive Reporting",
    icon: FileBarChart,
    description: "Automated, always-current reporting for leadership — no manual deck building.",
    outcomes: [
      "Auto-generated weekly and monthly reports",
      "Plain-language answers to ad-hoc questions",
      "Less time spent compiling data for meetings",
    ],
  },
  {
    slug: "dashboards",
    title: "Dashboards",
    icon: LayoutDashboard,
    description: "Live, connected dashboards that pull from every system you already use.",
    outcomes: [
      "Real-time visibility across systems",
      "No more manually updated spreadsheets",
      "Shareable views for every stakeholder",
    ],
  },
  {
    slug: "analytics",
    title: "Analytics",
    icon: BarChart3,
    description: "Ask questions in plain language and get answers grounded in your real data.",
    outcomes: [
      "Natural-language data queries",
      "Trend and anomaly detection",
      "Cross-source analysis without a data team",
    ],
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    icon: PieChart,
    description: "Turn raw operational data into decisions leadership can act on immediately.",
    outcomes: [
      "Unified view across departments",
      "Faster, more confident decision-making",
      "Insight delivered proactively, not on request",
    ],
  },
];
