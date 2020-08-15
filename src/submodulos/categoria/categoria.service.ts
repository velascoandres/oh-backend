import { Injectable } from '@nestjs/common';
import { AbstractService } from '@pimba/excalibur/lib';
import { CategoriaEntity } from './categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService extends AbstractService<CategoriaEntity> {
    constructor(
        @InjectRepository(CategoriaEntity)
        private readonly _categoriaRepository: Repository<CategoriaEntity>,
    ){
        super(
            _categoriaRepository,
        );
    }
}
