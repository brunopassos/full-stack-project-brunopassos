import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("contacts")
export class Contacts {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20 })
  phone: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
