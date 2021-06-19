import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {DataBaseModule} from '@nest-excalibur/data-base/lib';

import {CategoryController} from './category.controller';
import {CategoryService} from './category.service';
import {CategoryEntity} from './category.entity';
import {CategoryCreateDto} from './dtos/category-create.dto';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                CategoryEntity,
            ],
            'default',
        ),
        DataBaseModule.forBulkData(
            {
                entity: CategoryEntity,
                dtoClassValidation: CategoryCreateDto,
                creationOrder: 1,
                pathDev: '/src/publications/category/test-data/development/categories.json'
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
