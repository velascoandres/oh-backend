import { BaseDTO, IsTypeOr } from '@nest-excalibur/common-api/lib';
import {
  IsOptional,
  IsIn,
  IsNotEmpty,
  Length,
  IsNumber,
  isNumber,
  isNumberString,
} from 'class-validator';


export class PropertyCreateDto extends BaseDTO {
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
  category: number;

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
}
