export type UserRole = 'ADMIN' | 'MANAGER' | 'OPERATOR' | 'USER';

export type CurrentUser = {
  id: string;
  email: string;
  role: UserRole;
};

export type KpiItem = {
  label: string;
  value: string;
  unit?: string;
  change: string;
  tone: 'emerald' | 'cyan' | 'sky' | 'green';
};

export type ApprovalItem = {
  id: string;
  category: string;
  amount: string;
  requester: string;
  reason: string;
  priority: 'High' | 'Medium' | 'Low';
};

export type StrategicGoal = {
  title: string;
  progress: number;
};

export type NotificationItem = {
  id: number;
  title: string;
  detail: string;
  time: string;
  level: 'critical' | 'warning' | 'info';
};

export type DashboardData = {
  kpis: KpiItem[];
  approvals: ApprovalItem[];
  strategicGoals: StrategicGoal[];
  notifications: NotificationItem[];
  chartSeries: {
    revenue: number[];
    security: number[];
    operations: number[];
  };
  operations: Array<{
    label: string;
    value: string;
    progress: number;
    caption: string;
  }>;
  security: Array<{
    title: string;
    detail: string;
    level: string;
  }>;
};
