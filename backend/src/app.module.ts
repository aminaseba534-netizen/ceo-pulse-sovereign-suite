import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './backend/src/auth/auth.module';
import { DashboardModule } from './backend/src/dashboard/dashboard.module';
import { ApprovalsModule } from './backend/src/approvals/approvals.module';
import { UsersModule } from './backend/src/users/users.module';
import { AuditModule } from './backend/src/audit/audit.module';
import { PrismaModule } from './backend/src/prisma/prisma.module';
import { RolesGuard } from './backend/src/auth/roles.guard';

@Module({
  imports: [PrismaModule, AuthModule, DashboardModule, ApprovalsModule, UsersModule, AuditModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
