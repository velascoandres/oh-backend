import { Column, Entity, Index, ObjectID } from 'typeorm';
import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';

@Index(['property'])
@Entity('history')
export class HistoryEntity extends AbstractMongoEntity {
  @Column()
  property: string | ObjectID;
  @Column()
  userProfile: number;
}
