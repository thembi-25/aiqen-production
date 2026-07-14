import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { FAQ } from "@/components/marketing/sections/faq";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";

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
              <Eyebrow className="mx-auto">FAQ</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                Everything You Need to Know
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Answers to the questions we hear most before a business starts working with
                AIQEN. Still have a question?{" "}
                <a href="/contact" className="text-primary-text hover:underline">
                  Get in touch
                </a>
                .
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
