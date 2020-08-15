import { BaseDTO } from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsIn,
    IsNotEmpty,
    Length,
    IsNumber,
} from 'class-validator';


export class InmuebleCreateDto extends BaseDTO {
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()

    @Length(4, 256)
    descripcion: string;

    @IsNotEmpty()
    @IsNumber()
    predio: number;

    @IsNotEmpty()
    perfilUsuario: number;

    @IsNotEmpty()
    @Length(4, 256)
    direccion: string;

    @IsNotEmpty()
    @IsNumber()
    areaTerreno: number;

    @IsNotEmpty()
    @IsNumber()
    areaConstruccion: number;

    @IsNotEmpty()
    @IsNumber()
    habitaciones: number;

    @IsNotEmpty()
    @IsNumber()
    parqueaderos: number;

    @IsNotEmpty()
    @IsNumber()
    unidadesSanitarias: number;

    @IsNotEmpty()
    @IsIn([0, 1])
    tieneCocina: 0 | 1;

    @IsNotEmpty()
    @IsIn([0, 1])
    tieneSala: 0 | 1;

    @IsNotEmpty()
    @IsNumber()
    plantas: number;

    @IsOptional()
    @IsNumber()
    @IsIn([0, 1])
    habilitado: 0 | 1 = 0;

    @IsOptional()
    @IsNumber()
    @IsIn([0, 1])
    enAlquiler: 0 | 1 = 0;
}