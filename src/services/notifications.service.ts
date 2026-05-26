import { mockNotifications } from '../mocks';

export const notificationsService = {
  // TODO FastAPI: GET /api/notifications
  getNotifications() {
    return Promise.resolve(mockNotifications);
  },

  // TODO FastAPI: PATCH /api/notifications/:notificationId/read
  markNotificationRead(notificationId: string) {
    return Promise.resolve(
      mockNotifications.map((notification) =>
        notification.id === notificationId ? { ...notification, read: true } : notification,
      ),
    );
  },
};
