import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';
import { Entity, Index, Column, ObjectID } from 'typeorm';

@Entity('property_fav')
@Index(['property', 'userProfile'], {unique: true})
export class FavoritePropertyEntity extends AbstractMongoEntity {
    @Column()
    property: string | ObjectID;

    @Column()
    userProfile: number;
}
