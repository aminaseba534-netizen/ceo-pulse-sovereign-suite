import type { DashboardData } from '../types';

export async function getDashboardData(): Promise<DashboardData> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    kpis: [
      { label: 'Quarter liquidity', value: '48.2M', unit: 'DZD', change: '+18.5%', tone: 'emerald' },
      { label: 'Operational pulse', value: '98.4%', unit: '', change: 'Stable', tone: 'cyan' },
      { label: 'Active stations', value: '142', unit: 'sites', change: '94%', tone: 'sky' },
      { label: 'Security breaches', value: '0', unit: 'threats', change: 'Protected', tone: 'green' },
    ],
    approvals: [
      {
        id: 'EXP-9902',
        category: 'Operating advance',
        amount: '150,000 DZD',
        requester: 'D. Salim Amrani',
        reason: 'Field procurement budget for secure expansion',
        priority: 'High',
      },
      {
        id: 'SYS-4411',
        category: 'Privilege window',
        amount: '2h access',
        requester: 'M. Leila Kaddour',
        reason: 'Patch update on production data clusters',
        priority: 'Medium',
      },
      {
        id: 'INF-8215',
        category: 'Infrastructure spend',
        amount: '280,000 DZD',
        requester: 'Chief Systems Office',
        reason: 'Backup storage capacity upgrade and redundancy',
        priority: 'High',
      },
    ],
    strategicGoals: [
      { title: 'Regional market expansion', progress: 82 },
      { title: 'Security hardening', progress: 94 },
      { title: 'Digital modernization', progress: 71 },
    ],
    notifications: [
      { id: 1, title: 'Backup sync drift', detail: 'Secondary storage remains 3 minutes behind target.', time: '2 min ago', level: 'critical' },
      { id: 2, title: 'Access anomaly', detail: 'One privileged profile attempted repeated non-standard logins.', time: '12 min ago', level: 'warning' },
      { id: 3, title: 'Policy update', detail: 'New compliance workflow deployed to 6 regions.', time: '18 min ago', level: 'info' },
      { id: 4, title: 'Revenue alert', detail: 'Regional cash flow is 4.2% above forecast.', time: '36 min ago', level: 'info' },
    ],
    chartSeries: {
      revenue: [42, 48, 51, 49, 62, 68, 75, 79, 82, 88],
      security: [95, 96, 94, 97, 98, 99, 99, 98, 97, 99],
      operations: [70, 72, 74, 76, 78, 77, 81, 83, 86, 90],
    },
    operations: [
      { label: 'Production uptime', value: '99.97%', progress: 99, caption: 'All core services within SLA' },
      { label: 'Delivery cycle', value: '2.1 days', progress: 82, caption: 'Faster than quarterly target' },
      { label: 'Recruitment velocity', value: '17 hires', progress: 74, caption: 'Headcount expansion on track' },
      { label: 'Energy efficiency', value: '91%', progress: 91, caption: 'Savings from optimized infrastructure' },
    ],
    security: [
      { title: 'Access anomaly', detail: 'One privileged profile attempted repeated non-standard logins.', level: 'Moderate' },
      { title: 'Backup sync drift', detail: 'Secondary storage remains 3 minutes behind target.', level: 'Critical' },
      { title: 'Vendor ratio check', detail: 'Supply chain variance exceeded tolerance threshold.', level: 'Moderate' },
    ],
  };
}
