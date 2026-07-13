import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
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
              <Eyebrow className="mx-auto">Case Studies</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                Measurable Results, Not Just Demos
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Every AIQEN engagement is scoped against a metric that matters. Here&apos;s what
                that looks like in practice.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="border-t border-border pt-0">
          <Container>
            <div className="divide-y divide-border border-t border-border">
              {caseStudies.map((study, index) => (
                <div
                  key={study.slug}
                  className={cn(
                    "grid gap-8 py-14 first:pt-10 lg:grid-cols-[1fr_1fr] lg:items-center",
                    index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="space-y-4">
                    <span className="text-xs font-medium tracking-wide text-accent uppercase">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl font-semibold text-foreground">{study.client}</h2>

                    <div>
                      <p className="text-sm font-semibold text-foreground">Challenge</p>
                      <p className="mt-1 text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Solution</p>
                      <p className="mt-1 text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    <div className="border-l-2 border-border pl-4">
                      <p className="text-sm italic text-foreground">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {study.testimonial.author} — {study.testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 lg:border-t-0 lg:pt-0">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <p className="text-3xl font-semibold tracking-tight text-foreground">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
