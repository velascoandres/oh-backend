import { PartialType } from '@nestjs/mapped-types';
import { UserProfileCreateDto } from './user-profile-create.dto';

export class UserProfileUpdateDto extends PartialType(UserProfileCreateDto){}
