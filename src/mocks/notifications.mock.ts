import type { Notification } from '../types';

export const mockNotifications: Notification[] = [
  {
    id: 'notification-1',
    title: 'Bonus Coins Unlocked',
    message: 'You received 50 bonus coins.',
    type: 'COINS',
    read: false,
    createdAt: '2 hours ago',
  },
  {
    id: 'notification-2',
    title: 'Results announced',
    message: 'Your Super Over result is ready.',
    type: 'RESULT',
    read: false,
    createdAt: '5 hours ago',
  },
  {
    id: 'notification-3',
    title: 'Leaderboard Reward',
    message: 'Congratulations! You won 100 coins.',
    type: 'REWARD',
    read: true,
    createdAt: 'Yesterday',
  },
  {
    id: 'notification-4',
    title: 'Event Starting Soon',
    message: 'T20 Session 2 starts in 30 minutes.',
    type: 'EVENT',
    read: true,
    createdAt: 'Yesterday',
  },
  {
    id: 'notification-5',
    title: 'Refer and Earn',
    message: 'Invite friends and earn bonus coins.',
    type: 'REFERRAL',
    read: true,
    createdAt: '2 days ago',
  },
  {
    id: 'notification-6',
    title: 'Team Submitted',
    message: 'Your team for One Day has been submitted.',
    type: 'TEAM',
    read: true,
    createdAt: '3 days ago',
  },
];
