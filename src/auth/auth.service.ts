import { FindOneOptions, FindOptionsWhere } from 'typeorm';
import { User, UserRepository } from './entities/user.entity';

class AuthServiceClass {
  constructor() {}

  async findUser(options: FindOneOptions<User>) {
    return await UserRepository.findOne(options);
  }

  async findUserWhere(options: FindOptionsWhere<User>) {
    return await UserRepository.findOneBy(options);
  }
}

export const AuthService = new AuthServiceClass();
