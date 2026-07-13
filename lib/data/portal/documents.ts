export type DocumentType = "pdf" | "doc" | "sheet" | "image";

export interface PortalDocument {
  id: string;
  name: string;
  type: DocumentType;
  category: string;
  sizeLabel: string;
  uploadedAt: string;
  uploadedBy: string;
}

export const documents: PortalDocument[] = [
  {
    id: "doc-1",
    name: "AIQEN Master Services Agreement.pdf",
    type: "pdf",
    category: "Contracts",
    sizeLabel: "412 KB",
    uploadedAt: "Oct 3, 2025",
    uploadedBy: "AIQEN Account Team",
  },
  {
    id: "doc-2",
    name: "AI Readiness Assessment Report.pdf",
    type: "pdf",
    category: "Reports",
    sizeLabel: "2.1 MB",
    uploadedAt: "Oct 10, 2025",
    uploadedBy: "AIQEN Account Team",
  },
  {
    id: "doc-3",
    name: "CRM Data Sync — Schema Mapping.sheet",
    type: "sheet",
    category: "Deliverables",
    sizeLabel: "88 KB",
    uploadedAt: "Dec 2, 2025",
    uploadedBy: "Priya Nair",
  },
  {
    id: "doc-4",
    name: "Support Triage Agent — Architecture Diagram.png",
    type: "image",
    category: "Deliverables",
    sizeLabel: "1.4 MB",
    uploadedAt: "Mar 18, 2026",
    uploadedBy: "Diego Alvarez",
  },
  {
    id: "doc-5",
    name: "Website Automation — Integration Diagram v2.pdf",
    type: "pdf",
    category: "Deliverables",
    sizeLabel: "960 KB",
    uploadedAt: "Jul 8, 2026",
    uploadedBy: "Priya Nair",
  },
  {
    id: "doc-6",
    name: "Q2 2026 Automation Performance Summary.doc",
    type: "doc",
    category: "Reports",
    sizeLabel: "310 KB",
    uploadedAt: "Jul 1, 2026",
    uploadedBy: "AIQEN Account Team",
  },
];

export function getDocuments() {
  return documents;
}
