import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Pricing } from "@/components/marketing/sections/pricing";
import { FAQ } from "@/components/marketing/sections/faq";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { PageHeroGlow } from "@/components/shared/page-hero-glow";
import { AiqenBadge } from "@/components/ui/aiqen-badge";

export const metadata: Metadata = {
  title: "Pricing — AIQEN",
  description:
    "Simple, transparent pricing for AI consulting and automation — Startup, Growth, and Enterprise plans.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="relative overflow-hidden pb-0 pt-32">
          <PageHeroGlow />
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <AiqenBadge className="mx-auto border-primary/30 bg-primary/10">Pricing</AiqenBadge>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                Plans That Scale With Your AI Adoption
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Every plan starts with a strategy conversation, so you know exactly what you&apos;re
                building before you commit.
              </Text>
            </div>
          </Container>
        </Section>

        <Pricing />

        <FAQ limit={5} />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
