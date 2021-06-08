import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty } from 'class-validator';
import { UserProfileCreateDto } from './user-profile-create.dto';

export class UserProfileUpdateDTO extends PartialType(UserProfileCreateDto) {
    @IsEmpty()
    uid: string;
}
