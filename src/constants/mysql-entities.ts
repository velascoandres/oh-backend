import { RoleEntity } from '../sis-modules/role/role.entity';
import { PropertyEntity } from '../sis-modules/property/property.entity';
import { CategoryEntity } from '../sis-modules/category/category.entity';
import { UserProfileEntity } from '../sis-modules/user-profile/user-profile.entity';
import { UserProfileRoleEntity } from '../sis-modules/user-profile-role/user-profile-role.entity';
import { PermissionEntity } from '../sis-modules/permission/permission.entity';
import { RolePermissionEntity } from '../sis-modules/role-permission/role-permission.entity';

export const MYSQL_ENTITIES = [
  PropertyEntity,
  CategoryEntity,
  UserProfileEntity,
  RoleEntity,
  UserProfileRoleEntity,
  PermissionEntity,
  RolePermissionEntity,
];
