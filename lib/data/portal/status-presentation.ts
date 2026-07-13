import type { StatusTone } from "@/components/dashboard/status-badge";
import type { ProjectStatus, AutomationStatus } from "@/lib/data/portal/projects";
import type { TicketStatus, TicketPriority } from "@/lib/data/portal/tickets";
import type { InvoiceStatus } from "@/lib/data/portal/invoices";
import type { RoadmapStage } from "@/lib/data/portal/roadmap";

function present(tone: StatusTone, label: string) {
  return { tone, label };
}

export function projectStatusToneAndLabel(status: ProjectStatus) {
  switch (status) {
    case "active":
      return present("success", "Active");
    case "paused":
      return present("warning", "Paused");
    case "completed":
      return present("neutral", "Completed");
  }
}

export function automationToneAndLabel(status: AutomationStatus) {
  switch (status) {
    case "planning":
      return present("neutral", "Planning");
    case "building":
      return present("progress", "Building");
    case "live":
      return present("success", "Live");
    case "monitoring":
      return present("info", "Monitoring");
  }
}

export function ticketStatusToneAndLabel(status: TicketStatus) {
  switch (status) {
    case "open":
      return present("danger", "Open");
    case "pending":
      return present("warning", "Pending");
    case "closed":
      return present("neutral", "Closed");
  }
}

export function ticketPriorityToneAndLabel(priority: TicketPriority) {
  switch (priority) {
    case "high":
      return present("danger", "High priority");
    case "medium":
      return present("warning", "Medium priority");
    case "low":
      return present("neutral", "Low priority");
  }
}

export function invoiceStatusToneAndLabel(status: InvoiceStatus) {
  switch (status) {
    case "paid":
      return present("success", "Paid");
    case "due":
      return present("info", "Due");
    case "overdue":
      return present("danger", "Overdue");
  }
}

export function roadmapStageToneAndLabel(stage: RoadmapStage) {
  switch (stage) {
    case "planned":
      return present("neutral", "Planned");
    case "in-progress":
      return present("progress", "In Progress");
    case "shipped":
      return present("success", "Shipped");
  }
}
