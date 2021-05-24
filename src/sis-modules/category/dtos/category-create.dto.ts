import { BaseDTO } from '@nest-excalibur/common-api/lib';

import {
    IsNotEmpty,
    IsString
} from 'class-validator';

export class CategoryCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
}
