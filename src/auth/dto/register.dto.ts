import { IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';
import { IsUnique } from '../../common/validators/decorators/is-unique.decorator';
import { USERS } from '../entities/user.entity';

export class RegisterDto {
  @IsNotEmpty()
  @IsPhoneNumber('IR')
  @IsUnique({ tableName: USERS, column: 'phone' })
  phone: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
