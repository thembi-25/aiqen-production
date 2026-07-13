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
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services — AIQEN",
  description:
    "AI consulting, workflow automation, AI agents, voice AI, customer support AI, sales automation, internal AI tools, and CRM automation — from strategy to deployment.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="relative overflow-hidden pb-16 pt-32">
          <PageHeroGlow />
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <AiqenBadge className="mx-auto border-primary/30 bg-primary/10">
                Services
              </AiqenBadge>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                AI Services Built Around Business Outcomes
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Every engagement moves from strategy to a deployed, monitored system — no
                open-ended experiments.
              </Text>
            </div>

            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {services.map((service, index) => (
          <Section
            key={service.slug}
            id={service.slug}
            className={cn("scroll-mt-24 py-16 md:py-20", index % 2 === 1 && "bg-card")}
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                <div className="space-y-4 lg:sticky lg:top-28">
                  <service.icon className="size-10 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                  <Text size="lg">{service.overview}</Text>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ size: "lg" }), "mt-2 h-11 px-6")}
                  >
                    Get Started <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <AiqenCard>
                    <h3 className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                      Benefits
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </AiqenCard>

                  <AiqenCard>
                    <h3 className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                      Process
                    </h3>
                    <ol className="mt-4 space-y-3">
                      {service.process.map((step, i) => (
                        <li key={step} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="font-mono text-xs text-accent">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </AiqenCard>

                  <AiqenCard className="sm:col-span-2">
                    <h3 className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                      Deliverables
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </AiqenCard>
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
