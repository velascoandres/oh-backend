import { Controller } from '@nestjs/common';
import { ApiController } from '@pimba/excalibur/lib';
import { InmuebleFavoritoService } from './inmueble-favorito.service';
import { InmuebleFavoritoCreateDto } from './dtos/inmueble-favorito-create.dto';
import { InmuebleFavoritoUpdateDto } from './dtos/inmueble-favorito-update.dto';
import { InmuebleFavoritoEntity } from './inmueble-favorito.entity';

@Controller('inmueble-favorito')
export class InmuebleFavoritoController extends ApiController<InmuebleFavoritoEntity>{
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
