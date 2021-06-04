import * as admin from 'firebase-admin';
import { UserProfileEntity } from '../../user-profile/user-profile.entity';

export interface LoginResponse {
    idToken: string;
    userProfile: UserProfileEntity;
    user: admin.auth.UserRecord;
}