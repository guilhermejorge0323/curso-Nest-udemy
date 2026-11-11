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
import { PaginationDto } from '../common/dto/pagination.dto.js';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(200)
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.recadosService.findAll(paginationDto);
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
  update(@Param('id') id: number, @Body() body: any) {
    return this.recadosService.update(body, id)
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `Apagou com sucesso de id ${id}`;
  }
}
