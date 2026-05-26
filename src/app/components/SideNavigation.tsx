import { X, Home, TrendingUp, Trophy, Target, Coins, History, Gift, User, CheckCircle, HelpCircle, Settings, Info, LogOut } from 'lucide-react';
import { toast } from 'sonner';

interface SideNavigationProps {
  onClose: () => void;
  onNavigate: (screen: string) => void;
  isKycCompleted?: boolean;
  onCompleteKyc?: () => void;
}

export function SideNavigation({ onClose, onNavigate, isKycCompleted = false, onCompleteKyc }: SideNavigationProps) {
  const handleNavigate = (screen: string) => {
    onNavigate(screen);
  };

  return (
    <div className="absolute inset-0 z-50 flex">
      {/* Overlay */}
      <div className="flex-1 bg-black/50" onClick={onClose}></div>

      {/* Side Panel */}
      <div className="w-80 bg-white shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-6 py-6 text-white">
          <button onClick={onClose} className="mb-4">
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <span className="text-xl font-bold text-[#2563EB]">LO</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">Hello, Lockie</h2>
              <p className="text-sm opacity-90">KR11 account active</p>
            </div>
          </div>

          {/* Coin Balance Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Coin Balance</span>
              <Coins className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold mb-3">850 Coins</p>
            <button 
              onClick={() => {
                onClose();
                toast.info("Add Coins (Demo Mode)", { description: "Fantasy coins are allocated for prediction gameplay. Purchase is mock-only." });
              }}
              className="w-full py-2 bg-[#F5A400] text-white text-sm font-semibold rounded-full hover:bg-[#E69500] transition-colors"
            >
              Add Coins
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-4 font-sans">
          <MenuItem icon={<Home />} label="Home" onClick={() => handleNavigate('home')} />
          <MenuItem icon={<TrendingUp />} label="Know Your Company" onClick={() => handleNavigate('know-your-company')} />
          <MenuItem icon={<Target />} label="My Teams" onClick={() => {
            onClose();
            toast.info("My Teams (Demo)", { description: "View your joined prediction contests and teams here. Coming soon!" });
          }} />
          <MenuItem icon={<Trophy />} label="Leaderboard" onClick={() => handleNavigate('leaderboard')} />
          <MenuItem icon={<Target />} label="Challenges" onClick={() => {
            onClose();
            toast.info("Challenges (Demo)", { description: "Daily prediction challenges are coming soon!" });
          }} />

          <div className="h-px bg-[#E5E7EB] my-2"></div>

          <MenuItem icon={<Coins />} label="Coin Wallet" onClick={() => handleNavigate('coin-wallet')} />
          <MenuItem icon={<History />} label="Coin History" onClick={() => {
            onClose();
            toast.info("Coin History (Demo)", { description: "Historical coin transactions will appear here. Coming soon!" });
          }} />
          <MenuItem icon={<Gift />} label="Refer and Earn" onClick={() => {
            onClose();
            toast.info("Refer and Earn", { description: "Invite friends to KR11 and get 50 bonus coins when they sign up!" });
          }} />

          <div className="h-px bg-[#E5E7EB] my-2"></div>

          <MenuItem icon={<User />} label="Edit Profile" onClick={() => handleNavigate('edit-profile')} />
          {!isKycCompleted && (
            <MenuItem icon={<CheckCircle />} label="Complete KYC" onClick={() => {
              onClose();
              if (onCompleteKyc) onCompleteKyc();
              toast.success("KYC Verified", { description: "Your account is fully active for demo gameplay." });
            }} />
          )}
          <MenuItem icon={<HelpCircle />} label="How to Play" onClick={() => {
            onClose();
            toast.info("How to Play", { description: "Build an 11-slot team, set BUY/SELL predictions, and score points based on real market performance." });
          }} />
          <MenuItem icon={<Settings />} label="Settings" onClick={() => handleNavigate('settings')} />
          <MenuItem icon={<HelpCircle />} label="Help Center" onClick={() => {
            onClose();
            toast.info("Help Center (Demo)", { description: "Need support? Contact support@kr11-demo-fantasy.com" });
          }} />
          <MenuItem icon={<Info />} label="FAQs" onClick={() => {
            onClose();
            toast.info("FAQs (Demo)", { description: "Browse commonly asked questions in the user dashboard." });
          }} />
          <MenuItem icon={<Info />} label="About Us" onClick={() => {
            onClose();
            toast.info("About KR11", { description: "KR11 is a mobile-first fantasy stock prediction learning experience." });
          }} />

          <div className="h-px bg-[#E5E7EB] my-2"></div>

          <MenuItem icon={<LogOut />} label="Logout" onClick={() => handleNavigate('login')} danger />
        </div>
      </div>
    </div>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}

function MenuItem({ icon, label, onClick, danger }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-6 py-3 hover:bg-[#F4F7FB] transition-colors ${
        danger ? 'text-[#E5484D]' : 'text-[#101828]'
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
