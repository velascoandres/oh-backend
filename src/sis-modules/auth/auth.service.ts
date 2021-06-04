import { Injectable } from '@nestjs/common';

import * as admin from 'firebase-admin';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';

import { UserProfileEntity } from './../user-profile/user-profile.entity';
import { MailService } from './../mail/mail.service';
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


    async loginWithIdToken(idToken: string, email: string): Promise<{
        idToken: string,
        userProfile: UserProfileEntity,
        user: admin.auth.UserRecord,
    }> {
        const userVerify = await this.firebaseAuthService.verifyIdToken(idToken);
        const user = await this.firebaseAuthService.getUserByEmail(email);
        // check if user profile is saved
        const [users, total] = await this.userProfileService.findAll({ where: { uid: userVerify.uid } });
        const userProfile = users[0];
        // if not saved, save the user profile and enable him
        if (total) {
            const hasLogged = userProfile.hasFirstLogin;
            if (!hasLogged) {
                const updatedUserProfile = await this.userProfileService.updateOne(userProfile.id, { hasFirstLogin: 1, enable: 1 });
                return {
                    idToken,
                    userProfile: updatedUserProfile,
                    user,
                };
            }
            return {
                idToken,
                userProfile,
                user,
            };
        } else {
            const createUserProfile = await this.userProfileService.createOne(
                {
                    uid: user.uid,
                    address: '',
                    enable: 1,
                    hasFirstLogin: 1,
                    firstnames: user.displayName,
                    lastnames: '',
                    phone: user.phoneNumber || '',
                },
            );
            return {
                idToken,
                userProfile: createUserProfile,
                user,
            };
        }

    }

    async resetAccount(email: string): Promise<any> {
        const url = await this.firebaseAuthService.generatePasswordResetLink(email);
        const user = await this.firebaseAuthService.getUserByEmail(email);
        return this.mailService.sendResetAccountLink(user, url);
    }

}