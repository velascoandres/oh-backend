import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { IPublicationSearchCriteria, PropertySearchDto } from '../dtos/property-search.dto';

@Injectable()
export class ValidateQueryParamsPipe implements PipeTransform<any> {
  async transform(value: IPublicationSearchCriteria, { metatype }: ArgumentMetadata): Promise<PropertySearchDto> {
    const object: PropertySearchDto = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    if (Number(object.lng) > 180 || Number(object.lng) < -180 ){
      throw new BadRequestException('lng must be between -180 and 180 ');
    }
    if (Number(object.lat) > 180 || Number(object.lat) < -180 ){
      throw new BadRequestException('lat must be between -180 and 180 ');
    }
    return {
      lat: Number(object.lat),
      lng: Number(object.lng),
      distance: Number(object.distance),
      maxArea: Number(object.maxArea),
      minArea: Number(object.minArea),
      name: object.name,
      description: object.description,
      parks: Number(object.parks),
      floors: Number(object.floors),
      bedrooms: Number(object.bedrooms),
      bathrooms: Number(object.bathrooms),
      take: Number(object.take),
      skip: Number(object.skip),
      enable: Number(object.enable) as 0 | 1,
      maxPrice: Number(object.maxPrice),
      minPrice: Number(object.minPrice),
      category: object.category,
    };
  }
}
