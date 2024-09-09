import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from './permissions';
import { Role } from './user';

@Entity('role_permission')
export class RolePermission {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Role, (role) => role.rolePermissions)
  role!: Role;

  @ManyToOne(() => Permission)
  permission!: Permission;
}
