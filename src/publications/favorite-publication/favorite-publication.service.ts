import { Injectable } from '@nestjs/common';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { InjectRepository } from '@nestjs/typeorm';

import { MongoRepository} from 'typeorm';

import { FavoritePublicationEntity } from './favorite-publication.entity';

@Injectable()
export class FavoritePublicationService extends AbstractMongoService<FavoritePublicationEntity>{
    constructor(
        @InjectRepository(FavoritePublicationEntity, 'mongo_conn')
        private readonly favoritePublicationRepository: MongoRepository<FavoritePublicationEntity>
    ) {
        super(
          favoritePublicationRepository,
        );
    }
}
