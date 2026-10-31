import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(100)
  @Get()
  findAll() {
    return 'Retorna todos os recardo';
  }

  @Get('/:id')
  findOne(@Param('id') id: any) {
    return `Retorna apenas 1 recado com parametro: ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);
    return `Essa rota cria um recado`;
  }
}
