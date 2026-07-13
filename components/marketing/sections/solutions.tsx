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
import { solutions } from "@/lib/data/solutions";
import { cn } from "@/lib/utils";

const featured = solutions.slice(0, 6);

export function Solutions() {
  return (
    <Section id="solutions">
      <Container>
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Solutions</AiqenBadge>
          <Heading>AI solutions designed around real business problems</Heading>
          <Text size="lg" className="mx-auto">
            AIQEN combines strategy, automation, and intelligent systems to help businesses
            operate more efficiently.
          </Text>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((solution) => (
            <AiqenCard
              key={solution.slug}
              className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <IconTile icon={solution.icon} />
              <h3 className="mt-5 text-xl font-semibold text-foreground">{solution.title}</h3>
              <p className="mt-3 text-muted-foreground">{solution.description}</p>
            </AiqenCard>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/solutions"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}
          >
            Explore all {solutions.length} solutions <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
