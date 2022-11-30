import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
