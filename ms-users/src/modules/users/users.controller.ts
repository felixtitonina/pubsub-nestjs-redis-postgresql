import { PubSubService } from './../global/pubsub/pubsub.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiDocGenericPost } from 'src/app/common/api-doc-post-generic.decorator';

@ApiTags('Users')
@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly pubSubService: PubSubService,
  ) {}

  @Post()
  @ApiDocGenericPost('user-create', CreateUserDto)
  async create(@Body() body: CreateUserDto) {
    const userCreated = await this.userService.create(body);
    await this.pubSubService.publish('user-created', userCreated, 'users');
    return userCreated;
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('/:id')
  async find() {
    return await this.userService.find();
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return await this.userService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
