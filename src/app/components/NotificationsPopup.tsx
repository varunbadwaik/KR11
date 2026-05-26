import { X, Gift, Trophy, AlertCircle, Coins } from 'lucide-react';
import { mockNotifications } from '../../mocks';
import { EmptyState } from '../../components/common';

interface NotificationsPopupProps {
  onClose: () => void;
}

export function NotificationsPopup({ onClose }: NotificationsPopupProps) {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-end z-50">
      <div className="bg-white w-full rounded-t-3xl p-6 animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#101828]">Offers & Rewards</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F4F7FB] flex items-center justify-center"
          >
            <X className="w-5 h-5 text-[#101828]" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {mockNotifications.length === 0 ? (
            <EmptyState
              title="No notifications"
              message="Coin rewards, results, and fantasy prediction updates will appear here."
            />
          ) : (
            mockNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                icon={getNotificationIcon(notification.type)}
                title={notification.title}
                description={notification.message}
                time={notification.createdAt}
                unread={!notification.read}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function getNotificationIcon(type: string) {
  switch (type) {
    case 'RESULT':
    case 'TEAM':
      return <Trophy className="w-5 h-5 text-[#2563EB]" />;
    case 'REWARD':
    case 'REFERRAL':
      return <Gift className="w-5 h-5 text-[#14B86A]" />;
    case 'EVENT':
      return <AlertCircle className="w-5 h-5 text-[#F5A400]" />;
    case 'COINS':
    default:
      return <Coins className="w-5 h-5 text-[#F5A400]" />;
  }
}

interface NotificationItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
}

function NotificationItem({ icon, title, description, time, unread }: NotificationItemProps) {
  return (
    <div className={`rounded-2xl p-4 ${unread ? 'bg-[#EAF2FF]' : 'bg-[#F4F7FB]'}`}>
      <div className="flex gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          unread ? 'bg-white' : 'bg-white/50'
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-sm font-bold text-[#101828]">{title}</h3>
            {unread && <div className="w-2 h-2 rounded-full bg-[#E5484D] flex-shrink-0 mt-1"></div>}
          </div>
          <p className="text-xs text-[#667085] mb-1">{description}</p>
          <p className="text-xs text-[#667085]">{time}</p>
        </div>
      </div>
    </div>
  );
}
