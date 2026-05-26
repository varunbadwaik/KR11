import { mockUser } from '../mocks';

export const authService = {
  // TODO FastAPI: POST /api/auth/send-otp
  sendOtp(mobile: string) {
    return Promise.resolve({ mobile, sent: true });
  },

  // TODO FastAPI: POST /api/auth/verify-otp
  verifyOtp(mobile: string, otp: string) {
    return Promise.resolve({
      token: 'mock-kr11-token',
      user: { ...mockUser, mobile },
      verified: otp.length > 0,
    });
  },

  // TODO FastAPI: GET /api/auth/me
  getMe() {
    return Promise.resolve(mockUser);
  },

  logout() {
    localStorage.removeItem('kr11_auth_token');
    return Promise.resolve({ success: true });
  },
};
