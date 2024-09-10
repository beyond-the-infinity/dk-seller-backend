import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const ACTIONS = 'actions';
@Entity(ACTIONS)
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string;
}
