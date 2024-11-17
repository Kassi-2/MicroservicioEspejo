import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspejoProductoModule } from './espejo-producto/espejo-producto.module';

@Module({
  imports: [EspejoProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
