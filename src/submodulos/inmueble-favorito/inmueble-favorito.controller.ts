import { Controller } from '@nestjs/common';
import { ApiController } from '@pimba/excalibur/lib';
import { InmuebleEntity } from '../inmueble/inmueble.entity';
import { InmuebleFavoritoService } from './inmueble-favorito.service';
import { InmuebleFavoritoCreateDto } from './dtos/inmueble-favorito-create.dto';
import { InmuebleFavoritoUpdateDto } from './dtos/inmueble-favorito-update.dto';

@Controller('inmueble-favorito')
export class InmuebleFavoritoController extends ApiController<InmuebleEntity>{
    constructor(
        private readonly _inmuebleFavoritoService: InmuebleFavoritoService,
    ) {
        super(
            _inmuebleFavoritoService,
            {
                createDtoType: InmuebleFavoritoCreateDto,
                updateDtoType: InmuebleFavoritoUpdateDto,
            },
        );
    }
}
