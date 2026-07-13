import {
  BarChart3,
  Bot,
  Calendar,
  Mail,
  MessagesSquare,
  Sheet,
  Hash,
  Sparkles,
  Users,
  Webhook,
  Workflow,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export interface MarketingIntegration {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

export const integrationCategories = [
  "CRM & Marketing",
  "AI Models",
  "Scheduling",
  "Communication",
  "Automation",
  "Developer",
  "Billing",
] as const;

export const integrations: MarketingIntegration[] = [
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM & Marketing",
    description: "Sync contacts, companies, and deals as your AI workforce works leads.",
    icon: Users,
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    category: "CRM & Marketing",
    description: "Export reports and sync data straight to a spreadsheet your team already uses.",
    icon: Sheet,
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "AI Models",
    description: "Power AI employees and agents with OpenAI models.",
    icon: Bot,
  },
  {
    id: "claude",
    name: "Claude",
    category: "AI Models",
    description: "Power AI employees and agents with Claude models.",
    icon: Sparkles,
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    category: "Scheduling",
    description: "Let AI employees book, reschedule, and manage appointments directly.",
    icon: Calendar,
  },
  {
    id: "outlook",
    name: "Outlook",
    category: "Scheduling",
    description: "Sync calendar and email for scheduling across your Microsoft stack.",
    icon: Mail,
  },
  {
    id: "calendly",
    name: "Calendly",
    category: "Scheduling",
    description: "Let AI employees book meetings through your existing Calendly links.",
    icon: Calendar,
  },
  {
    id: "slack",
    name: "Slack",
    category: "Communication",
    description: "Get alerts, approvals, and status updates delivered to the right channel.",
    icon: Hash,
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    category: "Communication",
    description: "Send alerts and notifications to your team without leaving Teams.",
    icon: MessagesSquare,
  },
  {
    id: "n8n",
    name: "n8n",
    category: "Automation",
    description: "Trigger and extend AIQEN workflows from your existing n8n automations.",
    icon: Workflow,
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "Automation",
    description: "Connect AIQEN to thousands of apps through Zapier.",
    icon: Workflow,
  },
  {
    id: "webhooks",
    name: "Webhooks",
    category: "Developer",
    description: "Send and receive custom webhook events for full flexibility.",
    icon: Webhook,
  },
  {
    id: "smtp",
    name: "SMTP",
    category: "Developer",
    description: "Send transactional email through your own SMTP server.",
    icon: Mail,
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "Billing",
    description: "Sync invoices, subscriptions, and payment status.",
    icon: CreditCard,
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    category: "CRM & Marketing",
    description: "Track how AI-driven campaigns and content perform across channels.",
    icon: BarChart3,
  },
];

export function getIntegrationsByCategory(category: string) {
  return integrations.filter((integration) => integration.category === category);
}
