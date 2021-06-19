import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { DataBaseModule } from '@nest-excalibur/data-base/lib';


import { UserProfileRoleEntity } from './user-profile-role.entity';
import { UserProfileRoleService } from './user-profile.service';
import { UserProfileRoleController } from './user-profile.controller';
import { UserProfileCreateDTO } from './dto/user-profile-rol-create.dto';

@Module({
    controllers: [
        UserProfileRoleController,
    ],
    imports: [
        TypeOrmModule.forFeature(
            [UserProfileRoleEntity], 'default',
        ),
        DataBaseModule.forBulkData(
            {
                entity: UserProfileRoleEntity,
                dtoClassValidation: UserProfileCreateDTO,
                creationOrder: 3,
                pathDev: '/src/users/user-profile-role/test-data/user-profile.development.json',
                pathProd: '/dist/users/user-profile-role/test-data/user-profile.production.json',
                connection: 'default',
            },
        ),
    ],
    providers: [
        UserProfileRoleService,
    ],
})
export class UserProfileRoleModule { }
