import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { caseStudies } from "@/lib/data/case-studies";

export function CaseStudies() {
  return (
    <Section id="case-studies" className="border-y border-border bg-card">
      <Container>
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Case Studies</AiqenBadge>
          <Heading>Real results from real deployments</Heading>
          <Text size="lg" className="mx-auto">
            See how businesses across industries use AIQEN to automate work and grow faster.
          </Text>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <AiqenCard
              key={study.slug}
              className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="text-xs font-medium tracking-wide text-accent uppercase">
                {study.industry}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{study.client}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{study.challenge}</p>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-lg font-bold text-primary-text">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/case-studies"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text"
              >
                Read the story <ArrowRight className="size-3.5" />
              </Link>
            </AiqenCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
