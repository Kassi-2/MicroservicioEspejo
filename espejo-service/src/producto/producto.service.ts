import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PrismaClient, Productos } from '@prisma/client';
import { CrearProductoDto } from './dto/crear-producto.dto';

@Injectable()
export class EspejoProductoService extends PrismaClient implements OnModuleInit{
  private readonly logger = new Logger('EspejoProductoService');
  onModuleInit() {
    this.$connect();
    this.logger.log('Database connected 2');
  }

//mayúsculas
async crear(crearProductoDto: CrearProductoDto) {
  const productoCreado = await this.productos.create({
    data: {
      nombre: crearProductoDto.nombre.toUpperCase(),
      descripcion: crearProductoDto.descripcion.toUpperCase(), 
      precio: crearProductoDto.precio,
    },
  });

  return productoCreado;
}

  async findAll() {
    const productos = await this.productos.findMany(); 
    console.log('Productos obtenidos desde el espejo:', productos);
    return productos;
  }

}
