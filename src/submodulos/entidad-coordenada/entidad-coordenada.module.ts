import {Module} from '@nestjs/common';
import {EntidadCoordenadaService} from './entidad-coordenada.service';
import {EntidadCoordenadaController} from './entidad-coordenada.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EntidadCoordenadaEntity} from './entidad-coordenada.entity';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {EntidadCoordenadaCreateDto} from './dtos/entidad-coordenada-create.dto';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                EntidadCoordenadaEntity,
            ],
            'conexion_mongo',
        ),
        DataBaseModule.forBulkData(
            {
                connection: 'conexion_mongo',
                entity: EntidadCoordenadaEntity,
                dtoClassValidation: EntidadCoordenadaCreateDto,
                creationOrder: 1,
                pathDev: '/src/submodulos/entidad-coordenada/datos-prueba/desarrollo/datos-entidad-coordenada.json',
            }
        )
    ],
    providers: [
        EntidadCoordenadaService,
    ],
    controllers: [EntidadCoordenadaController],
    exports: [
        EntidadCoordenadaService,
    ],
})
export class EntidadCoordenadaModule {
}
