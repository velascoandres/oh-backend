import { Test, TestingModule } from '@nestjs/testing';
import { InmuebleFavoritoController } from './inmueble-favorito.controller';

describe('InmuebleFavorito Controller', () => {
  let controller: InmuebleFavoritoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InmuebleFavoritoController],
    }).compile();

    controller = module.get<InmuebleFavoritoController>(InmuebleFavoritoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
