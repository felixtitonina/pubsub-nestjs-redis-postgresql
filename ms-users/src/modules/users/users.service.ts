import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async create(user) {
    // repository é a camada que vai se conectar com o DB
    return await this.usersRepository.create(user);
  }

  async findAll() {
    return await this.usersRepository.findAll();
  }

  async find() {
    return ['felix', 'tito'];
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.updateuserById(id, updateUserDto);
  }

  async delete(id: string) {
    return await this.usersRepository.deleteUserById(id);
  }
}
