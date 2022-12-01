import { Column, Entity, PrimaryColumn, OneToMany  } from "typeorm";
import { v4 as uuid } from "uuid";
import { Contacts } from "./contacts.entity";

@Entity("clients")
export class Clients {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column({type: "date"})
  createdAt: Date

  @OneToMany(() => Contacts, contact => contact.client)
  contact: Clients[]

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
