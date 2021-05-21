import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import { IsOptional, IsNumber } from 'class-validator';
import {CUSTOM_VALIDATORS} from '../../../constantes/validadores-custom';

export class InmuebleFavoritoUpdateDto extends BaseDTO {
    @IsOptional()
    @IsTypeOr(
        CUSTOM_VALIDATORS.esNumeroStringNumero,
    )
    perfilUsuario: number;

    @IsOptional()
    @IsNumber()
    @IsTypeOr(
        CUSTOM_VALIDATORS.esNumeroStringNumero,
    )
    inmueble: number;
}
