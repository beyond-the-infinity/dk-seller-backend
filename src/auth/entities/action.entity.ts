import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AppDataSource } from '../../data-source';

export const ACTIONS = 'actions';
@Entity(ACTIONS)
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string;
}

export const ActionRepository = AppDataSource.getRepository(Action);
