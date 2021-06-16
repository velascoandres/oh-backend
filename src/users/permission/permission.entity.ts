import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { RolePermissionEntity } from '../role-permission/role-permission.entity';

@Entity('permission')
export class PermissionEntity extends AbstractEntity {
  @Column()
  name: string;

  @OneToMany(
    type => RolePermissionEntity,
    rolePermission => rolePermission.permission,
  )
  rolePermissions: RolePermissionEntity[];

}
