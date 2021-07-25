import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser({ email, password }: CreateUserDto) {
    const user = await this.userRepository.create({ email, password });

    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();

    return users;
  }
}
