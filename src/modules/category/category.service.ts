import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { AbstractService } from '@nest-excalibur/common-api/lib';

import { CategoryEntity } from './category.entity';


@Injectable()
export class CategoryService extends AbstractService<CategoryEntity> {
    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
    ){
        super(
          categoryRepository,
        );
    }
}
