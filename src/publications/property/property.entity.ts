import { Entity, Column, ManyToOne, OneToOne } from 'typeorm';
import { AbstractEntity } from '@nest-excalibur/common-api/lib';

import { CategoryEntity } from '../category/category.entity';
import { UserProfileEntity } from '../../users/user-profile/user-profile.entity';

@Entity('property')
export class PropertyEntity extends AbstractEntity {
  @Column(
    {
      name: 'name',
      type: 'varchar',
    },
  )
  name: string;
  @Column(
    {
      name: 'description',
      type: 'varchar',
    },
  )

  description: string;
  @Column(
    {
      name: 'estateId',
      type: 'int',
      unique: true,
    },
  )
  estateId: number;

  @Column(
    {
      name: 'address',
      type: 'varchar',
    },
  )
  address: string;

  @Column(
    {
      type: 'decimal',
      precision: 6,
      scale: 2,
      name: 'area',
    },
  )
  area: number;

  @Column(
    {
      type: 'int',
      name: 'bedrooms',
    },
  )
  bedrooms: number;

  @Column(
    {
      type: 'int',
      name: 'bathrooms'
    },
  )
  bathrooms: number;

  @Column(
    {
      name: 'parks',
      type: 'int',
      nullable: true,
    },
  )
  parks: number;

  @Column(
    {
      type: 'int',
      name: 'floors',
    },
  )
  floors: number;

  @Column(
    {
      type: 'tinyint',
      name: 'isForRent',
      default: 0,
    },
  )
  isForRent: 0 | 1 = 0;

  @Column(
    {
      type: 'tinyint',
      default: 0,
      name: 'enable',
    },
  )
  enable: 0 | 1 = 0;

  @Column(
    {
      type: 'decimal',
      precision: 8,
      scale: 2,
      name: 'price',
    },
  )
  price: number;

  @OneToOne(
    type => UserProfileEntity,
    userProfile => userProfile.properties,
    {
      nullable: false,
    },
  )
  owner: UserProfileEntity | number;

  @ManyToOne(
    type => CategoryEntity,
    category => category.properties,
  )
  category: CategoryEntity | number;
}
