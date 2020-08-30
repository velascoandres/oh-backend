import { Module } from '@nestjs/common';
import { InmuebleController } from './inmueble.controller';
import { InmuebleService } from './inmueble.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleEntity } from './inmueble.entity';
import {ImagenInmuebleModule} from '../imagen-inmueble/imagen-inmueble.module';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        InmuebleEntity,
      ],
      'default'
    ),
    ImagenInmuebleModule,
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
