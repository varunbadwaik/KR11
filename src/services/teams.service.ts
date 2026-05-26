import type { CreateTeamPayload, Team } from '../types';
import { TEAM_MAX_SLOTS } from '../types';
import { mockUser } from '../mocks';

const mockTeam: Team = {
  id: 'team-mock-1',
  eventId: 'One Day',
  userId: mockUser.id,
  status: 'DRAFT',
  totalSlots: 0,
  maxSlots: TEAM_MAX_SLOTS,
  totalCoinsUsed: 0,
  items: [],
};

export const teamsService = {
  // TODO FastAPI: POST /api/teams
  createTeam(payload: CreateTeamPayload) {
    return Promise.resolve({
      ...mockTeam,
      eventId: payload.eventId,
      items: payload.items.map((item, index) => ({
        id: `team-item-${index + 1}`,
        companyId: item.companyId,
        companyName: item.companyId,
        symbol: item.companyId,
        action: item.action,
        quantity: item.quantity,
        coinValue: 0,
        totalCoins: 0,
      })),
      totalSlots: payload.items.reduce((sum, item) => sum + item.quantity, 0),
    });
  },

  getTeam(teamId: string) {
    return Promise.resolve({ ...mockTeam, id: teamId });
  },

  // TODO FastAPI: POST /api/teams/:teamId/submit
  submitTeam(teamId: string) {
    return Promise.resolve({ ...mockTeam, id: teamId, status: 'SUBMITTED' as const });
  },
};
