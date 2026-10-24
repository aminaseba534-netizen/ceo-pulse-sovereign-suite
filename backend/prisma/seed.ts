import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'ceo@pulse.secure' },
    update: {},
    create: {
      email: 'ceo@pulse.secure',
      password: passwordHash,
      name: 'CEO',
      role: Role.ADMIN,
    },
  });

  await prisma.kpi.createMany({
    data: [
      { label: 'Quarter liquidity', value: '48.2M', unit: 'DZD', change: '+18.5%', tone: 'emerald' },
      { label: 'Operational pulse', value: '98.4%', unit: '', change: 'Stable', tone: 'cyan' },
      { label: 'Active stations', value: '142', unit: 'sites', change: '94%', tone: 'sky' },
      { label: 'Security breaches', value: '0', unit: 'threats', change: 'Protected', tone: 'green' },
    ],
    skipDuplicates: true,
  });

  await prisma.approval.createMany({
    data: [
      {
        category: 'Operating advance',
        amount: '150,000 DZD',
        requester: 'D. Salim Amrani',
        reason: 'Field procurement budget for secure expansion',
        priority: 'High',
        status: 'pending',
      },
      {
        category: 'Privilege window',
        amount: '2h access',
        requester: 'M. Leila Kaddour',
        reason: 'Patch update on production data clusters',
        priority: 'Medium',
        status: 'pending',
      },
      {
        category: 'Infrastructure spend',
        amount: '280,000 DZD',
        requester: 'Chief Systems Office',
        reason: 'Backup storage capacity upgrade and redundancy',
        priority: 'High',
        status: 'pending',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.alert.createMany({
    data: [
      {
        title: 'Backup sync drift',
        detail: 'Secondary storage remains 3 minutes behind target.',
        level: 'critical',
      },
      {
        title: 'Access anomaly',
        detail: 'One privileged profile attempted repeated non-standard logins.',
        level: 'warning',
      },
      {
        title: 'Policy update',
        detail: 'New compliance workflow deployed to 6 regions.',
        level: 'info',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
