import { Controller } from '@nestjs/common';
import { ApiMongoController } from '@pimba/excalibur/lib';
import { EntidadCoordenadaEntity } from './entidad-coordenada.entity';
import { EntidadCoordenadaService } from './entidad-coordenada.service';
import { EntidadCoordenadaCreateDto } from './dtos/entidad-coordenada-create.dto';
import { EntidadCoordenadaUpdateDto } from './dtos/entidad-coordenada-update.dto';

@Controller('entidad-coordenada')
export class EntidadCoordenadaController
    extends ApiMongoController<EntidadCoordenadaEntity>
{
    constructor(
        private readonly _entidadCoordService: EntidadCoordenadaService,
    ) {
        super(
            _entidadCoordService,
            {
                createDtoType: EntidadCoordenadaCreateDto,
                updateDtoType: EntidadCoordenadaUpdateDto,
            },
        );
    }
}
