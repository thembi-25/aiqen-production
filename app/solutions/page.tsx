import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { solutions } from "@/lib/data/solutions";
import { cn } from "@/lib/utils";

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
                AI Solutions Designed Around Real Business Problems
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

        {solutions.map((solution) => (
          <Section
            key={solution.slug}
            id={solution.slug}
            className="scroll-mt-24 border-t border-border py-16 md:py-20"
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                <div className="space-y-4 lg:sticky lg:top-28">
                  <solution.icon className="size-8 text-muted-foreground" />
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                    {solution.title}
                  </h2>
                  <Text size="lg">{solution.description}</Text>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ size: "lg" }), "mt-2 h-11 px-6")}
                  >
                    Get Started <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-primary-text uppercase">
                    Outcomes you can expect
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {solution.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary-text" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </Section>
        ))}

        <CTA />
      </main>

      <Footer />
    </>
  );
}
