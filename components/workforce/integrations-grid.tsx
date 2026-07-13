"use client";

import { useState } from "react";
import { Check, Plug } from "lucide-react";

import type { Integration } from "@/lib/data/workforce/integrations";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IntegrationsGrid({ integrations }: { integrations: Integration[] }) {
  const [connected, setConnected] = useState<Set<string>>(
    new Set(integrations.filter((i) => i.connected).map((i) => i.id))
  );

  const categories = Array.from(new Set(integrations.map((i) => i.category)));

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {category}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrations
              .filter((integration) => integration.category === category)
              .map((integration) => {
                const isConnected = connected.has(integration.id);

                return (
                  <AiqenCard key={integration.id} className="h-full">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <Plug className="size-5" />
                      </span>
                      <p className="font-semibold text-foreground">{integration.name}</p>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{integration.description}</p>

                    <button
                      type="button"
                      onClick={() =>
                        setConnected((prev) => {
                          const next = new Set(prev);
                          if (next.has(integration.id)) next.delete(integration.id);
                          else next.add(integration.id);
                          return next;
                        })
                      }
                      className={cn(
                        buttonVariants({ variant: isConnected ? "outline" : "default" }),
                        "mt-4 w-full gap-1.5"
                      )}
                    >
                      {isConnected ? (
                        <>
                          <Check className="size-4" /> Connected
                        </>
                      ) : (
                        "Connect"
                      )}
                    </button>
                  </AiqenCard>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
