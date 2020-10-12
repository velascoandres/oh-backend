import {Module} from '@nestjs/common';
import {PrecioService} from './precio.service';
import {PrecioController} from './precio.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PrecioEntity} from './precio.entity';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {PrecioCreateDto} from './dtos/precio-create.dto';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                PrecioEntity,
            ],
            'default',
        ),
        DataBaseModule.forBulkData(
            {
                entity: PrecioEntity,
                dtoClassValidation: PrecioCreateDto,
                creationOrder: 3,
                pathDev: '/src/submodulos/precio/datos-prueba/desarrollo/datos-precio.json'
            },
        )
    ],
    providers: [
        PrecioService,
    ],
    controllers: [
        PrecioController,
    ],
    exports: [
        PrecioService,
    ]
})
export class PrecioModule {
}
