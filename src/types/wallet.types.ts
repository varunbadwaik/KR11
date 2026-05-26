export interface Wallet {
  balance: number;
  coinsEarned: number;
  coinsUsed: number;
  bonusCoins: number;
}

export type WalletTransactionType = 'CREDIT' | 'DEBIT';

export type WalletTransactionStatus = 'SUCCESS' | 'PENDING' | 'FAILED';

export interface WalletTransaction {
  id: string;
  type: WalletTransactionType;
  reason: string;
  coins: number;
  status: WalletTransactionStatus;
  createdAt: string;
}
