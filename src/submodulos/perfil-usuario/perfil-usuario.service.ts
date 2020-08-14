import { Injectable } from '@nestjs/common';
import { AbstractService } from '@pimba/excalibur/lib';
import { PerfilUsuarioEntity } from './perfil-usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PerfilUsuarioService
    extends AbstractService<PerfilUsuarioEntity>{

    constructor(
        @InjectRepository(PerfilUsuarioEntity)
        private readonly _usuarioRepository: Repository<PerfilUsuarioEntity>,
    ) {
        super(
            _usuarioRepository,
        )
    }
}
