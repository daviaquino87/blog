import { ICommentDTO } from "../../dtos/ICommentDTO";
import { Comment } from "../../models/Comment";

export interface ICommentRepository {
  create({ userId, postId, text }: ICommentDTO): Promise<void>;
  listComments(): Promise<Comment[]>;
}
