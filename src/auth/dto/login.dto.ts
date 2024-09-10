import { IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsPhoneNumber('IR')
  phone: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class LoginResponseDto {
  message: string;
  token: any;
}
