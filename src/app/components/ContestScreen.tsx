import { useState } from 'react';
import { ArrowLeft, Trophy, Star, Shield, HelpCircle, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import stadiumBg from '../../imports/stadium_background.png';
import logoImg from '../../imports/logo.png';

interface ContestScreenProps {
  eventName: string;
  eventId: string;
  onBack: () => void;
  onJoinContest: (fee: number) => void;
}

interface ContestOption {
  prizePool: number;
  spots: number;
  entryFee: number;
}

const contestOptions: ContestOption[] = [
  { prizePool: 100000, spots: 10000, entryFee: 49 },
  { prizePool: 25000, spots: 2500, entryFee: 19 },
  { prizePool: 10000, spots: 1000, entryFee: 10 },
  { prizePool: 5000, spots: 500, entryFee: 5 },
  { prizePool: 2000, spots: 200, entryFee: 2 },
];

const categories = [
  { id: 'all', label: 'All contest', icon: Trophy },
  { id: 'mega', label: 'Mega contests', icon: Star },
  { id: 'h2h', label: 'Head to head', icon: HelpCircle },
  { id: 'practice', label: 'Practice contest', icon: Shield },
];

export function ContestScreen({ eventName, onBack, onJoinContest }: ContestScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleJoin = (fee: number) => {
    toast.success(`Joined Contest!`, {
      description: `Spent ${fee} Coins to join. Now configure your team.`,
    });
    onJoinContest(fee);
  };

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB] select-none">
      {/* ─── Hero Section with Stadium Background ─── */}
      <div className="relative overflow-hidden pt-3 pb-5">
        {/* Stadium Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={stadiumBg} alt="" className="w-full h-full object-cover object-center scale-105" />
          {/* Overlay to match the bright blue sky lighting in figma */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/40 via-[#3B82F6]/30 to-[#F4F7FB]" />
        </div>

        {/* Top Bar: Custom Back Arrow & Premium Coin Badge */}
        <div className="relative z-20 flex items-center justify-between px-4 pb-2">
          {/* Simple Black Back Arrow Button */}
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-transparent hover:bg-black/5 flex items-center justify-center active:scale-95 transition-all text-[#101828]"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>

          {/* Premium Coin Badge with Red Plus Button */}
          <div className="flex items-center bg-white rounded-full pl-2 pr-1 py-1 shadow-sm border border-[#E5E7EB] gap-2">
            <div className="w-4 h-4 rounded-full bg-[#F5A400] flex items-center justify-center text-[10px] text-white font-extrabold shadow-sm shadow-[#F5A400]/25">
              🪙
            </div>
            <span className="text-[12px] font-extrabold text-[#101828]">850</span>
            <button className="w-4 h-4 rounded-full bg-[#EF4444] text-white flex items-center justify-center text-[10px] font-black hover:opacity-90 active:scale-95 transition-all">
              +
            </button>
          </div>
        </div>

        {/* KR11 Logo & Contest Title */}
        <div className="relative z-10 flex flex-col items-center mt-1">
          <img src={logoImg} alt="KR11" className="w-[145px] h-auto object-contain drop-shadow-md" />
          
          {/* Subtitle with double horizontal lines */}
          <div className="flex items-center gap-2 -mt-1.5 mb-1.5">
            <div className="w-6 h-[1.5px] bg-[#1E3A8A]/40" />
            <span className="text-[#1E3A8A] text-[12px] font-black tracking-[0.25em] uppercase">
              Fantasy Sports
            </span>
            <div className="w-6 h-[1.5px] bg-[#1E3A8A]/40" />
          </div>

          {/* Bold Contest Title */}
          <h1 className="text-[34px] font-black text-[#1E3A8A] uppercase tracking-wider text-center drop-shadow-sm font-sans italic">
            Contest
          </h1>
        </div>
      </div>

      {/* ─── Category Tabs with Dividers ─── */}
      <div className="mx-4 -mt-2 bg-white rounded-xl shadow-md shadow-black/5 p-1 border border-[#E5E7EB]/50 z-20">
        <div className="flex items-stretch justify-around">
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <div key={cat.id} className="flex-1 flex items-center justify-center relative">
                {/* Divider Line */}
                {idx > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200" />
                )}
                
                <button
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full py-2.5 rounded-lg flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#3B82F6] text-white shadow-sm shadow-[#3B82F6]/25'
                      : 'bg-transparent text-[#6B7280] hover:text-[#1F2937] active:scale-95'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span className="text-[9px] font-extrabold tracking-tight uppercase whitespace-nowrap">
                    {cat.label}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Contests List ─── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-20">
        {contestOptions.map((opt) => (
          <div
            key={opt.prizePool}
            className="bg-white rounded-[20px] px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-[#E5E7EB]/60 flex items-center justify-between hover:shadow-md transition-all duration-200"
          >
            {/* Left: Prize pool & spots */}
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-[#EF4444] font-black block mb-0.5">
                prize pool
              </span>
              <p className="text-[20px] font-extrabold text-[#111827] tracking-tight leading-none">
                {opt.prizePool.toLocaleString()} Coins
              </p>
              <span className="text-[11px] text-[#9CA3AF] font-bold block mt-1">
                {opt.spots.toLocaleString()} spots
              </span>
            </div>

            {/* Middle: Entry fee */}
            <div className="text-center px-4">
              <span className="text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold block mb-0.5">
                Entry fee
              </span>
              <p className="text-[13px] font-extrabold text-[#111827] whitespace-nowrap">
                {opt.entryFee} Coins
              </p>
            </div>

            {/* Right: Join Button with price (Blue Pill Stacked) */}
            <button
              onClick={() => handleJoin(opt.entryFee)}
              className="flex flex-col items-center justify-center px-3 py-1 bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 text-white rounded-full transition-all shadow-sm shadow-[#2563EB]/15 min-w-[84px] h-[40px]"
            >
              <span className="text-[12px] font-extrabold leading-none whitespace-nowrap">{opt.entryFee} Coins</span>
              <span className="text-[9px] font-bold uppercase tracking-wider opacity-90 mt-0.5">Join</span>
            </button>
          </div>
        ))}
      </div>

      {/* ─── Create Contest Floating Rounded Footer ─── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full max-w-[480px] px-5 z-30">
        <button
          onClick={() => {
            toast.success("Create Contest Window Opened (Demo Mode)", {
              description: "Configure entry pools, invitation links, and rewards.",
            });
          }}
          className="w-full bg-[#180F69] hover:bg-[#201582] text-white px-5 py-3 flex items-center rounded-full transition-all duration-200 shadow-lg shadow-black/25"
        >
          <div className="flex items-center gap-3">
            {/* Trophy inside thin white border circle */}
            <div className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center flex-shrink-0">
              <Trophy className="w-4.5 h-4.5 text-white" />
            </div>
            
            <div className="text-left">
              <h4 className="text-[12.5px] font-black text-white uppercase tracking-wider leading-tight">Create Contest</h4>
              <p className="text-[9.5px] text-white/60 font-bold tracking-tight">Create your own contest</p>
            </div>
          </div>

          {/* White vertical separator line */}
          <div className="w-[1.5px] h-8 bg-white/20 mx-4" />
          
          {/* Empty spacer for the right rounded section of the pill */}
          <div className="flex-1" />
        </button>
      </div>
    </div>
  );
}
