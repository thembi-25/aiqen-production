import {
  LayoutDashboard,
  Users,
  FileText,
  Target,
  Plug,
  ScrollText,
  Flag,
  Mail,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/content", label: "Content", icon: FileText },
  { href: "/admin/leads", label: "Leads & Assessments", icon: Target },
  { href: "/admin/subscribers", label: "Subscribers", icon: Mail },
  { href: "/admin/integrations", label: "Integrations", icon: Plug },
  { href: "/admin/audit-logs", label: "Audit Logs", icon: ScrollText },
  { href: "/admin/feature-flags", label: "Feature Flags", icon: Flag },
];
