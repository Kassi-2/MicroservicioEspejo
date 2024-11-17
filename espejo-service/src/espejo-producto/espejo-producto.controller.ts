import { Controller, Get, Post, Body } from '@nestjs/common';
import { EspejoProductoService } from './espejo-producto.service';
import { Productos } from '@prisma/client';

@Controller('productos')
export class EspejoProductoController {
  constructor(private readonly EspejoProductoService: EspejoProductoService) {}

  @Post()
  agregarProducto(@Body() producto: Productos): Productos {
    return this.EspejoProductoService.agregarProducto(producto);
  }

  @Get()
  obtenerProductos(): Productos[] {
    return this.EspejoProductoService.obtenerProductos();
  }
}