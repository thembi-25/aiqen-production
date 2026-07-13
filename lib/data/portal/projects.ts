export type ProjectStatus = "active" | "paused" | "completed";
export type AutomationStatus = "planning" | "building" | "live" | "monitoring";

export interface ProjectMilestone {
  label: string;
  status: "done" | "in-progress" | "upcoming";
  date: string;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  status: ProjectStatus;
  automationStatus: AutomationStatus;
  progress: number;
  owner: string;
  startDate: string;
  targetDate: string;
  milestones: ProjectMilestone[];
  integrations: string[];
}

export const projects: Project[] = [
  {
    slug: "website-automation-overhaul",
    name: "Website Automation Overhaul",
    summary:
      "Rebuilding the AIQEN marketing site with an AI-driven lead qualification workflow connecting the contact form to HubSpot and Slack.",
    status: "active",
    automationStatus: "building",
    progress: 62,
    owner: "Priya Nair, Solutions Architect",
    startDate: "Apr 2026",
    targetDate: "Aug 2026",
    milestones: [
      { label: "Discovery & workflow mapping", status: "done", date: "Apr 2026" },
      { label: "Lead scoring model", status: "done", date: "May 2026" },
      { label: "HubSpot + Slack integration", status: "in-progress", date: "Jun 2026" },
      { label: "QA and staged rollout", status: "upcoming", date: "Jul 2026" },
      { label: "Go live", status: "upcoming", date: "Aug 2026" },
    ],
    integrations: ["HubSpot", "Slack", "Webhooks"],
  },
  {
    slug: "ai-support-triage-agent",
    name: "AI Support Triage Agent",
    summary:
      "An AI agent that classifies inbound support tickets, drafts first-response replies, and routes escalations to the right team.",
    status: "active",
    automationStatus: "live",
    progress: 88,
    owner: "Diego Alvarez, AI Engineer",
    startDate: "Feb 2026",
    targetDate: "Jun 2026",
    milestones: [
      { label: "Ticket classification model", status: "done", date: "Feb 2026" },
      { label: "Draft-reply generation", status: "done", date: "Mar 2026" },
      { label: "Production rollout", status: "done", date: "May 2026" },
      { label: "Monitoring & tuning", status: "in-progress", date: "Jun 2026" },
    ],
    integrations: ["Zendesk", "Slack", "OpenAI"],
  },
  {
    slug: "crm-data-sync",
    name: "CRM Data Sync",
    summary:
      "A nightly sync pipeline reconciling contact and deal records between the internal CRM and Google Sheets reporting.",
    status: "completed",
    automationStatus: "monitoring",
    progress: 100,
    owner: "Priya Nair, Solutions Architect",
    startDate: "Nov 2025",
    targetDate: "Jan 2026",
    milestones: [
      { label: "Schema mapping", status: "done", date: "Nov 2025" },
      { label: "Sync pipeline build", status: "done", date: "Dec 2025" },
      { label: "Go live", status: "done", date: "Jan 2026" },
    ],
    integrations: ["Google Sheets", "n8n"],
  },
];

export function getProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
