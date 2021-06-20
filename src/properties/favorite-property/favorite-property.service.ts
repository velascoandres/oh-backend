import { Injectable } from '@nestjs/common';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';
import { InjectRepository } from '@nestjs/typeorm';

import { MongoRepository} from 'typeorm';

import { FavoritePropertyEntity } from './favorite-property.entity';

@Injectable()
export class FavoritePropertyService extends AbstractMongoService<FavoritePropertyEntity>{
    constructor(
        @InjectRepository(FavoritePropertyEntity, 'mongo_conn')
        private readonly favoritePublicationRepository: MongoRepository<FavoritePropertyEntity>
    ) {
        super(
          favoritePublicationRepository,
        );
    }
}
