import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { IPublicationSearchCriteria, PublicationSearchDto } from '../dtos/publication-search.dto';

@Injectable()
export class ValidateQueryParamsPipe implements PipeTransform<any> {
  async transform(value: IPublicationSearchCriteria, { metatype }: ArgumentMetadata): Promise<PublicationSearchDto> {
    console.log(value, metatype);
    const object: PublicationSearchDto = plainToClass(metatype, value);
    object.query = JSON.parse(value.query as string ?? '{}');
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return {
      query: object.query,
      lat: Number(object.lat),
      lng: Number(object.lng),
      distance: Number(object.distance),
    };
  }
}
