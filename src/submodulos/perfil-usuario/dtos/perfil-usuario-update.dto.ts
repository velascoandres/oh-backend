import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {
    Length,
    IsString,
    IsOptional,
    IsIn,
    IsNumber
} from 'class-validator';
import {LETRAS_ESPACIOS} from 'src/constantes/expresiones-regulares';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class PerfilUsuarioUpdateDto extends BaseDTO {
    @IsOptional()
    @IsString()
        // @Matches(LETRAS_ESPACIOS)
    nombres: string;

    @IsOptional()
    @IsString()

        // @Matches(LETRAS_ESPACIOS)
    apellidos: string;

    @IsOptional()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
        // @Length(10, 10)
    identificacionPais: string;

    @IsOptional()
    @Length(10, 20)
    telefono: string;

    @IsOptional()
    @IsString()
    direccion: string;

    @IsOptional()
    @IsIn([0, 1, '0', '1'])
    habilitado: 0 | 1 = 0;
}
