import {Module} from '@nestjs/common';
import {PerfilUsuarioService} from './perfil-usuario.service';
import {PerfilUsuarioController} from './perfil-usuario.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PerfilUsuarioEntity} from './perfil-usuario.entity';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {PerfilUsuarioCreateDto} from './dtos/perfil-usuario-create.dto';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PerfilUsuarioEntity,
            ],
        ),
        DataBaseModule.forBulkData(
            {
                entity: PerfilUsuarioEntity,
                dtoClassValidation: PerfilUsuarioCreateDto,
                creationOrder: 1,
                pathDev: '/src/submodulos/perfil-usuario/datos-prueba/desarrollo/datos-usuario.json',
                pathProd: '/dist/submodulos/perfil-usuario/datos-prueba/desarrollo/datos-usuario.json',
                connection: 'default',
            },
        ),
    ],
    providers: [
        PerfilUsuarioService,
    ],
    controllers: [
        PerfilUsuarioController,
    ],
    exports: [
        PerfilUsuarioService,
    ]
})
export class PerfilUsuarioModule {
}
