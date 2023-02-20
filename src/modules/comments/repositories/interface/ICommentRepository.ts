import { ICommentDTO } from "../../dtos/ICommentDTO";
import { Comment } from "../../models/Comment";

export interface ICommentRepository {
  create({ userId, text }: ICommentDTO): Promise<void>;
  list(): Promise<Comment[]>;
}
