import { Test, TestingModule } from '@nestjs/testing';
import { EntidadCoordenadaController } from './entidad-coordenada.controller';

describe('EntidadCoordenada Controller', () => {
  let controller: EntidadCoordenadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntidadCoordenadaController],
    }).compile();

    controller = module.get<EntidadCoordenadaController>(EntidadCoordenadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
