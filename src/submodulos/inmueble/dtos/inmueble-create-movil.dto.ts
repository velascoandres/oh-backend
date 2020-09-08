import {BaseDTO} from '@pimba/excalibur/lib';
import {
    IsOptional,
    IsIn,
    IsNotEmpty,
    Length,
    IsNumber, IsNumberString,
} from 'class-validator';

export class InmuebleCreateMovilDto extends BaseDTO {
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    @Length(4, 256)
    descripcion: string;

    @IsNotEmpty()
    @IsNumberString()
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
    @IsNumberString()
    habitaciones: number;

    @IsNotEmpty()
    @IsNumberString()
    parqueaderos: number;


    @IsNotEmpty()
    @IsNumberString()
    plantas: number;

    @IsOptional()
    @IsNumber()
    @IsIn([0, 1])
    habilitado: 0 | 1 = 0;

    @IsOptional()
    @IsNumberString()
    @IsIn(['0', '1'])
    enAlquiler: 0 | 1 = 0;
}
