import { Entity, Column, ObjectID } from 'typeorm';
import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';

@Entity('property_picture')
export class PropertyPictureEntity extends AbstractMongoEntity {
  @Column()
  url: string;

  @Column()
  property: string | ObjectID;
}
