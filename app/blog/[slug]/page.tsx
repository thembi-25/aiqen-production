import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { CTA } from "@/components/marketing/sections/cta";
import { BlogCard } from "@/components/marketing/blog/blog-card";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { blogPosts } from "@/lib/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found — AIQEN" };
  }

  return {
    title: `${post.title} — AIQEN Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="pb-0 pt-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                Back to Blog
              </Link>

              <span className="mt-8 inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-text">
                {post.category}
              </span>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
                {post.title}
              </h1>

              <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="mx-auto max-w-3xl space-y-6">
              {post.body.map((paragraph, index) => (
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
                <h2 className="text-2xl font-bold text-foreground">More on {post.category}</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {related.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} />
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
