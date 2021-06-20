import { PropertyPictureEntity } from '../properties/property-picture/property-picture.entity';
import { CategoryEntity } from '../properties/category/category.entity';
import { PropertyEntity } from '../properties/property/property.entity';
import { FavoritePropertyEntity } from '../properties/favorite-property/favorite-property.entity';

export const MONGODB_ENTITIES = [
  PropertyEntity,
  FavoritePropertyEntity,
  PropertyPictureEntity,
  CategoryEntity,
];
