import { IsEmail } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RecadoEntity } from '../../recados/entities/recado.entity.js';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  passwordHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => RecadoEntity, recado => recado.de)
  recadosEnviados: RecadoEntity[];

  @OneToMany(() => RecadoEntity, recado => recado.for)
  recadosRecebidos: RecadoEntity[];
}
