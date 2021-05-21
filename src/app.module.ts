import {Module, OnModuleInit} from '@nestjs/common';

import {DataBaseModule, DataBaseService} from '@nest-excalibur/data-base/lib';


import {AppController} from './app.controller';
import {AppService} from './app.service';
import { CategoryModule } from './sis-modules/category/category.module';
import { FavoritePublicationModule } from './sis-modules/favorite-publication/favorite-publication.module';
import { PropertyModule } from './sis-modules/property/property.module';
import { PublicationModule } from './sis-modules/publication/publication.module';
import { MYSQL_ENTITIES } from './constants/mysql-entities';
import { PRODUCTION_CONFIG } from './constants/config/production';
import { DEVELOPMENT_CONFIG } from './constants/config/development';
import { MONGODB_ENTITIES } from './constants/mongo-entities';


@Module({
    imports: [
        DataBaseModule.forRoot(
            {
                connections: {
                    mysql: {
                        ...process.env.NODE_ENV ? PRODUCTION_CONFIG.mysql : DEVELOPMENT_CONFIG.mysql,
                        entities: [
                            ...MYSQL_ENTITIES,
                        ],
                    },
                    mongodb: {
                        ...process.env.NODE_ENV ? PRODUCTION_CONFIG.mongodb : DEVELOPMENT_CONFIG.mongodb,
                        entities: [
                            ...MONGODB_ENTITIES,
                        ],
                    }
                },
                productionFlag: !!process.env.NODE_ENV,
            }
        ),
        CategoryModule,
        FavoritePublicationModule,
        PropertyModule,
        PublicationModule,
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
        if (DEVELOPMENT_CONFIG.crearDatosPrueba) {
            await this.dataBaseService.insertData();
            this.dataBaseService.showSummary(true);
        }
    }

    onModuleInit(): any {
        this.createData();
    }
}
