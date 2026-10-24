import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApprovalsService {
  constructor(private readonly prisma: PrismaService) {}

  async getApprovals() {
    return this.prisma.approval.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async approve(id: string, userId: string) {
    const approval = await this.prisma.approval.update({
      where: { id },
      data: { status: 'approved' },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'approve',
        entity: 'approval',
        metadata: { approvalId: id },
      },
    });

    return approval;
  }

  async reject(id: string, userId: string) {
    const approval = await this.prisma.approval.update({
      where: { id },
      data: { status: 'rejected' },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'reject',
        entity: 'approval',
        metadata: { approvalId: id },
      },
    });

    return approval;
  }
}
