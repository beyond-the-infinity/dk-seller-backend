import { DataSource, EntityManager } from 'typeorm';
import { User } from './auth/entities/user.entity';

import { Action } from './auth/entities/action.entity';
import { Role } from './auth/entities/role.entity';
import { RolePermission } from './auth/entities/role_permission.entity';
import { Shop } from './shop/entities/shop.entity';
import { ShopMember } from './shop/entities/shop_memebr.entity';

const entities = [User, Action, Role, RolePermission, Shop, ShopMember];

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'dk_seller',
  password: '123456',
  database: 'dk_seller',
  synchronize: true,
  logging: true,
  entities,
  subscribers: [],
  migrations: [],
});

export const AppEntityManager = new EntityManager(AppDataSource);

export const UserRepository = AppEntityManager.getRepository(User);
export const ActionRepository = AppEntityManager.getRepository(Action);
export const RoleRepository = AppEntityManager.getRepository(Role);
export const RolePermissionRepository =
  AppEntityManager.getRepository(RolePermission);
export const ShopRepository = AppEntityManager.getRepository(Shop);
export const ShopMemberRepository = AppEntityManager.getRepository(ShopMember);
