export type CompanySize = "1-10" | "11-50" | "51-200" | "201-1000" | "1000+";
export type InteractionVolume = "under-50" | "50-200" | "200-500" | "500+";
export type PrimaryGoal =
  | "revenue-growth"
  | "cost-reduction"
  | "customer-experience"
  | "operational-efficiency";

export interface PainPointOption {
  id: string;
  label: string;
  serviceSlug: string;
  workforceSlug: string;
}

export const painPointOptions: PainPointOption[] = [
  {
    id: "slow-lead-response",
    label: "Leads don't get a response fast enough",
    serviceSlug: "sales-automation",
    workforceSlug: "sdr",
  },
  {
    id: "manual-data-entry",
    label: "Too much manual data entry across systems",
    serviceSlug: "workflow-automation",
    workforceSlug: "operations-manager",
  },
  {
    id: "high-support-volume",
    label: "Customer support volume is hard to keep up with",
    serviceSlug: "customer-support-ai",
    workforceSlug: "support-agent",
  },
  {
    id: "inconsistent-reporting",
    label: "Reporting is inconsistent or manually compiled",
    serviceSlug: "internal-ai-tools",
    workforceSlug: "data-analyst",
  },
  {
    id: "scheduling-overhead",
    label: "Too much time spent on scheduling and calls",
    serviceSlug: "voice-ai",
    workforceSlug: "receptionist",
  },
  {
    id: "disconnected-tools",
    label: "Our tools don't talk to each other",
    serviceSlug: "crm-automation",
    workforceSlug: "operations-manager",
  },
  {
    id: "content-bottleneck",
    label: "Marketing content production is a bottleneck",
    serviceSlug: "ai-consulting",
    workforceSlug: "marketing-assistant",
  },
  {
    id: "onboarding-overhead",
    label: "Onboarding and HR admin takes too long",
    serviceSlug: "workflow-automation",
    workforceSlug: "hr-assistant",
  },
  {
    id: "exec-admin-overhead",
    label: "Leadership is buried in scheduling and inbox admin",
    serviceSlug: "ai-agents",
    workforceSlug: "executive-assistant",
  },
];

export interface AssessmentInput {
  name: string;
  email: string;
  company: string;
  companySize: CompanySize;
  industry: string;
  painPoints: string[];
  primaryGoal: PrimaryGoal;
  usesCrm: boolean;
  weeklyInteractions: InteractionVolume;
}

export interface AssessmentResult {
  automationReadiness: number;
  aiReadiness: number;
  opportunityScore: number;
  estimatedHoursSavedPerWeek: number;
  estimatedMonthlySavings: number;
  recommendedServices: string[];
  recommendedWorkforce: string[];
  recommendedPlan: "Startup" | "Growth" | "Enterprise";
}

const companySizeScore: Record<CompanySize, number> = {
  "1-10": 5,
  "11-50": 10,
  "51-200": 15,
  "201-1000": 20,
  "1000+": 25,
};

const interactionVolumeScore: Record<InteractionVolume, number> = {
  "under-50": 5,
  "50-200": 10,
  "200-500": 15,
  "500+": 20,
};

const interactionVolumeMultiplier: Record<InteractionVolume, number> = {
  "under-50": 1,
  "50-200": 1.5,
  "200-500": 2,
  "500+": 3,
};

const planByCompanySize: Record<CompanySize, AssessmentResult["recommendedPlan"]> = {
  "1-10": "Startup",
  "11-50": "Startup",
  "51-200": "Growth",
  "201-1000": "Growth",
  "1000+": "Enterprise",
};

const ASSUMED_HOURLY_COST = 35;
const HOURS_PER_PAIN_POINT = 3;

export function scoreAssessment(input: AssessmentInput): AssessmentResult {
  const selected = painPointOptions.filter((option) => input.painPoints.includes(option.id));

  const opportunityScore = Math.min(100, Math.round(20 + selected.length * 8));

  const automationReadiness = Math.min(
    100,
    Math.round(
      40 +
        (input.usesCrm ? 25 : 0) +
        companySizeScore[input.companySize] +
        interactionVolumeScore[input.weeklyInteractions]
    )
  );

  const aiReadiness = Math.round((automationReadiness + opportunityScore) / 2);

  const estimatedHoursSavedPerWeek = Math.round(
    selected.length * HOURS_PER_PAIN_POINT * interactionVolumeMultiplier[input.weeklyInteractions]
  );

  const estimatedMonthlySavings = Math.round(
    estimatedHoursSavedPerWeek * 4.33 * ASSUMED_HOURLY_COST
  );

  const recommendedServices = Array.from(
    new Set(selected.map((option) => option.serviceSlug))
  ).slice(0, 3);

  const recommendedWorkforce = Array.from(
    new Set(selected.map((option) => option.workforceSlug))
  ).slice(0, 4);

  return {
    automationReadiness,
    aiReadiness,
    opportunityScore,
    estimatedHoursSavedPerWeek,
    estimatedMonthlySavings,
    recommendedServices,
    recommendedWorkforce,
    recommendedPlan: planByCompanySize[input.companySize],
  };
}
