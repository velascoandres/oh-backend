import { BaseMongoDTO } from '@pimba/excalibur/lib';
import { IsOptional, Matches, IsNotEmpty, IsNumber, IsAlpha, IsArray, Length } from 'class-validator';

export class EntidadCoordenadaCreateDto extends BaseMongoDTO {
    @IsNotEmpty()
    @IsNumber()
    entidadId: number;

    @IsNotEmpty()
    @IsAlpha()
    entidad: string;

    @IsOptional()
    @Matches('Point')
    type: 'Point' = 'Point';

    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, { each: true })
    coordenadas: [number, number];
}