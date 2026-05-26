import { mockCompanies, mockCompanyChart } from '../mocks';

export interface GetCompaniesParams {
  query?: string;
  sector?: string;
}

export const companiesService = {
  // TODO FastAPI: GET /api/companies
  getCompanies(params: GetCompaniesParams = {}) {
    const query = params.query?.toLowerCase();
    const sector = params.sector;

    const companies = mockCompanies.filter((company) => {
      const matchesQuery = !query || company.name.toLowerCase().includes(query);
      const matchesSector = !sector || sector === 'All' || company.sector.includes(sector);
      return matchesQuery && matchesSector;
    });

    return Promise.resolve(companies);
  },

  // TODO FastAPI: GET /api/companies/:companyId
  getCompanyById(companyId: string) {
    return Promise.resolve(
      mockCompanies.find((company) => company.id === companyId || company.symbol === companyId) ??
        null,
    );
  },

  // TODO FastAPI: GET /api/companies/:companyId/chart
  getCompanyChart(_companyId: string, _range?: string) {
    return Promise.resolve(mockCompanyChart);
  },
};
