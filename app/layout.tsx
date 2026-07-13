import "./globals.css";
import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import { SessionProvider } from "@/components/providers/session-provider";
import { ImpersonationBanner } from "@/components/admin/impersonation-banner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const siteUrl = "https://aiqen.com";
const siteName = "AIQEN";
const siteDescription =
  "AIQEN is an AI consulting and automation agency helping businesses deploy AI agents, automate workflows, and build their AI workforce.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AIQEN — AI Consulting & Automation Agency",
    template: "%s",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    title: "AIQEN — AI Consulting & Automation Agency",
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "AIQEN — AI Consulting & Automation Agency",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable, instrumentSerif.variable)}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to main content
        </a>
        <SessionProvider>
          <ImpersonationBanner />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
