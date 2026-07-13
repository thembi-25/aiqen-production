import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { IconTile } from "@/components/shared/icon-tile";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/data/industries";
import { cn } from "@/lib/utils";

const featured = industries.slice(0, 6);

export function Industries() {
  return (
    <Section id="industries" className="border-y border-border bg-card">
      <Container>
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Industries</AiqenBadge>
          <Heading>AI solutions for every modern business</Heading>
          <Text size="lg" className="mx-auto">
            AIQEN adapts artificial intelligence solutions to your business goals, systems, and
            workflows.
          </Text>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((industry) => (
            <AiqenCard
              key={industry.slug}
              className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <IconTile icon={industry.icon} />
              <h3 className="mt-5 text-xl font-semibold text-foreground">{industry.title}</h3>
              <p className="mt-3 text-muted-foreground">{industry.description}</p>
            </AiqenCard>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/industries"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}
          >
            Explore all {industries.length} industries <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
