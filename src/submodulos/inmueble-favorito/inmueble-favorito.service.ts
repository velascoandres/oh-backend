import { Injectable } from '@nestjs/common';
import { InmuebleEntity } from '../inmueble/inmueble.entity';
import { AbstractService } from '@pimba/excalibur/lib';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InmuebleFavoritoService extends AbstractService<InmuebleEntity>{
    constructor(
        @InjectRepository(InmuebleEntity)
        private readonly _inmuebleRepository: Repository<InmuebleEntity>
    ) {
        super(
            _inmuebleRepository,
        );
    }
}
