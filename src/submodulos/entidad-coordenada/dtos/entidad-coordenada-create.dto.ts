import {BaseMongoDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {IsOptional, IsNotEmpty, IsNumber, IsAlpha} from 'class-validator';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class EntidadCoordenadaCreateDto extends BaseMongoDTO {
    @IsNotEmpty()
    @IsNumber()
    entidadId: number;

    @IsNotEmpty()
    @IsAlpha()
    entidad: string;

    @IsOptional()
    type: 'Point' = 'Point';

    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.arregloNumeros,
    )
    coordenadas: [number, number];
}
