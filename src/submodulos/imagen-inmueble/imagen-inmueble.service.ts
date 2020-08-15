import { Injectable } from '@nestjs/common';
import { AbstractService } from '@pimba/excalibur/lib';
import { ImagenInmuebleEntity } from './imagen-inmueble.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImagenInmuebleService
    extends AbstractService<ImagenInmuebleEntity>
{

    constructor(
        @InjectRepository(ImagenInmuebleEntity)
        private readonly _imgInmuebleRepository: Repository<ImagenInmuebleEntity>,
    ) {
        super(
            _imgInmuebleRepository,
        );
    }
}
