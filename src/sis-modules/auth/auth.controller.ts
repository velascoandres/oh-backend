import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { LoginDTO, CreateUserDTO, ResetAccountDTO } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('sign-up')
    register(
        @Body(ValidationPipe) user: CreateUserDTO,
    ) {
        return this.authService.registerUser(user);
    }

    @Post('sign-in')
    login(
        @Body(ValidationPipe) { idToken, email }: LoginDTO,
    ) {
        return this.authService.loginWithIdToken(idToken, email);
    }

    @Post('reset-account')
    resetAccount(
        @Body(ValidationPipe) { email }: ResetAccountDTO,
    ) {
        return this.authService.resetAccount(email);
    }

}
