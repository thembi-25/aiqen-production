export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: CaseStudyMetric[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "northbridge-logistics",
    client: "Northbridge Logistics",
    industry: "Manufacturing & Supply Chain",
    challenge:
      "Dispatch coordinators were manually re-keying orders across three disconnected systems, causing delays and errors.",
    solution:
      "AIQEN built a connected automation layer syncing order, inventory, and dispatch systems in real time, with an AI operations agent flagging exceptions.",
    metrics: [
      { label: "Manual data entry", value: "-82%" },
      { label: "Order processing time", value: "-64%" },
      { label: "Dispatch errors", value: "-91%" },
    ],
    testimonial: {
      quote:
        "AIQEN gave us back hours every day that used to disappear into spreadsheets. Our dispatch team finally trusts the data.",
      author: "Maria Chen",
      role: "VP of Operations, Northbridge Logistics",
    },
  },
  {
    slug: "harborview-legal",
    client: "Harborview Legal Group",
    industry: "Legal Services",
    challenge:
      "Intake staff were spending hours screening leads and scheduling consultations, slowing down response times.",
    solution:
      "Deployed an AI receptionist and intake agent that screens, qualifies, and schedules consultations 24/7, handing off qualified leads with full context.",
    metrics: [
      { label: "Lead response time", value: "-88%" },
      { label: "Consultations booked", value: "+41%" },
      { label: "Staff hours saved / week", value: "26 hrs" },
    ],
    testimonial: {
      quote:
        "We stopped losing leads to slow response times. The AI intake agent works nights and weekends we simply couldn't cover before.",
      author: "David Okafor",
      role: "Managing Partner, Harborview Legal Group",
    },
  },
  {
    slug: "clearpath-retail",
    client: "Clearpath Retail",
    industry: "E-commerce & Retail",
    challenge:
      "Customer support tickets were growing faster than the support team, driving response times past 24 hours.",
    solution:
      "Rolled out an AI customer support agent grounded in Clearpath's knowledge base, resolving common issues instantly and routing complex cases with context.",
    metrics: [
      { label: "First response time", value: "-95%" },
      { label: "Tickets auto-resolved", value: "68%" },
      { label: "CSAT score", value: "+19 pts" },
    ],
    testimonial: {
      quote:
        "Our support backlog disappeared in the first month. Customers get instant answers, and our team focuses on the cases that really need a human.",
      author: "Priya Nair",
      role: "Head of Customer Experience, Clearpath Retail",
    },
  },
];
