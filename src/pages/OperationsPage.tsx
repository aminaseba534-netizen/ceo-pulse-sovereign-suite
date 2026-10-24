import type { DashboardData, UserRole } from '../types';

type OperationsPageProps = {
  data: DashboardData;
  userRole: UserRole;
};

export function OperationsPage({ data, userRole }: OperationsPageProps) {
  return (
    <div className="space-y-6">
      <section className="glass-panel rounded-3xl p-5">
        <h3 className="text-xl font-black text-white">Operations Center</h3>
        <p className="mt-2 text-sm text-slate-300">Live system flow, location coverage, and execution health.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Active regions', value: '18', change: '+2', tone: 'cyan' },
          { label: 'Delivery speed', value: '2.1d', change: '+0.4d', tone: 'emerald' },
          { label: 'Assets tracked', value: '6.8K', change: '+480', tone: 'sky' },
          { label: 'Critical ops', value: '04', change: '-1', tone: 'rose' },
        ].map(({ label, value, change, tone }) => (
          <div key={label} className="glass-panel rounded-2xl p-4">
            <p className="text-xs text-slate-400">{label}</p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-3xl font-black tracking-tight text-white">{value}</span>
              <span className={`text-[10px] font-bold rounded-full px-2 py-1 ${tone === 'cyan' ? 'bg-cyan-500/10 text-cyan-300' : tone === 'emerald' ? 'bg-emerald-500/10 text-emerald-300' : tone === 'sky' ? 'bg-sky-500/10 text-sky-300' : 'bg-rose-500/10 text-rose-300'}`}>
                {change}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="glass-panel rounded-3xl p-5">
          <h4 className="text-lg font-bold text-white">Flow control</h4>
          <div className="mt-4 space-y-4">
            {data.operations.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-200">{item.label}</p>
                  <span className="text-sm font-bold text-white">{item.value}</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden mt-2">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-5">
          <h4 className="text-lg font-bold text-white">Operational timeline</h4>
          <div className="mt-4 space-y-3">
            {[
              ['Board review', '09:10'],
              ['Investment committee', '11:20'],
              ['Fleet optimization', '14:05'],
              ['Risk audit', '16:30'],
            ].map(([title, time]) => (
              <div key={title} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                <span className="text-sm text-slate-200">{title}</span>
                <span className="text-xs uppercase tracking-[0.12em] text-slate-400">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
