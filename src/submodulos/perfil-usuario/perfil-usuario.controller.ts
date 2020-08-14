import { Controller } from '@nestjs/common';
import { ApiController } from '@pimba/excalibur/lib';
import { PerfilUsuarioEntity } from './perfil-usuario.entity';
import { PerfilUsuarioService } from './perfil-usuario.service';
import { PerfilUsuarioCreateDto } from './dtos/perfil-usuario-create.dto';
import { PerfilUsuarioUpdateDto } from './dtos/perfil-usuario-update.dto';

@Controller('perfil-usuario')
export class PerfilUsuarioController extends ApiController<PerfilUsuarioEntity>{
    constructor(
        private readonly _perfilUsuarioService: PerfilUsuarioService,
    ){
        super(
            _perfilUsuarioService,
            {
                createDtoType: PerfilUsuarioCreateDto,
                updateDtoType: PerfilUsuarioUpdateDto,
            },
        );
    }
}
