import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { painPointOptions } from "@/lib/assessment/scoring";
import { services } from "@/lib/data/services";

const featured = painPointOptions.slice(0, 6);

export function Problems() {
  return (
    <Section id="problems">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="space-y-4">
            <Eyebrow>Business Problems We Solve</Eyebrow>
            <Heading>The problems quietly costing you time and revenue</Heading>
            <Text size="lg">
              We don&apos;t start with an AI agent looking for a use case. We start with
              the bottleneck on your team&apos;s desk — then build the exact system that
              removes it.
            </Text>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-text"
            >
              Not sure which apply to you? Take the assessment
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Reveal>

          <RevealStagger className="divide-y divide-border border-t border-border lg:border-t-0">
            {featured.map((problem) => {
              const service = services.find((s) => s.slug === problem.serviceSlug);
              if (!service) return null;

              return (
                <RevealItem key={problem.id} className="group py-5 first:pt-0">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <service.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <p className="text-base font-medium text-foreground">
                        {problem.label}
                      </p>
                    </div>

                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-text"
                    >
                      {service.title}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </Container>
    </Section>
  );
}
