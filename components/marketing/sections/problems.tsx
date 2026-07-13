import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { IconTile } from "@/components/shared/icon-tile";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { painPointOptions } from "@/lib/assessment/scoring";
import { services } from "@/lib/data/services";

const featured = painPointOptions.slice(0, 6);

export function Problems() {
  return (
    <Section id="problems">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Business Problems We Solve</AiqenBadge>

          <Heading>The problems quietly costing you time and revenue</Heading>

          <Text size="lg" className="mx-auto">
            We don&apos;t start with an AI agent looking for a use case. We start with
            the bottleneck on your team&apos;s desk — then build the exact system that
            removes it.
          </Text>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((problem) => {
            const service = services.find((s) => s.slug === problem.serviceSlug);
            if (!service) return null;

            return (
              <RevealItem key={problem.id}>
                <AiqenCard variant="interactive" className="flex h-full flex-col">
                  <IconTile icon={service.icon} />

                  <p className="mt-5 flex-1 text-lg font-semibold text-foreground">
                    {problem.label}
                  </p>

                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text"
                  >
                    Solved with {service.title}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </AiqenCard>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <div className="mt-10 flex justify-center">
          <Link
            href="/assessment"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-text"
          >
            Not sure which apply to you? Take the free AI Business Assessment
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
