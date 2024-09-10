import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shop } from '../../shop/entities/shop.entity';

export const USERS = 'users';
@Entity(USERS)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  password: string;

  @OneToMany(() => Shop, (shop) => shop.owner)
  shops: Shop[];
}
