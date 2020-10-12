import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {IsOptional} from 'class-validator';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class PrecioUpdateDto extends BaseDTO {
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
