import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';
import { Entity, Column, Index, OneToMany } from 'typeorm';
import { GeoJSON } from './geo-json';
import { PropertyPictureEntity } from '../property-picture/property-picture.entity';

@Index(['categoryId', 'propertyId'])
@Entity('publication')
export class PublicationEntity extends AbstractMongoEntity {

  @Column()
  name: string;
  @Column()

  description: string;
  @Column()
  estateId: number;

  @Column()
  address: string;

  @Column()
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
  propertyId: number;

  @Column()
  categoryId: number;

  @Column()
  price: number;

  // @OneToMany(type => PropertyPictureEntity, pp => pp.publicationId)
  @Column(type => PropertyPictureEntity)
  pictures: PropertyPictureEntity[];

  @Column()
  location: GeoJSON;
}