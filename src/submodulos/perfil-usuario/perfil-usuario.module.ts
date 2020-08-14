import { Module } from '@nestjs/common';
import { PerfilUsuarioService } from './perfil-usuario.service';
import { PerfilUsuarioController } from './perfil-usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilUsuarioEntity } from './perfil-usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        PerfilUsuarioEntity,
      ],
      'default',
    ),
  ],
  providers: [
    PerfilUsuarioService
  ],
  controllers: [
    PerfilUsuarioController,
  ]
})
export class PerfilUsuarioModule { }
