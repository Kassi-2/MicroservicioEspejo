import { Module } from '@nestjs/common';
import { EspejoProductoService } from './producto.service';
import { EspejoProductoController } from './producto.controller';


@Module({
  providers: [EspejoProductoService],
  controllers: [EspejoProductoController],
})
export class EspejoProductoModule {}