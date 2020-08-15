import { Controller } from '@nestjs/common';
import { ApiController } from '@pimba/excalibur/lib';
import { ImagenInmuebleEntity } from './imagen-inmueble.entity';
import { ImagenInmuebleService } from './imagen-inmueble.service';
import { ImagenInmuebleCreateDto } from './dtos/imagen-inmueble-create.dto';
import { ImagenInmuebleUpdateDto } from './dtos/imagen-inmueble-update.dto';

@Controller('imagen-inmueble')
export class ImagenInmuebleController extends ApiController<ImagenInmuebleEntity>{

    constructor(
        private readonly _imgInmuebleService: ImagenInmuebleService,
    ) {
        super(
            _imgInmuebleService,
            {
                createDtoType: ImagenInmuebleCreateDto,
                updateDtoType: ImagenInmuebleUpdateDto,
            },
        );
    }
}
