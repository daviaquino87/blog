import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { Comment } from "@modules/comments/models/Comment";

export class ListCommentsUseCase {
  constructor(private commentsRepository: ICommentRepository) {}

  async execute(): Promise<Comment[]> {
    return await this.commentsRepository.listComments();
  }
}
