import { useMemo, useState } from 'react';
import { MetricChart } from '../components/MetricChart';
import { NotificationCenter } from '../components/NotificationCenter';
import { SearchBar } from '../components/SearchBar';
import type { DashboardData, UserRole } from '../types';

type OverviewPageProps = {
  data: DashboardData;
  userRole: UserRole;
};

export function OverviewPage({ data, userRole }: OverviewPageProps) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'critical' | 'info'>('all');

  const filteredNotifications = useMemo(() => {
    return data.notifications.filter((n) => {
      const matchesText = `${n.title} ${n.detail}`.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'all' ? true : n.level === filter;
      return matchesText && matchesFilter;
    });
  }, [data.notifications, filter, search]);

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-5 shadow-[0_0_45px_rgba(34,211,238,0.1)] xl:p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Zero-trust architecture
            </div>
            <h3 className="text-xl font-black text-white md:text-3xl">Executive command, real-time oversight, secure by design.</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
              Direct operational visibility, rapid approvals and control levers for the executive suite.
            </p>
          </div>

          <div className="w-full max-w-lg">
            <SearchBar value={search} onChange={setSearch} placeholder="Search alerts, approvals, regions..." />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.kpis.map(({ label, value, unit, change, tone }) => (
          <div key={label} className="glass-panel rounded-2xl p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-slate-400">{label}</p>
              <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${tone === 'emerald' ? 'bg-emerald-500/10 text-emerald-300' : tone === 'cyan' ? 'bg-cyan-500/10 text-cyan-300' : tone === 'sky' ? 'bg-sky-500/10 text-sky-300' : 'bg-green-500/10 text-green-300'}`}>
                {change}
              </span>
            </div>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-3xl font-black tracking-tight text-white">{value}</span>
              {unit && <span className="pb-1 text-xs text-slate-400">{unit}</span>}
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className={`h-full rounded-full ${tone === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-lime-400' : tone === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-sky-400' : tone === 'sky' ? 'bg-gradient-to-r from-sky-500 to-indigo-400' : 'bg-gradient-to-r from-green-500 to-emerald-400'}`} style={{ width: tone === 'cyan' ? '98%' : tone === 'sky' ? '94%' : '78%' }} />
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="glass-panel rounded-3xl p-5">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">Revenue trajectory</h4>
              <span className="text-xs text-slate-400">QoQ</span>
            </div>
            <MetricChart data={data.chartSeries.revenue} color="#22d3ee" />
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="status-dot bg-amber-400 pulse-soft" />
                <h4 className="text-lg font-bold text-white">Pending executive approvals</h4>
              </div>
              <span className="text-xs text-slate-400">Secure biometric review</span>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {data.approvals.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${item.priority === 'High' ? 'bg-amber-500/10 text-amber-300' : 'bg-emerald-500/10 text-emerald-300'}`}>
                      {item.category}
                    </span>
                    <span className="text-base font-black text-white">{item.amount}</span>
                  </div>
                  <p className="text-xs text-slate-400">Requester: {item.requester}</p>
                  <p className="mt-2 text-sm text-slate-200">{item.reason}</p>

                  {(userRole === 'ADMIN' || userRole === 'MANAGER') && (
                    <div className="mt-4 flex gap-2 pt-3">
                      <button className="flex-1 rounded-xl bg-cyan-400 px-3 py-2 text-xs font-bold text-slate-950 transition hover:bg-cyan-300">
                        Approve
                      </button>
                      <button className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-rose-500/40 hover:text-rose-200">
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel rounded-3xl p-5">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">Security posture</h4>
              <span className="text-xs text-slate-400">Last 30 days</span>
            </div>
            <MetricChart data={data.chartSeries.security} color="#34d399" />
          </div>

          <div className="glass-panel rounded-3xl p-5">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">Threat filters</h4>
              <div className="flex gap-2">
                <button onClick={() => setFilter('all')} className={`rounded-xl px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${filter === 'all' ? 'bg-cyan-500/10 text-cyan-300' : 'bg-slate-800 text-slate-300'}`}>All</button>
                <button onClick={() => setFilter('critical')} className={`rounded-xl px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${filter === 'critical' ? 'bg-rose-500/10 text-rose-300' : 'bg-slate-800 text-slate-300'}`}>Critical</button>
                <button onClick={() => setFilter('info')} className={`rounded-xl px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${filter === 'info' ? 'bg-cyan-500/10 text-cyan-300' : 'bg-slate-800 text-slate-300'}`}>Info</button>
              </div>
            </div>

            <NotificationCenter items={filteredNotifications} />
          </div>
        </div>
      </section>
    </div>
  );
}
