import {BaseDTO} from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsIn,
    Length,
    IsNumber, IsNumberString, IsArray,
} from 'class-validator';

export class InmuebleUpdateMovilDto extends BaseDTO {
    @IsOptional()
    nombre: string;

    @IsOptional()
    @Length(4, 256)
    descripcion: string;

    @IsOptional()
    @IsNumberString()
    predio: number;

    @IsOptional()
    perfilUsuario: number;

    @IsOptional()
    @Length(4, 256)
    direccion: string;

    @IsOptional()
    @IsNumberString()
    areaTerreno: number;

    @IsOptional()
    @IsNumberString()
    areaConstruccion: number;

    @IsOptional()
    @IsNumberString()
    habitaciones: number;

    @IsOptional()
    @IsNumberString()
    parqueaderos: number;


    @IsOptional()
    @IsNumberString()
    plantas: number;

    @IsOptional()
    @IsNumberString()
    @IsIn(['1', '0'])
    habilitado: 0 | 1 = 0;

    @IsOptional()
    @IsNumberString()
    @IsIn(['0', '1'])
    enAlquiler: 0 | 1 = 0;

    @IsOptional()
    @IsArray()
    imagenesEliminar: number[] | string[] = [];
    @IsOptional()
    @IsNumberString()
    valor: number;
    @IsOptional()
    @IsNumberString()
    tipoMoneda: string;
    @IsOptional()
    imagenes: any[];
}
