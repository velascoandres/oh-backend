import { BaseDTO } from '@pimba/excalibur/lib';
import { IsUrl, IsNotEmpty, IsNumber } from 'class-validator';

export class ImagenInmuebleCreateDto extends BaseDTO {
    @IsNotEmpty()
    @IsUrl()
    url: string;

    @IsNotEmpty()
    @IsNumber()
    inmueble: number;
}