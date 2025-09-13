import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("contato")
class Contato {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 100 })
  nome: string;

  @Column({ type: "varchar", length: 15 })
  telefone: string;
}

export default Contato;
