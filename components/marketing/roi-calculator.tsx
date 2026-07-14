"use client";

import { useMemo, useState } from "react";
import { useActionState } from "react";

import { submitRoiLeadAction } from "@/app/actions/leads";
import { AppFrame } from "@/components/shared/app-frame";
import { Stat } from "@/components/shared/stat";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormMessage } from "@/components/auth/form-message";

const HOURS_PER_MONTH = 4.33;
const AUTOMATABLE_SHARE = 0.7;
const REVENUE_CONVERSION_SHARE = 0.5;
const WORK_HOURS_PER_WEEK = 40;

function computeResults(teamSize: number, hoursPerWeek: number, hourlyCost: number, monthlyRevenue: number) {
  const hoursSavedPerWeek = teamSize * hoursPerWeek * AUTOMATABLE_SHARE;
  const costReductionPerMonth = hoursSavedPerWeek * HOURS_PER_MONTH * hourlyCost;
  const productivityGainPercent =
    teamSize > 0 ? (hoursSavedPerWeek / (teamSize * WORK_HOURS_PER_WEEK)) * 100 : 0;
  const revenueIncreasePerMonth = monthlyRevenue * (productivityGainPercent / 100) * REVENUE_CONVERSION_SHARE;

  return {
    hoursSavedPerWeek: Math.round(hoursSavedPerWeek),
    costReductionPerMonth: Math.round(costReductionPerMonth),
    productivityGainPercent: Math.round(productivityGainPercent),
    revenueIncreasePerMonth: Math.round(revenueIncreasePerMonth),
  };
}

type LeadFormState = { error?: string; success?: string } | undefined;

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyCost, setHourlyCost] = useState(35);
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);

  const results = useMemo(
    () => computeResults(teamSize, hoursPerWeek, hourlyCost, monthlyRevenue),
    [teamSize, hoursPerWeek, hourlyCost, monthlyRevenue]
  );

  async function handleEmailResults(prevState: LeadFormState, formData: FormData): Promise<LeadFormState> {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();

    if (!name || !email || !company) {
      return { error: "Please fill in your name, email, and company." };
    }

    try {
      await submitRoiLeadAction({
        name,
        email,
        company,
        inputs: { teamSize, hoursPerWeek, hourlyCost, monthlyRevenue },
        results,
      });
      return { success: "Saved! Our team will follow up with a tailored recommendation." };
    } catch {
      return { error: "Something went wrong. Please try again." };
    }
  }

  const [leadState, leadAction, isLeadPending] = useActionState<LeadFormState, FormData>(
    handleEmailResults,
    undefined
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <AppFrame title="Your Inputs">
        <div className="space-y-6 p-6">
          <div>
            <Label htmlFor="teamSize">Team size doing manual work</Label>
            <Input
              id="teamSize"
              type="number"
              min={1}
              value={teamSize}
              onChange={(e) => setTeamSize(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div>
            <Label htmlFor="hoursPerWeek">Hours per person spent on repetitive tasks / week</Label>
            <Input
              id="hoursPerWeek"
              type="number"
              min={0}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div>
            <Label htmlFor="hourlyCost">Average loaded hourly cost ($)</Label>
            <Input
              id="hourlyCost"
              type="number"
              min={0}
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Math.max(0, Number(e.target.value)))}
            />
          </div>
          <div>
            <Label htmlFor="monthlyRevenue">Current monthly revenue ($, optional)</Label>
            <Input
              id="monthlyRevenue"
              type="number"
              min={0}
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Math.max(0, Number(e.target.value)))}
            />
          </div>
        </div>
      </AppFrame>

      <div className="space-y-6">
        <AppFrame title="Estimated Impact">
          <div className="grid grid-cols-2 gap-6 p-6">
            <Stat value={`${results.hoursSavedPerWeek}`} label="Hours saved / week" />
            <Stat
              value={`$${results.costReductionPerMonth.toLocaleString()}`}
              label="Cost reduction / month"
            />
            <Stat value={`${results.productivityGainPercent}%`} label="Productivity gain" />
            <Stat
              value={`$${results.revenueIncreasePerMonth.toLocaleString()}`}
              label="Revenue increase / month"
            />
          </div>
        </AppFrame>

        <AppFrame title="Email Me These Results">
          <form action={leadAction} className="space-y-3 p-6">
            <Input name="name" placeholder="Your name" required />
            <Input name="email" type="email" placeholder="Work email" required />
            <Input name="company" placeholder="Company name" required />
            <FormMessage error={leadState?.error} success={leadState?.success} />
            <Button type="submit" disabled={isLeadPending} className="h-10 w-full">
              {isLeadPending ? "Sending..." : "Send my results"}
            </Button>
          </form>
        </AppFrame>
      </div>
    </div>
  );
}
