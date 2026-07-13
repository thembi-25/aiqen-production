export type ContactStatus = "lead" | "customer" | "churned";

export interface ContactActivity {
  label: string;
  timestamp: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  companyId: string;
  status: ContactStatus;
  activity: ContactActivity[];
}

export const contacts: Contact[] = [
  {
    id: "ct-1",
    name: "Dana Whitfield",
    email: "dana@novahealth.com",
    phone: "+1 (415) 555-0132",
    title: "VP of Operations",
    companyId: "co-1",
    status: "lead",
    activity: [
      { label: "Outbound SDR sent an intro email", timestamp: "Jul 12, 2026" },
      { label: "Replied and scheduled a call for Thursday 2pm", timestamp: "Jul 13, 2026" },
    ],
  },
  {
    id: "ct-2",
    name: "Marcus Boone",
    email: "marcus.boone@gmail.com",
    phone: "+1 (312) 555-0198",
    title: "Prospective Client",
    companyId: "co-4",
    status: "lead",
    activity: [
      { label: "Called and booked a consultation via Front Desk", timestamp: "Jul 13, 2026" },
    ],
  },
  {
    id: "ct-3",
    name: "Priya Chandra",
    email: "priya@brightlinelogistics.com",
    phone: "+1 (773) 555-0110",
    title: "Director of IT",
    companyId: "co-2",
    status: "customer",
    activity: [
      { label: "Closed won — Dispatch Automation package", timestamp: "May 2, 2026" },
      { label: "Onboarding kickoff call completed", timestamp: "May 9, 2026" },
    ],
  },
  {
    id: "ct-4",
    name: "Owen Whitaker",
    email: "owen@meridianlegal.com",
    phone: "+1 (617) 555-0144",
    title: "Managing Partner",
    companyId: "co-3",
    status: "churned",
    activity: [
      { label: "Cancelled subscription after 6 months", timestamp: "Feb 2026" },
    ],
  },
];

export function getContacts() {
  return contacts;
}

export function getContactById(id: string) {
  return contacts.find((contact) => contact.id === id);
}
