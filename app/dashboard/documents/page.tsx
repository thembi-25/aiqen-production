import type { Metadata } from "next";
import { Download, FileText, FileSpreadsheet, Image as ImageIcon, File as FileIcon } from "lucide-react";

import { getDocuments, type DocumentType } from "@/lib/data/portal/documents";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";

export const metadata: Metadata = {
  title: "Documents — AIQEN Client Portal",
};

const typeIcon: Record<DocumentType, typeof FileText> = {
  pdf: FileText,
  doc: FileIcon,
  sheet: FileSpreadsheet,
  image: ImageIcon,
};

export default function DocumentsPage() {
  const documents = getDocuments();
  const categories = Array.from(new Set(documents.map((doc) => doc.category)));

  return (
    <div>
      <PageHeader title="Documents" description="Contracts, deliverables, and reports shared with you." />

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {category}
            </h2>
            <AiqenCard className="divide-y divide-border p-0">
              {documents
                .filter((doc) => doc.category === category)
                .map((doc) => {
                  const Icon = typeIcon[doc.type];
                  return (
                    <div
                      key={doc.id}
                      className="flex flex-wrap items-center justify-between gap-4 px-6 py-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <Icon className="size-5 shrink-0 text-primary" />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {doc.sizeLabel} &middot; Uploaded {doc.uploadedAt} by {doc.uploadedBy}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled
                        title="File downloads will be available once documents are connected"
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-muted-foreground opacity-50"
                      >
                        <Download className="size-3.5" />
                        Download
                      </button>
                    </div>
                  );
                })}
            </AiqenCard>
          </div>
        ))}
      </div>
    </div>
  );
}
