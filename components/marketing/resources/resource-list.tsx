"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { ResourceCard } from "@/components/marketing/resources/resource-card";
import { RevealStagger, RevealItem } from "@/components/shared/reveal";
import { Input } from "@/components/ui/input";
import type { Resource } from "@/lib/data/resources";
import { cn } from "@/lib/utils";

export function ResourceList({
  resources,
  types,
}: {
  resources: Resource[];
  types: readonly string[];
}) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string | null>(null);

  const filtered = resources.filter((resource) => {
    const matchesType = !type || resource.type === type;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      resource.title.toLowerCase().includes(q) ||
      resource.excerpt.toLowerCase().includes(q);
    return matchesType && matchesQuery;
  });

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
          <button
            type="button"
            onClick={() => setType(null)}
            aria-pressed={type === null}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              type === null
                ? "border-primary bg-primary/10 text-primary-text"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              aria-pressed={type === t}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                type === t
                  ? "border-primary bg-primary/10 text-primary-text"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="relative sm:w-64">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search resources..."
            aria-label="Search resources"
            className="pl-10"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">
          No resources match your search.
        </p>
      ) : (
        <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <RevealItem key={resource.slug}>
              <ResourceCard resource={resource} />
            </RevealItem>
          ))}
        </RevealStagger>
      )}
    </div>
  );
}
