import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { consumeVerificationToken } from "@/lib/auth/tokens";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const email = request.nextUrl.searchParams.get("email");

  if (!token || !email) {
    return NextResponse.redirect(new URL("/sign-in?error=invalid-token", request.url));
  }

  const isValid = await consumeVerificationToken(email, token);

  if (!isValid) {
    return NextResponse.redirect(new URL("/sign-in?error=invalid-token", request.url));
  }

  await db.update(users).set({ emailVerified: new Date() }).where(eq(users.email, email));

  return NextResponse.redirect(new URL("/sign-in?verified=1", request.url));
}
