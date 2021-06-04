import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import * as admin from 'firebase-admin';

import { AuthService } from './auth.service';
import { UserProfileModule } from './../user-profile/user-profile.module';
import { AuthController } from './auth.controller';
import { MailModule } from '../mail/mail.module';
import { ExistEmailPipe } from './pipes/exists-email.pipe';
import { LocalStrategy } from './strategies/local-strategy';

@Module(
    {
        controllers: [
            AuthController,
        ],
        imports: [
            UserProfileModule,
            FirebaseAdminModule.forRootAsync({
                useFactory: () => ({
                    credential: admin.credential.applicationDefault()
                })
            }),
            MailModule,
            PassportModule,
        ],
        providers: [
            AuthService,
            ExistEmailPipe,
            LocalStrategy,
        ],
        exports: [
            AuthService,
        ],
    },
)
export class AuthModule { }