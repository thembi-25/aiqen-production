import { Readable } from "node:stream";

import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { renderToStream } from "@react-pdf/renderer";

import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { scoreAssessment, type AssessmentInput } from "@/lib/assessment/scoring";
import { AssessmentPdfReport } from "@/components/assessment/pdf-report";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const [lead] = await db.select().from(leads).where(eq(leads.id, id)).limit(1);

  if (!lead || !lead.answers) {
    return NextResponse.json({ error: "Report not found" }, { status: 404 });
  }

  const input: AssessmentInput = JSON.parse(lead.answers);
  const result = scoreAssessment(input);

  const stream = await renderToStream(
    <AssessmentPdfReport input={input} result={result} />
  );

  return new NextResponse(Readable.toWeb(stream as Readable) as ReadableStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="aiqen-assessment-${lead.company.toLowerCase().replace(/\s+/g, "-")}.pdf"`,
    },
  });
}
