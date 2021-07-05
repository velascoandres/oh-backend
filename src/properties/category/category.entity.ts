import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';
import { Entity, Column } from 'typeorm';

@Entity('prop_category')
export class CategoryEntity extends AbstractMongoEntity {
  @Column(
    {
      type: 'varchar',
    },
  )
  name: string;

  @Column()
  code: string;

  @Column(
    {
      type: 'tinyint',
      default: 1,
    },
  )
  enable: 0 | 1 = 1;
}
