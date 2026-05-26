import { Shield, Users, Trophy, ChevronRight, Lock, Gift } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import stadiumBg from '../../imports/stadium_background.png';
import logoImg from '../../imports/logo.png';
import welcomeGift from '../../imports/welcome_gift.png';

interface LoginScreenProps {
  onContinue: () => void;
}

export function LoginScreen({ onContinue }: LoginScreenProps) {
  const [mobile, setMobile] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showReferralInput, setShowReferralInput] = useState(false);

  const isValidMobile = /^\d{10}$/.test(mobile);

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB] overflow-y-auto relative">
      {/* Stadium background hero — matches reference design 1:1 */}
      <div 
        className="absolute top-0 inset-x-0 h-[48%] bg-cover bg-bottom flex flex-col items-center justify-start text-white overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.25) 50%, rgba(244,247,251,1) 96%), url(${stadiumBg})` }}
      >
        {/* Shield logo — large and prominent */}
        <div className="flex flex-col items-center mt-6 select-none relative">
          {/* Radial soft white glow behind logo */}
          <div className="absolute w-36 h-36 bg-white/30 rounded-full blur-3xl -translate-y-4 pointer-events-none" />
          <img src={logoImg} alt="KR11 Logo" className="h-20 object-contain relative z-10 drop-shadow-[0_4px_20px_rgba(255,255,255,0.35)]" />
        </div>

        {/* Brand text: KR11 FANTASY SPORTS */}
        <div className="text-center mt-2.5 select-none relative z-10">
          <h2 className="text-xl font-black tracking-wide leading-none">
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>KR</span>
            <span className="text-[#E5484D] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>11</span>
          </h2>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/90 mt-1" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
            Fantasy Sports
          </p>
        </div>

        {/* Tagline: CREATE YOUR TEAM / WIN BIG */}
        <div className="text-center mt-4 px-4 select-none relative z-10">
          <h1 className="text-sm font-bold uppercase tracking-wide text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            CREATE YOUR TEAM
          </h1>
          <h2 className="text-3xl tracking-tight mt-0.5 leading-none font-black uppercase italic text-white" style={{ textShadow: '0 3px 14px rgba(0,0,0,0.5)' }}>
            WIN <span className="text-white">BIG</span>
          </h2>
        </div>

        {/* Trust Badges — white rounded cards */}
        <div className="flex gap-4 mt-5 z-10 relative select-none px-6">
          {[
            { icon: Shield, label: '100% Secure', iconColor: 'text-[#2563EB]' },
            { icon: Users, label: '1 Crore+ Users', iconColor: 'text-[#14B86A]' },
            { icon: Trophy, label: 'Big Winnings Everyday', iconColor: 'text-[#F5A400]' },
          ].map(({ icon: Icon, label, iconColor }) => (
            <div key={label} className="flex flex-col items-center gap-1 flex-1 min-w-[70px]">
              <div className="w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-white/60 transition-transform active:scale-95 duration-100">
                <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={2.5} />
              </div>
              <span className="text-[7.5px] font-extrabold text-white text-center leading-tight max-w-[70px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Login Bottom Container */}
      <div className="flex-1 flex flex-col items-center justify-end px-5 pb-6 pt-[42%] relative z-10">
        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-[#E5E7EB]/70">
          
          <h3 className="text-base font-black text-[#101828] mb-0.5 text-center select-none">Welcome Back!</h3>
          <p className="text-2xs font-semibold text-[#667085] mb-4 text-center select-none">Login or sign-up to continue</p>

          {/* Mobile Input */}
          <div className="mb-4">
            <div className="flex items-center border border-[#E5E7EB] rounded-full px-3.5 bg-white focus-within:ring-2 focus-within:ring-[#2563EB]/20 focus-within:border-[#2563EB] transition-all shadow-sm">
              <div className="flex items-center gap-1 text-xs font-black text-[#101828] py-3 pr-3.5 border-r border-[#E5E7EB] select-none cursor-pointer">
                <span>+91</span>
                <span className="text-[8px] text-[#667085] ml-0.5 leading-none">▼</span>
              </div>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, '');
                  if (val.startsWith('91') && val.length > 10) {
                    val = val.substring(2);
                  }
                  val = val.slice(0, 10);
                  setMobile(val);
                }}
                placeholder="Enter your mobile number"
                maxLength={15}
                inputMode="numeric"
                autoComplete="tel"
                className="flex-1 pl-3.5 py-3 bg-transparent text-xs text-[#101828] placeholder:text-[#9CA3AF] focus:outline-none font-semibold font-sans"
              />
            </div>
          </div>

          {/* Referral Code Field Toggle */}
          <div className="mb-4 select-none">
            {!showReferralInput ? (
              <button 
                onClick={() => setShowReferralInput(true)}
                className="text-[10px] font-bold text-[#2563EB] hover:underline flex items-center gap-1 ml-1"
              >
                <Gift className="w-3.5 h-3.5" /> Have an Invite/Referral Code?
              </button>
            ) : (
              <div className="flex items-center border border-[#E5E7EB] rounded-full px-3.5 bg-[#F9FAFB] focus-within:ring-2 focus-within:ring-[#2563EB]/20 focus-within:border-[#2563EB] transition-all shadow-sm">
                <Gift className="w-3.5 h-3.5 text-[#2563EB] mr-2 flex-shrink-0" />
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                  placeholder="Enter Referral Code"
                  maxLength={12}
                  className="flex-1 py-2.5 bg-transparent text-xs text-[#101828] placeholder:text-[#9CA3AF] focus:outline-none font-bold uppercase"
                />
                <button 
                  onClick={() => setShowReferralInput(false)}
                  className="text-[10px] font-bold text-[#E5484D] hover:underline ml-2"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (showReferralInput && referralCode.trim()) {
                toast.success("Referral Code Applied Successfully! ⚡", {
                  description: "You've unlocked 50 extra invite coins."
                });
              }
              onContinue();
            }}
            disabled={!isValidMobile}
            className="w-full py-3.5 bg-gradient-to-r from-[#2563EB] to-[#E5484D] text-white text-xs font-black rounded-full hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 uppercase tracking-wider"
          >
            Continue
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-[#E5E7EB]/70" />
            <span className="text-[10px] text-[#9CA3AF] font-bold">OR</span>
            <div className="flex-1 h-px bg-[#E5E7EB]/70" />
          </div>

          {/* Social Buttons */}
          <button 
            onClick={() => {
              toast.success("Google Login Authorized (Demo Mode)");
              onContinue();
            }}
            className="w-full py-3 bg-white border border-[#E5E7EB] text-[#101828] text-[11px] font-bold rounded-full hover:bg-[#F9FAFB] active:scale-[0.98] transition-all mb-2.5 flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
          <button 
            onClick={() => {
              toast.success("Apple Login Authorized (Demo Mode)");
              onContinue();
            }}
            className="w-full py-3 bg-white border border-[#E5E7EB] text-[#101828] text-[11px] font-bold rounded-full hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-[#101828]" viewBox="0 0 24 24">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.84 9.28 4.81C10.56 4.79 11.78 5.68 12.57 5.68C13.36 5.68 14.85 4.62 16.4 4.77C17.07 4.8 18.87 5.04 20.01 6.7C19.89 6.78 17.62 8.11 17.64 10.94C17.66 14.32 20.55 15.41 20.58 15.43C20.56 15.5 20.13 16.98 19.08 18.5L18.71 19.5Z"/>
            </svg>
            Continue with Apple
          </button>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-2.5 mt-5 px-3">
            <div className="w-6.5 h-6.5 rounded-full bg-[#101828] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
              <Lock className="w-3 h-3 text-white fill-white" />
            </div>
            <div className="text-[10px] text-[#101828] font-bold leading-normal select-none text-left">
              <p>We value your <span className="text-[#2563EB] cursor-pointer hover:underline">policy</span>.</p>
              <p>Your data is <span className="text-[#2563EB] cursor-pointer hover:underline">safe</span> with us.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-[9px] text-center text-[#667085] font-semibold mt-5 max-w-md px-4 leading-relaxed select-none">
          <p className="mb-0.5">By continuing, you agree to our</p>
          <div className="flex items-center justify-center gap-1.5 font-bold text-[#2563EB]">
            <button 
              onClick={() => toast.info("Terms & Conditions")}
              className="hover:underline focus:outline-none"
            >
              Terms & Conditions
            </button>
            <span className="text-[#667085] font-normal">|</span>
            <button 
              onClick={() => toast.info("Privacy Policy")}
              className="hover:underline focus:outline-none"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
