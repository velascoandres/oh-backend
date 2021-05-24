import {Injectable} from '@nestjs/common';
import {PropertyPictureEntity} from './property-picture.entity';
import {InjectRepository} from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { GoogleCloudStorageService } from '@nest-excalibur/google-cloud-storage';

@Injectable()
export class PropertyPictureService
    extends AbstractMongoService<PropertyPictureEntity> {

    constructor(
        @InjectRepository(PropertyPictureEntity, 'mongo_conn')
        private readonly propertyPictureRepository: MongoRepository<PropertyPictureEntity>,
        private readonly _googleCloudService: GoogleCloudStorageService,
    ) {
        super(
          propertyPictureRepository,
        );
    }

}
