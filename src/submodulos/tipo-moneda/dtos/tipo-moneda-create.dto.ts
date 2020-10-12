import {BaseDTO} from '@pimba/excalibur/lib';
import {IsIn, IsOptional, IsString} from 'class-validator';

export class TipoMonedaCreateDto extends BaseDTO {
    @IsString()
    nombre: string;

    @IsString()
    simbolo: string;

    @IsOptional()
    @IsIn([0, 1, '0', '1'])
    esSufijo: 0 | 1 = 0;
}
