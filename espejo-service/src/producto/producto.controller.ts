import { Controller, Get, Post, Body } from '@nestjs/common';
import { EspejoProductoService } from './producto.service';
import { Productos } from '@prisma/client';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CrearProductoDto } from './dto/crear-producto.dto';

@Controller()
export class EspejoProductoController {
  constructor(private readonly espejoProductoService: EspejoProductoService) {}

  @MessagePattern({ cmd: 'crear' })
  crear(@Payload() crearProductoDto: CrearProductoDto) {
    return this.espejoProductoService.crear(crearProductoDto);
  }

  @MessagePattern({ cmd: 'obtener' })
   findAll() {
    console.log('Solicitando todos los productos 2');
    return this.espejoProductoService.findAll();
  }
}