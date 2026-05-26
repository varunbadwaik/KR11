import type { ApiError } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';

type RequestBody = Record<string, unknown> | unknown[] | string | number | boolean | null;

function getAuthToken() {
  return localStorage.getItem('kr11_auth_token');
}

export function normalizeApiError(error: unknown): ApiError {
  if (error instanceof Error) {
    return { message: error.message };
  }

  if (error && typeof error === 'object') {
    const err = error as Record<string, unknown>;
    return {
      message: typeof err.message === 'string' ? err.message : 'Something went wrong',
      status: typeof err.status === 'number' ? err.status : undefined,
      code: typeof err.code === 'string' ? err.code : undefined,
    };
  }

  return { message: 'Something went wrong' };
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();
  const headers = new Headers(options.headers);

  headers.set('Content-Type', 'application/json');

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw normalizeApiError({
      message: response.statusText,
      status: response.status,
    });
  }

  return response.json() as Promise<T>;
}

export const apiClient = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body?: RequestBody) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body ?? {}) }),
  patch: <T>(path: string, body?: RequestBody) =>
    request<T>(path, { method: 'PATCH', body: JSON.stringify(body ?? {}) }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};
