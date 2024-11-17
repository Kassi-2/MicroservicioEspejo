import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Productos } from '@prisma/client';

@Injectable()
export class EspejoProductoService {
  private productos: Productos[] = [];

  // Método para agregar un producto (en mayúsculas)
  agregarProducto(producto: Productos): Productos {
    const productoMayuscula = {
      ...producto,
      nombre: producto.nombre.toUpperCase(),
      descripcion: producto.descripcion.toUpperCase(),
    };
    this.productos.push(productoMayuscula);
    return productoMayuscula;
  }

  // Método para obtener todos los productos
  obtenerProductos(): Productos[] {
    return this.productos;
  }

  // Escucha el evento de RabbitMQ
  @EventPattern('producto_agregado') // "producto_agregado" es el evento que el microservicio original envía
  handleProductoAgregado(data: Productos) {
    console.log('Producto recibido:', data);
    return this.agregarProducto(data); // Convierte y guarda el producto en mayúsculas
  }
}
