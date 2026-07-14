import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Stat } from "@/components/shared/stat";
import { AppFrame } from "@/components/shared/app-frame";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";

const benefits = [
  "Live project status and milestones",
  "Support tickets and account messages",
  "Invoices, documents, and reporting",
  "Automation health at a glance",
];

const projects = [
  { name: "Support Triage Agent", status: "Live", progress: 100 },
  { name: "Lead Routing Automation", status: "Building", progress: 62 },
  { name: "CRM Data Sync", status: "Monitoring", progress: 88 },
];

export function ClientPortalPreview() {
  return (
    <Section id="client-portal" className="border-t border-border">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal className="space-y-4">
            <Eyebrow>Client Portal</Eyebrow>
            <Heading>Every engagement, tracked in one place</Heading>
            <Text size="lg">
              Once you&apos;re a client, the AIQEN portal gives you a live view of every
              project we&apos;re building — status, milestones, and results, without
              chasing a status update.
            </Text>

            <RevealStagger className="space-y-3 pt-2">
              {benefits.map((benefit) => (
                <RevealItem key={benefit} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary-text" />
                  {benefit}
                </RevealItem>
              ))}
            </RevealStagger>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-text"
            >
              Become a client
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <AppFrame title="Client Portal">
              <div className="divide-y divide-border">
                {projects.map((project) => (
                  <div key={project.name} className="space-y-2 px-5 py-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{project.name}</span>
                      <span className="text-xs text-muted-foreground">{project.status}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-border px-5 py-5">
                <Stat value="3" label="Active projects" />
                <Stat value="24h" label="Saved / week" />
                <Stat value="98%" label="Automation uptime" />
              </div>

              <div className="border-t border-border px-5 py-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-between text-sm font-medium text-primary-text"
                >
                  See what a client engagement includes
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </AppFrame>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
