import {
  LayoutDashboard,
  FolderKanban,
  Ticket,
  MessageSquare,
  Receipt,
  FileText,
  NotebookPen,
  BookOpen,
  Map,
  Users,
  Bell,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/tickets", label: "Tickets", icon: Ticket },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/invoices", label: "Invoices", icon: Receipt },
  { href: "/dashboard/documents", label: "Documents", icon: FileText },
  { href: "/dashboard/meeting-notes", label: "Meeting Notes", icon: NotebookPen },
  { href: "/dashboard/knowledge-base", label: "Knowledge Base", icon: BookOpen },
  { href: "/dashboard/roadmap", label: "Roadmap", icon: Map },
  { href: "/dashboard/team", label: "Team", icon: Users },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];
