import { IsIn, IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { IsTypeOr } from '@nest-excalibur/common-api/lib';
import { CUSTOM_VALIDATORS } from '../../../constants/custom-validators';

export interface IPublicationSearchCriteria {
  maxArea: number;
  minArea: number;
  name: string;
  description: string;
  floors: number;
  parks: number;
  bedrooms: number;
  bathrooms: number;
  lng: number;
  lat: number;
  distance: number;
  enable: 0 | 1;
  skip: number;
  take: number;
}


export class PublicationSearchDto implements IPublicationSearchCriteria {

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  maxArea = 0;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  minArea = 0;

  @IsOptional()
  name: string;

  @IsOptional()
  description: string;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  floors = 0;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  parks = 0;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  bedrooms = 0;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  bathrooms = 0;

  @IsNotEmpty()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  lng: number;

  @IsNotEmpty()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  lat: number;

  @IsNotEmpty()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  distance = 1000;


  @IsOptional()
  @IsIn(['0', '1', 0, 1])
  enable: 0 | 1 = 1;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  skip = 0;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  take = 10;
}
