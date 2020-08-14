import { BaseDTO } from '@pimba/excalibur/lib';
import {
    IsNotEmpty,
    IsString,
    IsNumberString,
    Length,
    IsOptional,
    Matches,
    IsIn,
    IsNumber
} from 'class-validator';
import { LETRAS_ESPACIOS } from 'src/constantes/expresiones-regulares';

export class PerfilUsuarioCreateDto extends BaseDTO {
    @IsNotEmpty()
    @Matches(LETRAS_ESPACIOS)
    nombres: string;

    @IsNotEmpty()
    @Matches(LETRAS_ESPACIOS)
    apellidos: string;

    @IsNotEmpty()
    @IsNumberString()
    @Length(10, 10)
    identificacionPais: string;

    @IsNotEmpty()
    @Length(10, 10)
    telefono: string;

    @IsNotEmpty()
    @IsString()
    direccion: string;

    @IsOptional()
    @IsNumber()
    @IsIn([0, 1])
    habilitado: 0 | 1 = 0;
}