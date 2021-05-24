import { PartialType } from '@nestjs/mapped-types';
import { PropertyPictureCreateDto } from './property-picture-create.dto';

export class PropertyPictureUpdateDto extends PartialType(PropertyPictureCreateDto) {
}
