import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { caseStudies } from "@/lib/data/case-studies";
import { blogPosts } from "@/lib/data/blog";
import { faqs } from "@/lib/data/faq";
import { pricingPlans } from "@/lib/data/pricing";
import { PageHeader } from "@/components/dashboard/page-header";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { StatusBadge } from "@/components/dashboard/status-badge";

export const metadata: Metadata = {
  title: "Content — AIQEN Admin",
};

function ContentSection({
  title,
  description,
  count,
  href,
  items,
}: {
  title: string;
  description: string;
  count: number;
  href?: string;
  items: { label: string; sublabel?: string }[];
}) {
  return (
    <AiqenCard>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-foreground">{title}</h2>
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
        <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>

      <ul className="mt-4 space-y-2 border-t border-border/50 pt-4">
        {items.map((item) => (
          <li key={item.label} className="flex items-baseline justify-between gap-4 text-sm">
            <span className="font-medium text-foreground">{item.label}</span>
            {item.sublabel && <span className="truncate text-xs text-muted-foreground">{item.sublabel}</span>}
          </li>
        ))}
      </ul>

      {href && (
        <Link
          href={href}
          target="_blank"
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary-text hover:underline"
        >
          View live page <ExternalLink className="size-3" />
        </Link>
      )}
    </AiqenCard>
  );
}

export default function AdminContentPage() {
  return (
    <div>
      <PageHeader
        title="Content"
        description="Inventory of every marketing content type across the site."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <ContentSection
          title="Services"
          description="Service pages shown under /services."
          count={services.length}
          href="/services"
          items={services.map((service) => ({ label: service.title, sublabel: service.slug }))}
        />

        <ContentSection
          title="Industries"
          description="Industry sections shown on the home page."
          count={industries.length}
          href="/#industries"
          items={industries.map((industry) => ({ label: industry.title, sublabel: industry.slug }))}
        />

        <ContentSection
          title="Case Studies"
          description="Client case studies shown under /case-studies."
          count={caseStudies.length}
          href="/case-studies"
          items={caseStudies.map((study) => ({ label: study.client, sublabel: study.industry }))}
        />

        <ContentSection
          title="Blog"
          description="Posts shown under /blog."
          count={blogPosts.length}
          href="/blog"
          items={blogPosts.map((post) => ({ label: post.title, sublabel: post.category }))}
        />

        <ContentSection
          title="FAQs"
          description="Questions shown on the /faq page."
          count={faqs.length}
          href="/faq"
          items={faqs.map((faq) => ({ label: faq.question }))}
        />

        <ContentSection
          title="Pricing"
          description="Plans shown on the /pricing page."
          count={pricingPlans.length}
          href="/pricing"
          items={pricingPlans.map((plan) => ({ label: plan.name, sublabel: `${plan.price}${plan.period}` }))}
        />
      </div>

      <AiqenCard className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-foreground">Resources, Media & Integrations pages</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Not yet built on the marketing site — tracked as open Milestone 1 items in{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-[0.7rem]">TASKS.md</code>. No content to manage
              here until those pages exist.
            </p>
          </div>
          <StatusBadge tone="neutral">Not built</StatusBadge>
        </div>
      </AiqenCard>

      <AiqenCard className="mt-6">
        <p className="text-xs text-muted-foreground">
          All content above is sourced from static <code className="rounded bg-muted px-1 py-0.5">lib/data/*</code>{" "}
          files, not a database — this inventory is read-only. Turning it into an editable CMS would require new
          schema and is a breaking change beyond this milestone&apos;s scope.
        </p>
      </AiqenCard>
    </div>
  );
}
