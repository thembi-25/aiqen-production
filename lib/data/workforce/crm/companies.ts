export interface Company {
  id: string;
  name: string;
  domain: string;
  industry: string;
  size: string;
}

export const companies: Company[] = [
  { id: "co-1", name: "Nova Health", domain: "novahealth.com", industry: "Healthcare", size: "51-200" },
  { id: "co-2", name: "Brightline Logistics", domain: "brightlinelogistics.com", industry: "Logistics", size: "201-500" },
  { id: "co-3", name: "Meridian Legal Group", domain: "meridianlegal.com", industry: "Legal", size: "11-50" },
  { id: "co-4", name: "Cedar & Stone Realty", domain: "cedarstone.com", industry: "Real Estate", size: "11-50" },
];

export function getCompanies() {
  return companies;
}

export function getCompanyById(id: string) {
  return companies.find((company) => company.id === id);
}
