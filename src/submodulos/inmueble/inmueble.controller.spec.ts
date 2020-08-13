import { Test, TestingModule } from '@nestjs/testing';
import { InmuebleController } from './inmueble.controller';

describe('Inmueble Controller', () => {
  let controller: InmuebleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InmuebleController],
    }).compile();

    controller = module.get<InmuebleController>(InmuebleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
