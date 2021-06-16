import { UserProfileCreateDTO } from './user-profile-rol-create.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UserProfileUpdateDto extends PartialType(UserProfileCreateDTO) { }
