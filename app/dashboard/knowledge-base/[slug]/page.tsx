import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getKnowledgeArticleBySlug } from "@/lib/data/portal/knowledge-base";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { AiqenBadge } from "@/components/ui/aiqen-badge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);
  return {
    title: article ? `${article.title} — AIQEN Client Portal` : "Knowledge Base — AIQEN Client Portal",
  };
}

export default async function KnowledgeArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);

  if (!article) notFound();

  return (
    <div>
      <Link
        href="/dashboard/knowledge-base"
        className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Back to Knowledge Base
      </Link>

      <AiqenBadge className="border-primary/30 bg-primary/10">{article.category}</AiqenBadge>

      <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">{article.title}</h1>
      <p className="mt-1 text-xs text-muted-foreground">Last updated {article.updatedAt}</p>

      <AiqenCard className="mt-6 space-y-4">
        {article.content.map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </AiqenCard>
    </div>
  );
}
