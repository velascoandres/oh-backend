import {BaseDTO, IsTypeOr} from '@nest-excalibur/common-api/lib';
import {
    IsNotEmpty,
    IsString,
    IsOptional,
    IsIn,
    Length,
} from 'class-validator';
import {CUSTOM_VALIDATORS} from '../../../constantes/validadores-custom';

export class UserProfileCreateDto extends BaseDTO {
    @IsNotEmpty()
    firstnames: string;

    @IsNotEmpty()
    lastnames: string;

    @IsNotEmpty()
    @IsTypeOr(
        CUSTOM_VALIDATORS.isNumberStringOrNumber,
    )
    // @Length(10, 10)
    identification: string;

    @IsNotEmpty()
    @Length(10, 20)
    phone: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsOptional()
    @IsIn([0, 1, '0', '1'])
    enable: 0 | 1 = 0;
}
