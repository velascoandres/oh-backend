import { Column, Entity } from 'typeorm';
import { ObjectID } from 'mongodb';
import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';

@Entity('history')
export class HistoryEntity extends AbstractMongoEntity {
  @Column()
  userProfile: number;
  @Column()
  property: string | ObjectID;

}
