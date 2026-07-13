import Link from "next/link";

import { aiWorkforce } from "@/lib/data/ai-workforce";

export function WorkforceOrgChart() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary-text">
        Your Business
      </div>

      <div className="h-8 w-px bg-border" />

      <div className="relative w-full">
        <div className="absolute inset-x-[8%] top-0 hidden h-px bg-border lg:block" />

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {aiWorkforce.map((employee) => (
            <div key={employee.slug} className="flex flex-col items-center">
              <div className="h-6 w-px bg-border lg:block" />

              <Link
                href={`/ai-workforce/${employee.slug}`}
                className="group flex w-full flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/50"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary-text transition-colors group-hover:bg-primary/20">
                  <employee.icon className="size-6" />
                </div>
                <span className="text-xs font-medium tracking-wide text-accent uppercase">
                  {employee.role}
                </span>
                <span className="text-sm font-semibold text-foreground">{employee.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
