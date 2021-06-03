import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UserProfileCreateDto } from '../../user-profile/dtos/user-profile-create.dto';

export class CreateUserDTO extends UserProfileCreateDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}