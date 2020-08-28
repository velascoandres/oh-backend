import {Injectable} from '@nestjs/common';
import {AbstractService} from '@pimba/excalibur/lib';
import {TipoMonedaEntity} from './tipo-moneda.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class TipoMonedaService extends AbstractService<TipoMonedaEntity> {
    constructor(
        @InjectRepository(TipoMonedaEntity)
        private readonly tipoMonedaRepository: Repository<TipoMonedaEntity>
    ) {
        super(
            tipoMonedaRepository,
        );
    }
}
