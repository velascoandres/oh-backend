import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { UserProfileRoleEntity } from '../user-profile-role/user-profile-role.entity';
import { RoleEnum } from '../auth/enums/role.enum';
import { RolePermissionEntity } from '../role-permission/role-permission.entity';

@Entity('role')
@Index(['name'], { unique: true })
export class RoleEntity extends AbstractEntity {
    @Column({
        type: 'varchar',
    })
    name: RoleEnum;

    @OneToMany(
        type => UserProfileRoleEntity,
        userProfileRole => userProfileRole.role,
    )
    userProfileRoles: UserProfileRoleEntity[];

    @OneToMany(
      type => RolePermissionEntity,
      rolePermission => rolePermission.role,
    )
    rolePermissions: RolePermissionEntity[];
}
