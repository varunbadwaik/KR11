import { X } from 'lucide-react';
import { FantasyDisclaimer } from '../../components/common';

interface Company {
  name: string;
  sector: string;
  value: number;
  percentage: number;
  riskLevel: string;
  keyFactors: string[];
  summary: string;
}

interface CompanySummaryModalProps {
  company: Company;
  onClose: () => void;
  onViewChart: () => void;
}

export function CompanySummaryModal({ company, onClose, onViewChart }: CompanySummaryModalProps) {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-[#14B86A] bg-[#E6F7F0]';
      case 'Medium': return 'text-[#F5A400] bg-[#FFF4D8]';
      case 'High': return 'text-[#E5484D] bg-[#FFF0F0]';
      default: return 'text-[#667085] bg-[#F4F7FB]';
    }
  };

  return (
    <div className="absolute inset-0 bg-black/50 flex items-end z-50">
      <div className="bg-white w-full rounded-t-3xl p-6 animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F4F7FB] flex items-center justify-center"
        >
          <X className="w-5 h-5 text-[#101828]" />
        </button>

        {/* Company Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-[#F4F7FB] flex items-center justify-center">
              <span className="text-lg font-bold text-[#2563EB]">
                {company.name.substring(0, 2)}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#101828]">{company.name}</h2>
              <span className="inline-block px-2 py-1 bg-[#EAF2FF] text-[#2563EB] text-xs font-semibold rounded-full">
                {company.sector}
              </span>
            </div>
          </div>

          <div className="bg-[#F4F7FB] rounded-2xl p-4">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-[#101828]">{company.value}</span>
              <span className="text-sm text-[#667085]">Coins</span>
            </div>
            <p className={`text-sm font-semibold ${company.percentage >= 0 ? 'text-[#14B86A]' : 'text-[#E5484D]'}`}>
              {company.percentage >= 0 ? '+' : ''}{company.percentage.toFixed(2)}%
            </p>
          </div>
        </div>

        {/* Company Summary */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-[#101828] mb-2">Company Summary</h3>
          <p className="text-sm text-[#667085] leading-relaxed">{company.summary}</p>
        </div>

        {/* Risk Level */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-[#101828] mb-2">Risk Level</h3>
          <span className={`inline-block px-3 py-1.5 text-sm font-semibold rounded-full ${getRiskColor(company.riskLevel)}`}>
            {company.riskLevel} Risk
          </span>
        </div>

        {/* Key Factors */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-[#101828] mb-3">Key Factors</h3>
          <div className="space-y-2">
            {company.keyFactors.map((factor, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0"></div>
                <p className="text-sm text-[#667085]">{factor}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <FantasyDisclaimer />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onViewChart}
            className="w-full py-3.5 bg-[#2563EB] text-white text-base font-semibold rounded-full hover:bg-[#1D4ED8] transition-colors"
          >
            View Chart
          </button>
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-[#F4F7FB] text-[#101828] text-base font-semibold rounded-full hover:bg-[#E5E7EB] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
