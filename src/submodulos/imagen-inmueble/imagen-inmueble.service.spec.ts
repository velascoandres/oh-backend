import { Test, TestingModule } from '@nestjs/testing';
import { ImagenInmuebleService } from './imagen-inmueble.service';

describe('ImagenInmuebleService', () => {
  let service: ImagenInmuebleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagenInmuebleService],
    }).compile();

    service = module.get<ImagenInmuebleService>(ImagenInmuebleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
