import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckSquare } from "lucide-react";

import { getMeetingNoteById } from "@/lib/data/portal/meeting-notes";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const note = getMeetingNoteById(id);
  return { title: note ? `${note.title} — AIQEN Client Portal` : "Meeting Notes — AIQEN Client Portal" };
}

export default async function MeetingNoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = getMeetingNoteById(id);

  if (!note) notFound();

  return (
    <div>
      <PageHeader
        title={note.title}
        description={`${note.date} · Attendees: ${note.attendees.join(", ")}`}
      />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Summary</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{note.summary}</p>
        </AiqenCard>

        <AiqenCard>
          <h2 className="text-lg font-semibold text-foreground">Action items</h2>
          <ul className="mt-4 space-y-3">
            {note.actionItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <CheckSquare className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </AiqenCard>
      </div>
    </div>
  );
}
