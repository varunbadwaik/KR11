import { X, TrendingUp, TrendingDown } from 'lucide-react';
import type { FantasyPredictionAction } from '../../types';
import type { TeamCompanyMock } from '../../mocks';
import relianceLogo from '../../assets/reliance.jpg';
import tataLogo from '../../assets/tata.jpg';
import swiggyLogo from '../../assets/swiggy.png';
import zomatoLogo from '../../assets/zomato_logo.png';
import iocLogo from '../../assets/ioc.png';

interface BuySellSheetProps {
  company: TeamCompanyMock;
  eventId?: string;
  maxQuantity: number;
  onConfirm: (action: FantasyPredictionAction, quantity: number) => void;
  onClose: () => void;
}

export function CompanyLogo({
  name,
  className = 'w-10 h-10',
}: {
  name: string;
  className?: string;
}) {
  const norm = name.toLowerCase();

  if (norm.includes('reliance')) {
    return (
      <img
        src={relianceLogo}
        alt="Reliance"
        className={`${className} rounded-full object-cover border border-gray-100 shadow-sm select-none`}
      />
    );
  }

  if (norm.includes('tata')) {
    return (
      <img
        src={tataLogo}
        alt="Tata"
        className={`${className} rounded-full object-cover border border-gray-100 shadow-sm select-none`}
      />
    );
  }

  if (norm.includes('google')) {
    return (
      <div
        className={`${className} rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm p-1 select-none`}
      >
        <svg className="w-full h-full" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>
    );
  }

  if (norm.includes('apple')) {
    return (
      <div
        className={`${className} rounded-full bg-[#101828] flex items-center justify-center p-1 select-none`}
      >
        <svg className="w-[70%] h-[70%] fill-white" viewBox="0 0 24 24">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.84 9.28 4.81C10.56 4.79 11.78 5.68 12.57 5.68C13.36 5.68 14.85 4.62 16.4 4.77C17.07 4.8 18.87 5.04 20.01 6.7C19.89 6.78 17.62 8.11 17.64 10.94C17.66 14.32 20.55 15.41 20.58 15.43C20.56 15.5 20.13 16.98 19.08 18.5L18.71 19.5Z" />
        </svg>
      </div>
    );
  }

  if (norm.includes('infosys')) {
    return (
      <div className={`${className} select-none`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="50" fill="#007CC3" />
          <text
            x="50"
            y="58"
            fontFamily="system-ui, sans-serif"
            fontWeight="900"
            fontSize="16"
            fill="white"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            Infosys
          </text>
        </svg>
      </div>
    );
  }

  if (norm.includes('zomato')) {
    return (
      <img
        src={zomatoLogo}
        alt="Zomato"
        className={`${className} rounded-full object-cover border border-gray-100 shadow-sm select-none`}
      />
    );
  }

  if (norm.includes('ioc') || norm.includes('indianoil')) {
    return (
      <img
        src={iocLogo}
        alt="IOC"
        className={`${className} rounded-full object-cover border border-gray-100 shadow-sm select-none`}
      />
    );
  }

  if (norm.includes('swiggy')) {
    return (
      <img
        src={swiggyLogo}
        alt="Swiggy"
        className={`${className} rounded-full object-cover border border-gray-100 shadow-sm select-none`}
      />
    );
  }

  return (
    <div
      className={`${className} rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-md select-none`}
    >
      {name.substring(0, 1).toUpperCase()}
    </div>
  );
}

export function BuySellSheet({ company, maxQuantity, onConfirm, onClose }: BuySellSheetProps) {
  const safeMaxQuantity = Math.max(maxQuantity, 0);
  const quantity = 1; // Fixed 1X as per Figma UI mockup

  return (
    <div
      className="absolute inset-0 bg-black/60 flex items-center justify-center p-5 z-50 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[400px] rounded-3xl p-5 shadow-premium-xl border border-gray-100/50 overflow-y-auto relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F4F7FB] hover:bg-[#E5E7EB] flex items-center justify-center transition-all active:scale-90"
          aria-label="Close prediction sheet"
        >
          <X className="w-4 h-4 text-[#667085]" />
        </button>

        {/* Company Header */}
        <div className="flex items-center justify-between mb-4 mt-2 pr-6">
          <div className="flex items-center gap-3">
            <CompanyLogo name={company.name} className="w-10 h-10" />
            <h2 className="text-[17px] font-black text-[#101828]">{company.name}</h2>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFF4D8] rounded-full border border-[#FFE7A8]">
            <div className="w-3.5 h-3.5 rounded-full bg-[#F5A400] flex items-center justify-center text-[9px] text-white font-extrabold shadow-sm">
              🪙
            </div>
            <span className="text-[12.5px] font-black text-[#101828]">{company.value}</span>
          </div>
        </div>
        <div className="h-px bg-[#E5E7EB]/80 mb-4" />

        {/* Buy/Sell Explanations */}
        <div className="mb-4 space-y-2.5">
          {/* Buy option */}
          <div className="flex items-center justify-between p-3 bg-[#E6F7F0] border border-[#14B86A]/20 rounded-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#14B86A]/10 flex items-center justify-center text-[#14B86A]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-[13px] font-extrabold text-[#14B86A]">Buy</span>
            </div>
            <span className="text-[9.5px] font-bold text-[#667085] pr-1">
              If u think company value will go up
            </span>
          </div>

          {/* Sell option */}
          <div className="flex items-center justify-between p-3 bg-[#FFF0F0] border border-[#E5484D]/20 rounded-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#E5484D]/10 flex items-center justify-center text-[#E5484D]">
                <TrendingDown className="w-4 h-4" />
              </div>
              <span className="text-[13px] font-extrabold text-[#E5484D]">Sell</span>
            </div>
            <span className="text-[9.5px] font-bold text-[#667085] pr-1">
              If u think company value will go down
            </span>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-black text-[#101828] uppercase tracking-wider">
            Quantity
          </span>
          <div className="px-3.5 py-1 bg-white border border-[#E5E7EB] rounded-full text-xs font-black text-[#101828] shadow-sm select-none">
            1X
          </div>
        </div>

        {/* Details Card */}
        <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden mb-5">
          <div className="p-2.5 flex items-center justify-between bg-[#F4F7FB]">
            <span className="text-xs text-[#667085] font-semibold">Player count</span>
            <span className="text-xs font-extrabold text-[#101828]">{quantity} player</span>
          </div>
          <div className="p-2.5 flex items-center justify-between bg-[#FFF4D8] border-t border-[#FFE7A8]">
            <span className="text-xs text-[#667085] font-semibold">Coins required</span>
            <span className="text-xs font-extrabold text-[#101828]">{company.value} coins</span>
          </div>
        </div>

        {/* Confirm Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={() => onConfirm('BUY', quantity)}
            disabled={safeMaxQuantity === 0}
            className="w-full py-3.5 bg-[#14B86A] text-white text-[13px] font-black rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md shadow-[#14B86A]/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Buy prediction
          </button>
          <button
            onClick={() => onConfirm('SELL', quantity)}
            disabled={safeMaxQuantity === 0}
            className="w-full py-3.5 bg-[#E5484D] text-white text-[13px] font-black rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md shadow-[#E5484D]/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sell prediction
          </button>
        </div>
      </div>
    </div>
  );
}
