import { X } from 'lucide-react';

interface CreateTeamPopupProps {
  eventName: string;
  onCreateTeam: () => void;
  onClose: () => void;
}

export function CreateTeamPopup({ eventName, onCreateTeam, onClose }: CreateTeamPopupProps) {
  const getEventMessage = () => {
    switch (eventName) {
      case 'Test Match':
        return 'Create your team to join the Test Match.';
      case 'One Day':
        return 'Create your team to join the One Day challenge.';
      case 'T20':
        return 'Create your team to join the T20 session.';
      case 'Super Over':
        return 'Create your team to compete for the Top 3 rewards. Results will be announced at EOD.';
      case 'Bowl Out':
        return 'Create your team to join Bowl Out. The worst 3 performers win coin rewards. Results will be announced at EOD.';
      default:
        return 'Create your team to join this event.';
    }
  };

  const getEventBadge = () => {
    switch (eventName) {
      case 'Test Match':
        return '5 Trading Days';
      case 'One Day':
        return '6 Hours';
      case 'T20':
        return '3 Hour Sessions';
      case 'Super Over':
        return 'Results at EOD';
      case 'Bowl Out':
        return 'Reverse Challenge';
      default:
        return '';
    }
  };

  return (
    <div className="absolute inset-0 bg-black/50 flex items-end z-50">
      <div className="bg-white w-full rounded-t-3xl p-6 animate-in slide-in-from-bottom duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F4F7FB] flex items-center justify-center"
        >
          <X className="w-5 h-5 text-[#101828]" />
        </button>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-[#EAF2FF] text-[#2563EB] text-xs font-semibold rounded-full mb-4">
            {getEventBadge()}
          </span>
          <h2 className="text-2xl font-bold text-[#101828] mb-2">Hello, Lockie</h2>
          <p className="text-base text-[#101828] mb-3">{getEventMessage()}</p>
          <p className="text-sm text-[#667085]">
            Build your team with 11 total players. Quantity decides player count.
          </p>
        </div>

        <button
          onClick={onCreateTeam}
          className="w-full py-4 bg-[#F5A400] text-white text-base font-semibold rounded-full hover:bg-[#E69500] transition-colors"
        >
          Create Team
        </button>
      </div>
    </div>
  );
}
