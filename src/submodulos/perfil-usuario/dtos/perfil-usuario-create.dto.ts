import {BaseDTO,  IsTypeDirect} from '@pimba/excalibur/lib';
import {
    IsNotEmpty,
    IsString,
    IsNumberString,
    Length,
    IsOptional,
    IsIn,
    IsNumber, isNumber, isNumberString
} from 'class-validator';

export class PerfilUsuarioCreateDto extends BaseDTO {
    @IsNotEmpty()
    nombres: string;

    @IsNotEmpty()
    apellidos: string;

    @IsNotEmpty()
    identificacionPais: string;

    @IsNotEmpty()
    telefono: string;

    @IsNotEmpty()
    @IsString()
    direccion: string;

    @IsOptional()
    @IsNumber()
    @IsIn([0, 1])
    habilitado: 0 | 1 = 0;
}
