import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Terms of Service — AIQEN",
  description: "The terms that govern your use of AIQEN's website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using AIQEN's website or services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.",
    ],
  },
  {
    title: "2. Description of Services",
    body: [
      "AIQEN provides AI consulting, automation, and related services. The specific scope, deliverables, and fees for any engagement are defined in a separate written agreement or statement of work between AIQEN and the client.",
    ],
  },
  {
    title: "3. Use of Website",
    body: [
      "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use of, this website by anyone else.",
    ],
  },
  {
    title: "4. Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, and software, is the property of AIQEN or its licensors and is protected by applicable intellectual property laws.",
    ],
  },
  {
    title: "5. Client Engagements",
    body: [
      "Any paid engagement with AIQEN is governed by a separate agreement covering scope, fees, timelines, confidentiality, and ownership of deliverables. In the event of a conflict, that agreement controls over these Terms.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, AIQEN shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services.",
    ],
  },
  {
    title: "7. Termination",
    body: [
      "We may suspend or terminate access to this website at any time, for any reason, without notice.",
    ],
  },
  {
    title: "8. Governing Law",
    body: [
      "These Terms are governed by the laws of the jurisdiction in which AIQEN operates, without regard to conflict of law principles.",
    ],
  },
  {
    title: "9. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pt-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Terms of Service
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Effective date: January 1, 2026 · This is a template and should be reviewed by
                legal counsel before publication.
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
                  <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Questions about these Terms can be sent to{" "}
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
