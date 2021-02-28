import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@pimba/excalibur/lib';
import { PrecioCreateDto } from './dtos/precio-create.dto';
import { PrecioUpdateDto } from './dtos/precio-update.dto';
import { PrecioEntity } from './precio.entity';
import { PrecioService } from './precio.service';


const opciones: CrudOptions = {
    dtoConfig: {
        createDtoType: PrecioCreateDto,
        updateDtoType: PrecioUpdateDto,
    },
    enableErrorMessages: true,
};


@Controller('precio')
export class PrecioController extends CrudController<PrecioEntity>(opciones) {
    constructor(
        private readonly precioService: PrecioService,
    ){
        super(precioService);
    }
}
