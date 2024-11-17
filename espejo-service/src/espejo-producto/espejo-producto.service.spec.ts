import { Test, TestingModule } from '@nestjs/testing';
import { EspejoProductoService } from './espejo-producto.service';

describe('EspejoProductoService', () => {
  let service: EspejoProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspejoProductoService],
    }).compile();

    service = module.get<EspejoProductoService>(EspejoProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
