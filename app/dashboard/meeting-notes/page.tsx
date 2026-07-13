import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { getMeetingNotes } from "@/lib/data/portal/meeting-notes";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";

export const metadata: Metadata = {
  title: "Meeting Notes — AIQEN Client Portal",
};

export default function MeetingNotesPage() {
  const notes = getMeetingNotes();

  return (
    <div>
      <PageHeader title="Meeting Notes" description="Summaries and action items from your calls with AIQEN." />

      <div className="space-y-3">
        {notes.map((note) => (
          <Link key={note.id} href={`/dashboard/meeting-notes/${note.id}`}>
            <AiqenCard className="transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="font-semibold text-foreground">{note.title}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {note.date} &middot; {note.attendees.join(", ")}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{note.summary}</p>
                </div>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
              </div>
            </AiqenCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
