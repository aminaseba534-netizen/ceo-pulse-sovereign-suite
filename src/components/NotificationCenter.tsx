type NotificationItem = {
  id: number;
  title: string;
  detail: string;
  time: string;
  level: 'critical' | 'warning' | 'info';
};

type NotificationCenterProps = {
  items: NotificationItem[];
};

export function NotificationCenter({ items }: NotificationCenterProps) {
  return (
    <div className="glass-panel rounded-3xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-bold text-white">Notifications</h4>
        <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300">
          Live
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-200">{item.title}</p>
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.12em] ${
                  item.level === 'critical'
                    ? 'text-rose-300'
                    : item.level === 'warning'
                      ? 'text-amber-300'
                      : 'text-cyan-300'
                }`}
              >
                {item.level}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
