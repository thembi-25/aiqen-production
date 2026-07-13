import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { ResourceCard } from "@/components/marketing/resources/resource-card";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { resources } from "@/lib/data/resources";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return { title: "Resource Not Found — AIQEN" };
  }

  return {
    title: `${resource.title} — AIQEN Resources`,
    description: resource.excerpt,
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  const related = resources
    .filter((r) => r.type === resource.type && r.slug !== resource.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-0 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                Back to Resources
              </Link>

              <span className="mt-8 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-text">
                {resource.type}
              </span>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
                {resource.title}
              </h1>

              <div className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="size-4" />
                {resource.readTime}
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="mx-auto max-w-3xl space-y-6">
              {resource.body.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </Section>

        {related.length > 0 ? (
          <Section className="bg-card">
            <Container>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">More {resource.type}</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {related.map((relatedResource) => (
                    <ResourceCard key={relatedResource.slug} resource={relatedResource} />
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        ) : null}

        <CTA />
      </main>

      <Footer />
    </>
  );
}
