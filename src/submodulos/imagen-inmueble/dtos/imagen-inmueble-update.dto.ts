import { BaseDTO } from '@pimba/excalibur/lib';
import { IsOptional, IsUrl, IsNumber } from 'class-validator';

export class ImagenInmuebleUpdateDto extends BaseDTO {
    @IsOptional()
    @IsUrl()
    url: string;

    @IsOptional()
    @IsNumber()
    inmueble: number;
}