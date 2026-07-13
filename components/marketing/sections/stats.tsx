import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

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
        <div className="grid grid-cols-2 gap-8 border-y border-border py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6 text-center">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Trusted by forward-thinking teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
