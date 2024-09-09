import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from './permission';
import { Role } from './role';

@Entity('role_permission')
export class RolePermission {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Role, (role) => role.rolePermissions)
  role!: Role;

  @ManyToOne(() => Permission)
  permission!: Permission;
}
