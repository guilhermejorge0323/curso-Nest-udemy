import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller.js';

@Module({
  controllers: [RecadosController]
})
export class RecadosModule {}
