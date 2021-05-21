import { Injectable } from '@nestjs/common';
import { PublicationEntity } from './publication.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';

@Injectable()
export class PublicationService
    extends AbstractMongoService<PublicationEntity>{

    constructor(
        @InjectRepository(PublicationEntity, 'mongo_conn')
        private readonly publicationRepository: MongoRepository<PublicationEntity>,
    ) {
        super(
            publicationRepository,
            {
                fieldOrSpec: { location: '2dsphere' },
                options: {
                    min: -180,
                    max: 180,
                },
            },
        );
    }
}
