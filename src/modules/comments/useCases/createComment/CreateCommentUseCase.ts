import { ICommentRepository } from "@modules/comments/repositories/interface/ICommentRepository";
import { ICreateCommentDTO } from "@modules/comments/dtos/ICreateCommentDTO";

export class CreateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}
  async execute({ userId, postId, text }: ICreateCommentDTO) {
    await this.commentRepository.create({ userId, postId, text });
  }
}
