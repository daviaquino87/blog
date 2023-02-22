import { ICommentRepository } from "../../repositories/interface/ICommentRepository";
import { AppError } from "../../../../shared/error/AppError";

interface IRequest {
  userId: string;
  commentId: string;
}

export class DropCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}
  async execute({ userId, commentId }: IRequest) {
    const comment = await this.commentRepository.findCommentUser(
      userId,
      commentId
    );

    if (!comment) {
      throw new AppError("You are not allowed to drop someone else's comment");
    }

    await this.commentRepository.removeComment(userId, commentId);
  }
}
