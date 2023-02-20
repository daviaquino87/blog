import { ICommentRepository } from "../../repositories/interface/ICommentRepository";
import { ICreateCommentDTO } from "../../dtos/ICreateCommentDTO";

export class CreateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}
  async execute({ userId, postId, text }: ICreateCommentDTO) {
    await this.commentRepository.create({ userId, postId, text });
  }
}
