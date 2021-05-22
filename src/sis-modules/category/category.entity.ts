import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { Entity, Column, OneToMany } from 'typeorm';
import { PropertyEntity } from '../property/property.entity';

@Entity('category')
export class CategoryEntity extends AbstractEntity {
    @Column(
        {
            type: 'varchar',
        }
    )
    name: string;

    @OneToMany(
        type => PropertyEntity,
        property => property.category,
    )
    properties: PropertyEntity[];

    @Column(
        {
            type: 'tinyint',
            default: 1,
        },
    )
    enable: 0 | 1 = 1;
}
