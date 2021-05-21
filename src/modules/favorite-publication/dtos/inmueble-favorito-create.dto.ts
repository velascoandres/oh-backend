import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import { IsNotEmpty } from 'class-validator';
import {CUSTOM_VALIDATORS} from '../../../constantes/validadores-custom';

export class InmuebleFavoritoCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsTypeOr(
        CUSTOM_VALIDATORS.esNumeroStringNumero,
    )
    perfilUsuario: number;

    @IsNotEmpty()
    @IsTypeOr(
        CUSTOM_VALIDATORS.esNumeroStringNumero,
    )
    inmueble: number;
}
