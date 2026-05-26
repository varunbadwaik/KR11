import type { Wallet, WalletTransaction } from '../types';

export const mockWallet: Wallet = {
  balance: 100,
  coinsEarned: 150,
  coinsUsed: 25,
  bonusCoins: 50,
};

export const mockWalletTransactions: WalletTransaction[] = [
  {
    id: 'wallet-tx-1',
    type: 'CREDIT',
    reason: 'Bonus Coins Unlocked',
    coins: 50,
    status: 'SUCCESS',
    createdAt: 'Today, 2:30 PM',
  },
  {
    id: 'wallet-tx-2',
    type: 'DEBIT',
    reason: 'Team Entry - One Day',
    coins: 25,
    status: 'SUCCESS',
    createdAt: 'Today, 10:15 AM',
  },
  {
    id: 'wallet-tx-3',
    type: 'CREDIT',
    reason: 'Leaderboard Reward',
    coins: 100,
    status: 'SUCCESS',
    createdAt: 'Yesterday, 4:00 PM',
  },
];
