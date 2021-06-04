import { Body, Controller, Post, UsePipes, ValidationPipe, UseFilters } from '@nestjs/common';

import { LoginDTO, CreateUserDTO, ResetAccountDTO } from './dto';
import { AuthService } from './auth.service';
import { ExistEmailPipe } from './pipes/exists-email.pipe';
import { SignInExceptionFilter } from './exceptions/sign-in.exception.filter';
import { SignUpExceptionFilter } from './exceptions/sign-up.exception.filters';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @UseFilters(SignUpExceptionFilter)
    @Post('sign-up')
    register(
        @Body(ValidationPipe) user: CreateUserDTO,
    ) {
        return this.authService.registerUser(user);
    }

    @UsePipes(ValidationPipe, ExistEmailPipe)
    @UseFilters(SignInExceptionFilter)
    @Post('sign-in')
    login(
        @Body(ValidationPipe, ExistEmailPipe) { idToken, email }: LoginDTO,
    ) {
        return this.authService.loginWithIdToken(idToken, email);
    }

    @Post('reset-account')
    resetAccount(
        @Body(ValidationPipe, ExistEmailPipe) { email }: ResetAccountDTO,
    ) {
        return this.authService.resetAccount(email);
    }

}
