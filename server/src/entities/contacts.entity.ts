import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Clients } from "./clients.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @ManyToOne(() => Clients, {eager: true})
  @JoinColumn()
  client: Clients


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
