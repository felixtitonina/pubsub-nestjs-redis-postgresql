import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
  imports: [],
  controllers: [UserController], // controllers
  providers: [UserService, UsersRepository], // services e repository
})
export class UsersModule {}
