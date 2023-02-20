import { ICommentRepository } from "../interface/ICommentRepository";
import { ICommentDTO } from "../../dtos/ICommentDTO";
import { Comment } from "../../models/Comment";

export class CommentRepositoryInMemory implements ICommentRepository {
  public comments: Comment[];

  constructor() {
    this.comments = [];
  }

  async create({ userId, text }: ICommentDTO): Promise<void> {
    const comment = new Comment({
      userId,
      text,
    });

    this.comments.push(comment);
  }
  async list(): Promise<Comment[]> {
    return this.comments;
  }
}
