import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller.js';
import { RecadosService } from './recados.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadoEntity } from './entities/recado.entity.js';
import { PessoasModule } from '../pessoas/pessoas.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([RecadoEntity]), PessoasModule],
  controllers: [RecadosController],
  providers: [RecadosService]
})
export class RecadosModule {}
