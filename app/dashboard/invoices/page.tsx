import type { Metadata } from "next";
import { Download } from "lucide-react";

import { getInvoices } from "@/lib/data/portal/invoices";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatusBadge } from "@/components/dashboard/status-badge";
import { invoiceStatusToneAndLabel } from "@/lib/data/portal/status-presentation";

export const metadata: Metadata = {
  title: "Invoices — AIQEN Client Portal",
};

export default function InvoicesPage() {
  const invoices = getInvoices();

  return (
    <div>
      <PageHeader title="Invoices" description="Billing history for your AIQEN engagements." />

      <AiqenCard className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                <th className="px-6 py-3 font-medium">Invoice</th>
                <th className="px-6 py-3 font-medium">Description</th>
                <th className="px-6 py-3 font-medium">Due date</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => {
                const status = invoiceStatusToneAndLabel(invoice.status);

                return (
                  <tr key={invoice.number} className="border-b border-border last:border-b-0">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-foreground">
                      {invoice.number}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{invoice.description}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-muted-foreground">
                      {invoice.dueDate}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-foreground">
                      ${invoice.amount.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        type="button"
                        disabled
                        title="PDF downloads will be available once billing is connected"
                        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-muted-foreground opacity-50"
                      >
                        <Download className="size-3.5" />
                        PDF
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </AiqenCard>
    </div>
  );
}
