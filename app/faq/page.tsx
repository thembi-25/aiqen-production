import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { FAQ } from "@/components/marketing/sections/faq";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { AiqenBadge } from "@/components/ui/aiqen-badge";

export const metadata: Metadata = {
  title: "FAQ — AIQEN",
  description: "Answers to common questions about working with AIQEN on AI consulting, automation, and AI agents.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-0 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <AiqenBadge className="mx-auto border-primary/30 bg-primary/10">FAQ</AiqenBadge>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                Everything You Need to Know
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Still have a question? <a href="/contact" className="text-primary-text hover:underline">Get in touch</a>.
              </Text>
            </div>
          </Container>
        </Section>

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
