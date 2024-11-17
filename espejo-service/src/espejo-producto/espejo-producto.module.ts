import { Module } from '@nestjs/common';
import { EspejoProductoService } from './espejo-producto.service';
import { EspejoProductoController } from './espejo-producto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [EspejoProductoService],
  controllers: [EspejoProductoController],
  imports: [PrismaModule],
})
export class EspejoProductoModule {}