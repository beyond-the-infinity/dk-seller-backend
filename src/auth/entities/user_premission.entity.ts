import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from './user.entity';

export const USER_PERMISSIONS = 'user_permissions';
@Entity(USER_PERMISSIONS)
export class UserPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  permission: string;
}

export const UserPermissionRepository =
  AppDataSource.getRepository(UserPermission);
