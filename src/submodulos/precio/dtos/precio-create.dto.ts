import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {IsNotEmpty, IsOptional} from 'class-validator';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class PrecioCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    valor: number;
    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    tipoMoneda: number;
}


export class PrecioCreateMovilDto extends BaseDTO {
    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    valor: number;
    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    tipoMoneda: number;
}

export class PrecioUpdateMovilDto extends BaseDTO {
    @IsOptional()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    valor: number;
    @IsOptional()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    tipoMoneda: number;
}
