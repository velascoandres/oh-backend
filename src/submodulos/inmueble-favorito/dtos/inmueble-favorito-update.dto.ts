import { BaseDTO } from '@pimba/excalibur/lib';
import { IsOptional, IsNumber } from 'class-validator';

export class InmuebleFavoritoUpdateDto extends BaseDTO {
    @IsOptional()
    @IsNumber()
    perfilUsuario: number;

    @IsOptional()
    @IsNumber()
    inmueble: number;
}