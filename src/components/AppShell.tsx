import { Bell, Download, Search, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Overview', icon: Sparkles },
  { label: 'Operations', icon: Zap },
  { label: 'Approvals', icon: ShieldCheck },
  { label: 'Insights', icon: TrendingUp },
];

export function AppShell() {
  const [selectedNav, setSelectedNav] = useState('Overview');

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
            {navItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setSelectedNav(label)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  selectedNav === label
                    ? 'bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
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
                <button className="rounded-xl border border-slate-700 bg-slate-800/80 p-2.5 text-slate-200 transition hover:border-slate-500">
                  <Bell className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          <div className="grid-pattern relative overflow-hidden p-4 xl:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(34,211,238,0.08),transparent_25%)]" />
            <div className="relative space-y-6">
              <section className="rounded-[28px] border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-5 shadow-[0_0_45px_rgba(34,211,238,0.1)] xl:p-6">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      <Sparkles className="h-3.5 w-3.5" />
                      Zero-trust architecture
                    </div>
                    <h3 className="text-xl font-black text-white md:text-3xl">Executive command, real-time oversight, secure by design.</h3>
                    <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
                      Direct operational visibility, rapid approvals and control levers for the executive suite.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Overview', 'Pending approvals', 'Emergency isolation'].map((tab) => (
                      <button
                        key={tab}
                        className={`rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                          tab === 'Overview'
                            ? 'bg-cyan-400 text-slate-950'
                            : 'border border-slate-700 bg-slate-800/80 text-slate-200 hover:border-cyan-500/40'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: 'Quarter liquidity', value: '48.2M', unit: 'DZD', change: '+18.5%', tone: 'emerald' },
                  { label: 'Operational pulse', value: '98.4%', unit: '', change: 'Stable', tone: 'cyan' },
                  { label: 'Active stations', value: '142', unit: 'sites', change: '94%', tone: 'sky' },
                  { label: 'Security breaches', value: '0', unit: 'threats', change: 'Protected', tone: 'green' },
                ].map(({ label, value, unit, change, tone }) => (
                  <div key={label} className="glass-panel rounded-2xl p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs text-slate-400">{label}</p>
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                          tone === 'emerald'
                            ? 'bg-emerald-500/10 text-emerald-300'
                            : tone === 'cyan'
                              ? 'bg-cyan-500/10 text-cyan-300'
                              : tone === 'sky'
                                ? 'bg-sky-500/10 text-sky-300'
                                : 'bg-green-500/10 text-green-300'
                        }`}
                      >
                        {change}
                      </span>
                    </div>
                    <div className="mt-3 flex items-end gap-1">
                      <span className="text-3xl font-black tracking-tight text-white">{value}</span>
                      {unit && <span className="pb-1 text-xs text-slate-400">{unit}</span>}
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full ${
                          tone === 'emerald'
                            ? 'bg-gradient-to-r from-emerald-500 to-lime-400'
                            : tone === 'cyan'
                              ? 'bg-gradient-to-r from-cyan-500 to-sky-400'
                              : tone === 'sky'
                                ? 'bg-gradient-to-r from-sky-500 to-indigo-400'
                                : 'bg-gradient-to-r from-green-500 to-emerald-400'
                        }`}
                        style={{ width: tone === 'cyan' ? '98%' : tone === 'sky' ? '94%' : '78%' }}
                      />
                    </div>
                  </div>
                ))}
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
                <div className="glass-panel rounded-3xl p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="status-dot bg-amber-400 pulse-soft" />
                      <h4 className="text-lg font-bold text-white">Pending executive approvals</h4>
                    </div>
                    <span className="text-xs text-slate-400">Secure biometric review</span>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    {[
                      {
                        id: 'EXP-9902',
                        category: 'Operating advance',
                        amount: '150,000 DZD',
                        requester: 'D. Salim Amrani',
                        reason: 'Field procurement budget for secure expansion',
                        priority: 'High',
                      },
                      {
                        id: 'SYS-4411',
                        category: 'Privilege window',
                        amount: '2h access',
                        requester: 'M. Leila Kaddour',
                        reason: 'Patch update on production data clusters',
                        priority: 'Medium',
                      },
                    ].map((item) => (
                      <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
                              item.priority === 'High'
                                ? 'bg-amber-500/10 text-amber-300'
                                : 'bg-emerald-500/10 text-emerald-300'
                            }`}
                          >
                            {item.category}
                          </span>
                          <span className="text-base font-black text-white">{item.amount}</span>
                        </div>
                        <p className="text-xs text-slate-400">Requester: {item.requester}</p>
                        <p className="mt-2 text-sm text-slate-200">{item.reason}</p>
                        <div className="mt-4 flex gap-2 pt-3">
                          <button className="flex-1 rounded-xl bg-cyan-400 px-3 py-2 text-xs font-bold text-slate-950 transition hover:bg-cyan-300">
                            Approve
                          </button>
                          <button className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-rose-500/40 hover:text-rose-200">
                            Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-panel rounded-3xl p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-lg font-bold text-white">Strategic goals</h4>
                      <button className="text-xs text-cyan-300">View all</button>
                    </div>
                    <div className="space-y-4">
                      {[
                        { title: 'Regional market expansion', progress: 82 },
                        { title: 'Security hardening', progress: 94 },
                        { title: 'Digital modernization', progress: 71 },
                      ].map((goal) => (
                        <div key={goal.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-slate-200">{goal.title}</p>
                            <span className="text-xs text-slate-400">{goal.progress}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                            <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400" style={{ width: `${goal.progress}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
