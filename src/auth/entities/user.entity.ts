import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Shop } from '../../shop/entities/shop.entity';
import { UserPermission } from './user_premission.entity';

export const USERS = 'users';
@Entity(USERS)
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

export const UserRepository = AppDataSource.getRepository(User);
