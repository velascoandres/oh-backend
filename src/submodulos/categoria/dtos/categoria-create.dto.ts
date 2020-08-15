import { BaseDTO } from '@pimba/excalibur/lib';
import {
    IsNotEmpty,
    IsAlpha
} from 'class-validator';

export class CategoriaCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsAlpha()
    nombre: string;
}