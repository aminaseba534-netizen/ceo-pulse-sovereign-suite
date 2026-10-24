type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChange, placeholder = 'Search data...' }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2.5">
      <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20L16.65 16.65" />
      </svg>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 outline-none"
      />
    </div>
  );
}
