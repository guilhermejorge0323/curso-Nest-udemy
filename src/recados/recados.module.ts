import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller.js';
import { RecadosService } from './recados.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadoEntity } from './entities/recado.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([RecadoEntity])],
  controllers: [RecadosController],
  providers: [RecadosService]
})
export class RecadosModule {}
