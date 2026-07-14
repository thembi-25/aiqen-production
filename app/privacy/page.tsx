import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy — AIQEN",
  description: "How AIQEN collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "We collect information you provide directly to us, such as your name, email address, company, and any details you share through our contact form or during a consultation.",
      "We may also automatically collect limited technical information, such as browser type and pages visited, to help us understand how our website is used.",
    ],
  },
  {
    title: "2. How We Use Information",
    body: [
      "We use the information we collect to respond to inquiries, provide and improve our services, communicate with you about your engagement, and comply with legal obligations.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "3. Cookies & Tracking",
    body: [
      "Our website may use cookies or similar technologies to support basic functionality and understand aggregate usage patterns. You can control cookies through your browser settings.",
    ],
  },
  {
    title: "4. Data Sharing",
    body: [
      "We may share information with service providers who help us operate our business (such as hosting or communication tools), and only to the extent necessary for them to perform their services.",
      "We may disclose information if required by law or to protect our rights.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We use reasonable administrative, technical, and physical safeguards to protect the information we hold. No method of transmission or storage is 100% secure.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, or delete your personal information. To make a request, contact us at hello@aiqen.com.",
    ],
  },
  {
    title: "7. Children's Privacy",
    body: ["Our services are not directed to individuals under 16, and we do not knowingly collect information from children."],
  },
  {
    title: "8. Changes to This Policy",
    body: ["We may update this policy from time to time. We will post the updated version on this page with a revised effective date."],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pt-32">
          <Container>
            <div className="mx-auto max-w-2xl">
              <Eyebrow>Legal</Eyebrow>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Effective date: January 1, 2026 · This is a template policy and should be reviewed
                by legal counsel before publication.
              </p>

              <div className="mt-10 space-y-10">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                    <div className="mt-3 space-y-3">
                      {section.body.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <div>
                  <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Questions about this policy can be sent to{" "}
                    <a href="mailto:hello@aiqen.com" className="text-primary-text hover:underline">
                      hello@aiqen.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
