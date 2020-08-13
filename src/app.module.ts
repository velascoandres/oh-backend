import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseDatosModule } from './modulo-base-datos/base-datos.module';
import { ConfiguracionModule } from './modulo-configuracion/configuracion.module';

@Module({
  imports: [
    BaseDatosModule,
    // ConfiguracionModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }
