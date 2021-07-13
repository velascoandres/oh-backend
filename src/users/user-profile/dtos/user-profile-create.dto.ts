import { BaseDTO } from '@nest-excalibur/common-api/lib';
import {
    IsNotEmpty,
    IsString,
    IsOptional,
    IsIn,
    Length,
    IsEmpty,
} from 'class-validator';

export class UserProfileCreateDto extends BaseDTO {

    @IsEmpty()
    uid: string;

    @IsEmpty()
    hasFirstLogin: 0 | 1;

    @IsNotEmpty()
    firstnames: string;

    @IsNotEmpty()
    lastnames: string;

    @IsNotEmpty()
    @Length(10, 20)
    phone: string;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsIn([0, 1, '0', '1'])
    enable: 0 | 1 = 0;
}

export class UserProfileCreateTestDTO extends UserProfileCreateDto {

    @IsOptional()
    @IsString()
    uid: string;
}