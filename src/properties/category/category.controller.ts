import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@nest-excalibur/common-api/lib';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dtos/category-create.dto';
import { CategoryUpdateDto } from './dtos/category-update.dto';


const options: CrudOptions = {
    dtoConfig: {
        createDtoType: CategoryCreateDto,
        updateDtoType: CategoryUpdateDto,
    },
    useMongo: true,
    enableErrorMessages: true,
};


@Controller('category')
export class CategoryController extends CrudController<CategoryEntity>(options){
    constructor(
        private readonly categoryService: CategoryService,
    ) {
        super(
          categoryService,
        );
    }
}
