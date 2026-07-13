import type { Metadata } from "next";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { ContactForm } from "@/components/marketing/contact-form";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";

export const metadata: Metadata = {
  title: "Contact — AIQEN",
  description: "Get in touch with AIQEN to talk about AI consulting, automation, and your AI workforce roadmap.",
};

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@aiqen.com", href: "mailto:hello@aiqen.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 010-0198", href: "tel:+15550100198" },
  { icon: MapPin, label: "Office", value: "Remote-first, serving clients across the US" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-16 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <AiqenBadge className="mx-auto border-primary/30 bg-primary/10">Contact</AiqenBadge>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
                Let&apos;s Build Your AI Workforce
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Tell us about your goals and we&apos;ll follow up within one business day to
                schedule a consultation.
              </Text>
            </div>
          </Container>
        </Section>

        <Section className="pt-0">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
              <AiqenCard>
                <ContactForm />
              </AiqenCard>

              <div className="space-y-6">
                <AiqenCard>
                  <h2 className="text-lg font-semibold text-foreground">Get in touch</h2>
                  <ul className="mt-5 space-y-4">
                    {contactDetails.map((detail) => (
                      <li key={detail.label} className="flex items-start gap-3">
                        <detail.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">{detail.label}</p>
                          {detail.href ? (
                            <a href={detail.href} className="text-sm font-medium text-foreground hover:text-primary-text">
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-foreground">{detail.value}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </AiqenCard>

                <AiqenCard className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <Calendar className="size-8 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Book a Call Directly</h2>
                  <p className="max-w-xs text-sm text-muted-foreground">
                    Calendly scheduling will be embedded here. In the meantime, send us a message
                    and we&apos;ll set up time with you.
                  </p>
                </AiqenCard>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
