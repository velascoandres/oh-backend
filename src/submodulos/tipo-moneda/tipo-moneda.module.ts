import {Module} from '@nestjs/common';
import {TipoMonedaService} from './tipo-moneda.service';
import {TipoMonedaController} from './tipo-moneda.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TipoMonedaEntity} from './tipo-moneda.entity';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {TipoMonedaCreateDto} from './dtos/tipo-moneda-create.dto';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                TipoMonedaEntity,
            ],
            'default',
        ),
        DataBaseModule.forBulkData(
            {
                entity: TipoMonedaEntity,
                dtoClassValidation: TipoMonedaCreateDto,
                creationOrder: 2,
                pathDev: '/src/submodulos/tipo-moneda/datos-prueba/desarrollo/datos-tipo-moneda.json'
            },
        )
    ],
    providers: [TipoMonedaService],
    controllers: [TipoMonedaController],
    exports: [
        TipoMonedaService,
    ],
})
export class TipoMonedaModule {
}
