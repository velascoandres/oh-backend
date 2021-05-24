import {Module} from '@nestjs/common';
import {PropertyPictureService} from './property-picture.service';
import {PropertyPictureController} from './property-picture.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PropertyPictureEntity} from './property-picture.entity';
import {GoogleCloudStorageModule} from '@nest-excalibur/google-cloud-storage/lib';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { PropertyPictureCreateDto } from './dtos/property-picture-create.dto';
import { PublicationEntity } from '../publication/publication.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PropertyPictureEntity,
            ],
            'mongo_conn',
        ),
        GoogleCloudStorageModule.register({bucketDefaultName: 'pimba_test_gcs'}),
        DataBaseModule.forBulkData(
            {
                entity: PropertyPictureEntity,
                dtoClassValidation: PropertyPictureCreateDto,
                creationOrder: 2,
                pathDev: '/src/sis-modules/property-picture/test-data/development/property-pictures.json',
                connection: 'mongo_conn',
                refs: {
                    publicationId: PublicationEntity,
                }
            },
        ),
    ],
    providers: [
        PropertyPictureService,
    ],
    controllers: [
        PropertyPictureController,
    ],
    exports: [
        PropertyPictureService,
    ],
})
export class PropertyPictureModule {
}
