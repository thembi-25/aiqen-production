import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
import { IconTile } from "@/components/shared/icon-tile";
import { Reveal } from "@/components/shared/reveal";
import { services } from "@/lib/data/services";

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
        <Section className="pb-16 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Eyebrow className="mx-auto">Services</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                AI services built around business outcomes
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
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {services.map((service) => (
          <Section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 border-t border-border py-16 md:py-20"
          >
            <Container>
              <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                <div className="space-y-4 lg:sticky lg:top-28">
                  <IconTile icon={service.icon} size="lg" />
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                  <Text size="lg">{service.overview}</Text>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary-text transition-colors hover:opacity-80"
                  >
                    Talk to us about {service.title}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold tracking-wide text-primary-text uppercase">
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
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold tracking-wide text-primary-text uppercase">
                      Process
                    </h3>
                    <ol className="mt-4 space-y-3">
                      {service.process.map((step, i) => (
                        <li key={step} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="font-mono text-xs text-muted-foreground/70">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="border-t border-border pt-6 sm:col-span-2">
                    <h3 className="text-xs font-semibold tracking-wide text-primary-text uppercase">
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
                  </div>
                </div>
              </Reveal>
            </Container>
          </Section>
        ))}

        <CTA />
      </main>

      <Footer />
    </>
  );
}
