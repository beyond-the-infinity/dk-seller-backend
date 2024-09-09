import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'dk_seller',
  password: '123456',
  database: 'dk_seller',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
