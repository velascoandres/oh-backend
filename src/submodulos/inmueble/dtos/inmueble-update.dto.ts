import { BaseDTO, IsTypeOr } from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsIn,
    Length,
    IsNumber,
    isNumber,
    isNumberString,
} from 'class-validator';


export class InmuebleUpdateDto extends BaseDTO {
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

    // @IsOptional()
    // @IsNumber()
    // precio: number;

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
    @IsNumber()
    unidadesSanitarias: number;

    @IsOptional()
    @IsIn([0, 1])
    tieneCocina: 0 | 1;

    @IsOptional()
    @IsIn([0, 1])
    tieneSala: 0 | 1;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    plantas: number;

    @IsOptional()
    @IsNumber()
    @IsIn([0, 1])
    habilitado: 0 | 1 = 0;

    @IsOptional()
    @IsIn([0, 1])
    enAlquiler: 0 | 1 = 0;
}
