export type TeamStatus = 'DRAFT' | 'SUBMITTED' | 'LOCKED';

export type FantasyPredictionAction = 'BUY' | 'SELL';

export interface TeamItem {
  id: string;
  companyId: string;
  companyName: string;
  symbol: string;
  action: FantasyPredictionAction;
  quantity: number;
  coinValue: number;
  totalCoins: number;
}

export interface Team {
  id: string;
  eventId: string;
  userId: string;
  status: TeamStatus;
  totalSlots: number;
  maxSlots: number;
  totalCoinsUsed: number;
  items: TeamItem[];
}

export interface CreateTeamPayload {
  eventId: string;
  items: Array<Pick<TeamItem, 'companyId' | 'action' | 'quantity'>>;
}

export const TEAM_MAX_SLOTS = 11;
