import Link from "next/link";
import { Clock } from "lucide-react";

import { AiqenCard } from "@/components/ui/aiqen-card";
import type { Resource } from "@/lib/data/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link href={`/resources/${resource.slug}`} className="group block h-full">
      <AiqenCard variant="interactive" className="flex h-full flex-col">
        <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-text">
          {resource.type}
        </span>

        <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary-text">
          {resource.title}
        </h3>

        <p className="mt-2 flex-1 text-sm text-muted-foreground">{resource.excerpt}</p>

        <div className="mt-6 flex items-center gap-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {resource.readTime}
        </div>
      </AiqenCard>
    </Link>
  );
}
