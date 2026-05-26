export type LeaderboardMovement = 'UP' | 'DOWN' | 'SAME';

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  userName: string;
  score: number;
  coinsWon: number;
  movement: LeaderboardMovement;
  avatar?: string;
  topPrediction?: string;
  flag?: string;
}
