import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsIn,
    IsNotEmpty,
    Length,
    IsNumber, IsNumberString, isNumber, isNumberString,
} from 'class-validator';


export class InmuebleCreateDto extends BaseDTO {
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()

    @Length(4, 256)
    descripcion: string;

    @IsNotEmpty()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    predio: number;

    @IsNotEmpty()
    perfilUsuario: number;

    @IsNotEmpty()
    @Length(4, 256)
    direccion: string;

    @IsNotEmpty()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    areaTerreno: number;

    @IsNotEmpty()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    areaConstruccion: number;

    // @IsNotEmpty()
    // @ValidateNested()
    // precio: PrecioCreateDto;

    @IsNotEmpty()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    habitaciones: number;

    @IsOptional()
    @IsNumber()
    parqueaderos: number;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    unidadesSanitarias: number;

    @IsOptional()
    @IsIn([0, 1])
    tieneCocina: 0 | 1;

    @IsOptional()
    @IsIn([0, 1])
    tieneSala: 0 | 1;

    @IsNotEmpty()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    plantas: number;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    @IsIn([0, 1, '0', '1'])
    habilitado: 0 | 1 = 0;

    @IsOptional()
    @IsTypeOr(
        {
            isNumber: (value) => isNumber(value),
            isNumberString: (value) => isNumberString(value),
        },
    )
    @IsIn(['0', '1', 0, 1])
    enAlquiler: 0 | 1 = 0;
}
