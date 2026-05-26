import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { EmptyState, FantasyDisclaimer } from '../../components/common';
import { findCompanyDetail } from '../../utils/companyLookup';

export default function CompanyDetailPage() {
  const navigate = useNavigate();
  const { companyId } = useParams();
  const company = findCompanyDetail(companyId);

  if (!company) {
    return (
      <div className="h-full flex flex-col bg-[#F4F7FB]">
        <div className="bg-white px-4 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-[#101828]" />
            </button>
            <h1 className="text-xl font-bold text-[#101828]">Company Details</h1>
          </div>
        </div>
        <div className="flex-1 px-4 pt-4">
          <EmptyState
            title="Company not found"
            message="This company is not available in KR11 mock company data."
            actionLabel="Back"
            onAction={() => navigate(-1)}
          />
        </div>
      </div>
    );
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'text-[#14B86A] bg-[#E6F7F0]';
      case 'Medium':
        return 'text-[#F5A400] bg-[#FFF4D8]';
      case 'High':
        return 'text-[#E5484D] bg-[#FFF0F0]';
      default:
        return 'text-[#667085] bg-[#F4F7FB]';
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB]">
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center">
            <span className="text-sm font-bold text-[#2563EB]">{company.name.substring(0, 2)}</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#101828]">{company.name}</h1>
            <span className="text-xs text-[#667085]">{company.sector}</span>
          </div>
        </div>

        <div className="bg-[#F4F7FB] rounded-2xl p-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-[#101828]">{company.value}</span>
            <span className="text-sm text-[#667085]">Coins</span>
          </div>
          <p
            className={`text-base font-semibold ${company.percentage >= 0 ? 'text-[#14B86A]' : 'text-[#E5484D]'}`}
          >
            {company.percentage >= 0 ? '+' : ''}
            {company.percentage.toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#E5E7EB] mb-4">
          <h2 className="text-base font-bold text-[#101828] mb-2">Company Summary</h2>
          <p className="text-sm text-[#667085] leading-relaxed">{company.summary}</p>
        </div>

        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#E5E7EB] mb-4">
          <h2 className="text-base font-bold text-[#101828] mb-3">Risk Level</h2>
          <span
            className={`inline-block px-3 py-1.5 text-sm font-semibold rounded-full ${getRiskColor(company.riskLevel)}`}
          >
            {company.riskLevel} Risk
          </span>
        </div>

        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#E5E7EB] mb-4">
          <h2 className="text-base font-bold text-[#101828] mb-3">Key Factors</h2>
          <div className="space-y-2">
            {company.keyFactors.map((factor) => (
              <div key={factor} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0"></div>
                <p className="text-sm text-[#667085]">{factor}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <FantasyDisclaimer />
        </div>

        <button
          onClick={() =>
            navigate(`/companies/${company.id}/chart`, { state: { from: 'company-detail' } })
          }
          className="w-full py-3.5 bg-[#2563EB] text-white text-base font-semibold rounded-full hover:bg-[#1D4ED8] transition-colors"
        >
          View Chart
        </button>
      </div>
    </div>
  );
}
