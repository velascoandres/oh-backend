import {BaseDTO} from '@pimba/excalibur/lib';
import {IsNotEmpty, IsNumber, IsNumberString, IsOptional} from 'class-validator';

export class PrecioCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsNumber()
    valor: number;
    @IsNotEmpty()
    @IsNumber()
    tipoMoneda: number;
}


export class PrecioCreateMovilDto extends BaseDTO {
    @IsNotEmpty()
    @IsNumberString()
    valor: number;
    @IsNotEmpty()
    @IsNumberString()
    tipoMoneda: number;
}

export class PrecioUpdateMovilDto extends BaseDTO {
    @IsOptional()
    @IsNumberString()
    valor: number;
    @IsOptional()
    @IsNumberString()
    tipoMoneda: number;
}
