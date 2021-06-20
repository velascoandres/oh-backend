import { IsNotEmpty } from 'class-validator';
import {CUSTOM_VALIDATORS} from '../../../constants/custom-validators';
import { BaseMongoDTO, IsTypeOr } from '@nest-excalibur/common-api/lib';

export class FavoritePublicationCreateDto extends BaseMongoDTO {
    @IsNotEmpty()
    @IsTypeOr(
        CUSTOM_VALIDATORS.isNumberStringOrNumber,
    )
    userProfile: number;

    @IsNotEmpty()
    property: string;
}
