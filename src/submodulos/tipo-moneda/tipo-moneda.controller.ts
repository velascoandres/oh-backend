import {Controller} from '@nestjs/common';
import {ApiController} from '@pimba/excalibur/lib';
import {TipoMonedaEntity} from './tipo-moneda.entity';
import {TipoMonedaService} from './tipo-moneda.service';

@Controller('tipo-moneda')
export class TipoMonedaController extends ApiController<TipoMonedaEntity> {
    constructor(
        private readonly tipoMonedaService: TipoMonedaService,
    ) {
        super(
            tipoMonedaService,
        );
    }
}
