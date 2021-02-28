import {Controller} from '@nestjs/common';
import {CrudController, CrudOptions} from '@pimba/excalibur/lib';
import { TipoMonedaCreateDto } from './dtos/tipo-moneda-create.dto';
import { TipoMonedaUpdateDtoDto } from './dtos/tipo-moneda-update.dto';
import {TipoMonedaEntity} from './tipo-moneda.entity';
import {TipoMonedaService} from './tipo-moneda.service';



const opciones: CrudOptions = {
    dtoConfig: {
        createDtoType: TipoMonedaCreateDto,
        updateDtoType: TipoMonedaUpdateDtoDto,
    }
}


@Controller('tipo-moneda')
export class TipoMonedaController extends CrudController<TipoMonedaEntity>(opciones) {
    constructor(
        private readonly tipoMonedaService: TipoMonedaService,
    ) {
        super(
            tipoMonedaService,
        );
    }
}
