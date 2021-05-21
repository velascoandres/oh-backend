import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { PropertyEntity } from '../property/property.entity';

@Entity('user_profile')
export class UserProfileEntity extends AbstractEntity {
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
            name: 'ide_pais',
        },
    )
    identification: string;

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

}
