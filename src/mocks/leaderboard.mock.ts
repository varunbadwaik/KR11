import type { LeaderboardEntry } from '../types';

export const mockLeaderboardEntries: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: 'user-lockie',
    userName: 'Lockie',
    score: 15420,
    coinsWon: 500,
    movement: 'UP',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
    topPrediction: 'Reliance BUY 5x',
    flag: '🇮🇳',
  },
  {
    rank: 2,
    userId: 'user-virat',
    userName: 'Virat K',
    score: 14850,
    coinsWon: 300,
    movement: 'SAME',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80',
    topPrediction: 'Google BUY 3x',
    flag: '🇮🇳',
  },
  {
    rank: 3,
    userId: 'user-rohit',
    userName: 'Rohit S',
    score: 14320,
    coinsWon: 200,
    movement: 'DOWN',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    topPrediction: 'Tata BUY 4x',
    flag: '🇮🇳',
  },
  {
    rank: 4,
    userId: 'user-sarah',
    userName: 'Sarah M',
    score: 13890,
    coinsWon: 0,
    movement: 'UP',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    topPrediction: 'Apple BUY 2x',
    flag: '🇬🇧',
  },
  {
    rank: 5,
    userId: 'user-mike',
    userName: 'Mike R',
    score: 13560,
    coinsWon: 0,
    movement: 'UP',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    topPrediction: 'Infosys BUY 3x',
    flag: '🇨🇦',
  },
  {
    rank: 6,
    userId: 'user-priya',
    userName: 'Priya S',
    score: 13120,
    coinsWon: 0,
    movement: 'DOWN',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    topPrediction: 'Zomato BUY 4x',
    flag: '🇮🇳',
  },
  {
    rank: 7,
    userId: 'user-alex',
    userName: 'Alex W',
    score: 12780,
    coinsWon: 0,
    movement: 'SAME',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    topPrediction: 'Swiggy SELL 2x',
    flag: '🇦🇺',
  },
  {
    rank: 8,
    userId: 'user-lisa',
    userName: 'Lisa T',
    score: 12450,
    coinsWon: 0,
    movement: 'UP',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    topPrediction: 'Reliance BUY 1x',
    flag: '🇩🇪',
  },
];

export const mockLeaderboardRows = mockLeaderboardEntries.map((entry) => ({
  rank: entry.rank,
  name: entry.userName,
  score: entry.score,
  coins: entry.coinsWon,
  movement: entry.movement.toLowerCase() as 'up' | 'down' | 'same',
  avatar: entry.avatar,
  topPrediction: entry.topPrediction,
  flag: entry.flag,
}));
