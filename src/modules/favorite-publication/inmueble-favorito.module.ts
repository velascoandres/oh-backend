import { Module } from '@nestjs/common';
import { InmuebleFavoritoService } from './inmueble-favorito.service';
import { InmuebleFavoritoController } from './inmueble-favorito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritePublicationEntity } from './favorite-publication.entity';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {InmuebleFavoritoCreateDto} from './dtos/inmueble-favorito-create.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        FavoritePublicationEntity,
      ],
      'default',
    ),
    DataBaseModule.forBulkData(
        {
          entity: FavoritePublicationEntity,
          dtoClassValidation: InmuebleFavoritoCreateDto,
          creationOrder: 6,
          pathDev: '/src/submodulos/inmueble-favorito/datos-prueba/desarrollo/datos-inmueble-favorito.json'
        },
    )
  ],
  providers: [
    InmuebleFavoritoService,
  ],
  controllers: [
    InmuebleFavoritoController,
  ],
  exports: [
    InmuebleFavoritoService,
  ]
})
export class InmuebleFavoritoModule { }
