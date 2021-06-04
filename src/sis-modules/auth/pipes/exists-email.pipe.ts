import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';


@Injectable()
export class ExistEmailPipe implements PipeTransform {

    constructor(private readonly firebaseService: FirebaseAuthenticationService) { }

    async transform(userData: { email: string }): Promise<{ email: string }> {

        try {
            await this.firebaseService.getUserByEmail(userData.email);
            return userData;
        } catch (error) {
            throw new BadRequestException('The user does not exist');
        }

    }
}