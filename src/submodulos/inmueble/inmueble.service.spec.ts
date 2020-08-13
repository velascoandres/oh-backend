import { Test, TestingModule } from '@nestjs/testing';
import { InmuebleService } from './inmueble.service';

describe('InmuebleService', () => {
  let service: InmuebleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InmuebleService],
    }).compile();

    service = module.get<InmuebleService>(InmuebleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
