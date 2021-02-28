import { Controller } from '@nestjs/common';
import { CrudController, CrudOptions } from '@pimba/excalibur/lib';
import { PerfilUsuarioEntity } from './perfil-usuario.entity';
import { PerfilUsuarioService } from './perfil-usuario.service';
import { PerfilUsuarioCreateDto } from './dtos/perfil-usuario-create.dto';
import { PerfilUsuarioUpdateDto } from './dtos/perfil-usuario-update.dto';


const opciones: CrudOptions = {
    dtoConfig: {
        createDtoType: PerfilUsuarioCreateDto,
        updateDtoType: PerfilUsuarioUpdateDto,
    },
    enableErrorMessages: true,
};


@Controller('perfil-usuario')
export class PerfilUsuarioController extends CrudController<PerfilUsuarioEntity>(opciones){
    constructor(
        private readonly _perfilUsuarioService: PerfilUsuarioService,
    ){
        super(
            _perfilUsuarioService,
        );
    }
}
