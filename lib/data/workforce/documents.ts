export type DocumentType = "pdf" | "doc" | "sheet" | "image";

export interface WorkforceDocument {
  id: string;
  name: string;
  type: DocumentType;
  category: string;
  sizeLabel: string;
  uploadedAt: string;
  uploadedBy: string;
}

export const documents: WorkforceDocument[] = [
  {
    id: "wdoc-1",
    name: "Q2 2026 AI Workforce Performance Report.pdf",
    type: "pdf",
    category: "Reports",
    sizeLabel: "1.8 MB",
    uploadedAt: "Jul 1, 2026",
    uploadedBy: "Analytics",
  },
  {
    id: "wdoc-2",
    name: "SDR Outreach Templates.doc",
    type: "doc",
    category: "Playbooks",
    sizeLabel: "220 KB",
    uploadedAt: "Jun 18, 2026",
    uploadedBy: "Jamie Rivera",
  },
  {
    id: "wdoc-3",
    name: "CRM Contact Export — Jun 2026.sheet",
    type: "sheet",
    category: "Exports",
    sizeLabel: "540 KB",
    uploadedAt: "Jun 30, 2026",
    uploadedBy: "Jamie Rivera",
  },
  {
    id: "wdoc-4",
    name: "Support Escalation Workflow Diagram.png",
    type: "image",
    category: "Playbooks",
    sizeLabel: "1.1 MB",
    uploadedAt: "May 22, 2026",
    uploadedBy: "Ops Monitor",
  },
];

export function getDocuments() {
  return documents;
}
