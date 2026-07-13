export type TeamGroup = "client" | "aiqen";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatarInitials: string;
  group: TeamGroup;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm-client-1",
    name: "Jordan Lee",
    role: "Head of Operations",
    email: "jordan@yourcompany.com",
    avatarInitials: "JL",
    group: "client",
  },
  {
    id: "tm-client-2",
    name: "Sam Rivera",
    role: "IT Manager",
    email: "sam@yourcompany.com",
    avatarInitials: "SR",
    group: "client",
  },
  {
    id: "tm-1",
    name: "Priya Nair",
    role: "Solutions Architect",
    email: "priya@aiqen.com",
    avatarInitials: "PN",
    group: "aiqen",
  },
  {
    id: "tm-2",
    name: "Diego Alvarez",
    role: "AI Engineer",
    email: "diego@aiqen.com",
    avatarInitials: "DA",
    group: "aiqen",
  },
  {
    id: "tm-3",
    name: "Accounts Team",
    role: "Billing & Contracts",
    email: "accounts@aiqen.com",
    avatarInitials: "AT",
    group: "aiqen",
  },
];

export function getTeamMembers() {
  return teamMembers;
}

export function getTeamByGroup(group: TeamGroup) {
  return teamMembers.filter((member) => member.group === group);
}
