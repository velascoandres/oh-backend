import { Module } from '@nestjs/common';
import { InmuebleController } from './inmueble.controller';
import { InmuebleService } from './inmueble.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleEntity } from './inmueble.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        InmuebleEntity,
      ],
      'default'
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
