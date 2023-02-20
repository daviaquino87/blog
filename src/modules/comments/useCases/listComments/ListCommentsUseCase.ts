import { Comment } from "../../models/Comment";
import { ICommentRepository } from "../../repositories/interface/ICommentRepository";

export class ListCommentsUseCase {
  constructor(private commentsRepository: ICommentRepository) {}

  async execute(): Promise<Comment[]> {
    return await this.commentsRepository.listComments();
  }
}
