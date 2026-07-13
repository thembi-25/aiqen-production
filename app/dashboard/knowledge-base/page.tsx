import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getKnowledgeArticles, getKnowledgeCategories } from "@/lib/data/portal/knowledge-base";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { PageHeader } from "@/components/dashboard/page-header";

export const metadata: Metadata = {
  title: "Knowledge Base — AIQEN Client Portal",
};

export default function KnowledgeBasePage() {
  const articles = getKnowledgeArticles();
  const categories = getKnowledgeCategories();

  return (
    <div>
      <PageHeader title="Knowledge Base" description="Guides for working with AIQEN and your automations." />

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {articles
                .filter((article) => article.category === category)
                .map((article) => (
                  <Link key={article.slug} href={`/dashboard/knowledge-base/${article.slug}`}>
                    <AiqenCard className="h-full transition-colors hover:border-primary/40">
                      <h3 className="font-semibold text-foreground">{article.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
                      <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary-text">
                        Read article <ArrowRight className="size-3.5" />
                      </span>
                    </AiqenCard>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
