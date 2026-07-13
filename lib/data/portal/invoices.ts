export type InvoiceStatus = "paid" | "due" | "overdue";

export interface InvoiceLineItem {
  description: string;
  amount: number;
}

export interface Invoice {
  number: string;
  description: string;
  issuedDate: string;
  dueDate: string;
  status: InvoiceStatus;
  amount: number;
  lineItems: InvoiceLineItem[];
}

export const invoices: Invoice[] = [
  {
    number: "INV-1041",
    description: "Website Automation Overhaul — Milestone 2",
    issuedDate: "Jul 1, 2026",
    dueDate: "Jul 31, 2026",
    status: "due",
    amount: 18500,
    lineItems: [
      { description: "Lead scoring model development", amount: 9500 },
      { description: "HubSpot + Slack integration (in progress)", amount: 9000 },
    ],
  },
  {
    number: "INV-1035",
    description: "AI Support Triage Agent — Production Rollout",
    issuedDate: "Jun 1, 2026",
    dueDate: "Jun 30, 2026",
    status: "paid",
    amount: 24000,
    lineItems: [
      { description: "Draft-reply generation model", amount: 12000 },
      { description: "Production rollout & QA", amount: 12000 },
    ],
  },
  {
    number: "INV-1029",
    description: "CRM Data Sync — Phase 1",
    issuedDate: "Dec 15, 2025",
    dueDate: "Jan 14, 2026",
    status: "paid",
    amount: 15000,
    lineItems: [
      { description: "Discovery workshop", amount: 3000 },
      { description: "Schema mapping & sync pipeline build", amount: 12000 },
    ],
  },
  {
    number: "INV-1018",
    description: "AI Business Assessment & Roadmap",
    issuedDate: "Oct 3, 2025",
    dueDate: "Nov 2, 2025",
    status: "overdue",
    amount: 4500,
    lineItems: [{ description: "AI readiness assessment and recommendations", amount: 4500 }],
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoiceByNumber(number: string) {
  return invoices.find((invoice) => invoice.number === number);
}
