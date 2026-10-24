import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Post()
  async createUser(
    @Body() body: { email: string; password: string; name?: string; role?: string },
  ) {
    return this.usersService.createUser(body.email, body.password, body.name, body.role);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  @Patch(':id/role')
  async updateRole(@Param('id') string, @Body() body: { role: string }) {
    return this.usersService.updateRole(id, body.role);
  }
}
