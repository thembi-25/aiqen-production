import Link from "next/link";
import { Mail, X as XIcon } from "lucide-react";

import { Container } from "@/components/shared/container";
import { NewsletterForm } from "@/components/marketing/newsletter-form";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/services", label: "Services" },
      { href: "/solutions", label: "Solutions" },
      { href: "/industries", label: "Industries" },
      { href: "/ai-workforce", label: "AI Workforce" },
      { href: "/pricing", label: "Pricing" },
      { href: "/integrations", label: "Integrations" },
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/assessment", label: "AI Business Assessment" },
      { href: "/roi-calculator", label: "ROI Calculator" },
      { href: "/resources", label: "Resources" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              AIQEN
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              AI Consulting &amp; Automation for businesses ready to build a real AI workforce.
            </p>

            <div className="pt-2">
              <p className="mb-2 text-xs font-medium tracking-wide text-foreground uppercase">
                Get AI strategy &amp; automation insights
              </p>
              <NewsletterForm />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AIQEN on X"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground outline-none transition-colors hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <XIcon className="size-4" />
              </a>
              <a
                href="mailto:hello@aiqen.com"
                aria-label="Email AIQEN"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground outline-none transition-colors hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} AIQEN. AI Consulting &amp; Automation.</p>
          <p>hello@aiqen.com</p>
        </div>
      </Container>
    </footer>
  );
}
