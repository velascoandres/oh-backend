import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';
import { Entity, Column, Index, ObjectID } from 'typeorm';
import { GeoJSON } from './geo-json';
import { PropertyPictureEntity } from '../property-picture/property-picture.entity';

@Index(['category'])
@Entity('publication')
export class PropertyEntity extends AbstractMongoEntity {

  @Column()
  name: string;
  @Column()
  description: string;

  @Column()
  estateId: number;

  @Column()
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

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parks: number;

  @Column()
  floors: number;

  @Column()
  isForRent: 0 | 1 = 0;

  @Column()
  enable: 0 | 1 = 0;

  @Column()
  category: string | ObjectID;

  @Column()
  price: number;

  // @OneToMany(type => PropertyPictureEntity, pp => pp.publicationId)
  @Column(type => PropertyPictureEntity)
  pictures: PropertyPictureEntity[];

  @Column()
  location: GeoJSON;

  @Column()
  userProfile: string;

/*  @Column()
  contactPhone: string;

  @Column()
  email: string;*/
}
