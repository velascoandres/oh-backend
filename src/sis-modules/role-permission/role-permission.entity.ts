import { Entity, Index, ManyToOne } from 'typeorm';
import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { RoleEntity } from '../role/role.entity';
import { PermissionEntity } from '../permission/permission.entity';

@Entity('rol_entity')
@Index(['role', 'permission'], {unique: true})
export class RolePermissionEntity extends AbstractEntity {

  @ManyToOne(
    type => RoleEntity,
    role => role.rolePermissions,
  )
  role: RoleEntity | number;

  @ManyToOne(
    type => PermissionEntity,
    permission => permission.rolePermissions,
  )
  permission: PermissionEntity | number;
}
