import { NextResponse } from "next/server";

import { auth } from "@/auth";

const protectedPrefixes = ["/dashboard", "/workforce"];
const authPrefixes = ["/sign-in", "/sign-up"];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isProtected = protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
  const isAuthPage = authPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (isProtected && !req.auth) {
    const signInUrl = new URL("/sign-in", req.nextUrl.origin);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  if (isAuthPage && req.auth) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/workforce/:path*", "/sign-in", "/sign-up"],
};
