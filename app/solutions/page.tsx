import type { Metadata } from "next";
import { Check } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
import { IconTile } from "@/components/shared/icon-tile";
import { RevealStagger, RevealItem } from "@/components/shared/reveal";
import { solutions } from "@/lib/data/solutions";

export const metadata: Metadata = {
  title: "Solutions — AIQEN",
  description:
    "AI solutions framed around business outcomes — revenue growth, sales automation, lead management, customer service, internal ops, HR, recruitment, knowledge management, reporting, dashboards, analytics, and BI.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-16 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Eyebrow className="mx-auto">Solutions</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                AI solutions designed around real business problems
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                AIQEN combines strategy, automation, and intelligent systems to help businesses
                operate more efficiently — organized by the outcome you need, not the technology.
              </Text>
            </div>

            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
              {solutions.map((solution) => (
                <a
                  key={solution.slug}
                  href={`#${solution.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {solution.title}
                </a>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="border-t border-border pt-4 pb-24">
          <Container>
            <RevealStagger className="divide-y divide-border">
              {solutions.map((solution) => (
                <div key={solution.slug} id={solution.slug} className="scroll-mt-24">
                  <RevealItem className="grid gap-6 py-8 sm:grid-cols-[1fr_1fr] sm:items-start lg:gap-16">
                    <div className="flex items-start gap-4">
                      <IconTile icon={solution.icon} />
                      <div>
                        <h2 className="text-lg font-semibold text-foreground">{solution.title}</h2>
                        <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 sm:pl-2">
                      {solution.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary-text" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </RevealItem>
                </div>
              ))}
            </RevealStagger>
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
