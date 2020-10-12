import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import { IsOptional, IsNumber } from 'class-validator';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class InmuebleFavoritoUpdateDto extends BaseDTO {
    @IsOptional()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    perfilUsuario: number;

    @IsOptional()
    @IsNumber()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    inmueble: number;
}
