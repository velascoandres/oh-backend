import { BaseMongoDTO } from '@nest-excalibur/common-api/lib';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class HistoryCreateDto extends BaseMongoDTO {
  @IsNotEmpty()
  @IsNumberString()
  userProfile: string;

  @IsNotEmpty()
  property: string;
}