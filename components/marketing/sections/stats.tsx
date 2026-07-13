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
    <Section className="py-16 md:py-20">
      <Container>
        <RevealStagger className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 shadow-[var(--shadow-elevation-1)] md:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="bg-card px-4 py-8 text-center md:py-10"
            >
              <p className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent tabular-nums md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.15} className="mt-12 space-y-6 text-center">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Trusted by forward-thinking teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground"
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
