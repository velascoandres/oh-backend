import { Module } from '@nestjs/common';
import { ImagenInmuebleService } from './imagen-inmueble.service';
import { ImagenInmuebleController } from './imagen-inmueble.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenInmuebleEntity } from './imagen-inmueble.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        ImagenInmuebleEntity,
      ],
      'default',
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
export class ImagenInmuebleModule { }
