import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { UserProfileRoleEntity } from '../user-profile-role/user-profile-role.entity';

@Entity('role')
@Index(['name'], { unique: true })
export class RoleEntity extends AbstractEntity {
    @Column({
        type: 'varchar',
    })
    name: string;

    @OneToMany(
        type => UserProfileRoleEntity,
        userProfileRole => userProfileRole.role,
    )
    userProfileRoles: UserProfileRoleEntity[];
}
