import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/user-create.dto';

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
        @Body(ValidationPipe) loginData: LoginDTO,
    ) {
        return this.authService.loginWithIdToken(loginData.idToken, loginData.email);
    }

}