import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';
import { Entity, Index, Column } from 'typeorm';

@Entity('property_fav')
@Index(['property', 'userProfile'], {unique: true})
export class FavoritePublicationEntity extends AbstractMongoEntity {
    @Column()
    publication: number;

    @Column()
    userProfile: number;
}
