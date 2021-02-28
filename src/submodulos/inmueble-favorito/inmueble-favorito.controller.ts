import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@pimba/excalibur/lib';
import { InmuebleFavoritoService } from './inmueble-favorito.service';
import { InmuebleFavoritoCreateDto } from './dtos/inmueble-favorito-create.dto';
import { InmuebleFavoritoUpdateDto } from './dtos/inmueble-favorito-update.dto';
import { InmuebleFavoritoEntity } from './inmueble-favorito.entity';


const opciones: CrudOptions = {
    dtoConfig: {
        createDtoType: InmuebleFavoritoCreateDto,
        updateDtoType: InmuebleFavoritoUpdateDto,
    },
    useMongo: true,
    enableErrorMessages: true,
};



@Controller('inmueble-favorito')
export class InmuebleFavoritoController extends CrudController<InmuebleFavoritoEntity>(opciones){
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
