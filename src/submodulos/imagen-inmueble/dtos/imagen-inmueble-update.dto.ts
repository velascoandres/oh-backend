import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {IsOptional, IsUrl} from 'class-validator';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class ImagenInmuebleUpdateDto extends BaseDTO {
    @IsOptional()
    @IsUrl()
    url: string;

    @IsOptional()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    inmueble: number;
}
