import {
  LayoutDashboard,
  Bot,
  MessagesSquare,
  ListTodo,
  Contact,
  Workflow,
  BookOpen,
  FileText,
  BarChart3,
  Blocks,
  CreditCard,
  Building2,
  KeyRound,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: "/workforce", label: "Dashboard", icon: LayoutDashboard },
  { href: "/workforce/employees", label: "AI Employees", icon: Bot },
  { href: "/workforce/conversations", label: "Conversations", icon: MessagesSquare },
  { href: "/workforce/tasks", label: "Tasks", icon: ListTodo },
  { href: "/workforce/crm", label: "CRM", icon: Contact },
  { href: "/workforce/automations", label: "Automations", icon: Workflow },
  { href: "/workforce/knowledge-base", label: "Knowledge Base", icon: BookOpen },
  { href: "/workforce/documents", label: "Documents", icon: FileText },
  { href: "/workforce/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/workforce/integrations", label: "Integrations", icon: Blocks },
  { href: "/workforce/billing", label: "Billing", icon: CreditCard },
  { href: "/workforce/organization", label: "Organization", icon: Building2 },
  { href: "/workforce/api", label: "API", icon: KeyRound },
  { href: "/workforce/settings", label: "Settings", icon: Settings },
];
