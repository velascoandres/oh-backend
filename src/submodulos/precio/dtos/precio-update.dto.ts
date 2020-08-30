import {BaseDTO} from '@pimba/excalibur/lib';
import {IsNumber, IsOptional} from 'class-validator';

export class PrecioUpdateDto extends BaseDTO {
    @IsOptional()
    @IsNumber()
    valor: number;

    @IsOptional()
    @IsNumber()
    tipoMoneda: number;
}
