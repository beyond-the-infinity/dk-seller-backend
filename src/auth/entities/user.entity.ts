import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shop } from '../../shop/entities/shop.entity';
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
  permissions!: UserPermission[];

  @OneToMany(() => Shop, (shop) => shop.owner)
  shops!: Shop[];
}
