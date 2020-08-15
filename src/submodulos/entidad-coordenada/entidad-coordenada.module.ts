import { Module } from '@nestjs/common';
import { EntidadCoordenadaService } from './entidad-coordenada.service';
import { EntidadCoordenadaController } from './entidad-coordenada.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntidadCoordenadaEntity } from './entidad-coordenada.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        EntidadCoordenadaEntity,
      ],
      'conexion_mongo',
    ),
  ],
  providers: [
    EntidadCoordenadaService,
  ],
  controllers: [EntidadCoordenadaController],
  exports: [
    EntidadCoordenadaService,
  ],
})
export class EntidadCoordenadaModule { }
