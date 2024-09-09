import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { ShopMember } from './shop_memebr.entity';

@Entity('shops')
export class Shop {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.shops)
  owner!: User;

  @OneToMany(() => ShopMember, (shopMember) => shopMember.shop)
  members!: ShopMember[];
}
