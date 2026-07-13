import type { Metadata } from "next";
import { Mail, Plus } from "lucide-react";

import { getMembers } from "@/lib/data/workforce/members";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { PageHeader } from "@/components/dashboard/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Organization — AI Workforce",
};

export default function OrganizationPage() {
  const members = getMembers();

  return (
    <div>
      <PageHeader
        title="Organization"
        description="Members of the Acme Robotics workspace."
        action={
          <button
            type="button"
            disabled
            title="Invites are coming soon"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5 opacity-50")}
          >
            <Plus className="size-4" /> Invite member
          </button>
        }
      />

      <AiqenCard>
        <h2 className="text-lg font-semibold text-foreground">Workspace</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="font-medium text-foreground">Acme Robotics</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Members</dt>
            <dd className="font-medium text-foreground">{members.length}</dd>
          </div>
        </dl>
      </AiqenCard>

      <AiqenCard className="mt-6 divide-y divide-border p-0">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary-text">
                {member.avatarInitials}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{member.name}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-3.5" />
                  {member.email}
                </a>
              </div>
            </div>
            <AiqenBadge className="border-border bg-muted capitalize">{member.role}</AiqenBadge>
          </div>
        ))}
      </AiqenCard>
    </div>
  );
}
