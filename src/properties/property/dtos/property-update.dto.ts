import { PartialType } from '@nestjs/mapped-types';
import { PropertyCreateDto } from './property-create.dto';

export class PropertyUpdateDto extends PartialType(PropertyCreateDto) {
}

