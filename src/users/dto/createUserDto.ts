import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 1, description: 'Unique id' })
  readonly email: string;
  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  readonly password: string;
}
