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



  // Método para agregar un producto (en mayúsculas)
  async crear(crearProductoDto: CrearProductoDto) {
    const productoEnMayusculas = Object.keys(crearProductoDto).reduce((acc, key) => {
      acc[key] = typeof crearProductoDto[key] === 'string'
        ? crearProductoDto[key].toUpperCase()
        : crearProductoDto[key];
      return acc;
    }, {} as CrearProductoDto);

    const producto = await this.productos.create({
      data: productoEnMayusculas,
    });
  
    return producto;
  }

  async findAll() {
    const productos = await this.productos.findMany(); // Asegúrate de usar la conexión correcta
    console.log('Productos obtenidos desde el espejo:', productos);
    return productos;
  }

}
