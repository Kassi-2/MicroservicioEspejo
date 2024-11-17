import { Injectable } from '@nestjs/common';
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
}