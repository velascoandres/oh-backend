import {BaseDTO} from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsIn,
    Length,
    IsNumber,
} from 'class-validator';


export class InmuebleUpdateDto extends BaseDTO{
    @IsOptional()
    nombre: string;

    @IsOptional()

    @Length(4, 256)
    descripcion: string;

    @IsOptional()
    @IsNumber()
    predio: number;

    @IsOptional()
    perfilUsuario: number;

    @IsOptional()
    @Length(4, 256)
    direccion: string;

    @IsOptional()
    @IsNumber()
    areaTerreno: number;

    @IsOptional()
    @IsNumber()
    areaConstruccion: number;

    @IsOptional()
    @IsNumber()
    habitaciones: number;

    @IsOptional()
    @IsNumber()
    parqueaderos: number;

    @IsOptional()
    @IsNumber()
    unidadesSanitarias: number;

    @IsOptional()
    @IsIn([0, 1])
    tieneCocina: 0 | 1;

    @IsOptional()
    @IsIn([0, 1])
    tieneSala: 0 | 1;

    @IsOptional()
    @IsNumber()
    plantas: number;

    @IsOptional()
    @IsNumber()
    @IsIn([0, 1])
    habilitado: 0 | 1 = 0;
}