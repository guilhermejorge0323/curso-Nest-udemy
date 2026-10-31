import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller.js';
import { RecadosService } from './recados.service.js';

@Module({
  controllers: [RecadosController],
  providers: [RecadosService]
})
export class RecadosModule {}
