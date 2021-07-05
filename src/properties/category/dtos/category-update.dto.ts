import { BaseDTO } from '@nest-excalibur/common-api/lib';
import { IsOptional, IsString } from 'class-validator';

export class CategoryUpdateDto extends BaseDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  code: string;
}
