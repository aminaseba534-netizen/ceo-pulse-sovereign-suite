type MetricChartProps = {
  data: number[];
  color?: string;
};

export function MetricChart({ data, color = '#22d3ee' }: MetricChartProps) {
  const width = 320;
  const height = 120;
  const max = Math.max(...data);
  const min = Math.min(...data);

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const normalized = (value - min) / (max - min || 1);
      const y = height - normalized * (height - 20) - 10;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-28 w-full">
        <defs>
          <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0" x1="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d={`M 0 ${height} L ${points} L ${width} ${height} Z`}
          fill={`url(#gradient-${color.replace('#', '')})`}
          opacity="0.25"
        />
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="3"
          points={points}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
