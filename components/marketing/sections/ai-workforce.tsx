import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { AppFrame } from "@/components/shared/app-frame";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { cn } from "@/lib/utils";

// Relative bar lengths for the console preview — illustrative UI chrome, not a claimed metric.
const workload = [72, 58, 84, 45];

export function AIWorkforce() {
  const featured = aiWorkforce.slice(0, 4);

  return (
    <Section id="ai-workforce" className="border-t border-border">
      <Container>
        <Reveal className="max-w-2xl space-y-4">
          <Eyebrow>AI Workforce</Eyebrow>
          <Heading>Your future AI workforce</Heading>
          <Text size="lg">
            AIQEN is building a platform where businesses can deploy
            intelligent AI workers designed for sales, support, operations,
            and automation.
          </Text>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealStagger className="divide-y divide-border border-t border-border">
            {featured.map((agent) => (
              <RevealItem key={agent.slug} className="flex items-start gap-4 py-5">
                <agent.icon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                <div>
                  <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {agent.role}
                  </span>
                  <h3 className="mt-0.5 text-base font-semibold text-foreground">{agent.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{agent.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.15}>
            <AppFrame title="Workforce Console">
              <div className="space-y-4 p-5">
                {featured.map((agent, index) => (
                  <div key={agent.slug} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">{agent.title}</span>
                      <span className="text-muted-foreground">{agent.role}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${workload[index]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border px-5 py-4">
                <Link
                  href="/ai-workforce"
                  className="flex items-center justify-between text-sm font-medium text-primary-text"
                >
                  Open the full workforce console
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </AppFrame>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/ai-workforce"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6")}
          >
            Meet the full AI workforce
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
