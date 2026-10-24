import { useEffect, useMemo, useState } from 'react';
import { AppShell } from './components/AppShell';
import { LoginScreen } from './components/LoginScreen';
import { OverviewPage } from './pages/OverviewPage';
import { OperationsPage } from './pages/OperationsPage';
import { ApprovalsPage } from './pages/ApprovalsPage';
import { InsightsPage } from './pages/InsightsPage';
import { SecurityPage } from './pages/SecurityPage';
import { getCurrentUser, loginUser, logoutUser } from './lib/auth';
import { getDashboardData } from './lib/api';
import type { CurrentUser, DashboardData, UserRole } from './types';

type View = 'Overview' | 'Operations' | 'Approvals' | 'Insights' | 'Security';

export default function App() {
  const [view, setView] = useState<View>('Overview');
  const [user, setUser] = useState<CurrentUser | null>(getCurrentUser());
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);

  const allowedViews: Record<View, boolean> = {
    Overview: true,
    Operations: ['ADMIN', 'MANAGER', 'OPERATOR'].includes(user?.role ?? ''),
    Approvals: ['ADMIN', 'MANAGER'].includes(user?.role ?? ''),
    Insights: ['ADMIN', 'MANAGER'].includes(user?.role ?? ''),
    Security: ['ADMIN', 'MANAGER', 'OPERATOR'].includes(user?.role ?? ''),
  };

  const handleView = (nextView: View) => {
    if (!allowedViews[nextView]) return;
    setView(nextView);
  };

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    getDashboardData()
      .then(setData)
      .catch((error) => {
        console.error('Dashboard load failed:', error);
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const loggedUser = await loginUser(email, password);
      setUser(loggedUser);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setData(null);
  };

  const renderView = useMemo(() => {
    if (!data || !user) return null;

    switch (view) {
      case 'Overview':
        return <OverviewPage data={data} userRole={user.role} />;
      case 'Operations':
        return <OperationsPage data={data} userRole={user.role} />;
      case 'Approvals':
        return <ApprovalsPage data={data} userRole={user.role} />;
      case 'Insights':
        return <InsightsPage data={data} userRole={user.role} />;
      case 'Security':
        return <SecurityPage data={data} userRole={user.role} />;
      default:
        return <OverviewPage data={data} userRole={user.role} />;
    }
  }, [data, user, view]);

  if (!user) {
    return <LoginScreen onLogin={handleLogin} loading={loading} />;
  }

  if (loading || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-sm text-slate-300">
          Loading executive dashboard...
        </div>
      </div>
    );
  }

  return (
    <AppShell currentView={view} onChangeView={handleView} user={user} onLogout={handleLogout} content={renderView} />
  );
}
