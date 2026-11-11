import { Injectable, NotFoundException } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity.js';
import { CreateRecadoDto } from './dto/create-recado.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateRecadoDto } from './dto/update-recado.dto.js';
import { PessoasService } from '../pessoas/pessoas.service.js';
import { PaginationDto } from '../common/dto/pagination.dto.js';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(RecadoEntity)
    private readonly recadoRepository: Repository<RecadoEntity>,
    private readonly pessoasService: PessoasService,
  ) {}

  async findAll(paginationDto?: PaginationDto) {
    const {limit = 10, offSet = 0} = paginationDto || {};

    return await this.recadoRepository.find({
      take: limit,
      skip: offSet,
      relations: { de: true, for: true },
    });
  }

  findOne(id: number) {
    return this.recadoRepository.findOne({ where: { id } })
  }

  async create(data: CreateRecadoDto) {
    const { deId, forId, text } = data;

    const de = await this.pessoasService.findOne(deId);
    if (!de) {
      throw new NotFoundException(
        `Pessoa de origem (ID ${deId}) não encontrada`,
      );
    }

    const f = await this.pessoasService.findOne(forId);
    if (!f) {
      throw new NotFoundException(
        `Pessoa de destino (ID ${forId}) não encontrada`,
      );
    }

    const recado = await this.recadoRepository.create({
      text,
      for: f,
      de,
      read: false,
      date: new Date(),
    });

    return await this.recadoRepository.save(recado);
  }

  async update(data: UpdateRecadoDto, id: number) {
    const recado = await this.recadoRepository.preload({
      id,
      ...UpdateRecadoDto,
    });

    if (!recado) {
      throw new NotFoundException(`Recado com ID ${id} não encontrado`);
    }

    return this.recadoRepository.save(recado);
  }

  async remove(id: number) {
    const recado = await this.recadoRepository.findOneBy({ id });

    if (!recado) {
      throw new NotFoundException(`Recado com ID ${id} não encontrado`);
    }

    return this.recadoRepository.remove(recado);
  }
}
