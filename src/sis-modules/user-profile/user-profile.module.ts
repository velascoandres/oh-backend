import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DataBaseModule} from '@nest-excalibur/data-base/lib';

import {UserProfileCreateDto} from './dtos/user-profile-create.dto';
import {UserProfileEntity} from './user-profile.entity';
import {UserProfileService} from './user-profile.service';
import {UserProfileController} from './user-profile.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                UserProfileEntity,
            ],
        ),
        DataBaseModule.forBulkData(
            {
                entity: UserProfileEntity,
                dtoClassValidation: UserProfileCreateDto,
                creationOrder: 1,
                pathDev: '/src/sis-modules/user-profile/test-data/development/user-profile.json',
                pathProd: '/dist/sis-modules/user-profile/test-data/production/user-profile.json',
                connection: 'default',
            },
        ),
    ],
    providers: [
        UserProfileService,
    ],
    controllers: [
        UserProfileController,
    ],
    exports: [
        UserProfileService,
    ]
})
export class UserProfileModule {
}
