import { Test, TestingModule } from '@nestjs/testing';
import { InmuebleFavoritoService } from './inmueble-favorito.service';

describe('InmuebleFavoritoService', () => {
  let service: InmuebleFavoritoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InmuebleFavoritoService],
    }).compile();

    service = module.get<InmuebleFavoritoService>(InmuebleFavoritoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
