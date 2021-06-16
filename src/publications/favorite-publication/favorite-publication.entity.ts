import { AbstractMongoEntity } from '@nest-excalibur/common-api/lib';
import { Entity, Index, Column } from 'typeorm';

@Entity('property_fav')
@Index(['publicationId', 'userProfileId'], {unique: true})
export class FavoritePublicationEntity extends AbstractMongoEntity {
    @Column()
    publicationId: string;

    @Column()
    userProfileId: number;
}
