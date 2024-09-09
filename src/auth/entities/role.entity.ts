import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { RolePermission } from './role_permission.entity';

export const ROLES = 'roles';
@Entity(ROLES)
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  permissions!: RolePermission[];
}

export const RoleRepository = AppDataSource.getRepository(Role);
