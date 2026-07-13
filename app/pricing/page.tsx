import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Pricing } from "@/components/marketing/sections/pricing";
import { FAQ } from "@/components/marketing/sections/faq";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";

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
        <Section className="pb-0 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Eyebrow className="mx-auto">Pricing</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
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
