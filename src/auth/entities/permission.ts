import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Action } from './action';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Action)
  action!: Action;

  @Column()
  resource!: string;
}
