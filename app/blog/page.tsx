import type { Metadata } from "next";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { BlogList } from "@/components/marketing/blog/blog-list";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { blogCategories, blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog — AIQEN",
  description:
    "Practical guides on AI strategy, workflow automation, AI agents, and customer experience from the AIQEN team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-12 pt-32">
          <Container>
            <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
              <Eyebrow className="mx-auto">Blog</Eyebrow>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-6xl">
                Insights on AI Strategy &amp; Automation
              </h1>
              <Text size="lg" className="mx-auto max-w-2xl">
                Practical, no-hype writing on building AI systems that actually work.
              </Text>
            </Reveal>
          </Container>
        </Section>

        <Section className="pt-0">
          <Container>
            <BlogList posts={blogPosts} categories={blogCategories} />
          </Container>
        </Section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
