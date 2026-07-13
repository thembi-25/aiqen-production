import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { AssessmentWizard } from "@/components/assessment/assessment-wizard";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";

export const metadata: Metadata = {
  title: "AI Business Assessment — AIQEN",
  description:
    "Get your free AI Business Assessment — an Automation Readiness, AI Readiness, and Opportunity score with estimated savings and recommended systems, in under 5 minutes.",
};

export default function AssessmentPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-12 pt-32">
          <Container>
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <Eyebrow className="mx-auto">Free AI Business Assessment</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
                How AI-Ready Is Your Business?
              </h1>
              <Text size="lg" className="mx-auto max-w-xl">
                Answer a few questions and get your Automation Readiness, AI Readiness, and
                Opportunity scores — plus an estimated savings and a recommended plan. Takes under
                5 minutes.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="pt-0">
          <Container>
            <AssessmentWizard />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
