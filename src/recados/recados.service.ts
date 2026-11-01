import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity.js';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: RecadoEntity[] = [
    {
      id: 1,
      text: 'meu recado',
      de: 'devid',
      for: 'predo',
      read: false,
      date: new Date(),
    },
  ];

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    const recado = this.recados.find(item => item.id === +id);

    if (!recado) {
      throw new NotFoundException();
    }

    return recado;
  }
}
