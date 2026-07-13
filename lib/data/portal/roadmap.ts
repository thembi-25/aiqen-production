export type RoadmapStage = "planned" | "in-progress" | "shipped";

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  stage: RoadmapStage;
  quarter: string;
}

export const roadmapItems: RoadmapItem[] = [
  {
    id: "rm-1",
    title: "HubSpot + Slack lead alerts",
    description: "Real-time Slack alerts for qualified leads scored above 80.",
    stage: "in-progress",
    quarter: "Q3 2026",
  },
  {
    id: "rm-2",
    title: "Staged rollout to full site traffic",
    description: "Gradually shift lead qualification workflow from 10% to 100% of inbound traffic.",
    stage: "planned",
    quarter: "Q3 2026",
  },
  {
    id: "rm-3",
    title: "Billing ticket auto-escalation tuning",
    description: "Refine escalation rules for the support triage agent based on Q2 volume data.",
    stage: "in-progress",
    quarter: "Q3 2026",
  },
  {
    id: "rm-4",
    title: "Weekly automation performance digest",
    description: "Automated weekly summary email of automation performance across all live projects.",
    stage: "planned",
    quarter: "Q4 2026",
  },
  {
    id: "rm-5",
    title: "CRM data sync — production rollout",
    description: "Nightly reconciliation pipeline between CRM and reporting sheets.",
    stage: "shipped",
    quarter: "Q1 2026",
  },
  {
    id: "rm-6",
    title: "AI support triage agent",
    description: "Ticket classification, draft replies, and smart routing for the support inbox.",
    stage: "shipped",
    quarter: "Q2 2026",
  },
  {
    id: "rm-7",
    title: "Self-serve team management",
    description: "Let clients add and remove their own teammates from the portal.",
    stage: "planned",
    quarter: "Q4 2026",
  },
];

export function getRoadmapItems() {
  return roadmapItems;
}

export function getRoadmapItemsByStage(stage: RoadmapStage) {
  return roadmapItems.filter((item) => item.stage === stage);
}
