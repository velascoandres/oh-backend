import {AbstractMongoEntity} from '@nest-excalibur/common-api/lib';
import {Entity, Column} from 'typeorm';
import {GeoJSON} from './geo-json';

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

    @Column()
    location: GeoJSON;
}
