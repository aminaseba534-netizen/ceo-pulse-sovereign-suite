import type { CurrentUser } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export function getCurrentUser(): CurrentUser | null {
  const raw = localStorage.getItem('ceo-pulse-user');
  if (!raw) return null;

  try {
    return JSON.parse(raw) as CurrentUser;
  } catch {
    localStorage.removeItem('ceo-pulse-user');
    return null;
  }
}

export function getToken(): string | null {
  return localStorage.getItem('ceo-pulse-token');
}

export async function loginUser(email: string, password: string): Promise<CurrentUser> {
  if (!email || !password) {
    throw new Error('Empty credentials');
  }

  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || 'Login failed');
  }

  const data = await response.json();

  const user: CurrentUser = {
    id: data.user.id,
    email: data.user.email,
    role: data.user.role,
  };

  localStorage.setItem('ceo-pulse-user', JSON.stringify(user));
  localStorage.setItem('ceo-pulse-token', data.access_token);

  return user;
}

export function logoutUser() {
  localStorage.removeItem('ceo-pulse-user');
  localStorage.removeItem('ceo-pulse-token');
}
