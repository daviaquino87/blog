import { ICommentRepository } from "../../repositories/interface/ICommentRepository";

interface IRequest {
  userId: string;
  commentId: string;
}

export class DropCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}
  async execute({ userId, commentId }: IRequest) {
    await this.commentRepository.removeComment(userId, commentId);
  }
}
