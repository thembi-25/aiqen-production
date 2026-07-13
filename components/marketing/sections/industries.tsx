import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { IconTile } from "@/components/shared/icon-tile";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/data/industries";
import { cn } from "@/lib/utils";

const featured = industries.slice(0, 6);

export function Industries() {
  return (
    <Section id="industries" className="border-y border-border bg-card">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Industries</AiqenBadge>
          <Heading>AI solutions for every modern business</Heading>
          <Text size="lg" className="mx-auto">
            AIQEN adapts artificial intelligence solutions to your business goals, systems, and
            workflows.
          </Text>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2">
          {featured.map((industry) => (
            <RevealItem key={industry.slug}>
              <AiqenCard variant="interactive" className="flex h-full items-start gap-4 p-5">
                <IconTile icon={industry.icon} size="sm" className="mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{industry.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </AiqenCard>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-10 flex justify-center">
          <Link
            href="/industries"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}
          >
            Explore all {industries.length} industries <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
