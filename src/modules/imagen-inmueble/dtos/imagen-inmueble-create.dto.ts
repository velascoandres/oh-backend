import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {IsUrl, IsNotEmpty} from 'class-validator';
import {CUSTOM_VALIDATORS} from '../../../constantes/validadores-custom';

export class ImagenInmuebleCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsUrl()
    url: string;

    @IsNotEmpty()
    @IsTypeOr(
        CUSTOM_VALIDATORS.esNumeroStringNumero,
    )
    inmueble: number;
}
