import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { IsTypeOr } from '@nest-excalibur/common-api/lib';
import { CUSTOM_VALIDATORS } from '../../../constants/custom-validators';

export interface IPublicationSearchCriteria {
  maxArea: number;
  minArea: number;
  minPrice: number;
  maxPrice: number;
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
  category: string;
  skip: number;
  take: number;
}


export class PropertySearchDto implements IPublicationSearchCriteria {

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
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  maxPrice = 0;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  minPrice = 0;

  @IsOptional()
  name: string;

  @IsOptional()
  category: string;

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

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  lng = 0;

  @IsOptional()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  lat = 0;

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
