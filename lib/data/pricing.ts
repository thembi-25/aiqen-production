export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Startup",
    price: "$2,500",
    period: "/month",
    description: "For small teams starting their AI automation journey.",
    features: [
      "1 AI workflow automation",
      "Up to 2 integrations",
      "Email & chat support",
      "Monthly performance review",
      "Standard onboarding",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$6,500",
    period: "/month",
    description: "For growing businesses ready to scale AI across teams.",
    features: [
      "Up to 5 AI workflow automations",
      "Unlimited integrations",
      "1 dedicated AI agent (SDR, Support, or Ops)",
      "Priority support with Slack channel",
      "Quarterly strategy sessions",
      "Custom onboarding & training",
    ],
    cta: "Book a Consultation",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations deploying AI across the entire business.",
    features: [
      "Unlimited AI workflow automations",
      "Full AI workforce deployment",
      "Dedicated solutions architect",
      "Custom security & compliance review",
      "SLA-backed support",
      "Executive strategy partnership",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];
