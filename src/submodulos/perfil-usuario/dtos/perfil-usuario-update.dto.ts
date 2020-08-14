import { BaseDTO } from '@pimba/excalibur/lib';
import {
    Matches,
    IsNumberString,
    Length,
    IsString,
    IsOptional,
    IsIn,
    IsNumber
} from 'class-validator';
import { LETRAS_ESPACIOS } from 'src/constantes/expresiones-regulares';

export class PerfilUsuarioUpdateDto extends BaseDTO {
    @IsOptional()
    @Matches(LETRAS_ESPACIOS)
    nombres: string;

    @IsOptional()
    @Matches(LETRAS_ESPACIOS)
    apellidos: string;

    @IsOptional()
    @IsNumberString()
    @Length(10, 10)
    identificacionPais: string;

    @IsOptional()
    @Length(10, 10)
    telefono: string;

    @IsOptional()
    @IsString()
    direccion: string;

    @IsOptional()
    @IsNumber()
    @IsIn([0, 1])
    habilitado: 0 | 1 = 0;
}