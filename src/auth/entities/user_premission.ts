import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from './permission';
import { User } from './user';

@Entity('user_permissions')
export class UserPermission {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Permission)
  permission!: Permission;
}
