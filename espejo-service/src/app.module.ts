import { Module } from '@nestjs/common';
import { EspejoProductoModule } from './producto/producto.module';

@Module({
  imports: [EspejoProductoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
