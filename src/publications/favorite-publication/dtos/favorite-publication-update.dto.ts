import { PartialType } from '@nestjs/mapped-types';
import { FavoritePublicationCreateDto } from './favorite-publication-create.dto';

export class FavoritePublicationUpdateDto extends PartialType(FavoritePublicationCreateDto) {
}
