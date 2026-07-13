export interface KnowledgeArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  updatedAt: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "how-automation-status-works",
    title: "How automation status works",
    category: "Getting Started",
    excerpt:
      "A quick guide to what Planning, Building, Live, and Monitoring mean for your automations.",
    content: [
      "Every automation AIQEN builds for you moves through four stages: Planning, Building, Live, and Monitoring.",
      "Planning means we're mapping your current workflow and defining requirements. Building means development is underway. Live means the automation is running in your environment. Monitoring means it's live and we're actively watching performance and tuning it.",
      "You can see the current stage for each project on its Project detail page in the portal.",
    ],
    updatedAt: "May 2026",
  },
  {
    slug: "submitting-a-support-ticket",
    title: "Submitting a support ticket",
    category: "Getting Started",
    excerpt: "Where to go when something breaks or you have a question about a live automation.",
    content: [
      "Use the Tickets section of the portal for anything related to a live automation not working as expected, or questions about how something is configured.",
      "For general project questions or scheduling, use Messages to reach your account team directly instead.",
      "We aim to respond to high-priority tickets within 4 business hours.",
    ],
    updatedAt: "Apr 2026",
  },
  {
    slug: "understanding-your-invoice",
    title: "Understanding your invoice",
    category: "Billing",
    excerpt: "What the line items on an AIQEN invoice mean and how billing milestones work.",
    content: [
      "Most AIQEN engagements are billed by milestone rather than by hour. Each invoice lists the specific deliverables completed in that billing period.",
      "Fixed-fee discovery workshops are typically bundled into the first milestone invoice of a project rather than billed separately.",
      "If anything on an invoice is unclear, open a ticket and our accounts team will break it down for you.",
    ],
    updatedAt: "Feb 2026",
  },
  {
    slug: "adding-teammates-to-the-portal",
    title: "Adding teammates to the portal",
    category: "Account",
    excerpt: "How to get more people from your company access to the Client Portal.",
    content: [
      "Reach out to your account team via Messages with the name and email of anyone you'd like added.",
      "Self-serve team management is coming soon — for now every teammate is added manually by AIQEN to keep access tightly scoped per engagement.",
    ],
    updatedAt: "Mar 2026",
  },
  {
    slug: "requesting-a-new-automation",
    title: "Requesting a new automation",
    category: "Getting Started",
    excerpt: "How to kick off a new project once you've identified a new opportunity.",
    content: [
      "The fastest way to scope a new automation is a quick call with your account team — start a conversation in Messages and we'll get something on the calendar.",
      "For larger initiatives, we'll typically run a short discovery workshop before scoping a fixed-fee project.",
    ],
    updatedAt: "Jun 2026",
  },
];

export function getKnowledgeArticles() {
  return knowledgeArticles;
}

export function getKnowledgeArticleBySlug(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}

export function getKnowledgeCategories() {
  return Array.from(new Set(knowledgeArticles.map((article) => article.category)));
}
