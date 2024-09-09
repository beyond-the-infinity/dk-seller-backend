import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../auth/entities/role';
import { User } from '../../auth/entities/user';
import { Shop } from './shop';

@Entity('shop_members')
export class ShopMember {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Shop, (shop) => shop.shopMembers)
  shop!: Shop;

  @ManyToOne(() => User, (user) => user.shopMembers)
  user!: User;

  @ManyToOne(() => Role, (role) => role.shopMembers)
  role!: Role;
}
