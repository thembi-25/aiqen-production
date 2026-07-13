"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Download, Loader2 } from "lucide-react";

import { submitAssessmentAction } from "@/app/actions/assessment";
import {
  painPointOptions,
  type AssessmentInput,
  type AssessmentResult,
  type CompanySize,
  type InteractionVolume,
  type PrimaryGoal,
} from "@/lib/assessment/scoring";
import { industries } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { AiqenCard } from "@/components/ui/aiqen-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  industry: string;
  companySize: CompanySize | "";
  painPoints: string[];
  primaryGoal: PrimaryGoal | "";
  usesCrm: "yes" | "no" | "";
  weeklyInteractions: InteractionVolume | "";
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  industry: "",
  companySize: "",
  painPoints: [],
  primaryGoal: "",
  usesCrm: "",
  weeklyInteractions: "",
};

const goalLabels: Record<PrimaryGoal, string> = {
  "revenue-growth": "Grow revenue",
  "cost-reduction": "Reduce operating costs",
  "customer-experience": "Improve customer experience",
  "operational-efficiency": "Improve operational efficiency",
};

const TOTAL_STEPS = 3;

export function AssessmentWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submission, setSubmission] = useState<{
    result: AssessmentResult;
    leadId: string;
  } | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function togglePainPoint(id: string) {
    setForm((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(id)
        ? prev.painPoints.filter((p) => p !== id)
        : [...prev.painPoints, id],
    }));
  }

  const step1Valid = form.name.trim() && form.email.trim() && form.company.trim() && form.industry && form.companySize;
  const step2Valid = form.painPoints.length > 0;
  const step3Valid = form.primaryGoal && form.usesCrm && form.weeklyInteractions;

  async function handleSubmit() {
    if (!step1Valid || !step2Valid || !step3Valid) return;

    setIsSubmitting(true);
    setError(null);

    const input: AssessmentInput = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      industry: form.industry,
      companySize: form.companySize as CompanySize,
      painPoints: form.painPoints,
      primaryGoal: form.primaryGoal as PrimaryGoal,
      usesCrm: form.usesCrm === "yes",
      weeklyInteractions: form.weeklyInteractions as InteractionVolume,
    };

    try {
      const submitted = await submitAssessmentAction(input);
      setSubmission(submitted);
    } catch {
      setError("Something went wrong submitting your assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submission) {
    return <AssessmentResults result={submission.result} leadId={submission.leadId} name={form.name} />;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center gap-2" role="group" aria-label="Progress">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              i + 1 <= step ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>

      <AiqenCard>
        {step === 1 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-foreground">Tell us about your business</h2>
            <div>
              <Label htmlFor="name">Your name</Label>
              <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company name</Label>
              <Input
                id="company"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="industry">Industry</Label>
              <Select
                id="industry"
                value={form.industry}
                onChange={(e) => update("industry", e.target.value)}
              >
                <option value="">Select an industry</option>
                {industries.map((industry) => (
                  <option key={industry.slug} value={industry.slug}>
                    {industry.title}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="companySize">Company size</Label>
              <Select
                id="companySize"
                value={form.companySize}
                onChange={(e) => update("companySize", e.target.value as CompanySize)}
              >
                <option value="">Select a range</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </Select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-foreground">
              What&apos;s slowing your team down?
            </h2>
            <p className="text-sm text-muted-foreground">Select everything that applies.</p>
            <div className="space-y-2">
              {painPointOptions.map((option) => {
                const checked = form.painPoints.includes(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => togglePainPoint(option.id)}
                    aria-pressed={checked}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      checked
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-md border",
                        checked ? "border-primary bg-primary text-primary-foreground" : "border-border"
                      )}
                    >
                      {checked && <Check className="size-3.5" />}
                    </span>
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-foreground">A few final questions</h2>
            <div>
              <Label htmlFor="primaryGoal">Primary goal</Label>
              <Select
                id="primaryGoal"
                value={form.primaryGoal}
                onChange={(e) => update("primaryGoal", e.target.value as PrimaryGoal)}
              >
                <option value="">Select a goal</option>
                {Object.entries(goalLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="usesCrm">Do you use a CRM today?</Label>
              <Select
                id="usesCrm"
                value={form.usesCrm}
                onChange={(e) => update("usesCrm", e.target.value as "yes" | "no")}
              >
                <option value="">Select an answer</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="weeklyInteractions">Weekly customer interactions</Label>
              <Select
                id="weeklyInteractions"
                value={form.weeklyInteractions}
                onChange={(e) => update("weeklyInteractions", e.target.value as InteractionVolume)}
              >
                <option value="">Select a range</option>
                <option value="under-50">Under 50</option>
                <option value="50-200">50-200</option>
                <option value="200-500">200-500</option>
                <option value="500+">500+</option>
              </Select>
            </div>
          </div>
        )}

        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

        <div className="mt-8 flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="h-10 px-4"
          >
            <ArrowLeft className="size-4" /> Back
          </Button>

          {step < TOTAL_STEPS ? (
            <Button
              type="button"
              onClick={() => setStep((s) => Math.min(TOTAL_STEPS, s + 1))}
              disabled={(step === 1 && !step1Valid) || (step === 2 && !step2Valid)}
              className="h-10 px-4"
            >
              Next <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!step3Valid || isSubmitting}
              className="h-10 px-4"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Scoring...
                </>
              ) : (
                <>Get My Results</>
              )}
            </Button>
          )}
        </div>
      </AiqenCard>
    </div>
  );
}

function ScoreTile({ label, value }: { label: string; value: number }) {
  return (
    <AiqenCard className="text-center">
      <div className="text-3xl font-bold text-primary-text">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </AiqenCard>
  );
}

function AssessmentResults({
  result,
  leadId,
  name,
}: {
  result: AssessmentResult;
  leadId: string;
  name: string;
}) {
  const recommendedServices = result.recommendedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const recommendedWorkforce = result.recommendedWorkforce
    .map((slug) => aiWorkforce.find((e) => e.slug === slug))
    .filter((e): e is (typeof aiWorkforce)[number] => Boolean(e));

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">
          {name.split(" ")[0] || "Your"}, here&apos;s where you stand
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ve also emailed a copy of this report to you.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <ScoreTile label="Automation Readiness" value={result.automationReadiness} />
        <ScoreTile label="AI Readiness" value={result.aiReadiness} />
        <ScoreTile label="Opportunity Score" value={result.opportunityScore} />
      </div>

      <AiqenCard>
        <h3 className="text-sm font-semibold tracking-wide text-primary-text uppercase">
          Estimated impact
        </h3>
        <p className="mt-3 text-lg text-foreground">
          ~{result.estimatedHoursSavedPerWeek} hours saved per week · ~$
          {result.estimatedMonthlySavings.toLocaleString()} estimated monthly savings
        </p>
      </AiqenCard>

      <div className="grid gap-6 sm:grid-cols-2">
        <AiqenCard>
          <h3 className="text-sm font-semibold tracking-wide text-primary-text uppercase">
            Recommended services
          </h3>
          <ul className="mt-4 space-y-2">
            {recommendedServices.map((service) => (
              <li key={service.slug} className="flex items-center gap-2 text-sm text-muted-foreground">
                <service.icon className="size-4 text-primary" />
                <Link href={`/services#${service.slug}`} className="hover:text-foreground">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </AiqenCard>

        <AiqenCard>
          <h3 className="text-sm font-semibold tracking-wide text-primary-text uppercase">
            Recommended AI workforce
          </h3>
          <ul className="mt-4 space-y-2">
            {recommendedWorkforce.map((employee) => (
              <li key={employee.slug} className="flex items-center gap-2 text-sm text-muted-foreground">
                <employee.icon className="size-4 text-primary" />
                <Link href={`/ai-workforce/${employee.slug}`} className="hover:text-foreground">
                  {employee.title}
                </Link>
              </li>
            ))}
          </ul>
        </AiqenCard>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={`/api/assessment/pdf/${leadId}`}
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80"
        >
          <Download className="size-4" /> Download PDF report
        </a>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Book a call to discuss <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
