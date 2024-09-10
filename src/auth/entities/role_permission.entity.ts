import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Role } from './role.entity';

export const ROLE_PERMISSIONS = 'role_permissions';
@Entity(ROLE_PERMISSIONS)
export class RolePermission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (role) => role.permissions)
  role: Role;

  @Column()
  permission: string;
}

export const RolePermissionRepository =
  AppDataSource.getRepository(RolePermission);
