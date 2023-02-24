import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { AppError } from "@errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  userId: string;
  commentId: string;
}
@injectable()
export class DropCommentUseCase {
  constructor(
    @inject("commentRepository") private commentRepository: ICommentRepository
  ) {}
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
