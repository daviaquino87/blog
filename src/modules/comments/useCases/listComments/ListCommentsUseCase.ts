import { ICommentRepository } from "../../repositories/interface/ICommentRepository";
import { Comment } from "../../models/Comment";

export class ListCommentsUseCase {
  constructor(private commentsRepository: ICommentRepository) {}

  async execute(): Promise<Comment[]> {
    return await this.commentsRepository.listComments();
  }
}
