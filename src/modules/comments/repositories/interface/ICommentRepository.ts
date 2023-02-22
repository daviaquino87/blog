import { ICreateCommentDTO } from "@modules/comments/dtos/ICreateCommentDTO";
import { IUpdateCommentDTO } from "@modules/comments/dtos/IUpdateCommentDTO";
import { Comment } from "@modules/comments/models/Comment";

export interface ICommentRepository {
  create({ userId, postId, text }: ICreateCommentDTO): Promise<void>;
  listComments(): Promise<Comment[]>;
  findCommentUser(userId: string, commentId: string): Promise<Comment>;
  updateComment({ userId, id, text }: IUpdateCommentDTO): Promise<void>;
  removeComment(userId: string, commentId: string): Promise<void>;
}
