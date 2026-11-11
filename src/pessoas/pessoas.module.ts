import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service.js';
import { PessoasController } from './pessoas.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoasController],
  providers: [PessoasService],
  exports: [PessoasService]
})
export class PessoasModule {}
