import { MailService } from './../mail/mail.service';
import { Injectable } from '@nestjs/common';

import * as admin from 'firebase-admin';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';

import { CreateUserDTO } from './dto/user-create.dto';
import { UserProfileService } from './../user-profile/user-profile.service';


@Injectable()
export class AuthService {
    constructor(
        private readonly userProfileService: UserProfileService,
        private readonly firebaseAuthService: FirebaseAuthenticationService,
        private readonly mailService: MailService,
    ) { }

    async registerUser(user: CreateUserDTO): Promise<admin.auth.UserRecord> {
        // Create user
        const createdUser = await this.firebaseAuthService.createUser(user);
        // Create user profile
        await this.userProfileService.createOne(
            {
                ...user,
                uid: createdUser.uid,
                enable: 0,
            },
        );
        // send email verification
        const url = await this.firebaseAuthService.generateEmailVerificationLink(createdUser.email);
        this.mailService.sendUserConfirmationLink(createdUser, url);
        return createdUser;
    }

}