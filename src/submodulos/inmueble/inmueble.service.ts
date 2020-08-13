import { Injectable } from '@nestjs/common';
import { AbstractService } from '@pimba/excalibur/lib';
import { InmuebleEntity } from './inmueble.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InmuebleService extends AbstractService<InmuebleEntity>{
    constructor(
        @InjectRepository(InmuebleEntity)
        private readonly _inmuebleRepository: Repository<InmuebleEntity>,
    ){
        super(
            _inmuebleRepository,
        );
    }
}
