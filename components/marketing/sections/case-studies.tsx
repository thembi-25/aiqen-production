import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { caseStudies } from "@/lib/data/case-studies";

function PlaceholderTag() {
  return (
    <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
      Illustrative example
    </span>
  );
}

export function CaseStudies() {
  const [featured, ...rest] = caseStudies;

  return (
    <Section id="case-studies" className="border-t border-border">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <Eyebrow className="mx-auto">Case Studies</Eyebrow>
          <Heading>The kind of results we build toward</Heading>
          <Text size="lg" className="mx-auto">
            The examples below illustrate the scale of impact a typical AIQEN engagement
            targets, while we publish verified results from live client deployments.
          </Text>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <RevealItem className="border-t border-border pt-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium tracking-wide text-accent uppercase">
                {featured.industry}
              </span>
              <PlaceholderTag />
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">{featured.client}</h3>

            <p className="mt-4 text-muted-foreground">{featured.challenge}</p>
            <p className="mt-3 text-muted-foreground">{featured.solution}</p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {featured.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-semibold text-foreground tabular-nums">
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
          </RevealItem>

          <div className="divide-y divide-border border-t border-border">
            {rest.map((study) => (
              <RevealItem key={study.slug} className="py-6 first:pt-8">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium tracking-wide text-accent uppercase">
                    {study.industry}
                  </span>
                  <PlaceholderTag />
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{study.client}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{study.challenge}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-foreground tabular-nums">
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
              </RevealItem>
            ))}
          </div>
        </RevealStagger>
      </Container>
    </Section>
  );
}
