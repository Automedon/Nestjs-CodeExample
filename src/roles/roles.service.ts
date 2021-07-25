import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/createRoleDto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dtoRole: CreateRoleDto) {
    return await this.roleRepository.create(dtoRole);
  }

  async getRoleByRole(role: string) {
    return await this.roleRepository.findOne({ where: { role } });
  }
}
