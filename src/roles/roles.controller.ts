import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/createRoleDto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  createRole(@Body() dtoRole: CreateRoleDto) {
    return this.rolesService.createRole(dtoRole);
  }

  @Get('/:role')
  getRoleByRole(@Param('role') role: string) {
    return this.rolesService.getRoleByRole(role);
  }
}
