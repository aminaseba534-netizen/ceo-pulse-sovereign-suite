import type { DashboardData, UserRole } from '../types';

type SecurityPageProps = {
  data: DashboardData;
  userRole: UserRole;
};

export function SecurityPage({ data, userRole }: SecurityPageProps) {
  return (
    <div className="space-y-6">
      <section className="glass-panel rounded-3xl p-5">
        <h3 className="text-xl font-black text-white">Security & Compliance</h3>
        <p className="mt-2 text-sm text-slate-300">Threat posture, policy enforcement, and regional access integrity.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Threat resilience', value: '99.97%', tone: 'emerald' },
          { label: 'Policy adherence', value: '98.4%', tone: 'cyan' },
          { label: 'Zero-trust coverage', value: '100%', tone: 'sky' },
        ].map((item) => (
          <div key={item.label} className="glass-panel rounded-2xl p-4">
            <p className="text-xs text-slate-400">{item.label}</p>
            <div className="mt-3">
              <span className="text-3xl font-black text-white">{item.value}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="glass-panel rounded-3xl p-5">
          <h4 className="text-lg font-bold text-white">Threat matrix</h4>
          <div className="mt-4 space-y-3">
            {data.security.map((alert) => (
              <div key={alert.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-200">{alert.title}</p>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${alert.level === 'Critical' ? 'text-rose-300' : 'text-amber-300'}`}>
                    {alert.level}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{alert.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-5">
          <h4 className="text-lg font-bold text-white">Control status</h4>
          <div className="mt-4 space-y-4">
            {[
              { label: 'Secure enclave coverage', value: '100%' },
              { label: 'Policy enforcement', value: '98%' },
              { label: 'Regional access checks', value: '96%' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-200">{item.label}</p>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
