import { PartialType } from '@nestjs/mapped-types';
import { FavoritePublicationCreateDto } from './favorite-property-create.dto';

export class FavoritePropertyUpdateDto extends PartialType(FavoritePublicationCreateDto) {
}
