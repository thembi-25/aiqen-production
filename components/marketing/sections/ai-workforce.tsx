import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Text } from "@/components/shared/text";
import { Section } from "@/components/shared/section";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { buttonVariants } from "@/components/ui/button";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { cn } from "@/lib/utils";

export function AIWorkforce() {

  return (
    <Section className="bg-card">

      <Container>

        <div className="space-y-6">


          <Heading>
            Your Future AI Workforce
          </Heading>


          <Text size="lg">
            AIQEN is building a platform where businesses
            can deploy intelligent AI workers designed for
            sales, support, operations, and automation.
          </Text>



          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {aiWorkforce.slice(0, 4).map((agent) => (

              <AiqenCard
                key={agent.slug}
                className="transition-transform duration-300 hover:-translate-y-1"
              >

                <agent.icon className="size-7 text-primary" />

                <span className="mt-4 block text-xs font-medium tracking-wide text-accent uppercase">
                  {agent.role}
                </span>

                <h3 className="mt-1 text-lg font-semibold">
                  {agent.title}
                </h3>


                <p className="mt-3 text-sm text-muted-foreground">
                  {agent.description}
                </p>

              </AiqenCard>

            ))}

          </div>

          <div className="pt-2">
            <Link
              href="/ai-workforce"
              className={cn(buttonVariants({ variant: "outline" }), "h-11 px-6")}
            >
              Meet the full AI workforce
            </Link>
          </div>


        </div>


      </Container>

    </Section>
  );
}
