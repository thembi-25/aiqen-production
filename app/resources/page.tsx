import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { ResourceList } from "@/components/marketing/resources/resource-list";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { resources, resourceTypes } from "@/lib/data/resources";

export const metadata: Metadata = {
  title: "Resources — AIQEN",
  description:
    "Guides, playbooks, templates, AI insights, and automation library entries to help you plan and run AI automation projects.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-12 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <AiqenBadge className="mx-auto border-primary/30 bg-primary/10">Resources</AiqenBadge>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                Guides, Playbooks & Templates for AI Automation
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Practical resources for planning, launching, and scaling AI automation — separate
                from our blog, built to be used, not just read.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="pt-0">
          <Container>
            <ResourceList resources={resources} types={resourceTypes} />
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
