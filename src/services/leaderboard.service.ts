import { mockLeaderboardEntries } from '../mocks';
import { mockUser } from '../mocks';

export const leaderboardService = {
  // TODO FastAPI: GET /api/leaderboard/:eventId
  getLeaderboard(_eventId: string) {
    return Promise.resolve(mockLeaderboardEntries);
  },

  getMyRank(_eventId: string) {
    return Promise.resolve(
      mockLeaderboardEntries.find((entry) => entry.userId === mockUser.id) ?? null,
    );
  },
};
