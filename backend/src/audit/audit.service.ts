import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async log(userId: string, action: string, entity: string, metadata?: Record<string, any>) {
    return this.prisma.auditLog.create({
      data: {
        userId,
        action,
        entity,
        metadata: metadata ?? {},
      },
    });
  }

  async findAll() {
    return this.prisma.auditLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }
}
