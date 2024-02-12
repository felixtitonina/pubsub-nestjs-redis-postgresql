import { Module } from '@nestjs/common';
import UsersExternalController from './users.external.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
  imports: [],
  providers: [UsersService, UsersRepository],
  controllers: [UsersExternalController],
})
export class UsersModule {}
