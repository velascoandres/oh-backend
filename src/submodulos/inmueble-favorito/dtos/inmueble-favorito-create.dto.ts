import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import { IsNotEmpty } from 'class-validator';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class InmuebleFavoritoCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    perfilUsuario: number;

    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    inmueble: number;
}
