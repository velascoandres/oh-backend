import { FavoritePublicationEntity } from '../publications/favorite-publication/favorite-publication.entity';
import { PublicationEntity } from '../publications/publication/publication.entity';
import { PropertyPictureEntity } from '../publications/property-picture/property-picture.entity';

export const MONGODB_ENTITIES = [
    PublicationEntity,
    FavoritePublicationEntity,
    PropertyPictureEntity,
];
