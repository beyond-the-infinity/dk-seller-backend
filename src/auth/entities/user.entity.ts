import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shop } from '../../shop/entities/shop.entity';
import { ShopMember } from '../../shop/entities/shop_memebr.entity';
import { UserPermission } from './user_premission.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @OneToMany(() => UserPermission, (userPermission) => userPermission.user)
  userPermissions!: UserPermission[];

  @OneToMany(() => Shop, (shop) => shop.owner)
  shops!: Shop[];

  @OneToMany(() => ShopMember, (shopMember) => shopMember.user)
  shopMembers!: ShopMember[];
}
