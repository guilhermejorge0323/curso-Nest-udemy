import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service.js';
import { CreateRecadoDto } from './dto/create-recado.dto.js';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(200)
  @Get()
  async findAll(@Query() pagination: any) {
    return await this.recadosService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: any) {
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateRecadoDto) {
    return this.recadosService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `Apagou com sucesso de id ${id}`;
  }
}
