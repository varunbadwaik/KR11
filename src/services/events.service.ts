import { mockEvents } from '../mocks';

export const eventsService = {
  // TODO FastAPI: GET /api/events/active
  getActiveEvents() {
    return Promise.resolve(mockEvents);
  },

  // TODO FastAPI: GET /api/events/:eventId
  getEventById(eventId: string) {
    return Promise.resolve(mockEvents.find((event) => event.id === eventId) ?? null);
  },
};
