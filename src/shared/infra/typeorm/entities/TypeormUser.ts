import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class TypeormUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;
}
