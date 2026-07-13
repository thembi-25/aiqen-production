import type { Metadata } from "next";
import { Quote } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { caseStudies } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies — AIQEN",
  description:
    "See measurable results from AIQEN's AI automation and AI agent deployments across logistics, legal, and retail.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-16 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <AiqenBadge className="mx-auto border-primary/30 bg-primary/10">
                Case Studies
              </AiqenBadge>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                Measurable Results, Not Just Demos
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Every AIQEN engagement is scoped against a metric that matters. Here&apos;s what
                that looks like in practice.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="pt-0">
          <Container>
            <div className="space-y-10">
              {caseStudies.map((study, index) => (
                <AiqenCard
                  key={study.slug}
                  className={cn(
                    "grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center",
                    index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="space-y-4">
                    <span className="text-xs font-medium tracking-wide text-accent uppercase">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl font-bold text-foreground">{study.client}</h2>

                    <div>
                      <p className="text-sm font-semibold text-foreground">Challenge</p>
                      <p className="mt-1 text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Solution</p>
                      <p className="mt-1 text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    <div className="rounded-xl border border-border bg-background/40 p-4">
                      <Quote className="size-5 text-primary/50" />
                      <p className="mt-2 text-sm italic text-foreground">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {study.testimonial.author} — {study.testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background/40 p-6 text-center"
                      >
                        <p className="text-3xl font-bold tracking-tight text-primary-text">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </AiqenCard>
              ))}
            </div>
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
