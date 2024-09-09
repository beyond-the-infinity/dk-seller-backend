import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../auth/entities/role.entity';
import { User } from '../../auth/entities/user.entity';
import { Shop } from './shop.entity';

@Entity('shop_members')
export class ShopMember {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Shop, (shop) => shop.members)
  shop!: Shop;

  @ManyToOne(() => User, (user) => user.shops)
  user!: User;

  @ManyToOne(() => Role, (role) => role.shopMembers)
  role!: Role;
}
