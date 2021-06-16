import {Module} from '@nestjs/common';
import {PublicationService} from './publication.service';
import {PublicationController} from './publication.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PublicationEntity} from './publication.entity';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { AuthModule } from '../../users/auth/auth.module';
import { PropertyModule } from '../property/property.module';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PublicationEntity,
            ],
            'mongo_conn',
        ),
        DataBaseModule.forBulkData(
            {
                connection: 'mongo_conn',
                entity: PublicationEntity,
                creationOrder: 1,
                pathDev: '/src/sis-modules/publication/test-data/development/publications.json',
            }
        ),
      AuthModule,
      PropertyModule,
    ],
    providers: [
        PublicationService,
    ],
    controllers: [PublicationController],
    exports: [
        PublicationService,
    ],
})
export class PublicationModule {
}
