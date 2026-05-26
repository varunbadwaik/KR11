import { Coins, ChevronDown, Plus } from 'lucide-react';

interface CoinBadgeProps {
  balance: number;
  onClick?: () => void;
  size?: 'sm' | 'md';
  variant?: 'light' | 'dark';
}

export function CoinBadge({ balance, onClick, size = 'md', variant = 'light' }: CoinBadgeProps) {
  const Component = onClick ? 'button' : 'div';

  if (variant === 'dark') {
    return (
      <Component
        onClick={onClick}
        className={`rounded-full bg-black/20 flex items-center justify-between hover:bg-black/35 active:scale-95 transition-all ${
          size === 'sm' ? 'pl-2.5 pr-1 h-8 gap-2.5' : 'pl-3.5 pr-1 h-10 gap-3'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <Coins className={`text-[#F5A400] ${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`} />
          <span className={`font-black text-white ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            {balance}
          </span>
        </div>
        <div
          className={`rounded-full bg-[#E5484D] text-white flex items-center justify-center ${
            size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'
          }`}
        >
          <Plus className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4.5 h-4.5'} strokeWidth={3} />
        </div>
      </Component>
    );
  }

  return (
    <Component
      onClick={onClick}
      className={`rounded-full bg-white border border-[#E5E7EB] flex items-center gap-1.5 hover:bg-[#F9FAFB] active:scale-95 transition-all shadow-sm ${
        size === 'sm' ? 'px-2.5 h-8' : 'px-3.5 h-10'
      }`}
    >
      <Coins className={`text-[#F5A400] ${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`} />
      <span className={`font-black text-[#101828] ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
        {balance}
      </span>
      <ChevronDown className={`text-[#667085] ${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
    </Component>
  );
}
