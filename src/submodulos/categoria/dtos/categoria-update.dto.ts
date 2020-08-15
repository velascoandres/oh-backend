import { BaseDTO } from '@pimba/excalibur/lib';
import { IsOptional, IsAlpha } from 'class-validator';

export class CategoriaUpdateDto extends BaseDTO {
    @IsOptional()
    @IsAlpha()
    nombre: string;
}