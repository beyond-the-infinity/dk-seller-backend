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

  async register(data: RegisterDto) {

  }

  async login(data: LoginDto) {

  }
}

export const AuthService = new AuthServiceClass();
