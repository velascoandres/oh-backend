import {Injectable} from '@nestjs/common';
import {AbstractService} from '@pimba/excalibur/lib';
import {PrecioEntity} from './precio.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class PrecioService extends AbstractService<PrecioEntity> {
    constructor(
        @InjectRepository(PrecioEntity)
        private readonly precioRepository: Repository<PrecioEntity>
    ) {
        super(
            precioRepository,
        );
    }
}
