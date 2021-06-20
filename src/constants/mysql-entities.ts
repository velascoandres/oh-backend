import { RoleEntity } from '../users/role/role.entity';
import { UserProfileEntity } from '../users/user-profile/user-profile.entity';
import { UserProfileRoleEntity } from '../users/user-profile-role/user-profile-role.entity';
import { PermissionEntity } from '../users/permission/permission.entity';
import { RolePermissionEntity } from '../users/role-permission/role-permission.entity';

export const MYSQL_ENTITIES = [
  UserProfileEntity,
  RoleEntity,
  UserProfileRoleEntity,
  PermissionEntity,
  RolePermissionEntity,
];
