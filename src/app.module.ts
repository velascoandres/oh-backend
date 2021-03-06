import { UserProfileRoleModule } from './users/user-profile-role/user-profile-role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DataBaseModule, DataBaseService } from '@nest-excalibur/data-base/lib';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserProfileModule } from './users/user-profile/user-profile.module';
import { RoleModule } from './users/role/role.module';

import { AuthModule } from './users/auth/auth.module';
import { MailModule } from './mail/mail.module';

import { MYSQL_ENTITIES } from './constants/mysql-entities';
import { PRODUCTION_CONFIG } from './constants/config/production';
import { DEVELOPMENT_CONFIG } from './constants/config/development';
import { MONGODB_ENTITIES } from './constants/mongo-entities';
import { PermissionModule } from './users/permission/permission.module';
import { RolePermissionModule } from './users/role-permission/role-permission.module';
import { CategoryModule } from './properties/category/category.module';
import { FavoritePropertyModule } from './properties/favorite-property/favorite-property.module';
import { PropertyModule } from './properties/property/property.module';
import { PropertyPictureModule } from './properties/property-picture/property-picture.module';
import { HistoryModule } from './properties/history/history.module';


@Module({
    imports: [
        ConfigModule
          .forRoot({
            isGlobal: true,
        }),
        TypeOrmModule
          .forRoot(
            {
                ...process.env.NODE_ENV ? PRODUCTION_CONFIG.mysql : DEVELOPMENT_CONFIG.mysql,
                entities: [
                    ...MYSQL_ENTITIES,
                ],
            }
        ),
        TypeOrmModule
          .forRoot(
            {
                ...process.env.NODE_ENV ? PRODUCTION_CONFIG.mongodb : DEVELOPMENT_CONFIG.mongodb,
                entities: [
                    ...MONGODB_ENTITIES,
                ],
            },
        ),
        DataBaseModule
          .forRoot({productionFlag: false}),
        CategoryModule,
        FavoritePropertyModule,
        PropertyModule,
        PropertyPictureModule,
        UserProfileModule,
        UserProfileRoleModule,
        RoleModule,
        AuthModule,
        MailModule,
        PermissionModule,
        RolePermissionModule,
        HistoryModule,
    ],
    controllers: [
        AppController
    ],
    providers: [
        AppService
    ],
})
export class AppModule implements OnModuleInit {
    constructor(
        private dataBaseService: DataBaseService,
    ) {
    }

    async createData() {
        if (DEVELOPMENT_CONFIG.createTestData) {
            await this.dataBaseService.insertData();
            this.dataBaseService.showSummary(true);
        }
    }

    onModuleInit(): any {
        this.createData();
    }
}
