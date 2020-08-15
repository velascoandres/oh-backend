import { Controller } from '@nestjs/common';
import { ApiController } from '@pimba/excalibur/lib';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaService } from './categoria.service';
import { CategoriaCreateDto } from './dtos/categoria-create.dto';
import { CategoriaUpdateDto } from './dtos/categoria-update.dto';

@Controller('categoria')
export class CategoriaController extends ApiController<CategoriaEntity>{
    constructor(
        private readonly _categoriaService: CategoriaService,
    ) {
        super(
            _categoriaService,
            {
                createDtoType: CategoriaCreateDto,
                updateDtoType: CategoriaUpdateDto,
            },
        );
    }
}
