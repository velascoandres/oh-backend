import { BaseDTO } from '@nest-excalibur/common-api/lib';
import { IsOptional, IsAlpha } from 'class-validator';

export class CategoryUpdateDto extends BaseDTO {
    @IsOptional()
    @IsAlpha()
    name: string;
}
