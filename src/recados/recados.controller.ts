import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service.js';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(200)
  @Get()
  findAll(@Query() pagination: any) {
    const { limit, offset } = pagination;
    return `Retorna todos os recardo na pagina ${offset} de limite = ${limit}`;
  }

  @Get('/:id')
  findOne(@Param('id') id: any) {
    return `Retorna apenas 1 recado com parametro: ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);
    return this.recadosService.hello();
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `Apagou com sucesso de id ${id}`;
  }
}
