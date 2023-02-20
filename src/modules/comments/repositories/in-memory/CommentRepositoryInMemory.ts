import { ICommentRepository } from "../interface/ICommentRepository";
import { ICreateCommentDTO } from "../../dtos/ICreateCommentDTO";
import { Comment } from "../../models/Comment";
import { IUpdateCommentDTO } from "../../dtos/IUpdateCommentDTO";

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

  async updateComment({ id, text }: IUpdateCommentDTO): Promise<void> {
    let comment = this.comments.find((comment) => comment.id === id);
    comment.text = text;
  }
}
