import { PartialType } from '@nestjs/mapped-types';
import { PublicationCreateDto } from './publication-create.dto';

export class PublicationUpdateDto extends PartialType(PublicationCreateDto) {
}

