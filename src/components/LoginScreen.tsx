import { useState } from 'react';

type LoginScreenProps = {
  onLogin: (email: string, password: string) => Promise<void> | void;
  loading: boolean;
};

export function LoginScreen({ onLogin, loading }: LoginScreenProps) {
  const [email, setEmail] = useState('ceo@pulse.secure');
  const [password, setPassword] = useState('admin123');

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-900/20">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10">
            <span className="text-2xl text-cyan-300">🛡️</span>
          </div>
          <h1 className="text-2xl font-black text-white">CEO-PULSE</h1>
          <p className="mt-2 text-sm text-slate-400">Secure Executive Access</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs uppercase tracking-[0.15em] text-slate-400">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-sm text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs uppercase tracking-[0.15em] text-slate-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-3 text-sm text-white outline-none"
            />
          </div>

          <button
            onClick={() => onLogin(email, password)}
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Access Console'}
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <span>2FA Enabled</span>
          <span>Secure</span>
        </div>
      </div>
    </div>
  );
}
