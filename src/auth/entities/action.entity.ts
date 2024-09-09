import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('actions')
export class Action {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  action!: string;
}
