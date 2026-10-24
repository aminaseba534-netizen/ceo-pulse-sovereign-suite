import { Bell, Download, LogOut, Search, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';
import type { ReactNode } from 'react';
import type { CurrentUser } from '../types';

type View = 'Overview' | 'Operations' | 'Approvals' | 'Insights' | 'Security';

const navItems = [
  { label: 'Overview', icon: Sparkles },
  { label: 'Operations', icon: Zap },
  { label: 'Approvals', icon: ShieldCheck },
  { label: 'Insights', icon: TrendingUp },
];

type AppShellProps = {
  currentView: View;
  onChangeView: (view: View) => void;
  user: CurrentUser;
  onLogout: () => void;
  content: ReactNode;
};

export function AppShell({ currentView, onChangeView, user, onLogout, content }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <aside className="dashboard-shell hidden w-72 shrink-0 rounded-3xl border border-slate-800/80 p-5 lg:flex lg:flex-col">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300">Air-Gap</p>
              <h1 className="text-lg font-black tracking-tight text-white">CEO-PULSE</h1>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ label, icon: Icon }) => {
              const enabled =
                label === 'Overview' ||
                (label === 'Operations' && ['ADMIN', 'MANAGER', 'OPERATOR'].includes(user.role)) ||
                (label === 'Approvals' && ['ADMIN', 'MANAGER'].includes(user.role)) ||
                (label === 'Insights' && ['ADMIN', 'MANAGER'].includes(user.role)) ||
                (label === 'Security' && ['ADMIN', 'MANAGER', 'OPERATOR'].includes(user.role));

              if (!enabled) return null;

              return (
                <button
                  key={label}
                  onClick={() => onChangeView(label as View)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    currentView === label
                      ? 'bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </nav>

          <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Security</p>
              <span className="status-dot bg-emerald-400 pulse-soft" />
            </div>
            <p className="text-2xl font-black text-white">99.97%</p>
            <p className="mt-1 text-xs text-slate-400">Threat resilience across all enclaves</p>
          </div>

          <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Command Board</p>
            <p className="mt-2 text-sm font-semibold text-slate-200">Global fleet status</p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
              <span>Nodes online</span>
              <span className="font-semibold text-emerald-300">142/142</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-950/60 shadow-2xl shadow-slate-900/50">
          <header className="border-b border-slate-800/80 bg-slate-900/70 px-4 py-4 backdrop-blur xl:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Executive console</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-white md:text-3xl">Sovereign Operations Center</h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-500/40 hover:text-white">
                  <Search className="h-4 w-4" />
                  Search actions
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/15">
                  <Download className="h-4 w-4" />
                  Export brief
                </button>

                <button
                  onClick={onLogout}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-rose-500/40 hover:text-rose-200"
                >
                  <Bell className="h-4 w-4" />
                  <span className="max-w-[120px] truncate">{user.email}</span>
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          <div className="grid-pattern relative overflow-hidden p-4 xl:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(34,211,238,0.08),transparent_25%)]" />
            <div className="relative space-y-6">{content}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
