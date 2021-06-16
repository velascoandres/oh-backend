import * as admin from 'firebase-admin';
import { UserProfileEntity } from '../../user-profile/user-profile.entity';

export interface UserData {
    user: admin.auth.UserRecord;
    userProfile: UserProfileEntity;
    userVerify: admin.auth.DecodedIdToken;
}