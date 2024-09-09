import { FindOneOptions } from 'typeorm';
import { User, UserRepository } from './entities/user.entity';

class AuthServiceClass {
  constructor() {}

  async findUser(options: FindOneOptions<User>) {
    return await UserRepository.findOne(options);
  }
}

export const AuthService = new AuthServiceClass();
