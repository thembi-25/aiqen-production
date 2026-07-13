import type { Metadata } from "next";

import { getDeployedEmployees, getAvailableCatalogSlugs } from "@/lib/data/workforce/employees";
import { aiWorkforce } from "@/lib/data/ai-workforce";
import { PageHeader } from "@/components/dashboard/page-header";
import { EmployeesView } from "@/components/workforce/employees-view";

export const metadata: Metadata = {
  title: "AI Employees — AI Workforce",
};

export default function EmployeesPage() {
  const deployed = getDeployedEmployees();
  const availableSlugs = getAvailableCatalogSlugs(aiWorkforce.map((role) => role.slug));

  return (
    <div>
      <PageHeader
        title="AI Employees"
        description="Deploy and manage the AI employees working for Acme Robotics."
      />
      <EmployeesView deployed={deployed} availableSlugs={availableSlugs} />
    </div>
  );
}
