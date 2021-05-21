import {BaseMongoDTO} from '@pimba/excalibur/lib';
import {IsNotEmpty, IsAlpha, IsNumber, ValidateNested} from 'class-validator';
import {LocationCreateDto} from './location-create.dto';

export class EntidadCoordenadaCreateDto extends BaseMongoDTO {
    @IsNotEmpty()
    @IsNumber()
    entidadId: number;

    @IsNotEmpty()
    @IsAlpha()
    entidad: string;

    @IsNotEmpty()
    @ValidateNested()
    location: LocationCreateDto;
}
