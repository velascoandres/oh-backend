import {Module} from '@nestjs/common';
import {PublicationService} from './publication.service';
import {PublicationController} from './publication.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PublicationEntity} from './publication.entity';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {PublicationCreateDto} from './dtos/publication-create.dto';

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
                dtoClassValidation: PublicationCreateDto,
                creationOrder: 1,
                pathDev: '/src/sis-modules/publication/test-data/development/publications.json',
            }
        )
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
