import { BaseDTO, IsTypeOr } from '@nest-excalibur/common-api/lib';
import { IsNotEmpty } from 'class-validator';

import {CUSTOM_VALIDATORS} from '../../../constants/custom-validators';


export class UserProfileCreateDTO extends BaseDTO {
    @IsNotEmpty()
    @IsTypeOr(
        CUSTOM_VALIDATORS.isNumberStringOrNumber,
    )
    userProfile: number;

    @IsTypeOr(
        CUSTOM_VALIDATORS.isNumberStringOrNumber,
    )
    @IsNotEmpty()
    role: number;

}
