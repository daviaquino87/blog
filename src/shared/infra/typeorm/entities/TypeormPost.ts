import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { TypeormUser } from "./TypeormUser";

@Entity("posts")
export class TypeormPost {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @ManyToOne(() => TypeormUser)
  @JoinColumn({ name: "userId" })
  user: TypeormUser;

  constructor(id: string) {
    this.id = id;
  }
}
