import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user';
import { ShopMember } from './shop_memebr';

@Entity('shops')
export class Shop {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.shops)
  owner!: User;

  @OneToMany(() => ShopMember, (shopMember) => shopMember.shop)
  shopMembers!: ShopMember[];
}
