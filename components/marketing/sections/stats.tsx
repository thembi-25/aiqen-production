import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/shared/reveal";

const stats = [
  { value: "40+", label: "AI systems deployed" },
  { value: "1.2M+", label: "Manual hours automated" },
  { value: "98%", label: "Client retention rate" },
  { value: "24/7", label: "AI workforce uptime" },
];

const trustedBy = [
  "Northbridge Logistics",
  "Harborview Legal Group",
  "Clearpath Retail",
  "Vantage Point Realty",
  "Ledger & Co.",
];

export function Stats() {
  return (
    <Section className="border-y border-border py-14 md:py-16">
      <Container>
        <RevealStagger className="grid grid-cols-2 divide-x divide-y divide-border border border-border md:grid-cols-4 md:divide-y-0">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="px-6 py-6 text-center md:py-8"
            >
              <p className="text-3xl font-semibold tracking-tight text-foreground tabular-nums md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-5 text-center">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Trusted by forward-thinking teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
