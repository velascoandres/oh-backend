import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PropertyPictureService } from './property-picture.service';
import { PropertyPictureController } from './property-picture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyPictureEntity } from './property-picture.entity';
import { GoogleCloudStorageModule } from '@nest-excalibur/google-cloud-storage/lib';
import { DataBaseModule } from '@nest-excalibur/data-base/lib';
import { PropertyPictureCreateDto } from './dtos/property-picture-create.dto';
import { PublicationEntity } from '../publication/publication.entity';
import { PublicationModule } from '../publication/publication.module';
import { PropertyModule } from '../property/property.module';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PropertyPictureEntity,
            ],
            'mongo_conn',
        ),
        GoogleCloudStorageModule.registerAsync(
            {
                useFactory: async (config: ConfigService) => {
                    return { bucketDefaultName: config.get('BUCKET_NAME') };
                },
                inject: [ConfigService],
            }
        ),
        DataBaseModule.forBulkData(
            {
                entity: PropertyPictureEntity,
                dtoClassValidation: PropertyPictureCreateDto,
                creationOrder: 2,
                pathDev: '/src/publications/property-picture/test-data/development/property-pictures.json',
                connection: 'mongo_conn',
                refs: {
                    publicationId: PublicationEntity,
                }
            },
        ),
        PropertyModule,
        PublicationModule,
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
