import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@pimba/excalibur/lib';
import { EntidadCoordenadaEntity } from './entidad-coordenada.entity';
import { EntidadCoordenadaService } from './entidad-coordenada.service';
import { EntidadCoordenadaCreateDto } from './dtos/entidad-coordenada-create.dto';
import { EntidadCoordenadaUpdateDto } from './dtos/entidad-coordenada-update.dto';


const opciones: CrudOptions = {
    dtoConfig: {
        createDtoType: EntidadCoordenadaCreateDto,
        updateDtoType: EntidadCoordenadaUpdateDto,
    },
    useMongo: true,
    enableErrorMessages: true,
};


@Controller('entidad-coordenada')
export class EntidadCoordenadaController
    extends CrudController<EntidadCoordenadaEntity>(opciones)
{
    constructor(
        private readonly _entidadCoordService: EntidadCoordenadaService,
    ) {
        super(
            _entidadCoordService,
        );
    }
}
