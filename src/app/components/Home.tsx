import { Bell, Menu, User, ChevronRight, Coins } from 'lucide-react';
import { toast } from 'sonner';
import testImg from '../../imports/test.png';
import onedayImg from '../../imports/oneday.png';
import t20Img from '../../imports/t20.png';
import superoverImg from '../../imports/superover.png';
import bowloutImg from '../../imports/bowlout.png';
import welcomeGift from '../../imports/welcome_gift.png';
import logoImg from '../../imports/logo.png';
import { EmptyState, FantasyDisclaimer, AppHeader, BottomNav, CoinBadge } from '../../components/common';

interface HomeProps {
  onPlayEvent: (eventName: string) => void;
  onOpenSideNav: () => void;
  onOpenCoinWallet: () => void;
  onOpenNotifications: () => void;
  onKnowYourCompany: () => void;
  onOpenLeaderboard: () => void;
  onOpenSettings: () => void;
  isKycCompleted?: boolean;
  onCompleteKyc?: () => void;
}

const availableEvents = [
  {
    image: testImg,
    title: 'Runs over 5 trading days',
    description: 'Grow your portfolio over 5 trading days',
    buttonText: 'Play',
    status: 'LIVE' as const,
  },
  {
    image: onedayImg,
    title: '6-Hour Market Challenge',
    description: 'High return challenge in 6 hours',
    buttonText: 'Trade now',
    status: 'UPCOMING' as const,
  },
  {
    image: t20Img,
    title: 'T20 Challenger Session',
    description: 'Today 7:30pm onwards',
    buttonText: 'Trade now',
    status: 'UPCOMING' as const,
  },
  {
    image: superoverImg,
    title: 'Super Over',
    description: 'Top 3 Highest performer win coin rewards Results announced at EOD',
    buttonText: 'Trade now',
    status: 'UPCOMING' as const,
  },
  {
    image: bowloutImg,
    title: 'Bowl Out',
    badgeText: 'Reverse challenge',
    description: 'Worst 3 performers win coin Reward Results announced at EOD',
    buttonText: 'Trade now',
    status: 'UPCOMING' as const,
  },
];

export function Home({ 
  onPlayEvent, 
  onOpenSideNav, 
  onOpenCoinWallet, 
  onOpenNotifications, 
  onKnowYourCompany, 
  onOpenLeaderboard,
  onOpenSettings,
  isKycCompleted = false,
  onCompleteKyc
}: HomeProps) {

  const handleEventClick = (title: string, buttonText: string) => {
    if (buttonText === 'Play') {
      onPlayEvent(title);
    } else {
      toast.info(`${title} is locked`, {
        description: "This prediction event is currently locked. Play 'Runs over 5 trading days' to start!",
      });
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB]">
      {/* Header */}
      <AppHeader
        leftContent={
          <button
            onClick={onOpenSideNav}
            className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center hover:bg-[#E5E7EB] active:scale-95 transition-all"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-[#101828]" />
          </button>
        }
        rightContent={
          <>
            <button
              onClick={onOpenNotifications}
              className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center relative hover:bg-[#E5E7EB] active:scale-95 transition-all"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-[#101828]" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#E5484D] rounded-full ring-2 ring-white animate-pulse-dot" />
            </button>
            <CoinBadge balance={850} onClick={onOpenCoinWallet} variant="light" />
          </>
        }
      />

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Welcome Bonus Banner */}
        <div className="mx-4 mt-3 rounded-[20px] relative overflow-hidden min-h-[120px] flex items-center shadow-premium-lg border border-white/10" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 25%, #A78BFA 45%, #E879A8 65%, #F59E0B 85%, #FB923C 100%)' }}>
          {/* Confetti Dots */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute w-2 h-2 rounded-full bg-yellow-300 top-[15%] left-[8%] opacity-80" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-300 top-[25%] left-[22%] opacity-70" />
            <div className="absolute w-1 h-1 rounded-full bg-pink-300 top-[70%] left-[12%] opacity-60" />
            <div className="absolute w-2 h-2 rounded-full bg-orange-300 top-[80%] left-[30%] opacity-70" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-300 top-[20%] left-[40%] opacity-60" />
            <div className="absolute w-1 h-1 rounded-full bg-white top-[55%] left-[5%] opacity-50" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-yellow-200 top-[40%] left-[50%] opacity-50" />
            <div className="absolute w-2 h-2 rounded-full bg-blue-200 top-[10%] left-[55%] opacity-40" />
            <div className="absolute w-1 h-1 rounded-full bg-red-300 top-[85%] left-[45%] opacity-60" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-200 top-[65%] left-[55%] opacity-50" />
          </div>

          <div className="flex-1 pr-[140px] z-10 relative pl-5 py-4">
            <h2 className="text-[17px] font-extrabold text-white mb-0.5 tracking-tight drop-shadow-sm">Welcome Bonus</h2>
            <p className="text-[13px] text-white/90 mb-3 font-medium">
              Get 100 free coins!
            </p>
            <button
              onClick={() => toast.success("100 Coins Claimed!", { description: "Your demo coin balance has been updated." })}
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#22C55E] text-white text-xs font-bold rounded-full hover:bg-[#16A34A] active:scale-95 transition-all shadow-md shadow-black/10"
            >
              Claim now
              <span className="text-[10px]">→</span>
            </button>
          </div>
          <div className="absolute right-[-8px] top-[-8px] bottom-[-8px] w-[160px] flex items-center justify-center z-10 pointer-events-none">
            <img src={welcomeGift} alt="Welcome Gift" className="h-full w-auto object-contain transform scale-[1.15]" />
          </div>
        </div>

        {/* KYC Card */}
        {!isKycCompleted && (
          <div className="mx-4 mt-3 bg-white rounded-2xl p-4 shadow-premium-md border border-[#E5E7EB]/60 hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4D8] flex items-center justify-center flex-shrink-0 border border-[#FFE7A8]">
                <User className="w-5 h-5 text-[#F5A400]" />
              </div>
              <div className="flex-1 min-w-0 relative pr-20">
                <p className="text-sm font-bold text-[#101828] mb-0.5">
                  Your KR11 is active.
                </p>
                <p className="text-xs text-[#667085] leading-relaxed mb-1">
                  Complete your KYC to play.
                </p>
                <p className="text-[10px] text-[#667085] leading-relaxed">
                  Win coin rewards, and more.
                </p>
                <button 
                  onClick={() => {
                    if (onCompleteKyc) onCompleteKyc();
                    toast.success("KYC Verified", { description: "Your account is fully active for demo gameplay." });
                  }}
                  className="absolute right-0 top-0 px-3.5 py-1.5 bg-[#FF6B35] text-white text-xs font-extrabold rounded-full hover:opacity-90 active:scale-95 transition-all shadow-sm shadow-[#FF6B35]/15 flex items-center gap-0.5"
                >
                  Complete KYC <span className="text-[10px]">→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Live Events Section */}
        <div className="px-4 mt-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-extrabold text-[#101828]">Live Events</h3>
            <button
              onClick={() => toast.info("All Events", { description: "You are viewing all available live stock fantasy events." })}
              className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-0.5"
            >
              View all <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {availableEvents.length === 0 ? (
            <EmptyState
              title="No active events"
              message="New fantasy prediction events will appear here soon."
            />
          ) : (
            availableEvents.map((event) => (
              <EventCard
                key={event.title}
                image={event.image}
                title={event.title}
                badgeText={event.badgeText}
                description={event.description}
                buttonText={event.buttonText}
                status={event.status}
                onPlay={() => handleEventClick(event.title, event.buttonText)}
              />
            ))
          )}
        </div>


      </div>

      {/* Bottom Navigation */}
      <BottomNav
        active="home"
        onNavigate={(tab) => {
          if (tab === 'leaderboard') {
            onOpenLeaderboard();
          } else if (tab === 'settings') {
            onOpenSettings();
          }
        }}
      />
    </div>
  );
}

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  badgeText?: string;
  status: 'LIVE' | 'UPCOMING';
  onPlay: () => void;
}

function EventCard({ image, title, description, buttonText, badgeText, status, onPlay }: EventCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-premium-md border border-[#E5E7EB]/60 mb-3 flex items-center gap-3.5 hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-200">
      <div className="w-[72px] h-[72px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#F4F7FB] flex items-center justify-center border border-[#E5E7EB]/40">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0 pr-1">
        <h3 className="text-sm font-extrabold text-[#101828] mb-0.5 truncate flex items-center gap-1.5">
          {title}
        </h3>
        {badgeText && (
          <span className="inline-block text-[9px] font-black text-[#E5484D] bg-[#FFF0F0] border border-[#E5484D]/25 px-1.5 py-0.25 rounded-md mb-1 uppercase tracking-wider leading-none">
            {badgeText}
          </span>
        )}
        <p className="text-xs text-[#667085] leading-normal line-clamp-2">{description}</p>
      </div>
      <button
        onClick={onPlay}
        className="w-24 py-1.5 bg-[#FF6B35] text-white text-xs font-extrabold rounded-full hover:opacity-90 active:scale-95 transition-all shadow-sm shadow-[#FF6B35]/15 flex-shrink-0 flex items-center justify-center"
      >
        {buttonText}
      </button>
    </div>
  );
}
