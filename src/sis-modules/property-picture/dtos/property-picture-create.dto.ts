import {IsUrl, IsNotEmpty} from 'class-validator';
import {CUSTOM_VALIDATORS} from '../../../constants/custom-validators';
import { BaseMongoDTO, IsTypeOr } from '@nest-excalibur/common-api/lib';

export class PropertyPictureCreateDto extends BaseMongoDTO {
    @IsNotEmpty()
    @IsUrl()
    url: string;

    @IsNotEmpty()
    @IsTypeOr(
        CUSTOM_VALIDATORS.isNumberStringOrNumber,
    )
    propertyId: number;

    @IsNotEmpty()
    publicationId: string;
}
