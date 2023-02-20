import { AppError } from "../../../../shared/error/AppError";
import { IUpdateCommentDTO } from "../../dtos/IUpdateCommentDTO";
import { ICommentRepository } from "../../repositories/interface/ICommentRepository";

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
