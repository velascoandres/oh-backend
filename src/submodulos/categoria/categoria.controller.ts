import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@pimba/excalibur/lib';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaService } from './categoria.service';
import { CategoriaCreateDto } from './dtos/categoria-create.dto';
import { CategoriaUpdateDto } from './dtos/categoria-update.dto';


const opciones: CrudOptions = {
    dtoConfig: {
        createDtoType: CategoriaCreateDto,
        updateDtoType: CategoriaUpdateDto,
    },
    enableErrorMessages: true,
};


@Controller('categoria')
export class CategoriaController extends CrudController<CategoriaEntity>(opciones){
    constructor(
        private readonly _categoriaService: CategoriaService,
    ) {
        super(
            _categoriaService,
        );
    }
}
