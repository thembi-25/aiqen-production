import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { IconTile } from "@/components/shared/icon-tile";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { AiqenBadge } from "@/components/ui/aiqen-badge";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { solutions } from "@/lib/data/solutions";
import { cn } from "@/lib/utils";

const [featured, ...rest] = solutions.slice(0, 6);

export function Solutions() {
  return (
    <Section id="solutions">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <AiqenBadge className="mx-auto">Solutions</AiqenBadge>
          <Heading>AI solutions designed around real business problems</Heading>
          <Text size="lg" className="mx-auto">
            AIQEN combines strategy, automation, and intelligent systems to help businesses
            operate more efficiently.
          </Text>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 lg:grid-flow-dense lg:grid-cols-3">
          <RevealItem className="lg:col-span-2 lg:row-span-2">
            <AiqenCard variant="featured" className="flex h-full flex-col justify-between p-8">
              <div>
                <IconTile icon={featured.icon} size="lg" />
                <h3 className="mt-6 text-2xl font-semibold text-foreground">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">{featured.description}</p>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {featured.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2 rounded-lg border border-border/60 bg-background/40 p-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </AiqenCard>
          </RevealItem>

          {rest.map((solution) => (
            <RevealItem key={solution.slug}>
              <AiqenCard variant="interactive" className="h-full p-5">
                <IconTile icon={solution.icon} size="sm" />
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{solution.description}</p>
              </AiqenCard>
            </RevealItem>
          ))}
        </RevealStagger>

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
