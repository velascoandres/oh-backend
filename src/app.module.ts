import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseDatosModule } from './submodulos/base-datos/base-datos.module';
import { MODULOS } from './constantes/modulos';
import { ConfiguracionModule } from './submodulos/configuracion/configuracion.module';

@Module({
  imports: [
    BaseDatosModule,
    ConfiguracionModule,
    ...MODULOS,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }
