import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { Comment } from "@modules/comments/models/Comment";
import { inject, injectable } from "tsyringe";
@injectable()
export class ListCommentsUseCase {
  constructor(
    @inject("commentRepository") private commentsRepository: ICommentRepository
  ) {}

  async execute(): Promise<Comment[]> {
    return await this.commentsRepository.listComments();
  }
}
