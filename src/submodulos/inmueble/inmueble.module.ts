import { Module } from '@nestjs/common';
import { InmuebleController } from './inmueble.controller';
import { InmuebleService } from './inmueble.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleEntity } from './inmueble.entity';
import {ImagenInmuebleModule} from '../imagen-inmueble/imagen-inmueble.module';
import {DataBaseModule} from '@pimba/excalibur/lib';
import {InmuebleCreateDto} from './dtos/inmueble-create.dto';
import { InmuebleV2Controller } from './controllers/v2/inmueble_v2.controller';

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
          dtoClassValidation: InmuebleCreateDto,
          creationOrder: 4,
          pathDev: '/src/submodulos/inmueble/datos-prueba/desarrollo/datos-inmueble.json'
        },
    ),
  ],
  controllers: [
    InmuebleController,
    InmuebleV2Controller,
  ],
  providers: [
    InmuebleService
  ],
  exports: [
    InmuebleService,
  ]
})
export class InmuebleModule {}
