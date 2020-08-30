import {BaseDTO} from '@pimba/excalibur/lib';
import {IsNotEmpty, IsNumber} from 'class-validator';

export class PrecioCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsNumber()
    valor: number;
    @IsNotEmpty()
    @IsNumber()
    tipoMoneda: number;
}
