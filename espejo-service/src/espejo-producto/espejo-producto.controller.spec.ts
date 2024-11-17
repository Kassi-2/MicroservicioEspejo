import { Test, TestingModule } from '@nestjs/testing';
import { EspejoProductoController } from './espejo-producto.controller';

describe('EspejoProductoController', () => {
  let controller: EspejoProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspejoProductoController],
    }).compile();

    controller = module.get<EspejoProductoController>(EspejoProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
