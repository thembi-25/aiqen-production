import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { ROICalculator } from "@/components/marketing/roi-calculator";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";

export const metadata: Metadata = {
  title: "ROI Calculator — AIQEN",
  description:
    "Estimate the hours saved, cost reduction, revenue increase, and productivity gain from automating manual work with AIQEN.",
};

export default function ROICalculatorPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-12 pt-32">
          <Container>
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <Eyebrow className="mx-auto">ROI Calculator</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
                See What Automation Is Worth To Your Business
              </h1>
              <Text size="lg" className="mx-auto max-w-xl">
                Adjust the numbers below to estimate your potential hours saved, cost reduction,
                revenue increase, and productivity gain.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="pt-0">
          <Container>
            <ROICalculator />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
