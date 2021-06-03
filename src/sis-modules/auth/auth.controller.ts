import { AuthService } from './auth.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from './dto/user-create.dto';

@Controller('auth')
export class AuthController {


    constructor(private readonly authService: AuthService) { }

    @Post('sign-in')
    register(
        @Body(ValidationPipe) user: CreateUserDTO,
    ) {
        return this.authService.registerUser(user);
    }

}