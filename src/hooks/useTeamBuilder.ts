import { useMemo, useState } from 'react';
import type { FantasyPredictionAction, TeamItem } from '../types';
import { TEAM_MAX_SLOTS } from '../types';
import type { TeamCompanyMock } from '../mocks';

const TEAM_EXACT_SLOTS_MESSAGE = 'Your team must have exactly 11 slots.';
const TEAM_OVER_LIMIT_MESSAGE = 'You cannot exceed 11 slots.';
const TEAM_COMPLETE_MESSAGE = 'Team complete. Review and submit.';
const TEAM_INCOMPLETE_MESSAGE = 'Add more companies to complete your 11-slot team.';

type TeamBuilderCompany = TeamCompanyMock & {
  id?: string;
  symbol?: string;
  coinValue?: number;
};

function getCompanyId(company: TeamBuilderCompany) {
  return company.id ?? company.symbol ?? company.name.toLowerCase().replace(/\s+/g, '-');
}

function toTeamItem(
  company: TeamBuilderCompany,
  action: FantasyPredictionAction,
  quantity: number,
): TeamItem {
  const companyId = getCompanyId(company);
  const coinValue = company.coinValue ?? company.value;

  return {
    id: `${companyId}-${action}`,
    companyId,
    companyName: company.name,
    symbol: company.symbol ?? company.name,
    action,
    quantity,
    coinValue,
    totalCoins: coinValue * quantity,
  };
}

const initialItems: TeamItem[] = [
  {
    id: 'reliance-BUY',
    companyId: 'reliance',
    companyName: 'Reliance',
    symbol: 'Reliance',
    action: 'BUY',
    quantity: 1,
    coinValue: 250,
    totalCoins: 250,
  },
  {
    id: 'google-BUY',
    companyId: 'google',
    companyName: 'Google',
    symbol: 'Google',
    action: 'BUY',
    quantity: 1,
    coinValue: 250,
    totalCoins: 250,
  },
  {
    id: 'tata-motors-BUY',
    companyId: 'tata-motors',
    companyName: 'Tata',
    symbol: 'Tata',
    action: 'BUY',
    quantity: 1,
    coinValue: 250,
    totalCoins: 250,
  },
];

export function useTeamBuilder(maxSlots = TEAM_MAX_SLOTS) {
  const [selectedItems, setSelectedItems] = useState<TeamItem[]>(initialItems);
  const [actionMessage, setActionMessage] = useState<string | null>(TEAM_INCOMPLETE_MESSAGE);

  const totalSlots = useMemo(
    () => selectedItems.reduce((sum, item) => sum + item.quantity, 0),
    [selectedItems],
  );

  const slotsLeft = maxSlots - totalSlots;

  const totalCoinsUsed = useMemo(
    () => selectedItems.reduce((sum, item) => sum + item.totalCoins, 0),
    [selectedItems],
  );

  const canSubmit = totalSlots === maxSlots;

  const validationMessage =
    actionMessage ?? (canSubmit ? TEAM_COMPLETE_MESSAGE : TEAM_INCOMPLETE_MESSAGE);

  const setTeamMessage = (nextTotalSlots: number) => {
    if (nextTotalSlots === maxSlots) {
      setActionMessage(TEAM_COMPLETE_MESSAGE);
      return;
    }

    setActionMessage(TEAM_INCOMPLETE_MESSAGE);
  };

  const addOrUpdateItem = (
    company: TeamBuilderCompany,
    action: FantasyPredictionAction,
    quantity: number,
  ) => {
    if (quantity <= 0) {
      setActionMessage(TEAM_EXACT_SLOTS_MESSAGE);
      return false;
    }

    const companyId = getCompanyId(company);
    const existingItem = selectedItems.find(
      (item) => item.companyId === companyId && item.action === action,
    );
    const currentQuantity = existingItem?.quantity ?? 0;
    const nextQuantity = currentQuantity + quantity;
    const nextTotalSlots = totalSlots + quantity;

    if (nextTotalSlots > maxSlots) {
      setActionMessage(TEAM_OVER_LIMIT_MESSAGE);
      return false;
    }

    const nextItem = toTeamItem(company, action, nextQuantity);

    setSelectedItems((items) => {
      if (existingItem) {
        return items.map((item) =>
          item.companyId === companyId && item.action === action ? nextItem : item,
        );
      }

      return [...items, nextItem];
    });
    setTeamMessage(nextTotalSlots);
    return true;
  };

  const removeItem = (companyId: string, action: FantasyPredictionAction) => {
    const nextItems = selectedItems.filter(
      (item) => !(item.companyId === companyId && item.action === action),
    );
    const nextTotalSlots = nextItems.reduce((sum, item) => sum + item.quantity, 0);

    setSelectedItems(nextItems);
    setTeamMessage(nextTotalSlots);
  };

  const updateQuantity = (companyId: string, action: FantasyPredictionAction, quantity: number) => {
    if (quantity <= 0) {
      removeItem(companyId, action);
      return true;
    }

    const itemToUpdate = selectedItems.find(
      (item) => item.companyId === companyId && item.action === action,
    );

    if (!itemToUpdate) {
      setActionMessage(TEAM_EXACT_SLOTS_MESSAGE);
      return false;
    }

    const slotsWithoutItem = totalSlots - itemToUpdate.quantity;
    const nextTotalSlots = slotsWithoutItem + quantity;

    if (nextTotalSlots > maxSlots) {
      setActionMessage(TEAM_OVER_LIMIT_MESSAGE);
      return false;
    }

    setSelectedItems((items) =>
      items.map((item) =>
        item.companyId === companyId && item.action === action
          ? {
              ...item,
              quantity,
              totalCoins: item.coinValue * quantity,
            }
          : item,
      ),
    );
    setTeamMessage(nextTotalSlots);
    return true;
  };

  const resetTeam = () => {
    setSelectedItems([]);
    setActionMessage(TEAM_EXACT_SLOTS_MESSAGE);
  };

  const getItem = (companyId: string, action: FantasyPredictionAction) =>
    selectedItems.find((item) => item.companyId === companyId && item.action === action);

  return {
    selectedItems,
    totalSlots,
    maxSlots,
    slotsLeft,
    totalCoinsUsed,
    canSubmit,
    validationMessage,
    addOrUpdateItem,
    removeItem,
    updateQuantity,
    resetTeam,
    getItem,
  };
}
