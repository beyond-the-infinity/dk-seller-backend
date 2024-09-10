import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { FindOneOptions, FindOptionsWhere } from 'typeorm';

import { HttpError } from '../common/errors/http.error';
import configuration from '../configs/configuration';
import { UserRepository } from '../data-source';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './entities/user.entity';

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

  async login(data: LoginDto): Promise<string> {
    const hashedPassword = await this.hash(data.password);
    const user = await this.findUserWhere({
      phone: data.phone,
      password: hashedPassword,
    });
    if (!user) {
      throw new HttpError(404, { message: 'User not found' });
    }
    return this.generateToken(user);
  }

  private async hash(data: string) {
    return await bcrypt.hash(data, 10);
  }

  private generateToken(payload: object): string {
    return jwt.sign(payload, configuration.jwtSecret, {
      expiresIn: '72h',
    });
  }
}

export const AuthService = new AuthServiceClass();
