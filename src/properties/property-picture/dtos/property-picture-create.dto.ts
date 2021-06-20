import {IsUrl, IsNotEmpty} from 'class-validator';
import { BaseMongoDTO } from '@nest-excalibur/common-api/lib';

export class PropertyPictureCreateDto extends BaseMongoDTO {
    @IsNotEmpty()
    @IsUrl()
    url: string;

    @IsNotEmpty()
    property: string;
}
