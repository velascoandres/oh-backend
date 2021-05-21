import { Injectable } from '@nestjs/common';
import { PropertyEntity } from '../inmueble/property.entity';
import { AbstractService } from '@pimba/excalibur/lib';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritePublicationEntity } from './favorite-publication.entity';

@Injectable()
export class InmuebleFavoritoService extends AbstractService<FavoritePublicationEntity>{
    constructor(
        @InjectRepository(FavoritePublicationEntity)
        private readonly _inmuebleFavoritoRepository: Repository<FavoritePublicationEntity>
    ) {
        super(
            _inmuebleFavoritoRepository,
        );
    }
}
