import { IsNotEmpty, IsEmail } from 'class-validator';

export class ResetAccountDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
