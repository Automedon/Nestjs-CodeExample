import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/createUserDto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(userDto: CreateUserDto) {
    return 1;
  }

  async registration(userDto: CreateUserDto) {
    return 1;
  }
}
