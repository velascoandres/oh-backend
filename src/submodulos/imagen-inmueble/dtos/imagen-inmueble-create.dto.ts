import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {IsUrl, IsNotEmpty} from 'class-validator';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class ImagenInmuebleCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsUrl()
    url: string;

    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    inmueble: number;
}
