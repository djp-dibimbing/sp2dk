import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Datapajak {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  tipe: string;

  @Column()
  status: string;
}
