import {BaseDTO} from '@pimba/excalibur/lib';
import {
    IsNotEmpty,
    IsString
} from 'class-validator';

export class CategoriaCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsString()
    nombre: string;
}
