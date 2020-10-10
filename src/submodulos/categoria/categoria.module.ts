import {Module} from '@nestjs/common';
import {CategoriaController} from './categoria.controller';
import {CategoriaService} from './categoria.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CategoriaEntity} from './categoria.entity';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {CategoriaCreateDto} from './dtos/categoria-create.dto';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                CategoriaEntity,
            ],
            'default',
        ),
        DataBaseModule.forBulkData(
            {
                entity: CategoriaEntity,
                dtoClassValidation: CategoriaCreateDto,
                creationOrder: 1,
                pathDev: '/src/submodulos/categoria/datos-prueba/desarrollo/datos-categoria.json'
            },
        ),
    ],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [
        CategoriaService,
    ],
})
export class CategoriaModule {
}
