import { Controller } from '@nestjs/common';
import { ApiController } from '@pimba/excalibur/lib';
import { InmuebleEntity } from './inmueble.entity';
import { InmuebleService } from './inmueble.service';
import { InmuebleCreateDto } from './dtos/inmueble-create.dto';
import { InmuebleUpdateDto } from './dtos/inmueble-update.dto';

@Controller('inmueble')
export class InmuebleController extends ApiController<InmuebleEntity>{
    constructor(
        private readonly _inmuebleService: InmuebleService,
    ){
        super(
            _inmuebleService,
            {
                createDtoType: InmuebleCreateDto,
                updateDtoType: InmuebleUpdateDto,
            }
        );
    }
}
