import { useState } from 'react';
import { Search, Plus, Minus, X, Eye, ArrowRight, Trophy, ChevronRight, ArrowLeft } from 'lucide-react';
import { BuySellSheet } from './BuySellSheet';
import { mockTeamCompanies, type TeamCompanyMock } from '../../mocks';
import { useTeamBuilder } from '../../hooks/useTeamBuilder';
import { EmptyState } from '../../components/common';
import { toast } from 'sonner';
import type { FantasyPredictionAction } from '../../types';
import { useNavigate } from 'react-router-dom';
import stadiumBg from '../../imports/stadium_background.png';
import logoImg from '../../imports/logo.png';
import relianceLogo from '../../imports/reliance.jpg';
import tataLogo from '../../imports/tata.jpg';
import swiggyLogo from '../../imports/swiggy.png';
import zomatoLogo from '../../imports/zomato_logo.png';
import iocLogo from '../../imports/ioc.png';

interface CreateTeamScreenProps {
  eventName: string;
  eventId?: string;
  onBack: () => void;
}

type Company = TeamCompanyMock;

const companies: Company[] = mockTeamCompanies;

export function CompanyLogo({ name, className = "w-10 h-10" }: { name: string; className?: string }) {
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
      <div className={`${className} rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm p-1 select-none`}>
        <svg className="w-full h-full" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
    );
  }
  
  if (norm.includes('apple')) {
    return (
      <div className={`${className} rounded-full bg-[#101828] flex items-center justify-center p-1 select-none`}>
        <svg className="w-[70%] h-[70%] fill-white" viewBox="0 0 24 24">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.84 9.28 4.81C10.56 4.79 11.78 5.68 12.57 5.68C13.36 5.68 14.85 4.62 16.4 4.77C17.07 4.8 18.87 5.04 20.01 6.7C19.89 6.78 17.62 8.11 17.64 10.94C17.66 14.32 20.55 15.41 20.58 15.43C20.56 15.5 20.13 16.98 19.08 18.5L18.71 19.5Z"/>
        </svg>
      </div>
    );
  }
  
  if (norm.includes('infosys')) {
    return (
      <div className={`${className} select-none`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="50" fill="#007CC3" />
          <text x="50" y="58" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16" fill="white" textAnchor="middle" letterSpacing="0.5">Infosys</text>
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
    <div className={`${className} rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-md select-none`}>
      {name.substring(0, 1).toUpperCase()}
    </div>
  );
}

export function CreateTeamScreen({ eventName, eventId, onBack }: CreateTeamScreenProps) {
  const navigate = useNavigate();
  const {
    selectedItems,
    slotsLeft,
    totalCoinsUsed,
    totalSlots,
    maxSlots,
    canSubmit,
    addOrUpdateItem,
    removeItem,
    updateQuantity,
  } = useTeamBuilder();

  const handleConfirmPrediction = (action: FantasyPredictionAction, qty: number) => {
    if (!selectedCompany) return;
    const success = addOrUpdateItem(selectedCompany, action, qty);
    if (success) {
      setSelectedCompany(null);
      toast.success(`Added prediction: ${action} ${selectedCompany.name}`);
    } else {
      toast.error("Failed to add prediction");
    }
  };

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'pitch'>('list');

  const handleSubmit = () => {
    if (!canSubmit) return;
    toast.success("Team predictions submitted successfully!", {
      description: "You have joined the stock fantasy contest.",
    });
    navigate('/home');
  };

  const selectedCompanyNames = new Set(selectedItems.map(item => item.companyName.toLowerCase()));

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !selectedCompanyNames.has(c.name.toLowerCase())
  );

  const renderPitchSlot = (slotIdx: number) => {
    const item = selectedItems[slotIdx];
    return (
      <div key={slotIdx} className="flex flex-col items-center gap-1.5 min-w-[70px]">
        {item ? (
          <div className="flex flex-col items-center relative">
            {/* Circular Player Badge */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-white transform hover:scale-105 active:scale-95 transition-all select-none hover:shadow-lg relative">
              <CompanyLogo name={item.companyName} className="w-9 h-9" />
              
              {/* BUY/SELL badge at top left of circular logo */}
              <span className={`absolute -top-1.5 -left-1.5 px-1 py-0.25 rounded text-[8px] font-black text-white shadow-sm tracking-wide leading-none ${
                item.action === 'BUY' ? 'bg-[#14B86A]' : 'bg-[#E5484D]'
              }`}>
                {item.action}
              </span>
            </div>
            {/* Name Label Pill below */}
            <div className="mt-1 bg-white px-2.5 py-0.5 rounded-md shadow-sm border border-gray-100 flex items-center justify-center max-w-[75px]">
              <span className="text-[9px] font-extrabold text-[#101828] truncate leading-none">
                {item.companyName}
              </span>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => setViewMode('list')}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#101828] hover:bg-gray-50 active:scale-90 transition-all shadow-md border-2 border-white font-black text-base select-none animate-pulse"
            >
              +
            </button>
            <div className="w-12 h-3.5 bg-white/20 border border-white/10 rounded-full shadow-sm flex items-center justify-center">
              <span className="text-[7px] font-bold text-white/50">-</span>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div 
      className="h-full flex flex-col bg-[#F4F7FB] relative overflow-hidden select-none"
      style={viewMode === 'pitch' ? {
        backgroundImage: `url(${stadiumBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* ─── Sky/Stadium Hero Background ─── */}
      <div className="relative overflow-hidden pt-3 pb-4">
        {/* Stadium Background for List View only */}
        {viewMode === 'list' && (
          <div className="absolute inset-0 z-0">
            <img src={stadiumBg} alt="" className="w-full h-full object-cover object-center scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/40 via-[#3B82F6]/30 to-[#F4F7FB]" />
          </div>
        )}

        {/* Top Bar: Simple Black Back Arrow & Coin Badge */}
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

        {/* KR11 Logo & Fantasy sports subtitle */}
        <div className="relative z-10 flex flex-col items-center mt-1">
          <img src={logoImg} alt="KR11" className="w-[145px] h-auto object-contain drop-shadow-md" />
          <div className="flex items-center gap-1.5 -mt-1.5 mb-1.5">
            <span className="text-[#1E3A8A] text-[12px] font-black tracking-[0.25em] uppercase">
              Fantasy Sports
            </span>
          </div>

          {/* PICK YOUR STOCK Header Title */}
          {(!canSubmit || viewMode === 'list') && (
            <h2 className="text-[22px] font-black uppercase tracking-tight italic select-none">
              <span className="text-[#101828]">PICK YOUR </span>
              <span className="text-[#2563EB]">STOCK</span>
            </h2>
          )}

          {/* Replicated TEAM PITCH VIEW Subheader with Football emoji */}
          {viewMode === 'pitch' && totalSlots < 11 && (
            <div className="flex items-center gap-1.5 mt-1.5 select-none bg-white/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/50 shadow-sm animate-in fade-in slide-in-from-top-1 duration-200">
              <span className="text-xs">🏈</span>
              <span className="text-[#101828] text-[10px] font-black tracking-wider uppercase">
                TEAM PITCH VIEW
              </span>
            </div>
          )}
        </div>
      </div>

      {viewMode === 'list' ? (
        <>
          {/* ─── Premium Sub-header Stats Card ─── */}
          <div className="relative z-10 mx-4 bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white/80 flex items-center justify-between shadow-premium-md hover:shadow-premium-lg transition-all duration-200">
            <div className="flex-1 text-center">
              <span className="text-xl font-extrabold text-[#101828] block leading-none">
                {totalSlots}/{maxSlots}
              </span>
              <span className="text-[10px] text-[#2563EB] font-bold block mt-1.5 uppercase tracking-wider">
                Stocks
              </span>
            </div>
            
            <div className="w-px h-8 bg-gray-300" />
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <div className="w-4 h-4 rounded-full bg-[#F5A400] flex items-center justify-center text-[10px] text-white font-extrabold shadow-sm shadow-[#F5A400]/25">
                  🪙
                </div>
                <span className="text-xl font-extrabold text-[#101828]">
                  {(850 - totalCoinsUsed).toFixed(0)}
                </span>
              </div>
              <span className="text-[10px] text-[#667085] font-bold block mt-1.5 uppercase tracking-wider">
                Credits left
              </span>
            </div>
          </div>

          {/* Selected Team List (Floating summary if active) */}
          {selectedItems.length > 0 && (
            <div className="relative z-10 mx-4 mt-3 bg-white rounded-2xl p-4 shadow-premium-md border border-[#E5E7EB]/60">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-extrabold text-[#101828]">Selected Predictions</h2>
                <span className="text-xs font-bold text-[#667085] bg-[#F4F7FB] px-2.5 py-1 rounded-full">
                  {totalCoinsUsed.toLocaleString()} Coins used
                </span>
              </div>
              <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F9FAFB] rounded-xl p-2.5 flex items-center gap-3 border border-[#E5E7EB]/40"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#E5E7EB]/30">
                      <span className="text-[10px] font-black text-[#2563EB]">
                        {item.companyName.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-extrabold text-[#101828] truncate">{item.companyName}</p>
                        <span
                          className={`px-1.5 py-0.25 rounded text-[8px] font-black tracking-wide leading-none ${
                            item.action === 'BUY'
                              ? 'bg-[#E6F7F0] text-[#14B86A]'
                              : 'bg-[#FFF0F0] text-[#E5484D]'
                          }`}
                        >
                          {item.action}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.companyId, item.action, item.quantity - 1)}
                        className="w-6 h-6 rounded-md bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F4F7FB] active:scale-90 transition-all"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-[#101828]" />
                      </button>
                      <span className="text-xs font-extrabold text-[#101828] min-w-[16px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.companyId, item.action, item.quantity + 1)}
                        disabled={slotsLeft <= 0}
                        className="w-6 h-6 rounded-md bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F4F7FB] active:scale-90 transition-all disabled:opacity-40"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-[#101828]" />
                      </button>
                      <button
                        onClick={() => removeItem(item.companyId, item.action)}
                        className="w-6 h-6 rounded-md bg-white border border-[#E5E7EB] flex items-center justify-center hover:bg-[#FFF0F0] active:scale-90 transition-all ml-1"
                        aria-label="Remove item"
                      >
                        <X className="w-3 h-3 text-[#E5484D]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Search Box */}
          <div className="relative z-10 mx-4 mt-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#9CA3AF]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search company"
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#E5E7EB]/80 rounded-full text-sm text-[#101828] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all shadow-sm font-sans"
              />
            </div>
          </div>

          {/* ─── Replicated Clean Company Cards List ─── */}
          <div className="flex-1 bg-white rounded-t-3xl shadow-[0_-4px_24px_rgba(0,0,0,0.03)] border-t border-[#E5E7EB]/80 mt-4 px-5 pt-5 overflow-y-auto pb-32 space-y-2.5">
            <h3 className="text-xs font-extrabold text-[#667085] uppercase tracking-wider mb-2">Stocks</h3>
            {filteredCompanies.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-full pl-3 pr-4 py-2 border border-[#E5E7EB]/70 flex items-center justify-between shadow-premium-sm hover:shadow-premium-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Logo + Company Name */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F4F7FB] flex items-center justify-center flex-shrink-0">
                    <CompanyLogo name={company.name} className="w-7 h-7" />
                  </div>
                  <h3 className="text-[14px] font-extrabold text-[#111827]">{company.name}</h3>
                </div>

                {/* Thin Outline Blue Plus Button */}
                <button
                  onClick={() => setSelectedCompany(company)}
                  className="w-6 h-6 rounded-full border border-[#2563EB] text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB]/5 active:scale-90 transition-all flex-shrink-0"
                  aria-label={`Add ${company.name}`}
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            ))}
            
            {filteredCompanies.length === 0 && (
              <EmptyState
                title="No companies found"
                message="Try another search or reset predictions to make changes."
              />
            )}
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col pb-36 relative z-10 bg-transparent">
          {/* Row 1: 2 Slots (Attackers) rendered outside the curved field boundary */}
          <div className="flex items-center justify-center gap-6 px-8 py-3.5 relative z-20">
            {[0, 1].map((slotIdx) => {
              const item = selectedItems[slotIdx];
              return (
                <div key={slotIdx} className="flex flex-col items-center gap-1.5 min-w-[125px]">
                  {item ? (
                    <div className="bg-white rounded-full flex items-center gap-1.5 pl-1.5 pr-2.5 py-1.5 shadow-md border border-white transform hover:scale-105 active:scale-95 transition-all select-none hover:shadow-lg">
                      <CompanyLogo name={item.companyName} className="w-7 h-7" />
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-black text-[#101828] leading-none max-w-[65px] truncate whitespace-nowrap">{item.companyName}</span>
                        <span className={`text-[7px] font-black tracking-wide leading-none mt-0.5 whitespace-nowrap ${item.action === 'BUY' ? 'text-[#14B86A]' : 'text-[#E5484D]'}`}>
                          {item.action === 'BUY' ? '🟢 BUY' : '🔴 SELL'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => setViewMode('list')}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#101828] hover:bg-gray-50 active:scale-90 transition-all shadow-md border-2 border-white font-black text-base select-none animate-pulse"
                      >
                        +
                      </button>
                      <div className="w-12 h-3.5 bg-white/20 border border-white/10 rounded-full shadow-sm flex items-center justify-center">
                        <span className="text-[7px] font-bold text-white/50">-</span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Beautiful Curved Football Pitch Field Container */}
          <div 
            className="flex-1 relative overflow-hidden flex flex-col justify-around py-3 rounded-t-[48px] border-t border-white/15 bg-transparent"
            style={{
              backgroundImage: 'radial-gradient(circle at top, rgba(255,255,255,0.15) 0%, transparent 60%)'
            }}
          >
            {/* Crisp White Pitch Markings SVG Overlay */}
            <svg className="absolute inset-0 w-full h-full stroke-white/15 fill-none pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Curved Top Border boundary */}
              <path d="M 2 10 Q 50 0 98 10" strokeWidth="0.5" />
              {/* Main field border lines */}
              <line x1="2" y1="10" x2="2" y2="98" strokeWidth="0.5" />
              <line x1="98" y1="10" x2="98" y2="98" strokeWidth="0.5" />
              <line x1="2" y1="98" x2="98" y2="98" strokeWidth="0.5" />
              {/* Center line */}
              <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.5" />
              {/* Center circle */}
              <circle cx="50" cy="50" r="15" strokeWidth="0.5" />
              {/* Center point spot */}
              <circle cx="50" cy="50" r="0.8" fill="white" opacity="0.4" />
              {/* Top Penalty Area */}
              <path d="M 20 10 L 20 22 L 80 22 L 80 10" strokeWidth="0.5" />
              {/* Bottom Penalty Area */}
              <rect x="20" y="83" width="60" height="15" strokeWidth="0.5" />
              {/* Bottom Goal Area */}
              <rect x="35" y="93" width="30" height="5" strokeWidth="0.5" />
            </svg>

            {/* Row 2: 3 Slots (Midfielders) */}
            <div className="flex items-center justify-around px-2 relative z-10">
              {[2, 3, 4].map(renderPitchSlot)}
            </div>

            {/* Row 3: 2 Slots */}
            <div className="flex items-center justify-around px-12 relative z-10">
              {[5, 6].map(renderPitchSlot)}
            </div>

            {/* Row 4: 1 Slot */}
            <div className="flex items-center justify-center relative z-10">
              {[7].map(renderPitchSlot)}
            </div>

            {/* Row 5: 2 Slots */}
            <div className="flex items-center justify-around px-8 relative z-10">
              {[8, 9].map(renderPitchSlot)}
            </div>

            {/* Row 6: 1 Slot */}
            <div className="flex items-center justify-center relative z-10">
              {[10].map(renderPitchSlot)}
            </div>
          </div>
        </div>
      )}

      {/* ─── Replicated Rounded Floating Preview & Submit Footer ─── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full max-w-[480px] px-5 z-40">
        <div className="w-full bg-[#180F69] rounded-[24px] p-4 flex flex-col gap-3 shadow-[0_12px_36px_-6px_rgba(24,15,105,0.35),0_4px_16px_rgba(24,15,105,0.15)]">
          
          {viewMode === 'list' ? (
            <>
              {/* Typo-matched small subtitle */}
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider block text-left">
                Team preview and sumbit
              </span>
              
              <div className="flex items-center justify-between gap-3">
                {/* List View / Preview Toggle Button */}
                <button
                  onClick={() => setViewMode('pitch')}
                  className="flex-1 py-3 bg-white hover:bg-gray-100 active:scale-95 text-[#101828] text-xs font-black rounded-full transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Eye className="w-4 h-4 text-[#101828]" />
                  Pitch View
                </button>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className={`flex-1 py-3 text-white text-xs font-black rounded-full transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                    canSubmit
                      ? 'bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95'
                      : 'bg-white/10 text-white/30 cursor-not-allowed'
                  }`}
                >
                  Submit
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          ) : (
            /* Premium Pitch View Stats Card (renders ALWAYS in pitch view) */
            <div className="flex items-center justify-between py-1">
              {/* Left: Stocks Count */}
              <div className="flex-1 text-center">
                <span className="text-white text-base font-black block leading-none">
                  {totalSlots}/11
                </span>
                <span className="text-[9px] text-white/50 font-bold block mt-1 uppercase tracking-wider">
                  Stocks
                </span>
              </div>

              {/* Divider */}
              <div className="h-7 w-px bg-white/15" />

              {/* Middle: Credits Balance */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center gap-1 leading-none">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F5A400] flex items-center justify-center text-[8px] text-white font-extrabold shadow-sm">
                    🪙
                  </div>
                  <span className="text-white text-base font-black">
                    {(850 - totalCoinsUsed).toFixed(1)}
                  </span>
                </div>
                <span className="text-[9px] text-white/50 font-bold block mt-1 uppercase tracking-wider">
                  Credits left
                </span>
              </div>

              {/* Divider */}
              <div className="h-7 w-px bg-white/15" />

              {/* Right: Toggle back to List View if not complete, otherwise Submit Team */}
              <div className="flex-1 flex justify-center">
                {totalSlots < 11 ? (
                  <button
                    onClick={() => setViewMode('list')}
                    className="px-6 py-2.5 bg-[#2563EB] text-white text-[11px] font-black rounded-full shadow-md flex items-center gap-1.5 hover:bg-[#1D4ED8] active:scale-95 transition-all relative pr-10"
                  >
                    <span>List View</span>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#2563EB]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] stroke-[3px]" />
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2.5 bg-[#2563EB] text-white text-[11px] font-black rounded-full shadow-md flex items-center gap-1.5 hover:bg-[#1D4ED8] active:scale-95 transition-all relative pr-10"
                  >
                    <span>Submit Team</span>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#E5484D] flex items-center justify-center text-white">
                      <ArrowRight className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    </div>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedCompany && (
        <BuySellSheet
          company={selectedCompany}
          eventId={eventId}
          maxQuantity={slotsLeft}
          onConfirm={handleConfirmPrediction}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
}
