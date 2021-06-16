import { PartialType } from '@nestjs/mapped-types';
import { PublicationCreateDto } from './publication-create.dto';
import { IsNotEmpty } from 'class-validator';

export class PublicationUpdateDto extends PartialType(PublicationCreateDto) {
  @IsNotEmpty()
  propertyId: number;
}

