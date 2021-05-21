import { Test, TestingModule } from '@nestjs/testing';
import { ImagenInmuebleController } from './imagen-inmueble.controller';

describe('ImagenInmueble Controller', () => {
  let controller: ImagenInmuebleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenInmuebleController],
    }).compile();

    controller = module.get<ImagenInmuebleController>(ImagenInmuebleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
