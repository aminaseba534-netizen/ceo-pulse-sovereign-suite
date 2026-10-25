import type { DashboardData } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

async function authenticatedFetch<T>(path: string): Promise<T> {
  const token = localStorage.getItem('ceo-pulse-token');

  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || 'API request failed');
  }

  return response.json() as Promise<T>;
}

export async function getDashboardData(): Promise<DashboardData> {
  return authenticatedFetch<DashboardData>('/dashboard');
}
