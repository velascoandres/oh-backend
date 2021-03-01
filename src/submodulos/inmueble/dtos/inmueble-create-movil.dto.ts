import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsIn,
    IsNotEmpty,
    Length,
    IsNumber, IsNumberString, isNumberString, isNumber
} from 'class-validator';

export class InmuebleCreateMovilDto extends BaseDTO {
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    @Length(4, 256)
    descripcion: string;

    @IsNotEmpty()
    @IsTypeOr({
        IsNumberString: (val) => isNumberString(val),
        IsNumber: (val) => isNumber(val),
    })
    predio: number;

    @IsNotEmpty()
    perfilUsuario: number;

    @IsNotEmpty()
    @Length(4, 256)
    direccion: string;

    @IsNotEmpty()
    @IsNumberString()
    areaTerreno: number;

    @IsNotEmpty()
    @IsNumberString()
    areaConstruccion: number;

    // @IsNotEmpty()
    // @ValidateNested()
    // precio: PrecioCreateDto;

    @IsNotEmpty()
    @IsTypeOr({
        IsNumberString: (val) => isNumberString(val),
        IsNumber: (val) => isNumber(val),
    })
    habitaciones: number;

    @IsNotEmpty()
    @IsTypeOr({
        IsNumberString: (val) => isNumberString(val),
        IsNumber: (val) => isNumber(val),
    })
    parqueaderos: number;


    @IsNotEmpty()
    @IsTypeOr({
        IsNumberString: (val) => isNumberString(val),
        IsNumber: (val) => isNumber(val),
    })
    plantas: number;

    @IsOptional()
    @IsTypeOr({
        IsNumberString: (val) => isNumberString(val),
        IsNumber: (val) => isNumber(val),
    })
    @IsIn([0, 1, '0', '1'])
    habilitado: 0 | 1 = 0;

    @IsOptional()
    @IsTypeOr({
        IsNumberString: (val) => isNumberString(val),
        IsNumber: (val) => isNumber(val),
    })
    @IsIn(['0', '1', 0 , 1])
    enAlquiler: 0 | 1 = 0;
}
