import type { DashboardData, UserRole } from '../types';

type InsightsPageProps = {
  data: DashboardData;
  userRole: UserRole;
};

export function InsightsPage({ data, userRole }: InsightsPageProps) {
  return (
    <div className="space-y-6">
      <section className="glass-panel rounded-3xl p-5">
        <h3 className="text-xl font-black text-white">Insights & Forecast</h3>
        <p className="mt-2 text-sm text-slate-300">Scenario analysis, forecast confidence, and strategic recommendations.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Net margin', value: '31.8%', trend: '+3.4%' },
          { label: 'Operating expenses', value: '12.9M', trend: '-1.7%' },
          { label: 'Forecast confidence', value: '88%', trend: '+5.2%' },
        ].map((item) => (
          <div key={item.label} className="glass-panel rounded-2xl p-4">
            <p className="text-xs text-slate-400">{item.label}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl font-black text-white">{item.value}</span>
              <span className="text-[10px] font-bold text-emerald-300">{item.trend}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="glass-panel rounded-3xl p-5">
          <h4 className="text-lg font-bold text-white">Opportunity score</h4>
          <div className="mt-4 space-y-4">
            {[
              { label: 'Market expansion', score: 82 },
              { label: 'Automation uplift', score: 74 },
              { label: 'Risk reduction', score: 91 },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-200">{item.label}</span>
                  <span className="text-sm font-bold text-white">{item.score}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" style={{ width: `${item.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-5">
          <h4 className="text-lg font-bold text-white">Recommended actions</h4>
          <div className="mt-4 space-y-3">
            {[
              'Prioritize cross-border operational automation.',
              'Accelerate regional compliance sign-off for expansion.',
              'Reduce provisioning lag in high-risk facilities.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
