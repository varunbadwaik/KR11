import { Home, Trophy, Settings } from 'lucide-react';

type NavTab = 'home' | 'leaderboard' | 'settings';

interface BottomNavProps {
  active?: NavTab;
  onNavigate: (tab: NavTab) => void;
}

const tabs: { id: NavTab; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function BottomNav({ active = 'home', onNavigate }: BottomNavProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] z-40">
      <div className="bg-white/90 backdrop-blur-lg border border-white/60 rounded-[24px] flex items-center justify-around px-6 py-2.5 shadow-premium-lg">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? 'bg-[#F5A400] text-white w-11 h-11 rounded-2xl shadow-md shadow-[#F5A400]/25'
                  : 'text-[#667085] w-11 h-11 rounded-2xl hover:bg-[#F4F7FB] active:scale-90'
              }`}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                className="w-5.5 h-5.5"
                strokeWidth={isActive ? 2.5 : 2}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
