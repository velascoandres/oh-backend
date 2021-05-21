import { IsNotEmpty, IsNumber, ValidateNested, Length, isNumber, isNumberString, IsOptional, IsIn } from 'class-validator';
import { LocationCreateDto } from './location-create.dto';
import { BaseMongoDTO, IsTypeOr } from '@nest-excalibur/common-api/lib';

export class PublicationCreateDto extends BaseMongoDTO {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()

  @Length(4, 256)
  description: string;

  @IsNotEmpty()
  @IsTypeOr(
    {
      isNumber: (value) => isNumber(value),
      isNumberString: (value) => isNumberString(value),
    },
  )
  estateId: number;

  @IsNotEmpty()
  owner: number;

  @IsNotEmpty()
  @Length(4, 256)
  address: string;

  @IsNotEmpty()
  @IsTypeOr(
    {
      isNumber: (value) => isNumber(value),
      isNumberString: (value) => isNumberString(value),
    },
  )
  area: number;

  @IsNotEmpty()
  @IsTypeOr(
    {
      isNumber: (value) => isNumber(value),
      isNumberString: (value) => isNumberString(value),
    },
  )
  categoryId: number;

  @IsNotEmpty()
  @IsTypeOr(
    {
      isNumber: (value) => isNumber(value),
      isNumberString: (value) => isNumberString(value),
    },
  )
  propertyId: number;

  @IsNotEmpty()
  @IsTypeOr(
    {
      isNumber: (value) => isNumber(value),
      isNumberString: (value) => isNumberString(value),
    },
  )
  bedrooms: number;

  @IsOptional()
  @IsNumber()
  parks: number;

  @IsOptional()
  @IsTypeOr(
    {
      isNumber: (value) => isNumber(value),
      isNumberString: (value) => isNumberString(value),
    },
  )
  bathrooms: number;

  @IsNotEmpty()
  @IsTypeOr(
    {
      isNumber: (value) => isNumber(value),
      isNumberString: (value) => isNumberString(value),
    },
  )
  floors: number;

  @IsOptional()
  @IsIn(['0', '1', 0, 1])
  enable: 0 | 1 = 0;

  @IsOptional()
  @IsIn(['0', '1', 0, 1])
  isForRent: 0 | 1 = 0;

  @IsNotEmpty()
  @ValidateNested()
  location: LocationCreateDto;
}
