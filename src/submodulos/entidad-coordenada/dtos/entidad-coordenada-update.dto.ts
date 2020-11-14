import {BaseMongoDTO} from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsNumber,
    IsAlpha,
    IsArray,
} from 'class-validator';

export class EntidadCoordenadaUpdateDto extends BaseMongoDTO {
    @IsOptional()
    @IsNumber()
    entidadId: number;

    @IsOptional()
    @IsAlpha()
    entidad: string;

    @IsOptional()
    // @Matches('Point')
    type: 'Point' = 'Point';

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    coordinates: [number, number];
}

