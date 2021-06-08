import { UserProfileRoleModule } from './../user-profile-role/user-profile-role.module';
import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { PropertyEntity } from '../property/property.entity';
import { UserProfileRoleEntity } from '../user-profile-role/user-profile-role.entity';

@Entity('user_profile')
export class UserProfileEntity extends AbstractEntity {

    @Column(
        {
            type: 'varchar',
            nullable: true,
        },
    )
    uid: string;

    @Column(
        {
            type: 'tinyint',
            default: 0,
        },
    )
    hasFirstLogin: 0 | 1;


    @Column(
        {
            type: 'varchar',
        },
    )
    firstnames: string;

    @Column(
        {
            type: 'varchar',
        },
    )
    lastnames: string;

    @Column(
        {
            type: 'varchar',
            unique: true,
        },
    )
    phone: string;

    @Column(
        {
            type: 'varchar',
        },
    )
    address: string;

    @Column(
        {
            type: 'tinyint',
            default: 0,
        },
    )
    enable: 0 | 1 = 0;

    @OneToMany(
        type => PropertyEntity,
        property => property.owner,
    )
    properties: PropertyEntity[];


    @OneToMany(
        type => UserProfileRoleEntity,
        userProfileRole => userProfileRole.userProfile,
    )
    userProfileRoles: UserProfileRoleEntity[];

}
