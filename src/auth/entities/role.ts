import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ShopMember } from '../../shop/entities/shop_memebr';
import { RolePermission } from './role_permission';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  rolePermissions!: RolePermission[];

  @OneToMany(() => ShopMember, (shopMember) => shopMember.role)
  shopMembers!: ShopMember[];
}
