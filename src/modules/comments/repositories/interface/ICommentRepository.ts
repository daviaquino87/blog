import { ICreateCommentDTO } from "../../dtos/ICreateCommentDTO";
import { IUpdateCommentDTO } from "../../dtos/IUpdateCommentDTO";
import { Comment } from "../../models/Comment";

export interface ICommentRepository {
  create({ userId, postId, text }: ICreateCommentDTO): Promise<void>;
  listComments(): Promise<Comment[]>;
  findCommentUser(userId: string, commentId: string): Promise<Comment>;
  updateComment({ userId, id, text }: IUpdateCommentDTO): Promise<void>;
  removeComment(): Promise<void>;
}
