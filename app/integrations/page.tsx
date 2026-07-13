import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
import { integrationCategories, getIntegrationsByCategory } from "@/lib/data/integrations";

export const metadata: Metadata = {
  title: "Integrations — AIQEN",
  description:
    "AIQEN connects to the tools you already use — HubSpot, Google Sheets, n8n, OpenAI, Claude, Google Calendar, Outlook, Slack, Teams, Zapier, Webhooks, SMTP, Stripe, and Calendly.",
};

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-16 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Eyebrow className="mx-auto">Integrations</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                Connects To The Tools You Already Use
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                AI employees and workflows plug directly into your existing CRM, calendar,
                communication, and data stack — no rip-and-replace required.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="border-t border-border pt-0">
          <Container>
            <div className="space-y-14 pt-4">
              {integrationCategories.map((category) => {
                const items = getIntegrationsByCategory(category);
                if (items.length === 0) return null;

                return (
                  <div key={category} className="space-y-6">
                    <h2 className="text-xl font-semibold text-foreground">{category}</h2>
                    <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((integration) => (
                        <div key={integration.id} className="flex flex-col gap-3 bg-background p-6">
                          <integration.icon className="size-6 text-muted-foreground" />
                          <h3 className="text-base font-semibold text-foreground">
                            {integration.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{integration.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
