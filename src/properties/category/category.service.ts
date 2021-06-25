import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MongoRepository } from 'typeorm';
import { AbstractMongoService } from '@nest-excalibur/common-api/lib';

import { CategoryEntity } from './category.entity';


@Injectable()
export class CategoryService extends AbstractMongoService<CategoryEntity> {
  constructor(
    @InjectRepository(CategoryEntity, 'mongo_conn')
    private readonly categoryRepository: MongoRepository<CategoryEntity>,
  ) {
    super(
      categoryRepository,
    );
  }
}
