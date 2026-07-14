import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Plug } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Text } from "@/components/shared/text";
import { AppFrame } from "@/components/shared/app-frame";
import { buttonVariants } from "@/components/ui/button";
import { aiWorkforce, type AIEmployee } from "@/lib/data/ai-workforce";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return aiWorkforce.map((employee) => ({ slug: employee.slug }));
}

function getEmployee(slug: string): AIEmployee | undefined {
  return aiWorkforce.find((employee) => employee.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const employee = getEmployee(slug);

  if (!employee) return { title: "AI Workforce — AIQEN" };

  return {
    title: `${employee.title} — AIQEN`,
    description: employee.description,
  };
}

export default async function AIEmployeeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const employee = getEmployee(slug);

  if (!employee) notFound();

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-16 pt-32">
          <Container>
            <Link
              href="/ai-workforce"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" /> Back to AI Workforce
            </Link>

            <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
              <employee.icon className="size-10 text-muted-foreground" />

              <div className="space-y-4">
                <Eyebrow>{employee.role}</Eyebrow>
                <h1 className="text-3xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
                  {employee.title}
                </h1>
                <Text size="lg" className="max-w-2xl">
                  {employee.description}
                </Text>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "mt-2 h-11 px-6")}
                >
                  Deploy This AI Employee <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="border-t border-border pt-10">
          <Container>
            <div className="grid gap-x-10 gap-y-10 border-t border-border pt-10 lg:grid-cols-2">
              <div>
                <h2 className="text-xs font-semibold tracking-wide text-primary-text uppercase">
                  Responsibilities
                </h2>
                <ul className="mt-4 space-y-3">
                  {employee.capabilities.map((capability) => (
                    <li key={capability} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary-text" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-semibold tracking-wide text-primary-text uppercase">
                  Integrations
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {employee.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      <Plug className="size-3" />
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8 lg:col-span-2">
                <h2 className="text-xs font-semibold tracking-wide text-primary-text uppercase">
                  Business value
                </h2>
                <Text size="lg" className="mt-4">
                  {employee.businessValue}
                </Text>
              </div>

              <div className="border-t border-border pt-8 lg:col-span-2">
                <h2 className="text-xs font-semibold tracking-wide text-primary-text uppercase">
                  Demo workflow
                </h2>
                <AppFrame title={`${employee.title} — Demo Workflow`} className="mt-4">
                  <ol className="flex flex-col divide-y divide-border">
                    {employee.demoWorkflow.map((step, i) => (
                      <li key={step} className="flex items-start gap-3 px-5 py-3.5 text-sm">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-[10px] text-muted-foreground">
                          {i + 1}
                        </span>
                        <span className="text-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </AppFrame>
              </div>
            </div>
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
