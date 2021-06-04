import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';


import { AuthService } from '../auth.service';
import { UserData } from '../interfaces';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'firebase-auth') {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(idToken: string): Promise<UserData> {
        try {
            const { user, userVerify, userProfile } = await this.authService.validateUserByTokenId(idToken);
            if (userVerify.email_verified && userProfile && !user.disabled) {
                return {
                    user,
                    userVerify,
                    userProfile,
                };
            } else {
                throw new UnauthorizedException();
            }
        } catch (error) {
            console.log(error);
            throw new UnauthorizedException();
        }
    }
}
