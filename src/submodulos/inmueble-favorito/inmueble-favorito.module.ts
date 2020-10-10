import { Module } from '@nestjs/common';
import { InmuebleFavoritoService } from './inmueble-favorito.service';
import { InmuebleFavoritoController } from './inmueble-favorito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleFavoritoEntity } from './inmueble-favorito.entity';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {PrecioEntity} from '../precio/precio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        InmuebleFavoritoEntity,
      ],
      'default',
    ),
    DataBaseModule.forBulkData(
        {
          entity: InmuebleFavoritoEntity,
          // dtoClassValidation: InmuebleCreateDto,
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
