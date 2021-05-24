import { FavoritePublicationEntity } from '../sis-modules/favorite-publication/favorite-publication.entity';
import { PublicationEntity } from '../sis-modules/publication/publication.entity';
import { PropertyPictureEntity } from '../sis-modules/property-picture/property-picture.entity';

export const MONGODB_ENTITIES = [
    PublicationEntity,
    FavoritePublicationEntity,
    PropertyPictureEntity,
];
