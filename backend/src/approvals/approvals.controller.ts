import { Controller, Get, Param, Patch, Req, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { ApprovalsService } from './approvals.service';

@Controller('approvals')
export class ApprovalsController {
  constructor(private readonly approvalsService: ApprovalsService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  @Get()
  getApprovals() {
    return this.approvalsService.getApprovals();
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  @Patch(':id/approve')
  approve(@Param('id') string, @Req() req: any) {
    return this.approvalsService.approve(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN, Role.MANAGER)
  @Patch(':id/reject')
  reject(@Param('id') string, @Req() req: any) {
    return this.approvalsService.reject(id, req.user.id);
  }
}
