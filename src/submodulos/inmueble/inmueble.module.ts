import { Module } from '@nestjs/common';
import { InmuebleController } from './inmueble.controller';
import { InmuebleService } from './inmueble.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleEntity } from './inmueble.entity';
import {ImagenInmuebleModule} from '../imagen-inmueble/imagen-inmueble.module';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {ImagenInmuebleEntity} from '../imagen-inmueble/imagen-inmueble.entity';
import {ImagenInmuebleCreateDto} from '../imagen-inmueble/dtos/imagen-inmueble-create.dto';
import {InmuebleCreateDto} from './dtos/inmueble-create.dto';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        InmuebleEntity,
      ],
      'default'
    ),
    ImagenInmuebleModule,
    DataBaseModule.forBulkData(
        {
          entity: InmuebleEntity,
          // dtoClassValidation: InmuebleCreateDto,
          creationOrder: 4,
          pathDev: '/src/submodulos/inmueble/datos-prueba/desarrollo/datos-inmueble.json'
        },
    ),
  ],
  controllers: [
    InmuebleController,
  ],
  providers: [
    InmuebleService
  ],
  exports: [
    InmuebleService,
  ]
})
export class InmuebleModule {}
