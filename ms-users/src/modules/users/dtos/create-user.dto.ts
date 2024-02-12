// DTO são objetos de transferencia de dados, transição de uma classe com outra

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'user name',
    example: 'Tito',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'user email',
    example: 'email@email.com',
  })
  @IsEmail()
  email: string;
}
