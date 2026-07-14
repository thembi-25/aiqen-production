import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
import { IconTile } from "@/components/shared/icon-tile";
import { RevealStagger, RevealItem } from "@/components/shared/reveal";
import { industries } from "@/lib/data/industries";

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
        <Section className="pb-16 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Eyebrow className="mx-auto">Industries</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                AI solutions for every modern business
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
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {industry.title}
                </a>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="border-t border-border pt-4 pb-24">
          <Container>
            <RevealStagger className="divide-y divide-border">
              {industries.map((industry) => (
                <div key={industry.slug} id={industry.slug} className="scroll-mt-24">
                  <RevealItem className="grid gap-6 py-8 sm:grid-cols-[1fr_1fr] sm:items-start lg:gap-16">
                    <div className="flex items-start gap-4">
                      <IconTile icon={industry.icon} />
                      <div>
                        <h2 className="text-lg font-semibold text-foreground">{industry.title}</h2>
                        <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 sm:pl-2">
                      {industry.workflows.map((workflow) => (
                        <li key={workflow} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          {workflow}
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
