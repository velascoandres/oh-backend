import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@pimba/excalibur/lib';
import { ImagenInmuebleEntity } from './imagen-inmueble.entity';
import { ImagenInmuebleService } from './imagen-inmueble.service';
import { ImagenInmuebleCreateDto } from './dtos/imagen-inmueble-create.dto';
import { ImagenInmuebleUpdateDto } from './dtos/imagen-inmueble-update.dto';


const opciones: CrudOptions = {
    dtoConfig: {
        createDtoType: ImagenInmuebleCreateDto,
        updateDtoType: ImagenInmuebleUpdateDto,
    },
    enableErrorMessages: true,
};


@Controller('imagen-inmueble')
export class ImagenInmuebleController extends CrudController<ImagenInmuebleEntity>(opciones){

    constructor(
        private readonly _imgInmuebleService: ImagenInmuebleService,
    ) {
        super(
            _imgInmuebleService,
        );
    }
}
