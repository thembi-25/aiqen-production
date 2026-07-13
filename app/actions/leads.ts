"use server";

import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";

export interface RoiLeadInput {
  name: string;
  email: string;
  company: string;
  inputs: Record<string, number>;
  results: Record<string, number>;
}

export async function submitRoiLeadAction(input: RoiLeadInput): Promise<{ success: boolean }> {
  await db.insert(leads).values({
    name: input.name,
    email: input.email,
    company: input.company,
    source: "roi-calculator",
    status: "new",
    score: null,
    answers: JSON.stringify({ inputs: input.inputs, results: input.results }),
  });

  return { success: true };
}
