import type { DashboardData, UserRole } from '../types';

type ApprovalsPageProps = {
  data: DashboardData;
  userRole: UserRole;
};

export function ApprovalsPage({ data, userRole }: ApprovalsPageProps) {
  return (
    <div className="space-y-6">
      <section className="glass-panel rounded-3xl p-5">
        <h3 className="text-xl font-black text-white">Approvals & Sign-off</h3>
        <p className="mt-2 text-sm text-slate-300">Review, approve, or reject transaction and operational requests.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {data.approvals.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${item.priority === 'High' ? 'bg-amber-500/10 text-amber-300' : 'bg-emerald-500/10 text-emerald-300'}`}>
                {item.category}
              </span>
              <span className="text-base font-black text-white">{item.amount}</span>
            </div>

            <p className="mt-3 text-xs text-slate-400">Requester: {item.requester}</p>
            <p className="mt-2 text-sm text-slate-200">{item.reason}</p>

            {(userRole === 'ADMIN' || userRole === 'MANAGER') && (
              <div className="mt-4 flex gap-2">
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
      </section>
    </div>
  );
}
