import {BaseDTO, IsTypeOr} from '@pimba/excalibur/lib';
import {
    IsNotEmpty,
    IsString,
    IsOptional,
    IsIn,
    Length,
} from 'class-validator';
import {VALIDADORES_PERSONALIZADOS} from '../../../constantes/validadores-custom';

export class PerfilUsuarioCreateDto extends BaseDTO {
    @IsNotEmpty()
    nombres: string;

    @IsNotEmpty()
    apellidos: string;

    @IsNotEmpty()
    @IsTypeOr(
        VALIDADORES_PERSONALIZADOS.esNumeroStringNumero,
    )
    // @Length(10, 10)
    identificacionPais: string;

    @IsNotEmpty()
    @Length(10, 20)
    telefono: string;

    @IsNotEmpty()
    @IsString()
    direccion: string;

    @IsOptional()
    @IsIn([0, 1, '0', '1'])
    habilitado: 0 | 1 = 0;
}
