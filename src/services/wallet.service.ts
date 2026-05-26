import { mockWallet, mockWalletTransactions } from '../mocks';

export const walletService = {
  // TODO FastAPI: GET /api/wallet/summary
  getWalletSummary() {
    return Promise.resolve(mockWallet);
  },

  // TODO FastAPI: GET /api/wallet/transactions
  getWalletTransactions() {
    return Promise.resolve(mockWalletTransactions);
  },
};
