import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { PageHeroGlow } from "@/components/shared/page-hero-glow";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/data/industries";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industries — AIQEN",
  description:
    "AI automation built around the workflows of your industry — healthcare, finance, legal, construction, education, manufacturing, retail, logistics, hospitality, government, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="relative overflow-hidden pb-16 pt-32">
          <PageHeroGlow />
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <AiqenBadge className="mx-auto border-primary/30 bg-primary/10">
                Industries
              </AiqenBadge>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                AI Solutions For Every Modern Business
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Every industry has its own workflows, systems, and compliance needs — our AI
                systems are built around yours, not the other way around.
              </Text>
            </div>

            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <a
                  key={industry.slug}
                  href={`#${industry.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {industry.title}
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {industries.map((industry, index) => (
          <Section
            key={industry.slug}
            id={industry.slug}
            className={cn("scroll-mt-24 py-16 md:py-20", index % 2 === 1 && "bg-card")}
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                <div className="space-y-4 lg:sticky lg:top-28">
                  <industry.icon className="size-10 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {industry.title}
                  </h2>
                  <Text size="lg">{industry.description}</Text>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ size: "lg" }), "mt-2 h-11 px-6")}
                  >
                    Get Started <ArrowRight className="size-4" />
                  </Link>
                </div>

                <AiqenCard>
                  <h3 className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                    Workflows we automate
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {industry.workflows.map((workflow) => (
                      <li key={workflow} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {workflow}
                      </li>
                    ))}
                  </ul>
                </AiqenCard>
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
