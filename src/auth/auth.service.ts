import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { hash } from 'bcryptjs';
import { User } from 'src/users/users.model';
import { CreateUserDto } from '../users/dto/createUserDto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  private generateToken({ email, id, roles }: User) {
    return {
      token: this.jwtService.sign({ email, id, roles }),
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.usersService.getUserByEmail(userDto.email);
    const isPasswordValid = await compare(userDto.password, user.password);
    if (user && isPasswordValid) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Not valid email or password' });
  }

  async registration(userDto: CreateUserDto) {
    const isUserExist = await this.usersService.getUserByEmail(userDto.email);
    if (!!isUserExist) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await hash(userDto.password, 8);
    const newUser = await this.usersService.createUser({
      email: userDto.email,
      password: hashPassword,
    });
    return this.generateToken(newUser);
  }
}
