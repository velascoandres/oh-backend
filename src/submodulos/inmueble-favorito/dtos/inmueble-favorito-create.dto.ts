import { BaseDTO } from '@pimba/excalibur/lib';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class InmuebleFavoritoCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsNumber()
    perfilUsuario: number;

    @IsNotEmpty()
    @IsNumber()
    inmueble: number;
}