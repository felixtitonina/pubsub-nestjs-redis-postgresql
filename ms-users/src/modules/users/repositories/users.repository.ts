import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly primaService: PrismaService) {}

  async create(user: CreateUserDto) {
    const userCreated = await this.primaService.users.create({
      data: user,
    });
    return {
      name: userCreated.name,
      id: userCreated.id,
      email: userCreated.email,
    };
  }

  async findAll() {
    return await this.primaService.users.findMany();
  }

  async updateuserById(id: string, data: UpdateUserDto) {
    const user = await this.primaService.users.update({
      where: {
        id,
      },
      data: data,
    });
    return user;
  }

  async deleteUserById(id: string) {
    return await this.primaService.users.delete({ where: { id } });
  }
}
