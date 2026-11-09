import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity.js';
import { CreateRecadoDto } from './dto/create-recado.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateRecadoDto } from './dto/update-recado.dto.js';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(RecadoEntity)
    private readonly recadoRepository: Repository<RecadoEntity>,
  ) {}

  async findAll() {
    return await this.recadoRepository.find();
  }

  findOne(id: string) {}

  async create(data: CreateRecadoDto) {
    const recado = await this.recadoRepository.create({
      ...data,
      read: false,
      date: new Date(),
    });

    return await this.recadoRepository.save(recado);
  }

  async update(data: UpdateRecadoDto, id: number) {
    const recado = await this.recadoRepository.preload({ id, ...UpdateRecadoDto });

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
