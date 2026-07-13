import type { StatusTone } from "@/components/dashboard/status-badge";

export type LeadStatus = "new" | "contacted" | "qualified" | "converted" | "disqualified";

function present(tone: StatusTone, label: string) {
  return { tone, label };
}

export function leadStatusToneAndLabel(status: string) {
  switch (status as LeadStatus) {
    case "new":
      return present("info", "New");
    case "contacted":
      return present("progress", "Contacted");
    case "qualified":
      return present("warning", "Qualified");
    case "converted":
      return present("success", "Converted");
    case "disqualified":
      return present("neutral", "Disqualified");
    default:
      return present("neutral", status);
  }
}
