import { PropertyPictureEntity } from '../publications/property-picture/property-picture.entity';
import { CategoryEntity } from '../publications/category/category.entity';
import { PropertyEntity } from '../publications/property/property.entity';
import { FavoritePropertyEntity } from '../publications/favorite-property/favorite-property.entity';

export const MONGODB_ENTITIES = [
  PropertyEntity,
  FavoritePropertyEntity,
  PropertyPictureEntity,
  CategoryEntity,
];
