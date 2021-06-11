import { Body, Controller, Get, Post, Req, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';

import { CreateUserDTO, LoginDTO, ResetAccountDTO } from './dto';
import { AuthService } from './auth.service';
import { ExistEmailPipe } from './pipes/exists-email.pipe';
import { SignInExceptionFilter } from './exceptions/sign-in.exception.filter';
import { SignUpExceptionFilter } from './exceptions/sign-up.exception.filters';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuardFactory } from './guards/roles.factory.guard';
import { RoleEnum } from './enums/role.enum';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @UseFilters(SignUpExceptionFilter)
  @Post('sign-up')
  register(
    @Body(ValidationPipe) user: CreateUserDTO,
  ) {
    return this.authService.registerUser(user);
  }

  @UsePipes(ValidationPipe)
  @UseFilters(SignInExceptionFilter)
  @Post('sign-in')
  login(
    @Body(ValidationPipe, ExistEmailPipe) { idToken }: LoginDTO,
  ) {
    return this.authService.loginWithIdToken(idToken);
  }

  @Post('reset-account')
  resetAccount(
    @Body(ValidationPipe, ExistEmailPipe) { email }: ResetAccountDTO,
  ) {
    return this.authService.resetAccount(email);
  }


  @UseGuards(
    AuthGuard('firebase-auth'),
    RoleGuardFactory([RoleEnum.Admin, RoleEnum.User, RoleEnum.Agent]),
  )
  @Get('foo')
  doSomething(
    @Req() { user },
  ) {
    return user.userProfile;
  }

}
