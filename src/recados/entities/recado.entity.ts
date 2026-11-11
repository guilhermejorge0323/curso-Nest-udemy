import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "../../pessoas/entities/pessoa.entity.js";

@Entity()
export class RecadoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  text: string;

  // Muitos recados podem ser enviados por uma unica pessoa 
  @ManyToOne(() => Pessoa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'de' })
  de: Pessoa;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: 'for' })
  for: Pessoa;

  @Column({ default: false })
  read: boolean;

  @Column()
  date: Date;
}
