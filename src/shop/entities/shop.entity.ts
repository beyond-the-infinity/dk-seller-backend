import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { AppDataSource } from '../../data-source';
import { ShopMember } from './shop_memebr.entity';

export const SHOPS = 'shops';
@Entity(SHOPS)
export class Shop {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.shops)
  owner!: User;

  @OneToMany(() => ShopMember, (shopMember) => shopMember.shop)
  members!: ShopMember[];
}

export const ShopRepository = AppDataSource.getRepository(Shop);
