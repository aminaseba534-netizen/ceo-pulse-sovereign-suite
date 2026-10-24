import type { CurrentUser } from '../types';

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

export async function loginUser(email: string, password: string): Promise<CurrentUser> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (!email || !password) {
    throw new Error('Empty credentials');
  }

  const role = email.includes('admin') ? 'ADMIN' : email.includes('manager') ? 'MANAGER' : email.includes('ops') ? 'OPERATOR' : 'USER';

  const user: CurrentUser = {
    id: `user-${Date.now()}`,
    email,
    role,
  };

  localStorage.setItem('ceo-pulse-user', JSON.stringify(user));
  return user;
}

export function logoutUser() {
  localStorage.removeItem('ceo-pulse-user');
  localStorage.removeItem('ceo-pulse-token');
}
