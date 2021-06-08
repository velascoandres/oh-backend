import { AbstractEntity } from '@nest-excalibur/common-api/lib';
import { Column, Entity, Index } from 'typeorm';

@Entity('role')
@Index(['name'], { unique: true })
export class RoleEntity extends AbstractEntity {
    @Column({
        type: 'varchar',
    })
    name: string;
}
