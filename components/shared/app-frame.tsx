import { cn } from "@/lib/utils";

interface AppFrameProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  eyebrow?: string;
}

/**
 * Browser/app-chrome wrapper used to present product-preview mockups
 * (AI Workforce, Client Portal, Business Assessment, etc.) as if they were
 * a real software interface, without gradients, glow, or glassmorphism.
 */
export function AppFrame({ children, className, title, eyebrow }: AppFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevation-2)]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        {title && (
          <div className="flex-1 text-center">
            <span className="rounded-md bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {title}
            </span>
          </div>
        )}
        {eyebrow && (
          <span className="ml-auto text-xs font-medium text-muted-foreground">{eyebrow}</span>
        )}
      </div>
      {children}
    </div>
  );
}
