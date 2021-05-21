import { Test, TestingModule } from '@nestjs/testing';
import { EntidadCoordenadaService } from './entidad-coordenada.service';

describe('EntidadCoordenadaService', () => {
  let service: EntidadCoordenadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntidadCoordenadaService],
    }).compile();

    service = module.get<EntidadCoordenadaService>(EntidadCoordenadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
