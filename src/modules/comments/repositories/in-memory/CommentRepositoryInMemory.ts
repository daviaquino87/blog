import { ICommentRepository } from "../interface/ICommentRepository";
import { ICreateCommentDTO } from "../../dtos/ICreateCommentDTO";
import { IUpdateCommentDTO } from "../../dtos/IUpdateCommentDTO";
import { Comment } from "../../models/Comment";

export class CommentRepositoryInMemory implements ICommentRepository {
  public comments: Comment[];

  constructor() {
    this.comments = [];
  }

  async create({ userId, postId, text }: ICreateCommentDTO): Promise<void> {
    const comment = new Comment({
      userId,
      postId,
      text,
    });

    this.comments.push(comment);
  }
  async listComments(): Promise<Comment[]> {
    return this.comments;
  }

  async findCommentUser(userId: string, commentId: string): Promise<Comment> {
    return this.comments.find(
      (comment) => comment.userId === userId && comment.id === commentId
    );
  }

  async updateComment({ id, text }: IUpdateCommentDTO): Promise<void> {
    let comment = this.comments.find((comment) => comment.id === id);
    comment.text = text;
  }

  async removeComment(userId: string, commentId: string): Promise<void> {
    const index = this.comments.findIndex(
      (comment) => comment.userId === userId && comment.id === commentId
    );

    this.comments.splice(index, 1);
  }
}
