import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { RoleEntity } from '../role/role.entity';

import { UserProfileEntity } from '../user-profile/user-profile.entity';


@Entity('user_role')
@Index(['userProfile', 'role'], { unique: true })
export class UserProfileRoleEntity extends AbstractEntity {
    @ManyToOne(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        type => UserProfileEntity,
        userProfile => userProfile.userProfileRoles,
    )
    userProfile: UserProfileEntity | number;

    @ManyToOne(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        type => RoleEntity,
        role => role.userProfileRoles,
    )
    role: RoleEntity | number;
}