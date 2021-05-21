import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {IsOptional, IsUrl} from 'class-validator';
import {CUSTOM_VALIDATORS} from '../../../constantes/validadores-custom';

export class ImagenInmuebleUpdateDto extends BaseDTO {
    @IsOptional()
    @IsUrl()
    url: string;

    @IsOptional()
    @IsTypeOr(
        CUSTOM_VALIDATORS.esNumeroStringNumero,
    )
    inmueble: number;
}
