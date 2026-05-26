import { X, Coins, Plus, History } from 'lucide-react';
import { mockWallet, mockWalletTransactions } from '../../mocks';
import { EmptyState } from '../../components/common';
import { toast } from 'sonner';

interface CoinWalletPopupProps {
  onClose: () => void;
}

export function CoinWalletPopup({ onClose }: CoinWalletPopupProps) {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-end z-50">
      <div className="bg-white w-full rounded-t-3xl p-6 animate-in slide-in-from-bottom duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F4F7FB] flex items-center justify-center"
        >
          <X className="w-5 h-5 text-[#101828]" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#FFF4D8] flex items-center justify-center mx-auto mb-4">
            <Coins className="w-8 h-8 text-[#F5A400]" />
          </div>
          <h2 className="text-2xl font-bold text-[#101828] mb-1">Coin Balance</h2>
          <p className="text-4xl font-bold text-[#F5A400]">{mockWallet.balance} Coins</p>
        </div>

        {/* Actions */}
        <div className="space-y-3 mb-6">
          <button 
            onClick={() => toast.info("Add Coins (Demo Mode)", { description: "Fantasy coins are allocated for prediction gameplay. Purchase is mock-only." })}
            className="w-full py-4 bg-[#F5A400] text-white text-base font-semibold rounded-full hover:bg-[#E69500] transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Coins
          </button>
          <button 
            onClick={() => toast.info("Coin History (Demo Mode)", { description: "Transaction history is coming soon." })}
            className="w-full py-4 bg-[#F4F7FB] text-[#101828] text-base font-semibold rounded-full hover:bg-[#E5E7EB] transition-colors flex items-center justify-center gap-2"
          >
            <History className="w-5 h-5" />
            Coin History
          </button>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="text-sm font-bold text-[#667085] mb-3">Recent Transactions</h3>
          <div className="space-y-2">
            {mockWalletTransactions.length === 0 ? (
              <EmptyState
                title="No transactions yet"
                message="Coin activity will appear here after you join events or earn rewards."
              />
            ) : (
              mockWalletTransactions.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  title={transaction.reason}
                  amount={transaction.coins}
                  date={transaction.createdAt}
                  type={transaction.type.toLowerCase() as 'credit' | 'debit'}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TransactionItemProps {
  title: string;
  amount: number;
  date: string;
  type: 'credit' | 'debit';
}

function TransactionItem({ title, amount, date, type }: TransactionItemProps) {
  return (
    <div className="bg-[#F4F7FB] rounded-2xl p-3 flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-[#101828]">{title}</p>
        <p className="text-xs text-[#667085]">{date}</p>
      </div>
      <div className={`text-sm font-bold ${type === 'credit' ? 'text-[#14B86A]' : 'text-[#E5484D]'}`}>
        {type === 'credit' ? '+' : '-'}{amount} Coins
      </div>
    </div>
  );
}
