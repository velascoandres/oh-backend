import { Module } from '@nestjs/common';
import { InmuebleFavoritoService } from './inmueble-favorito.service';
import { InmuebleFavoritoController } from './inmueble-favorito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmuebleFavoritoEntity } from './inmueble-favorito.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        InmuebleFavoritoEntity,
      ],
      'default',
    ),
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
