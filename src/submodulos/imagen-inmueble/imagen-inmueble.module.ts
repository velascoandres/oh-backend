import {Module} from '@nestjs/common';
import {ImagenInmuebleService} from './imagen-inmueble.service';
import {ImagenInmuebleController} from './imagen-inmueble.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ImagenInmuebleEntity} from './imagen-inmueble.entity';
import {DataBaseModule, GoogleCloudStorageModule} from '@pimba/excalibur/lib';
import {CategoriaEntity} from '../categoria/categoria.entity';
import {CategoriaCreateDto} from '../categoria/dtos/categoria-create.dto';
import {ImagenInmuebleCreateDto} from './dtos/imagen-inmueble-create.dto';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [
                ImagenInmuebleEntity,
            ],
            'default',
        ),
        GoogleCloudStorageModule.register({bucketDefaultName: 'pimba_test_gcs'}),
        DataBaseModule.forBulkData(
            {
                entity: ImagenInmuebleEntity,
                dtoClassValidation: ImagenInmuebleCreateDto,
                creationOrder: 5,
                pathDev: '/src/submodulos/imagen-inmueble/datos-prueba/desarrollo/datos-imagen-inmueble.json'
            },
        ),
    ],
    providers: [
        ImagenInmuebleService,
    ],
    controllers: [
        ImagenInmuebleController,
    ],
    exports: [
        ImagenInmuebleService,
    ],
})
export class ImagenInmuebleModule {
}
