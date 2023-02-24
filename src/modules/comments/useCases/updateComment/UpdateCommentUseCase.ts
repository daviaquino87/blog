import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { IUpdateCommentDTO } from "@modules/comments/dtos/IUpdateCommentDTO";

import { AppError } from "@errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateCommentUseCase {
  constructor(
    @inject("commentRepository") private commentsRepository: ICommentRepository
  ) {}

  async execute({ userId, commentId, text }: IUpdateCommentDTO): Promise<void> {
    const comment = await this.commentsRepository.findCommentUser(
      userId,
      commentId
    );

    if (!comment) {
      throw new AppError(
        "You are not allowed to change someone else's comment"
      );
    }

    await this.commentsRepository.updateComment({ commentId, text });
  }
}
