export type KnowledgeSourceType = "document" | "url" | "faq";
export type KnowledgeSourceStatus = "indexed" | "processing";

export interface KnowledgeSource {
  id: string;
  name: string;
  type: KnowledgeSourceType;
  status: KnowledgeSourceStatus;
  linkedEmployeeIds: string[];
  updatedAt: string;
}

export const knowledgeSources: KnowledgeSource[] = [
  {
    id: "ks-1",
    name: "Product FAQ — Support Macros",
    type: "faq",
    status: "indexed",
    linkedEmployeeIds: ["emp-support-1"],
    updatedAt: "Jul 5, 2026",
  },
  {
    id: "ks-2",
    name: "Refund & Billing Policy.pdf",
    type: "document",
    status: "indexed",
    linkedEmployeeIds: ["emp-support-1"],
    updatedAt: "Jun 20, 2026",
  },
  {
    id: "ks-3",
    name: "aiqen.com/pricing",
    type: "url",
    status: "indexed",
    linkedEmployeeIds: ["emp-sdr-1", "emp-receptionist-1"],
    updatedAt: "Jul 1, 2026",
  },
  {
    id: "ks-4",
    name: "Outbound Messaging Playbook.pdf",
    type: "document",
    status: "processing",
    linkedEmployeeIds: ["emp-sdr-1"],
    updatedAt: "Jul 13, 2026",
  },
  {
    id: "ks-5",
    name: "Booking & Cancellation Policy",
    type: "faq",
    status: "indexed",
    linkedEmployeeIds: ["emp-receptionist-1"],
    updatedAt: "Jun 28, 2026",
  },
];

export function getKnowledgeSources() {
  return knowledgeSources;
}
