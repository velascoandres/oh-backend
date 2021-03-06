import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsIn,
    Length,
    IsNumber, IsNumberString, IsArray, isNumber, isNumberString,
} from 'class-validator';

export class InmuebleUpdateMovilDto extends BaseDTO {
    @IsOptional()
    nombre: string;

    @IsOptional()
    @Length(4, 256)
    descripcion: string;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    predio: number;

    @IsOptional()
    perfilUsuario: number;

    @IsOptional()
    @Length(4, 256)
    direccion: string;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    areaTerreno: number;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    areaConstruccion: number;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    habitaciones: number;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    parqueaderos: number;


    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    plantas: number;

    @IsOptional()
    @IsIn(['1', '0', 1, 0])
    habilitado: 0 | 1 = 0;

    @IsOptional()
    @IsIn(['0', '1', 1, 0])
    enAlquiler: 0 | 1 = 0;

    @IsOptional()
    imagenesEliminar: any | any[];

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    valor: number;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    tipoMoneda: string;
    @IsOptional()
    imagenes: any[];
}
