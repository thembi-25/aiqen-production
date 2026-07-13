import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { caseStudies } from "@/lib/data/case-studies";

export function CaseStudies() {
  const [featured, ...rest] = caseStudies;

  return (
    <Section id="case-studies" className="border-y border-border bg-card">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Case Studies</AiqenBadge>
          <Heading>Real results from real deployments</Heading>
          <Text size="lg" className="mx-auto">
            See how businesses across industries use AIQEN to automate work and grow faster.
          </Text>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <RevealItem>
            <AiqenCard variant="featured" className="flex h-full flex-col justify-between p-8">
              <div>
                <span className="text-xs font-medium tracking-wide text-accent uppercase">
                  {featured.industry}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {featured.client}
                </h3>

                <p className="mt-4 text-muted-foreground">{featured.challenge}</p>
                <p className="mt-3 text-muted-foreground">{featured.solution}</p>
              </div>

              <div>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {featured.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-bold text-primary-text tabular-nums">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/case-studies"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text"
                >
                  Read the full story <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </AiqenCard>
          </RevealItem>

          <div className="flex flex-col gap-6">
            {rest.map((study) => (
              <RevealItem key={study.slug} className="flex-1">
                <AiqenCard variant="interactive" className="h-full">
                  <span className="text-xs font-medium tracking-wide text-accent uppercase">
                    {study.industry}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{study.client}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{study.challenge}</p>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-lg font-bold text-primary-text tabular-nums">
                        {study.metrics[0].value}
                      </p>
                      <p className="text-xs text-muted-foreground">{study.metrics[0].label}</p>
                    </div>

                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-text"
                    >
                      Read <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </AiqenCard>
              </RevealItem>
            ))}
          </div>
        </RevealStagger>
      </Container>
    </Section>
  );
}
