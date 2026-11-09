import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto.js';
import { UpdatePessoaDto } from './dto/update-pessoa.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity.js';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async create(createPessoaDto: CreatePessoaDto) {
    const pessoaData = {
      name: createPessoaDto.name,
      passwordHash: createPessoaDto.password,
      email: createPessoaDto.email,
    };

    const newPessoa = this.pessoaRepository.create(pessoaData);
    await this.pessoaRepository.save(newPessoa);
    return newPessoa;
  }

  async findAll() {
    return this.pessoaRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoa`;
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const person = await this.pessoaRepository.preload({
      name: updatePessoaDto?.name,
      passwordHash: updatePessoaDto?.password,
    });

    if (!person) {
      throw new NotFoundException('Pessoa n encontrada');
    }

    return this.pessoaRepository.save(person);
  }

  async remove(id: number) {
    const person = await this.pessoaRepository.findOneBy({ id });

    if (!person) {
      throw new NotFoundException('Pessoa n encontrada');
    }

    return await this.pessoaRepository.remove(person);
  }
}
