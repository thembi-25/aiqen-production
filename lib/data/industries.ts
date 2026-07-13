import {
  Building,
  Building2,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Scale,
  ShoppingBag,
  Briefcase,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  workflows: string[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "Improve patient communication, scheduling, and administrative workflows without adding headcount.",
    workflows: [
      "Patient intake and appointment scheduling",
      "Insurance verification and prior authorization",
      "Post-visit follow-up and reminders",
    ],
  },
  {
    slug: "finance",
    title: "Finance",
    icon: Landmark,
    description:
      "Automate reporting, reconciliation, and client communication while keeping compliance intact.",
    workflows: [
      "Transaction reconciliation and reporting",
      "Client onboarding and KYC document collection",
      "Compliance monitoring and audit trails",
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    icon: HardHat,
    description:
      "Streamline project coordination, bidding, and vendor communication across job sites.",
    workflows: [
      "Bid preparation and vendor outreach",
      "Project status coordination across job sites",
      "Subcontractor scheduling and compliance tracking",
    ],
  },
  {
    slug: "legal",
    title: "Legal",
    icon: Scale,
    description:
      "Accelerate document review, intake, and client communication for busy legal teams.",
    workflows: [
      "Client intake and conflict checks",
      "Document review and summarization",
      "Case status updates and client communication",
    ],
  },
  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,
    description:
      "Automate admissions workflows, student support, and administrative operations.",
    workflows: [
      "Admissions inquiry response and follow-up",
      "Student support ticket triage",
      "Administrative form processing",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    icon: Building2,
    description:
      "Automate lead follow-up, scheduling, and client communication across your portfolio.",
    workflows: [
      "Lead follow-up and showing scheduling",
      "Listing inquiry response",
      "Transaction paperwork coordination",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description:
      "Connect supply chain, ops, and reporting systems into one AI-powered operating layer.",
    workflows: [
      "Supply chain and inventory monitoring",
      "Production status reporting",
      "Vendor and purchase order coordination",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    icon: ShoppingBag,
    description:
      "Enhance customer support, inventory workflows, and personalized engagement at scale.",
    workflows: [
      "Customer support and order status inquiries",
      "Inventory and restock alerts",
      "Personalized marketing follow-up",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    icon: Briefcase,
    description:
      "Automate client onboarding, administrative work, and internal operations.",
    workflows: [
      "Client onboarding and intake",
      "Proposal and invoice generation",
      "Internal operations and reporting",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    icon: Truck,
    description:
      "Coordinate shipments, dispatch, and customer updates across a moving fleet.",
    workflows: [
      "Shipment tracking and customer notifications",
      "Dispatch and route coordination",
      "Carrier and vendor communication",
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    icon: UtensilsCrossed,
    description:
      "Handle reservations, guest requests, and reviews without adding front-desk headcount.",
    workflows: [
      "Reservation and booking management",
      "Guest request handling and concierge chat",
      "Review monitoring and response",
    ],
  },
  {
    slug: "government",
    title: "Government",
    icon: Building,
    description:
      "Modernize constituent services and internal case processing with AI-assisted workflows.",
    workflows: [
      "Constituent inquiry response and routing",
      "Permit and case status processing",
      "Internal document and records management",
    ],
  },
];
