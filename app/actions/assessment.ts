"use server";

import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { scoreAssessment, type AssessmentInput, type AssessmentResult } from "@/lib/assessment/scoring";
import { sendAssessmentReportEmail } from "@/lib/email/templates";

export interface AssessmentSubmission {
  result: AssessmentResult;
  leadId: string;
}

export async function submitAssessmentAction(
  input: AssessmentInput
): Promise<AssessmentSubmission> {
  const result = scoreAssessment(input);

  const [lead] = await db
    .insert(leads)
    .values({
      name: input.name,
      email: input.email,
      company: input.company,
      source: "assessment",
      status: "new",
      score: result.opportunityScore,
      answers: JSON.stringify(input),
    })
    .returning({ id: leads.id });

  try {
    await sendAssessmentReportEmail(input.email, input.name, result, lead.id);
  } catch {
    // Email delivery is best-effort — the assessment result still displays without it.
  }

  return { result, leadId: lead.id };
}
