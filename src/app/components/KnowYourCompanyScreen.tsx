import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { mockCompanySummaries, type CompanySummaryMock } from '../../mocks';
import { EmptyState } from '../../components/common';

type Company = CompanySummaryMock;

interface KnowYourCompanyScreenProps {
  onBack: () => void;
  onViewCompany: (company: Company) => void;
}

const companies: Company[] = mockCompanySummaries;

const sectors = ['All', 'Financial Services', 'Auto', 'Energy', 'Food Tech', 'IT', 'FMCG'];

export function KnowYourCompanyScreen({ onBack, onViewCompany }: KnowYourCompanyScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');

  const filteredCompanies = companies.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === 'All' || c.sector.includes(selectedSector);
    return matchesSearch && matchesSector;
  });

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB]">
      {/* Header */}
      <div className="bg-transparent px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-transparent hover:bg-black/5 active:scale-95 transition-all text-[#101828] flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <h1 className="text-xl font-bold text-[#101828]">Know Your Company</h1>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#667085]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search company"
            className="w-full pl-12 pr-4 py-3 bg-[#F4F7FB] border border-[#E5E7EB] rounded-full text-sm text-[#101828] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB] font-sans"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {sectors.map(sector => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                selectedSector === sector
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-[#F4F7FB] text-[#667085] border border-[#E5E7EB]'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      {/* Company List */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
        {filteredCompanies.map(company => (
          <div
            key={company.name}
            className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB] mb-3"
          >
            <div className="flex gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#F4F7FB] flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-[#2563EB]">
                  {company.name.substring(0, 2)}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#101828] mb-0.5">{company.name}</h3>
                <span className="inline-block px-2 py-0.5 bg-[#EAF2FF] text-[#2563EB] text-xs font-semibold rounded-full">
                  {company.sector}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#101828]">{company.value} Coins</p>
                <p className={`text-xs font-semibold ${company.percentage >= 0 ? 'text-[#14B86A]' : 'text-[#E5484D]'}`}>
                  {company.percentage >= 0 ? '+' : ''}{company.percentage.toFixed(2)}%
                </p>
              </div>
            </div>
            <p className="text-xs text-[#667085] mb-3">{company.summary}</p>
            <button
              onClick={() => onViewCompany(company)}
              className="w-full py-2 bg-[#F4F7FB] text-[#2563EB] text-sm font-semibold rounded-full hover:bg-[#EAF2FF] transition-colors"
            >
              View Summary
            </button>
          </div>
        ))}

        {filteredCompanies.length === 0 && (
          <EmptyState
            title="No companies found"
            message="Try a different company name or sector filter."
          />
        )}
      </div>
    </div>
  );
}
