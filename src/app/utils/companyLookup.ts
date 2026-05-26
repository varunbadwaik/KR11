import { mockCompanies, mockCompanySummaries, mockTeamCompanies } from '../../mocks';

export interface CompanyDetailViewModel {
  id: string;
  name: string;
  sector: string;
  value: number;
  percentage: number;
  riskLevel: string;
  keyFactors: string[];
  summary: string;
}

const normalize = (value: string) => value.trim().toLowerCase();

export function getCompanyIdByName(name: string) {
  const normalizedName = normalize(name);
  return mockCompanies.find((company) => normalize(company.name) === normalizedName)?.id;
}

export function findCompanyDetail(companyId: string | undefined): CompanyDetailViewModel | null {
  if (!companyId) {
    return null;
  }

  const decodedCompanyId = decodeURIComponent(companyId);
  const baseCompany = mockCompanies.find((company) => company.id === decodedCompanyId);

  if (!baseCompany) {
    return null;
  }

  const summary = mockCompanySummaries.find(
    (company) => normalize(company.name) === normalize(baseCompany.name)
  );
  const teamCompany = mockTeamCompanies.find(
    (company) => company.id === baseCompany.id || normalize(company.name) === normalize(baseCompany.name)
  );

  return {
    id: baseCompany.id,
    name: baseCompany.name,
    sector: summary?.sector ?? teamCompany?.sector ?? baseCompany.sector,
    value: summary?.value ?? teamCompany?.value ?? baseCompany.coinValue,
    percentage: summary?.percentage ?? teamCompany?.percentage ?? baseCompany.movementPercent,
    riskLevel: summary?.riskLevel ?? baseCompany.riskLabel ?? 'Medium',
    keyFactors: summary?.keyFactors ?? [
      `${baseCompany.sector} activity`,
      'Company value movement',
      'Event scoring trend',
    ],
    summary:
      summary?.summary ??
      baseCompany.description ??
      `${baseCompany.name} is available for KR11 fantasy prediction events.`,
  };
}
