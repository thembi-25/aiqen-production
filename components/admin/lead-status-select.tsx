"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { updateLeadStatusAction } from "@/app/actions/admin";
import { Select } from "@/components/ui/select";

const STATUSES = ["new", "contacted", "qualified", "converted", "disqualified"];

export function LeadStatusSelect({ leadId, status }: { leadId: string; status: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleChange(next: string) {
    startTransition(async () => {
      await updateLeadStatusAction(leadId, next);
      router.refresh();
    });
  }

  return (
    <Select
      value={status}
      disabled={isPending}
      onChange={(e) => handleChange(e.target.value)}
      className="h-9 w-fit"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </Select>
  );
}
