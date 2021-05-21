import {BaseMongoDTO} from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsNumber,
    IsAlpha,
    ValidateNested,
} from 'class-validator';
import {LocationCreateDto} from './location-create.dto';

export class EntidadCoordenadaUpdateDto extends BaseMongoDTO {
    @IsOptional()
    @IsNumber()
    entidadId: number;

    @IsOptional()
    @IsAlpha()
    entidad: string;

    @IsOptional()
    @ValidateNested()
    location: LocationCreateDto;
}

