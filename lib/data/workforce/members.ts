export type MemberRole = "owner" | "admin" | "member";

export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: MemberRole;
  avatarInitials: string;
}

export const members: WorkspaceMember[] = [
  { id: "mem-1", name: "Jamie Rivera", email: "jamie@acmerobotics.com", role: "owner", avatarInitials: "JR" },
  { id: "mem-2", name: "Taylor Brooks", email: "taylor@acmerobotics.com", role: "admin", avatarInitials: "TB" },
  { id: "mem-3", name: "Morgan Ellis", email: "morgan@acmerobotics.com", role: "member", avatarInitials: "ME" },
];

export function getMembers() {
  return members;
}
