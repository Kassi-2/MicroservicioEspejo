import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { EspejoProductoModule } from './espejo-producto/espejo-producto.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(EspejoProductoModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'productos', 
      queueOptions: { durable: false },
    },
  });

  await app.listen();
  console.log('Microservicio espejo escuchando en RabbitMQ');
}
bootstrap();
