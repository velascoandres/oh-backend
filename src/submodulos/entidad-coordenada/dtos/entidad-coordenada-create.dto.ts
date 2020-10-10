import { BaseMongoDTO } from '@pimba/excalibur/lib';
import { IsOptional, IsNotEmpty, IsNumber, IsAlpha, IsArray } from 'class-validator';

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
    @IsArray()
    coordenadas: [number, number];
}
