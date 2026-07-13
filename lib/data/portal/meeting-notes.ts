export interface MeetingNote {
  id: string;
  title: string;
  date: string;
  attendees: string[];
  summary: string;
  actionItems: string[];
}

export const meetingNotes: MeetingNote[] = [
  {
    id: "mtg-2026-07-08",
    title: "Website Automation — Integration Review",
    date: "Jul 8, 2026",
    attendees: ["You", "Priya Nair", "Diego Alvarez"],
    summary:
      "Reviewed the revised HubSpot + Slack integration diagram. Agreed on field mapping for lead scoring and confirmed the staged rollout plan for late July.",
    actionItems: [
      "AIQEN to finalize field mapping doc by Jul 15",
      "Client to confirm Slack channel permissions for #sales-leads",
      "Schedule QA walkthrough for Jul 22",
    ],
  },
  {
    id: "mtg-2026-06-12",
    title: "Support Triage Agent — Go-Live Retro",
    date: "Jun 12, 2026",
    attendees: ["You", "Diego Alvarez"],
    summary:
      "Two weeks post-launch review. Draft-reply acceptance rate is at 78%, ahead of the 65% target. Discussed tuning the escalation rules for billing-related tickets.",
    actionItems: [
      "AIQEN to adjust escalation rules for billing tickets by Jun 19",
      "Client to share Q2 support volume trends for capacity planning",
    ],
  },
  {
    id: "mtg-2026-01-20",
    title: "CRM Data Sync — Project Kickoff",
    date: "Jan 20, 2026",
    attendees: ["You", "Priya Nair"],
    summary:
      "Kicked off the CRM sync project. Walked through the current manual reconciliation process and agreed on a nightly sync cadence via n8n.",
    actionItems: [
      "Client to provide CRM API credentials",
      "AIQEN to deliver schema mapping draft by Feb 3",
    ],
  },
];

export function getMeetingNotes() {
  return meetingNotes;
}

export function getMeetingNoteById(id: string) {
  return meetingNotes.find((note) => note.id === id);
}
