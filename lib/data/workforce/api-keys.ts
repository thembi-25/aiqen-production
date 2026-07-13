export interface ApiKey {
  id: string;
  label: string;
  maskedKey: string;
  createdAt: string;
  lastUsedAt: string | null;
}

export const apiKeys: ApiKey[] = [
  {
    id: "key-1",
    label: "Production",
    maskedKey: "aiq_live_••••••••••••3f2a",
    createdAt: "Apr 2, 2026",
    lastUsedAt: "2 hours ago",
  },
  {
    id: "key-2",
    label: "Staging",
    maskedKey: "aiq_test_••••••••••••9c14",
    createdAt: "Mar 18, 2026",
    lastUsedAt: "3 days ago",
  },
];

export function getApiKeys() {
  return apiKeys;
}
