import { Test, TestingModule } from '@nestjs/testing';
import { PerfilUsuarioController } from './perfil-usuario.controller';

describe('PerfilUsuario Controller', () => {
  let controller: PerfilUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilUsuarioController],
    }).compile();

    controller = module.get<PerfilUsuarioController>(PerfilUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
