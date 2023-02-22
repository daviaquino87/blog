import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { IUpdateCommentDTO } from "@modules/comments/dtos/IUpdateCommentDTO";

import { AppError } from "@errors/AppError";

export class UpdateCommentUseCase {
  constructor(private commentsRepository: ICommentRepository) {}

  async execute({ userId, id, text }: IUpdateCommentDTO): Promise<void> {
    const comment = await this.commentsRepository.findCommentUser(userId, id);

    if (!comment) {
      throw new AppError(
        "You are not allowed to change someone else's comment"
      );
    }

    await this.commentsRepository.updateComment({ id, text });
  }
}
