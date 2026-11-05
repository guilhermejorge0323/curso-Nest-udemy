import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecadoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  text: string;

  @Column({ type: 'varchar', length: 50 })
  de: string;

  @Column({ type: 'varchar', length: 50 })
  for: string;

  @Column({ default: false })
  read: boolean;

  @Column()
  date: Date;
}
