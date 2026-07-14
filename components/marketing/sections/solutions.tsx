import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { solutions } from "@/lib/data/solutions";
import { cn } from "@/lib/utils";

const [featured, ...rest] = solutions.slice(0, 6);

export function Solutions() {
  return (
    <Section id="solutions" className="border-t border-border">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
          <Eyebrow className="mx-auto">Solutions</Eyebrow>
          <Heading>AI solutions designed around real business problems</Heading>
          <Text size="lg" className="mx-auto">
            AIQEN combines strategy, automation, and intelligent systems to help businesses
            operate more efficiently.
          </Text>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-flow-dense lg:grid-cols-3">
          <RevealItem className="bg-background p-8 lg:col-span-2 lg:row-span-2">
            <featured.icon className="size-6 text-muted-foreground" />
            <h3 className="mt-5 text-2xl font-semibold text-foreground">{featured.title}</h3>
            <p className="mt-3 max-w-md text-muted-foreground">{featured.description}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {featured.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary-text" />
                  {outcome}
                </li>
              ))}
            </ul>
          </RevealItem>

          {rest.map((solution) => (
            <RevealItem key={solution.slug} className="bg-background p-6">
              <solution.icon className="size-5 text-muted-foreground" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{solution.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{solution.description}</p>
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
