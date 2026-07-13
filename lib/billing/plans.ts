import "server-only";

export type PlanId = "starter" | "team" | "business";

export interface BillingPlan {
  id: PlanId;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export const billingPlans: BillingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Deploy your first AI employee and see what the workforce can do.",
    features: ["1 AI employee", "500 tasks / month", "Email support", "Core integrations"],
    highlighted: false,
  },
  {
    id: "team",
    name: "Team",
    price: "$299",
    period: "/month",
    description: "For teams running multiple AI employees across departments.",
    features: [
      "Up to 5 AI employees",
      "5,000 tasks / month",
      "Priority support",
      "All integrations",
      "Workflow automation builder",
    ],
    highlighted: true,
  },
  {
    id: "business",
    name: "Business",
    price: "$799",
    period: "/month",
    description: "For organizations scaling AI employees across the whole business.",
    features: [
      "Unlimited AI employees",
      "Unlimited tasks",
      "Dedicated support",
      "All integrations",
      "Advanced analytics",
      "Multiple workspace members",
    ],
    highlighted: false,
  },
];

export function getBillingPlans() {
  return billingPlans;
}

export function getBillingPlanById(id: PlanId) {
  return billingPlans.find((plan) => plan.id === id);
}

export function getStripePriceId(id: PlanId): string | undefined {
  switch (id) {
    case "starter":
      return process.env.STRIPE_PRICE_STARTER;
    case "team":
      return process.env.STRIPE_PRICE_TEAM;
    case "business":
      return process.env.STRIPE_PRICE_BUSINESS;
  }
}
