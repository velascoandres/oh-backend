import { Injectable } from '@nestjs/common';
import { InmuebleEntity } from '../inmueble/inmueble.entity';
import { AbstractService } from '@pimba/excalibur/lib';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InmuebleFavoritoEntity } from './inmueble-favorito.entity';

@Injectable()
export class InmuebleFavoritoService extends AbstractService<InmuebleFavoritoEntity>{
    constructor(
        @InjectRepository(InmuebleFavoritoEntity)
        private readonly _inmuebleFavoritoRepository: Repository<InmuebleFavoritoEntity>
    ) {
        super(
            _inmuebleFavoritoRepository,
        );
    }
}
