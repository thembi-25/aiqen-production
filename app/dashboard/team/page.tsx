import type { Metadata } from "next";
import { Mail, Plus } from "lucide-react";

import { getTeamByGroup } from "@/lib/data/portal/team";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Team — AIQEN Client Portal",
};

export default function TeamPage() {
  const clientTeam = getTeamByGroup("client");
  const aiqenTeam = getTeamByGroup("aiqen");

  return (
    <div>
      <PageHeader
        title="Team"
        description="Everyone with access to your portal, and your AIQEN account team."
        action={
          <button
            type="button"
            disabled
            title="Message your account team to add a teammate"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 opacity-50")}
          >
            <Plus className="size-4" /> Invite teammate
          </button>
        }
      />

      <div className="space-y-8">
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Your team
          </h2>
          <AiqenCard className="divide-y divide-border p-0">
            {clientTeam.map((member) => (
              <div key={member.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary-text">
                    {member.avatarInitials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-3.5" />
                  {member.email}
                </a>
              </div>
            ))}
          </AiqenCard>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Your AIQEN account team
          </h2>
          <AiqenCard className="divide-y divide-border p-0">
            {aiqenTeam.map((member) => (
              <div key={member.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                    {member.avatarInitials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-3.5" />
                  {member.email}
                </a>
              </div>
            ))}
          </AiqenCard>
        </div>
      </div>
    </div>
  );
}
