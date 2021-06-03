import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty } from 'class-validator';
import { UserProfileCreateDto } from './user-profile-create.dto';

export class UserProfileUpdateDto extends PartialType(UserProfileCreateDto) {
    @IsEmpty()
    uid: string;
}
