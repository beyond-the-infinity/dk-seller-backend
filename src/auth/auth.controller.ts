import { plainToInstance } from 'class-transformer';
import express, { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { RegisterDto, RegisterResponseDto } from './dto/register.dto';

const router = express.Router();

router.post(
  '/login',
  async (req: Request, res: Response): Promise<LoginResponseDto> => {
    const data = plainToInstance(LoginDto, req.body);
    const token = await AuthService.login(data);
    return {
      message: 'Login successful',
      token,
    };
  },
);

router.post(
  '/register',
  async (req: Request, res: Response): Promise<RegisterResponseDto> => {
    const data = plainToInstance(RegisterDto, req.body);
    const user = await AuthService.register(data);
    return {
      message: 'User registered successfully',
      user,
    };
  },
);

export const AuthController = router;
