import { Injectable } from '@nestjs/common';
import { AbstractMongoService } from '@pimba/excalibur/lib';
import { EntidadCoordenadaEntity } from './entidad-coordenada.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class EntidadCoordenadaService
    extends AbstractMongoService<EntidadCoordenadaEntity>{

    constructor(
        @InjectRepository(EntidadCoordenadaEntity, 'conexion_mongo')
        private readonly _entidadCoordenadaRepository: MongoRepository<EntidadCoordenadaEntity>,
    ) {
        super(
            _entidadCoordenadaRepository,
            {
                fieldOrSpec: { entCoordenada: '2dsphere' },
                options: {
                    min: -180,
                    max: 180,
                },
            },
        );
    }
}
