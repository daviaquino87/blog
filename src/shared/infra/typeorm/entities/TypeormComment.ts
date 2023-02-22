import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { TypeormUser } from "./TypeormUser";
import { TypeormPost } from "./TypeormPost";

@Entity()
export class TypeormComment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @Column()
  postId: string;

  @Column()
  text: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @ManyToOne(() => TypeormUser)
  @JoinColumn({ name: "userId" })
  user: TypeormUser;

  @ManyToOne(() => TypeormPost, { onDelete: "CASCADE" })
  @JoinColumn({ name: "postId" })
  post: TypeormPost;
}
