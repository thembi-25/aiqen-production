export type DealStage = "new" | "qualified" | "proposal" | "won" | "lost";

export interface Deal {
  id: string;
  name: string;
  companyId: string;
  contactId: string;
  value: number;
  stage: DealStage;
  closeDate: string;
}

export const deals: Deal[] = [
  {
    id: "deal-1",
    name: "Nova Health — AI Receptionist Rollout",
    companyId: "co-1",
    contactId: "ct-1",
    value: 28000,
    stage: "qualified",
    closeDate: "Aug 2026",
  },
  {
    id: "deal-2",
    name: "Cedar & Stone — Lead Response Automation",
    companyId: "co-4",
    contactId: "ct-2",
    value: 14000,
    stage: "new",
    closeDate: "Sep 2026",
  },
  {
    id: "deal-3",
    name: "Brightline Logistics — Dispatch Automation",
    companyId: "co-2",
    contactId: "ct-3",
    value: 42000,
    stage: "won",
    closeDate: "May 2026",
  },
  {
    id: "deal-4",
    name: "Meridian Legal — Support Agent Renewal",
    companyId: "co-3",
    contactId: "ct-4",
    value: 9000,
    stage: "lost",
    closeDate: "Feb 2026",
  },
  {
    id: "deal-5",
    name: "Nova Health — Support Agent Add-on",
    companyId: "co-1",
    contactId: "ct-1",
    value: 12000,
    stage: "proposal",
    closeDate: "Aug 2026",
  },
];

export function getDeals() {
  return deals;
}

export function getDealsByStage(stage: DealStage) {
  return deals.filter((deal) => deal.stage === stage);
}
