import { Module } from '@nestjs/common';

import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import * as admin from 'firebase-admin';

import { AuthService } from './auth.service';
import { UserProfileModule } from './../user-profile/user-profile.module';
import { AuthController } from './auth.controller';
import { MailModule } from '../mail/mail.module';


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
        ],
        providers: [
            AuthService,
        ],
        exports: [
            AuthService,
        ],
    },
)
export class AuthModule { }