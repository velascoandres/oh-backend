import { IsNotEmpty } from 'class-validator';
import { IsTypeOr } from '@nest-excalibur/common-api/lib';
import { CUSTOM_VALIDATORS } from '../../../constants/custom-validators';

export class CreateRolePermissionDto {
  @IsNotEmpty()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  role: number;

  @IsNotEmpty()
  @IsTypeOr(
    CUSTOM_VALIDATORS.isNumberStringOrNumber,
  )
  permission: number;
}
