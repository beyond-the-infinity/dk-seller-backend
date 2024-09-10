import bcrypt from 'bcryptjs';
import { FindOneOptions, FindOptionsWhere } from 'typeorm';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User, UserRepository } from './entities/user.entity';

class AuthServiceClass {
  constructor() {}

  async findUser(options: FindOneOptions<User>) {
    return await UserRepository.findOne(options);
  }

  async findUserWhere(options: FindOptionsWhere<User>) {
    return await UserRepository.findOneBy(options);
  }

  async register(data: RegisterDto): Promise<User> {
    const { phone, password } = data;
    const hashedPassword = await this.hash(password);
    const user = UserRepository.create({
      phone,
      password: hashedPassword,
    });
    await UserRepository.save(user);
    return user;
  }

  async login(data: LoginDto) {}

  private async hash(data: string) {
    return await bcrypt.hash(data, 10);
  }
}

export const AuthService = new AuthServiceClass();
