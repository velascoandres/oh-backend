import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataBaseModule } from '@nest-excalibur/data-base/lib';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryEntity } from './category.entity';
import { CategoryCreateDto } from './dtos/category-create.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        CategoryEntity,
      ],
      'mongo_conn',
    ),
    DataBaseModule.forBulkData(
      {
        entity: CategoryEntity,
        dtoClassValidation: CategoryCreateDto,
        creationOrder: 1,
        pathDev: '/src/properties/category/test-data/development/categories.json',
        connection: 'mongo_conn',
      },
    ),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [
    CategoryService,
  ],
})
export class CategoryModule {
}
