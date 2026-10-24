import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboard() {
    const [kpis, approvals, alerts] = await Promise.all([
      this.prisma.kpi.findMany({ orderBy: { createdAt: 'desc' } }),
      this.prisma.approval.findMany({ orderBy: { createdAt: 'desc' } }),
      this.prisma.alert.findMany({ orderBy: { createdAt: 'desc' } }),
    ]);

    return {
      kpis: kpis.map((item) => ({
        label: item.label,
        value: item.value,
        unit: item.unit,
        change: item.change,
        tone: item.tone,
      })),
      approvals: approvals.map((item) => ({
        id: item.id,
        category: item.category,
        amount: item.amount,
        requester: item.requester,
        reason: item.reason,
        priority: item.priority,
      })),
      notifications: alerts.map((item) => ({
        id: item.id,
        title: item.title,
        detail: item.detail,
        time: 'recent',
        level: item.level,
      })),
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
      strategicGoals: [
        { title: 'Regional market expansion', progress: 82 },
        { title: 'Security hardening', progress: 94 },
        { title: 'Digital modernization', progress: 71 },
      ],
      security: [
        { title: 'Access anomaly', detail: 'One privileged profile attempted repeated non-standard logins.', level: 'Moderate' },
        { title: 'Backup sync drift', detail: 'Secondary storage remains 3 minutes behind target.', level: 'Critical' },
        { title: 'Vendor ratio check', detail: 'Supply chain variance exceeded tolerance threshold.', level: 'Moderate' },
      ],
    };
  }
}
